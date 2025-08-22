'use client';

import { Mail, Phone, MessageCircle, Clock, FileText, Search, Users, Zap, Star, Award, Shield, TrendingUp, ArrowRight, CheckCircle, Headphones, Globe, Rocket } from 'lucide-react';
import Link from 'next/link';

const SupportPage = () => {
  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Under 2 minutes',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      gradient: 'from-green-400 to-emerald-500',
      cta: 'Start Chat',
      href: '#',
      features: ['Instant responses', 'Screen sharing', 'File uploads']
    },
    {
      icon: Mail,
      title: 'Support Tickets',
      description: 'Submit detailed requests for complex issues',
      availability: '24/7',
      responseTime: 'Under 10 minutes',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      gradient: 'from-blue-400 to-cyan-500',
      cta: 'Create Ticket',
      href: '/support/ticket',
      features: ['Detailed tracking', 'Priority queuing', 'Escalation support']
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      gradient: 'from-purple-400 to-violet-500',
      cta: 'Call Now',
      href: 'tel:+15551234567',
      features: ['Direct expert access', 'Call recording', 'Follow-up calls']
    },
  ];

  const slaTiers = [
    {
      plan: 'Starter',
      responseTime: '24 hours',
      resolutionTime: '48 hours',
      supportHours: '24/7',
      channels: ['Live Chat', 'Tickets', 'Email'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      plan: 'Professional',
      responseTime: '12 hours',
      resolutionTime: '24 hours',
      supportHours: '24/7',
      channels: ['Live Chat', 'Tickets', 'Email', 'Phone'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      plan: 'Business',
      responseTime: '4 hours',
      resolutionTime: '12 hours',
      supportHours: '24/7',
      channels: ['Live Chat', 'Tickets', 'Email', 'Phone', 'Priority Queue'],
      color: 'from-orange-400 to-orange-600'
    },
  ];

  const selfServeResources = [
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Comprehensive guides and tutorials',
      articles: '500+',
      href: '/docs',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      gradient: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Search,
      title: 'Search Documentation',
      description: 'Find answers to common questions',
      articles: 'Instant',
      href: '/docs/search',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and developers',
      members: '10,000+',
      href: '/community',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Quick Start Guides',
      description: 'Get up and running in minutes',
      guides: '50+',
      href: '/docs/quickstart',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      gradient: 'from-yellow-400 to-orange-500'
    },
  ];

  const commonIssues = [
    {
      question: 'How do I install WordPress?',
      answer: 'Use our one-click installer in cPanel. Go to Software > Softaculous Apps Installer > WordPress.',
      category: 'Installation',
      icon: Rocket
    },
    {
      question: 'How do I set up email accounts?',
      answer: 'Create email accounts in cPanel under Email > Email Accounts. Configure your email client with our settings.',
      category: 'Email',
      icon: Mail
    },
    {
      question: 'How do I backup my website?',
      answer: 'Daily backups are automatic. Create manual backups in cPanel under Files > Backup Wizard.',
      category: 'Backups',
      icon: Shield
    },
    {
      question: 'How do I connect a domain?',
      answer: 'Update your domain\'s nameservers to point to our servers, or use our domain management tools.',
      category: 'Domains',
      icon: Globe
    },
  ];

  const stats = [
    { label: '24/7', value: 'Support Available' },
    { label: '< 10 min', value: 'Avg Response Time' },
    { label: '99.9%', value: 'Customer Satisfaction' },
    { label: '10,000+', value: 'Happy Customers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Hero Header */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Headphones className="h-5 w-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Real humans, 24/7 support</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              We&apos;re here to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                help
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Real humans, 24/7. Our support team is available around the clock to help with any hosting needs.
              Average first response: under 10 minutes (past 90 days).
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.label}</div>
                  <div className="text-blue-200 text-sm">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Support channels */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get help when you need it
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. All channels are available 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {supportChannels.map((channel, index) => (
              <div key={index} className="group relative">
                {/* Background glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${channel.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                <div className="relative card p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${channel.gradient} rounded-3xl mb-6 shadow-lg`}>
                    <channel.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {channel.description}
                  </p>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">
                        Available: {channel.availability}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Zap className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">
                        Response: {channel.responseTime}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {channel.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={channel.href}
                    className="btn-primary w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                  >
                    {channel.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced SLA Information */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Service Level Agreements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Clear expectations for response and resolution times based on your hosting plan.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                    <th className="text-left py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                      Plan
                    </th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                      Response Time
                    </th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                      Resolution Time
                    </th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                      Support Hours
                    </th>
                    <th className="text-center py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                      Channels
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {slaTiers.map((tier, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                      <td className="py-6 px-8 font-medium text-gray-900 dark:text-white">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tier.color}`}></div>
                          <span className="font-semibold">{tier.plan}</span>
                        </div>
                      </td>
                      <td className="text-center py-6 px-8 text-gray-700 dark:text-gray-300 font-semibold">
                        {tier.responseTime}
                      </td>
                      <td className="text-center py-6 px-8 text-gray-700 dark:text-gray-300 font-semibold">
                        {tier.resolutionTime}
                      </td>
                      <td className="text-center py-6 px-8 text-gray-700 dark:text-gray-300 font-semibold">
                        {tier.supportHours}
                      </td>
                      <td className="text-center py-6 px-8 text-gray-700 dark:text-gray-300">
                        <div className="flex flex-wrap justify-center gap-2">
                          {tier.channels.map((channel, channelIndex) => (
                            <span
                              key={channelIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full font-medium"
                            >
                              {channel}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Self-serve resources */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Help yourself with our resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive self-service resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {selfServeResources.map((resource, index) => (
              <div key={index} className="group relative">
                {/* Background glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${resource.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                <div className="relative card p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${resource.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {resource.articles} {resource.articles === 'Instant' ? 'results' : 'articles'}
                  </div>
                  
                  <Link
                    href={resource.href}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Common issues */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Quick answers to common questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find instant solutions to the most frequently asked questions.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {commonIssues.map((issue, index) => (
                <div key={index} className="group relative">
                  {/* Background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  <div className="relative card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                        <issue.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                        {issue.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {issue.question}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {issue.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 font-medium px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                <span>View all FAQs</span>
                <Search className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact form CTA */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Award-winning support team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still need help?
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Our support team is ready to help with any questions or issues.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/support/ticket" className="group bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Create Support Ticket</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="tel:+15551234567" className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Call Support</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">5-Star Rated</div>
                <div className="text-blue-200 text-sm">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-green-300 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">24/7 Available</div>
                <div className="text-blue-200 text-sm">Round the Clock</div>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <div className="text-white font-semibold mb-2">Expert Team</div>
                <div className="text-blue-200 text-sm">Certified Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
