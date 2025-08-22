'use client';

import { Zap, Shield, RefreshCw, Users, Settings, Download, Code, Clock, Database, Lock, Server, ArrowRight, Check, Globe2, Mail, FileText, HardDrive, Network, Star, TrendingUp, Award } from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      id: 'performance',
      title: 'Performance',
      subtitle: 'Lightning-fast hosting that keeps your site blazing fast',
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      gradient: 'from-yellow-400 to-orange-500',
      stats: [
        { label: '7x Faster', value: 'NVMe vs SATA' },
        { label: '99.9%', value: 'Uptime SLA' },
        { label: '200+', value: 'CDN Locations' }
      ],
      features: [
        {
          name: 'NVMe SSD Storage',
          description: 'Enterprise-grade NVMe SSDs deliver up to 7x faster read/write speeds compared to traditional SATA SSDs.',
          icon: HardDrive,
        },
        {
          name: 'LiteSpeed Web Server',
          description: 'High-performance web server with built-in caching and HTTP/3 support for optimal speed.',
          icon: Server,
        },
        {
          name: 'Global CDN',
          description: 'Content delivery network with 200+ edge locations worldwide for lightning-fast global access.',
          icon: Globe2,
        },
        {
          name: 'HTTP/3 Support',
          description: 'Latest HTTP protocol with QUIC transport for improved performance and reliability.',
          icon: Network,
        },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      subtitle: 'Enterprise-grade security to keep your site and data safe',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      gradient: 'from-red-400 to-pink-500',
      stats: [
        { label: '100%', value: 'DDoS Protected' },
        { label: '256-bit', value: 'SSL Encryption' },
        { label: '24/7', value: 'Threat Monitoring' }
      ],
      features: [
        {
          name: 'Web Application Firewall',
          description: 'Advanced WAF protection against OWASP Top 10 vulnerabilities and automated attacks.',
          icon: Shield,
        },
        {
          name: 'DDoS Protection',
          description: 'Multi-layer DDoS protection with automatic mitigation and traffic filtering.',
          icon: Network,
        },
        {
          name: 'Malware Scanning',
          description: 'Automated daily malware scanning with instant threat detection and removal.',
          icon: Lock,
        },
        {
          name: 'Free SSL Certificates',
          description: 'Let\'s Encrypt SSL certificates with automatic renewal and 256-bit encryption.',
          icon: Lock,
        },
      ],
    },
    {
      id: 'backups',
      title: 'Backups',
      subtitle: 'Never lose your data with automated, reliable backups',
      icon: RefreshCw,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      gradient: 'from-green-400 to-emerald-500',
      stats: [
        { label: 'Daily', value: 'Automated' },
        { label: '90 Days', value: 'Retention' },
        { label: '1-Click', value: 'Restore' }
      ],
      features: [
        {
          name: 'Daily Automated Backups',
          description: 'Automated daily backups with configurable retention periods (7, 30, or 90 days).',
          icon: RefreshCw,
        },
        {
          name: 'One-Click Restore',
          description: 'Instant restoration of files, databases, or entire accounts with our intuitive interface.',
          icon: Download,
        },
        {
          name: 'Offsite Storage',
          description: 'Backups stored in geographically separate locations for maximum data safety.',
          icon: HardDrive,
        },
        {
          name: 'Manual Backup Creation',
          description: 'Create on-demand backups anytime through cPanel or our API.',
          icon: FileText,
        },
      ],
    },
    {
      id: 'migration',
      title: 'Migration',
      subtitle: 'Seamless migration with zero downtime guaranteed',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      gradient: 'from-blue-400 to-cyan-500',
      stats: [
        { label: 'Free', value: 'Migration' },
        { label: '0', value: 'Downtime' },
        { label: 'Expert', value: 'Team' }
      ],
      features: [
        {
          name: 'Free Migration Service',
          description: 'Professional migration service included with all new hosting accounts.',
          icon: Users,
        },
        {
          name: 'Zero Downtime',
          description: 'Carefully planned migrations ensure your site stays online throughout the process.',
          icon: Clock,
        },
        {
          name: 'Expert Migration Team',
          description: 'Experienced technicians handle everything from initial assessment to post-migration testing.',
          icon: Users,
        },
        {
          name: 'Post-Migration Support',
          description: 'Comprehensive support during and after migration to ensure everything works perfectly.',
          icon: Check,
        },
      ],
    },
    {
      id: 'control-panel',
      title: 'Control Panel',
      subtitle: 'Full control over your hosting with industry-standard cPanel',
      icon: Settings,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      gradient: 'from-purple-400 to-violet-500',
      stats: [
        { label: 'Full', value: 'cPanel Access' },
        { label: 'Advanced', value: 'File Manager' },
        { label: 'Professional', value: 'Email' }
      ],
      features: [
        {
          name: 'Full cPanel Access',
          description: 'Complete control over files, databases, email, domains, and server settings.',
          icon: Settings,
        },
        {
          name: 'File Manager',
          description: 'Advanced file management with drag-and-drop, editing, and permission controls.',
          icon: FileText,
        },
        {
          name: 'Database Management',
          description: 'phpMyAdmin access for complete MySQL database administration.',
          icon: Database,
        },
        {
          name: 'Email Administration',
          description: 'Professional email hosting with webmail, spam protection, and advanced filtering.',
          icon: Mail,
        },
      ],
    },
    {
      id: 'one-click-installers',
      title: 'One-Click Installers',
      subtitle: '400+ applications ready to install with a single click',
      icon: Download,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      gradient: 'from-indigo-400 to-blue-500',
      stats: [
        { label: '400+', value: 'Applications' },
        { label: 'Auto', value: 'Updates' },
        { label: 'Instant', value: 'Deployment' }
      ],
      features: [
        {
          name: 'WordPress',
          description: 'Latest WordPress versions with automatic updates and security patches.',
          icon: Download,
        },
        {
          name: 'Joomla & Drupal',
          description: 'Popular CMS platforms with full support and optimization.',
          icon: Download,
        },
        {
          name: 'E-commerce Solutions',
          description: 'Magento, WooCommerce, and other shopping cart platforms.',
          icon: Download,
        },
        {
          name: 'Development Tools',
          description: 'Git, Node.js, Python, and other development frameworks.',
          icon: Code,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Header */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Trusted by 10,000+ developers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                launch fast
              </span>{' '}
              and stay fast
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              From blazing-fast NVMe storage to enterprise-grade security, we&apos;ve built the hosting platform 
              that developers and businesses actually want to use.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-blue-200">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">7x</div>
                <div className="text-blue-200">Faster Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Human Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features sections */}
      {features.map((section, index) => (
        <section 
          key={section.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-8">
                  <div className={`inline-flex items-center space-x-3 p-4 rounded-2xl ${section.bgColor} mb-6`}>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${section.gradient} shadow-lg`}>
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {section.subtitle}
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="group">
                      <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300">
                        <div className={`p-3 rounded-xl ${section.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className={`h-6 w-6 ${section.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {feature.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold group hover:underline">
                  <span>Learn more about {section.title.toLowerCase()}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Visual/Stats Card */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  {/* Background glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${section.gradient} rounded-3xl blur-xl opacity-20`}></div>
                  
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-soft-lg border border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${section.gradient} rounded-3xl mb-6 shadow-lg`}>
                        <section.icon className="h-12 w-12 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {section.title} Highlights
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Key benefits and statistics
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="space-y-4 mb-8">
                      {section.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
                          <div className="text-left">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {stat.label}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {stat.value}
                            </div>
                          </div>
                          <Check className="h-6 w-6 text-green-500" />
                        </div>
                      ))}
                    </div>

                    {/* Feature highlights */}
                    <div className="space-y-3">
                      {section.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3 text-left">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.gradient}`}></div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Enhanced CTA section */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <TrendingUp className="h-5 w-5 text-green-300" />
              <span className="text-white/90 font-medium">Join thousands of satisfied customers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to experience the difference?
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers and businesses who&apos;ve switched to WaseerHost and never looked back.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/pricing" className="group bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <span>View Plans & Pricing</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/migration" className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Free Migration Help</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Award className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Award-Winning</div>
                <div className="text-blue-200 text-sm">Best Hosting 2024</div>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-green-300 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Secure & Reliable</div>
                <div className="text-blue-200 text-sm">99.9% Uptime</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Expert Support</div>
                <div className="text-blue-200 text-sm">24/7 Human Help</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
