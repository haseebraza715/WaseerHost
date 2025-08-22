'use client';

import { useState, useEffect } from 'react';
import { Check, Zap, Shield, Users, Clock, Globe, Award, Heart, Star, TrendingUp, ArrowRight, ChevronRight, Home, Play, Target, Rocket, Database, Server, Lock, Eye, BarChart3, Headphones, MessageCircle, Phone, Mail, MapPin, Calendar, CheckCircle, AlertTriangle, Info, ExternalLink, Download, Upload, RefreshCw, Globe2, Code, Palette, Smartphone, Monitor, Laptop, Cloud, ServerCog, Network, Wifi, ShieldCheck, Zap as Lightning, Users as Team, Award as Trophy, Heart as Love, Star as StarIcon, TrendingUp as Growth, Rocket as RocketIcon, Target as TargetIcon, Database as DatabaseIcon, Server as ServerIcon, Lock as LockIcon, Eye as EyeIcon, BarChart3 as ChartIcon, Headphones as HeadphonesIcon, MessageCircle as MessageIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Calendar as CalendarIcon, CheckCircle as CheckIcon, AlertTriangle as WarningIcon, Info as InfoIcon, ExternalLink as ExternalIcon, Download as DownloadIcon, Upload as UploadIcon, RefreshCw as RefreshIcon, Globe2 as WorldIcon, Code as CodeIcon, Palette as PaletteIcon, Smartphone as MobileIcon, Monitor as MonitorIcon, Laptop as LaptopIcon, Cloud as CloudIcon, ServerCog as ServerIcon2, Network as NetworkIcon, Wifi as WifiIcon, ShieldCheck as SecurityIcon } from 'lucide-react';
import Link from 'next/link';

const WhyUsPage = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [animatedStats, setAnimatedStats] = useState({
    uptime: 0,
    loadTime: 0,
    responseTime: 0,
    customers: 0,
    countries: 0,
    supportScore: 0
  });

  // Animate stats on scroll
  useEffect(() => {
    const animateStats = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setAnimatedStats({
            uptime: 99.9,
            loadTime: 1.8,
            responseTime: 2.5,
            customers: 15000,
            countries: 45,
            supportScore: 98.7
          });
        }
      }
    };

    window.addEventListener('scroll', animateStats);
    animateStats(); // Run once on mount
    
    return () => window.removeEventListener('scroll', animateStats);
  }, []);

  const differentiators = [
    {
      icon: Zap,
      title: 'Blazing Fast Performance',
      description: 'NVMe SSD storage and LiteSpeed web server deliver sub-2 second page loads. Real performance numbers, not marketing claims.',
      metrics: ['LCP < 2.0s', 'NVMe SSDs', 'LiteSpeed Server', 'HTTP/3 Support'],
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      features: [
        'Global CDN with 200+ edge locations',
        'Advanced caching with Redis and Memcached',
        'HTTP/3 and QUIC protocol support',
        'Image optimization and WebP conversion'
      ],
      comparison: {
        competitor: '4.2s',
        waseerhost: '1.8s',
        improvement: '57% faster'
      }
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures including WAF, DDoS protection, and automated malware scanning. Your site stays safe.',
      metrics: ['WAF Protection', 'DDoS Mitigation', 'Daily Malware Scans', 'Free SSL'],
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      features: [
        'Web Application Firewall (WAF)',
        'DDoS protection up to 100 Gbps',
        'Automated malware detection and removal',
        'Real-time threat monitoring'
      ],
      comparison: {
        competitor: 'Basic SSL only',
        waseerhost: 'Full security suite',
        improvement: 'Enterprise-grade protection'
      }
    },
    {
      icon: Users,
      title: '24/7 Human Support',
      description: 'Real people, not bots. Our support team is available around the clock with actual technical expertise.',
      metrics: ['Live Chat', 'Phone Support', 'Expert Technicians', '< 10min Response'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      features: [
        'Average response time: 2.5 minutes',
        '98.7% customer satisfaction score',
        'Technical experts, not script readers',
        'Proactive monitoring and alerts'
      ],
      comparison: {
        competitor: '24-48 hours',
        waseerhost: '2.5 minutes',
        improvement: '99% faster response'
      }
    },
    {
      icon: Clock,
      title: '99.9% Uptime Guarantee',
      description: 'We guarantee 99.9% uptime with service credits if we fall below our SLA. Real monitoring, real guarantees.',
      metrics: ['99.9% SLA', 'Service Credits', '24/7 Monitoring', 'Redundant Infrastructure'],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      features: [
        'Redundant power and network infrastructure',
        'Automatic failover systems',
        'Real-time uptime monitoring',
        'Service credits for any downtime'
      ],
      comparison: {
        competitor: '99.5% typical',
        waseerhost: '99.9% guaranteed',
        improvement: '4x more reliable'
      }
    },
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with what\'s best for our customers. Your success is our success.',
      examples: [
        'Free migration assistance',
        '30-day money-back guarantee',
        'No hidden fees or surprises',
        'Customer feedback drives our roadmap'
      ]
    },
    {
      icon: Award,
      title: 'Quality Obsessed',
      description: 'We don\'t cut corners. From infrastructure to support, we maintain the highest standards.',
      examples: [
        'Enterprise-grade hardware',
        'Regular security audits',
        'Continuous performance optimization',
        'Industry-leading SLAs'
      ]
    },
    {
      icon: Globe,
      title: 'Transparency',
      description: 'No hidden fees, no surprises. Clear pricing and honest communication about what we can and can\'t do.',
      examples: [
        'Clear, upfront pricing',
        'Detailed service descriptions',
        'Honest performance metrics',
        'Transparent support policies'
      ]
    },
    {
      icon: Star,
      title: 'Continuous Improvement',
      description: 'We\'re constantly upgrading our infrastructure and services based on customer feedback and industry advances.',
      examples: [
        'Monthly infrastructure updates',
        'Customer-driven feature development',
        'Regular security enhancements',
        'Performance optimization cycles'
      ]
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      company: 'TechFlow Inc.',
      avatar: '/avatars/sarah.jpg',
      content: 'Switched from a major hosting provider and saw my site load times drop from 4.2s to 1.8s. The support team actually knows what they\'re talking about!',
      rating: 5,
      metrics: {
        improvement: '57% faster loading',
        satisfaction: 'Extremely satisfied',
        recommendation: 'Highly recommend'
      },
      verified: true
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Digital Agency Owner',
      company: 'PixelCraft Studios',
      avatar: '/avatars/marcus.jpg',
      content: 'We host 50+ client sites on WaseerHost. The staging environments and one-click deployments save us hours every week.',
      rating: 5,
      metrics: {
        improvement: 'Hours saved weekly',
        satisfaction: 'Very satisfied',
        recommendation: 'Would recommend'
      },
      verified: true
    },
    {
      name: 'Emily Watson',
      role: 'E-commerce Manager',
      company: 'GreenLeaf Store',
      avatar: '/avatars/emily.jpg',
      content: 'Free migration was seamless - zero downtime. Our conversion rates improved 23% after switching.',
      rating: 5,
      metrics: {
        improvement: '23% conversion increase',
        satisfaction: 'Extremely satisfied',
        recommendation: 'Highly recommend'
      },
      verified: true
    },
    {
      name: 'David Kim',
      role: 'Startup Founder',
      company: 'InnovateTech',
      avatar: '/avatars/david.jpg',
      content: 'Started with the $1 plan and scaled up seamlessly. The performance and support are unmatched.',
      rating: 5,
      metrics: {
        improvement: 'Seamless scaling',
        satisfaction: 'Very satisfied',
        recommendation: 'Would recommend'
      },
      verified: true
    },
  ];

  const comparisonData = [
    {
      feature: 'Page Load Speed',
      competitor: '4.2 seconds',
      waseerhost: '1.8 seconds',
      advantage: '57% faster',
      icon: Zap
    },
    {
      feature: 'Support Response',
      competitor: '24-48 hours',
      waseerhost: '2.5 minutes',
      advantage: '99% faster',
      icon: Users
    },
    {
      feature: 'Uptime Guarantee',
      competitor: '99.5% typical',
      waseerhost: '99.9% guaranteed',
      advantage: '4x more reliable',
      icon: Clock
    },
    {
      feature: 'Security Features',
      competitor: 'Basic SSL only',
      waseerhost: 'Full security suite',
      advantage: 'Enterprise-grade',
      icon: Shield
    },
    {
      feature: 'Storage Type',
      competitor: 'SATA SSDs',
      waseerhost: 'NVMe SSDs',
      advantage: '3x faster I/O',
      icon: Database
    },
    {
      feature: 'CDN Coverage',
      competitor: 'Limited locations',
      waseerhost: '200+ edge locations',
      advantage: 'Global reach',
      icon: Globe
    }
  ];

  const awards = [
    {
      title: 'Best Web Hosting 2024',
      issuer: 'Hosting Review',
      year: '2024',
      icon: Trophy,
      description: 'Recognized for exceptional performance and customer support'
    },
    {
      title: 'Excellence in Security',
      issuer: 'Security Awards',
      year: '2023',
      icon: ShieldCheck,
      description: 'Awarded for advanced security measures and DDoS protection'
    },
    {
      title: 'Customer Choice Award',
      issuer: 'Hosting Directory',
      year: '2023',
      icon: StarIcon,
      description: 'Voted best hosting provider by customers'
    },
    {
      title: 'Performance Leader',
      issuer: 'Speed Test Labs',
      year: '2023',
      icon: Zap,
      description: 'Fastest hosting provider in independent tests'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  const tabs = [
    { id: 'performance', label: 'Performance', icon: Zap },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'support', label: 'Support', icon: Users },
    { id: 'reliability', label: 'Reliability', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header with Breadcrumbs */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-blue-100 mb-6">
            <Link href="/" className="hover:text-white flex items-center">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white font-medium">Why Choose Us</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why choose WaseerHost?
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We&apos;re not just another hosting company. We&apos;re a team of developers and engineers who built 
              the hosting platform we always wanted to use ourselves. Experience the difference that real expertise makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg">
                Start for $1
              </Link>
              <Link href="/migration" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 hover:scale-105">
                Free Migration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What makes us different
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We don't just promise better hosting - we deliver it with measurable results and real guarantees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 ${item.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Performance Comparison */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Performance Comparison</span>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">{item.comparison.improvement}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-gray-500 dark:text-gray-400">Competitor</div>
                      <div className="font-semibold text-gray-700 dark:text-gray-300">{item.comparison.competitor}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-500 dark:text-gray-400">WaseerHost</div>
                      <div className="font-semibold text-blue-600 dark:text-blue-400">{item.comparison.waseerhost}</div>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Comparison Tabs */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How we compare to the competition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the real differences in performance, support, and reliability
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-3 gap-0 border-b border-gray-200 dark:border-gray-700">
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-center">Feature</h3>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-center">Competitor</h3>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 text-center">WaseerHost</h3>
                </div>
              </div>
              
              {comparisonData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-0 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <div className="p-6 flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-white">{item.feature}</span>
                  </div>
                  <div className="p-6 text-center">
                    <span className="text-gray-600 dark:text-gray-400">{item.competitor}</span>
                  </div>
                  <div className="p-6 text-center bg-blue-50 dark:bg-blue-900/20">
                    <div className="font-semibold text-blue-900 dark:text-blue-100 mb-1">{item.waseerhost}</div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">{item.advantage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our core values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These aren't just words on a wall - they're the principles that guide every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-100 dark:bg-brand-900/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="h-10 w-10 text-brand-600 dark:text-brand-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {value.description}
                </p>

                {/* Examples */}
                <div className="space-y-2 text-left">
                  {value.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2 text-sm">
                      <Check className="h-3 w-3 text-green-600 dark:text-green-400 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What our customers say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take our word for it - hear from real customers who've experienced the difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-all duration-200 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.rating}.0
                    </span>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Metrics */}
                <div className="space-y-2 mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {Object.entries(testimonial.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Awards and Recognition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Industry recognition for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-all duration-200 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  <award.icon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {award.title}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {award.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{award.issuer}</span>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats-section" className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Numbers that speak for themselves
            </h2>
            <p className="text-xl text-blue-100">
              Real metrics from real customers and real infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {animatedStats.uptime}%
              </div>
              <div className="text-blue-100 text-sm">Uptime Guarantee</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {animatedStats.loadTime}s
              </div>
              <div className="text-blue-100 text-sm">Avg Load Time</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {animatedStats.responseTime}min
              </div>
              <div className="text-blue-100 text-sm">Support Response</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="text-blue-100 text-sm">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {animatedStats.countries}+
              </div>
              <div className="text-blue-100 text-sm">Countries Served</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-200">
                {animatedStats.supportScore}%
              </div>
              <div className="text-blue-100 text-sm">Support Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience the difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers and businesses who&apos;ve switched to WaseerHost. 
            Start with our 30-day money-back guarantee and see why we&apos;re different.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2">
              <span>View Plans & Pricing</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/migration" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-200 hover:scale-105">
              Free Migration Help
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-2">30 Days</div>
              <div className="text-gray-300 text-sm">Money-back guarantee</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-2">Free</div>
              <div className="text-gray-300 text-sm">Migration assistance</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Expert support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
