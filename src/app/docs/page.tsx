'use client';

import { useState, useMemo } from 'react';
import { Search, Play, Settings, Database, Globe, Shield, RefreshCw, Users, ArrowRight, BookOpen, Video, Code, Download, Filter, Clock, Eye, Star, ChevronRight, Home, FileText, HelpCircle, Zap, CheckCircle, AlertCircle, Info, ExternalLink, Bookmark, Share2, Download as DownloadIcon, Printer, Copy, Heart } from 'lucide-react';
import Link from 'next/link';

interface DocArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  subcategory: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  views: number;
  lastUpdated: string;
  tags: string[];
  relatedArticles: string[];
  prerequisites: string[];
  steps: Array<{
    title: string;
    description: string;
    code?: string;
    image?: string;
  }>;
}

interface DocCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  bgColor: string;
  articles: number;
  subcategories: Array<{
    id: string;
    title: string;
    description: string;
    articles: number;
  }>;
}

const DocsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<string>>(new Set());

  // Mock data - in a real app, this would come from an API or CMS
  const docCategories: DocCategory[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Essential guides for new customers',
      icon: Play,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      articles: 15,
      subcategories: [
        { id: 'account-setup', title: 'Account Setup', description: 'Create and configure your hosting account', articles: 5 },
        { id: 'domain-setup', title: 'Domain Setup', description: 'Connect and manage your domains', articles: 6 },
        { id: 'first-website', title: 'First Website', description: 'Build your first website', articles: 4 },
      ],
    },
    {
      id: 'control-panel',
      title: 'Control Panel',
      description: 'cPanel tutorials and guides',
      icon: Settings,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      articles: 25,
      subcategories: [
        { id: 'file-manager', title: 'File Manager', description: 'Manage files and directories', articles: 8 },
        { id: 'databases', title: 'Databases', description: 'MySQL and database management', articles: 7 },
        { id: 'email-setup', title: 'Email Setup', description: 'Configure email accounts', articles: 6 },
        { id: 'backups', title: 'Backups', description: 'Backup and restore your data', articles: 4 },
      ],
    },
    {
      id: 'applications',
      title: 'Applications',
      description: 'One-click installers and app guides',
      icon: Download,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      articles: 30,
      subcategories: [
        { id: 'wordpress', title: 'WordPress', description: 'WordPress installation and management', articles: 12 },
        { id: 'other-cms', title: 'Other CMS', description: 'Joomla, Drupal, and more', articles: 10 },
        { id: 'ecommerce', title: 'E-commerce', description: 'Online store solutions', articles: 8 },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      description: 'Security features and best practices',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      articles: 20,
      subcategories: [
        { id: 'ssl-certificates', title: 'SSL Certificates', description: 'HTTPS and security certificates', articles: 6 },
        { id: 'firewall', title: 'Firewall & WAF', description: 'Web application firewall', articles: 5 },
        { id: 'backup-security', title: 'Backup Security', description: 'Secure your backups', articles: 4 },
        { id: 'best-practices', title: 'Best Practices', description: 'Security guidelines', articles: 5 },
      ],
    },
    {
      id: 'performance',
      title: 'Performance',
      description: 'Optimize your website speed',
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      articles: 18,
      subcategories: [
        { id: 'caching', title: 'Caching', description: 'Implement caching strategies', articles: 6 },
        { id: 'cdn', title: 'CDN Setup', description: 'Content delivery network', articles: 5 },
        { id: 'optimization', title: 'Code Optimization', description: 'Optimize your code', articles: 7 },
      ],
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: HelpCircle,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      articles: 22,
      subcategories: [
        { id: 'common-errors', title: 'Common Errors', description: 'Frequently encountered issues', articles: 8 },
        { id: 'performance-issues', title: 'Performance Issues', description: 'Speed and loading problems', articles: 6 },
        { id: 'security-issues', title: 'Security Issues', description: 'Security-related problems', articles: 4 },
        { id: 'support-tools', title: 'Support Tools', description: 'Diagnostic and repair tools', articles: 4 },
      ],
    },
  ];

  const quickStartGuides = [
    {
      icon: Globe,
      title: 'Connect Your Domain',
      description: 'Learn how to point your domain to our hosting servers',
      duration: '5 min read',
      difficulty: 'beginner' as const,
      href: '/docs/domain-setup',
      category: 'Getting Started',
      progress: 0,
    },
    {
      icon: Download,
      title: 'Install WordPress',
      description: 'One-click WordPress installation and setup guide',
      duration: '3 min read',
      difficulty: 'beginner' as const,
      href: '/docs/wordpress-install',
      category: 'Applications',
      progress: 0,
    },
    {
      icon: Shield,
      title: 'SSL Certificate Setup',
      description: 'Enable HTTPS for your website with free SSL',
      duration: '2 min read',
      difficulty: 'beginner' as const,
      href: '/docs/ssl-setup',
      category: 'Security',
      progress: 0,
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Create and manage MySQL databases',
      duration: '7 min read',
      difficulty: 'intermediate' as const,
      href: '/docs/database-setup',
      category: 'Advanced',
      progress: 0,
    },
  ];

  const popularArticles = useMemo(() => [
    {
      title: 'How to install WordPress with one click',
      description: 'Complete guide to installing WordPress using our one-click installer',
      views: '2.5k',
      difficulty: 'beginner' as const,
      duration: '3 min read',
      href: '/docs/wordpress-install',
      category: 'Applications',
      lastUpdated: '2 days ago',
    },
    {
      title: 'Setting up email accounts in cPanel',
      description: 'Create and configure professional email accounts for your domain',
      views: '1.8k',
      difficulty: 'intermediate' as const,
      duration: '5 min read',
      href: '/docs/email-setup',
      category: 'Control Panel',
      lastUpdated: '1 week ago',
    },
    {
      title: 'Connecting a domain to your hosting',
      description: 'Step-by-step guide to pointing your domain to our servers',
      views: '1.6k',
      difficulty: 'beginner' as const,
      duration: '4 min read',
      href: '/docs/domain-connection',
      category: 'Getting Started',
      lastUpdated: '3 days ago',
    },
    {
      title: 'Creating and restoring backups',
      description: 'How to create manual backups and restore your website',
      views: '1.4k',
      difficulty: 'intermediate' as const,
      duration: '6 min read',
      href: '/docs/backup-management',
      category: 'Control Panel',
      lastUpdated: '5 days ago',
    },
  ], []);

  const recentUpdates = [
    {
      title: 'New: LiteSpeed Web Server Configuration',
      description: 'Learn how to optimize your site for our new LiteSpeed server',
      date: 'Today',
      href: '/docs/litespeed-config',
      category: 'Performance',
    },
    {
      title: 'Updated: WordPress Security Best Practices',
      description: 'Enhanced security guidelines for WordPress websites',
      date: 'Yesterday',
      href: '/docs/wordpress-security',
      category: 'Security',
    },
    {
      title: 'New: CDN Setup Guide',
      description: 'Complete guide to setting up our free CDN service',
      date: '3 days ago',
      href: '/docs/cdn-setup',
      category: 'Performance',
    },
  ];

  // Filter articles based on search and filters
  const filteredArticles = useMemo(() => {
    let articles = [...popularArticles];
    
    if (searchQuery) {
      articles = articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      articles = articles.filter(article => article.category === selectedCategory);
    }
    
    if (selectedDifficulty !== 'all') {
      articles = articles.filter(article => article.difficulty === selectedDifficulty);
    }
    
    return articles;
  }, [searchQuery, selectedCategory, selectedDifficulty, popularArticles]);

  const toggleBookmark = (articleId: string) => {
    const newBookmarks = new Set(bookmarkedArticles);
    if (newBookmarks.has(articleId)) {
      newBookmarks.delete(articleId);
    } else {
      newBookmarks.add(articleId);
    }
    setBookmarkedArticles(newBookmarks);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return <CheckCircle className="h-4 w-4" />;
      case 'intermediate': return <AlertCircle className="h-4 w-4" />;
      case 'advanced': return <Info className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with Breadcrumbs */}
      <section className="section-padding bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 dark:text-white font-medium">Documentation</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation & Help Center
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Everything you need to get started and succeed with WaseerHost. 
              From quick setup guides to advanced tutorials.
            </p>

            {/* Enhanced Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-12 pr-4 text-lg"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                  <Filter className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="section-compact-sm bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field max-w-xs"
              >
                <option value="all">All Categories</option>
                {docCategories.map(category => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="input-field max-w-xs"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <div className="grid grid-cols-2 gap-1 w-4 h-4">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                    : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                <div className="space-y-1 w-4 h-4">
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                  <div className="bg-current rounded-sm h-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Quick Start Guides
            </h2>
            <Link href="/docs/getting-started" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline flex items-center space-x-1">
              <span>View all guides</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => (
              <div key={index} className="card p-6 group hover:shadow-lg transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-brand-100 dark:bg-brand-900/20 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <guide.icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.duration}
                  </span>
                  
                  <Link
                    href={guide.href}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Start</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-transform duration-200 group">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                
                {/* Subcategories */}
                <div className="space-y-2 mb-4">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{sub.title}</span>
                      <span className="text-gray-400 dark:text-gray-500">{sub.articles}</span>
                    </div>
                  ))}
                  {category.subcategories.length > 3 && (
                    <div className="text-sm text-gray-400 dark:text-gray-500">
                      +{category.subcategories.length - 3} more subcategories
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.articles} articles
                  </span>
                  
                  <Link
                    href={`/docs/${category.id}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Recent Updates
            </h2>
            <Link href="/docs/changelog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline">
              View changelog →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <div key={index} className="card p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded">
                    {update.date}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {update.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {update.description}
                </p>
                
                <Link
                  href={update.href}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline text-sm flex items-center space-x-1"
                >
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Popular Articles
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredArticles.length} articles found
              </span>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <div key={index} className="card p-6 group hover:shadow-lg transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                    <button
                      onClick={() => toggleBookmark(article.title)}
                      className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        bookmarkedArticles.has(article.title) ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      <Bookmark className="h-4 w-4" fill={bookmarkedArticles.has(article.title) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {article.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400 flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {article.views}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        Updated {article.lastUpdated}
                      </span>
                      
                      <Link
                        href={article.href}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {article.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.duration}
                          </span>
                          <span>Updated {article.lastUpdated}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={() => toggleBookmark(article.title)}
                          className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            bookmarkedArticles.has(article.title) ? 'text-blue-600' : 'text-gray-400'
                          }`}
                        >
                          <Bookmark className="h-4 w-4" fill={bookmarkedArticles.has(article.title) ? 'currentColor' : 'none'} />
                        </button>
                        
                        <Link
                          href={article.href}
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline flex items-center space-x-1 p-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          <span>Read article</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <Video className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Video Tutorials
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Step-by-step video guides for common tasks
              </p>
              <Link
                href="/docs/videos"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Watch videos</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Knowledge Base
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive articles and troubleshooting guides
              </p>
              <Link
                href="/docs/knowledge-base"
                className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium hover:underline inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
              >
                <span>Browse articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                API Documentation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developer resources and API references
              </p>
              <Link
                href="/docs/api"
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium hover:underline inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform"
              >
                <span>View API docs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is ready to help with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg">
              Contact Support
            </Link>
            <Link href="/faq" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 hover:scale-105">
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
