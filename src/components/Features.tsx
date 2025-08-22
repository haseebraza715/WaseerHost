'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Shield, RefreshCw, Users, Globe, Settings, Download, Code, Clock, Database, Lock, Server, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Blazing Fast Performance',
      description: 'NVMe SSD storage and LiteSpeed web server deliver sub-2 second page loads. HTTP/3 and CDN included for global speed.',
      highlights: ['NVMe SSD Storage', 'LiteSpeed Web Server', 'HTTP/3 Support', 'Global CDN'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      darkBgColor: 'from-yellow-900/20 to-orange-900/20',
      category: 'Performance',
      priority: 'high'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures including WAF, DDoS protection, and automated malware scanning keep your site safe.',
      highlights: ['Web Application Firewall', 'DDoS Protection', 'Malware Scanning', 'Free SSL Certificates'],
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      darkBgColor: 'from-red-900/20 to-pink-900/20',
      category: 'Security',
      priority: 'high'
    },
    {
      icon: RefreshCw,
      title: 'Daily Automated Backups',
      description: 'Never lose your data with automated daily backups. Multiple retention periods available based on your plan.',
      highlights: ['Daily Backups', 'Multiple Retention Periods', 'One-Click Restore', 'Offsite Storage'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      darkBgColor: 'from-green-900/20 to-emerald-900/20',
      category: 'Reliability',
      priority: 'high'
    },
    {
      icon: Users,
      title: '24/7 Human Support',
      description: 'Real people, not bots. Our support team is available around the clock to help with any hosting needs.',
      highlights: ['Live Chat Support', 'Ticket System', 'Phone Support', 'Average Response < 10min'],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      darkBgColor: 'from-blue-900/20 to-indigo-900/20',
      category: 'Support',
      priority: 'high'
    },
    {
      icon: Globe,
      title: 'Free Domain & SSL',
      description: 'Get a free domain for the first year and free SSL certificates that automatically renew. No hidden costs.',
      highlights: ['Free Domain (1st Year)', 'Auto-Renewing SSL', 'Let\'s Encrypt', 'No Hidden Fees'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      darkBgColor: 'from-purple-900/20 to-violet-900/20',
      category: 'Value',
      priority: 'medium'
    },
    {
      icon: Settings,
      title: 'cPanel Control Panel',
      description: 'Industry-standard cPanel gives you full control over your hosting account with an intuitive interface.',
      highlights: ['Full cPanel Access', 'File Manager', 'Database Management', 'Email Administration'],
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
      darkBgColor: 'from-indigo-900/20 to-blue-900/20',
      category: 'Control',
      priority: 'medium'
    },
    {
      icon: Download,
      title: '400+ One-Click Installers',
      description: 'Install WordPress, Joomla, Drupal, and hundreds of other applications with just one click.',
      highlights: ['WordPress', 'Joomla', 'Drupal', 'Magento', 'Custom Apps'],
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      darkBgColor: 'from-emerald-900/20 to-teal-900/20',
      category: 'Ease of Use',
      priority: 'medium'
    },
    {
      icon: Code,
      title: 'Staging Environment',
      description: 'Test changes safely with dedicated staging areas. Available on Professional and Business plans.',
      highlights: ['Dedicated Staging', 'One-Click Deploy', 'Version Control', 'Safe Testing'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      darkBgColor: 'from-cyan-900/20 to-blue-900/20',
      category: 'Development',
      priority: 'medium'
    },
    {
      icon: Clock,
      title: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime with service credits if we fall below our SLA. Real monitoring, real guarantees.',
      highlights: ['99.9% Uptime SLA', 'Service Credits', '24/7 Monitoring', 'Redundant Infrastructure'],
      color: 'from-lime-500 to-green-500',
      bgColor: 'from-lime-50 to-green-50',
      darkBgColor: 'from-lime-900/20 to-lime-900/20',
      category: 'Reliability',
      priority: 'high'
    },
    {
      icon: Database,
      title: 'Unlimited Databases',
      description: 'Create as many MySQL databases as you need. Perfect for developers and growing applications.',
      highlights: ['MySQL Databases', 'phpMyAdmin Access', 'Unlimited Creation', 'Performance Optimized'],
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50',
      darkBgColor: 'from-amber-900/20 to-yellow-900/20',
      category: 'Development',
      priority: 'medium'
    },
    {
      icon: Lock,
      title: 'Advanced Email Security',
      description: 'Professional email hosting with spam protection, virus scanning, and advanced filtering options.',
      highlights: ['Spam Protection', 'Virus Scanning', 'Advanced Filtering', 'Webmail Access'],
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50',
      darkBgColor: 'from-rose-900/20 to-pink-900/20',
      category: 'Security',
      priority: 'medium'
    },
    {
      icon: Server,
      title: 'CloudLinux Isolation',
      description: 'Each account runs in isolated environments, ensuring your site&apos;s performance isn&apos;t affected by others.',
      highlights: ['Account Isolation', 'Resource Limits', 'Performance Protection', 'Security Isolation'],
      color: 'from-slate-500 to-gray-500',
      bgColor: 'from-slate-50 to-gray-50',
      darkBgColor: 'from-slate-900/20 to-gray-900/20',
      category: 'Performance',
      priority: 'medium'
    },
  ];

  const categories = ['All', 'Performance', 'Security', 'Reliability', 'Support', 'Value', 'Control', 'Ease of Use', 'Development'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFeatures = selectedCategory === 'All' 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  const highPriorityFeatures = features.filter(feature => feature.priority === 'high');

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            <span>12 Powerful Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight px-4">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              launch fast
            </span>
            <br />
            and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              stay fast
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            From blazing-fast NVMe storage to enterprise-grade security, we&apos;ve built the hosting platform 
            that developers and businesses actually want to use.
          </p>
        </div>

        {/* Featured High-Priority Features */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Features That Matter Most
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              These are the features that make the biggest difference in your hosting experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {highPriorityFeatures.map((feature, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className={`p-3 sm:p-4 bg-gradient-to-br ${feature.bgColor} dark:${feature.darkBgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 sm:h-8 sm:w-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                        {feature.category}
                      </span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                        High Priority
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 sm:space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-center space-x-2 sm:space-x-3 text-sm">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {filteredFeatures.map((feature, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-soft border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 bg-gradient-to-br ${feature.bgColor} dark:${feature.darkBgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-5 w-5 sm:h-6 sm:w-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {feature.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
              
              <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex} className="flex items-center space-x-2 text-xs sm:text-sm">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-gray-700">
                <Link
                  href={`/features#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline group/link text-sm"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                <span>Ready to scale?</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Experience the WaseerHost difference
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of developers and businesses who&apos;ve switched to WaseerHost and never looked back.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/pricing" 
                  className="group bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>View Plans & Pricing</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link 
                  href="/migration" 
                  className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>Free Migration Help</span>
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
