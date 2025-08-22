'use client';

import { Star, Quote, ArrowRight, CheckCircle, TrendingUp, Users, Zap, Shield, Clock, Sparkles, Award, Heart, Rocket } from 'lucide-react';
import Link from 'next/link';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Frontend Developer',
      company: 'TechFlow Inc.',
      avatar: '/avatars/sarah.jpg',
      content: 'Switched from a major hosting provider to WaseerHost and saw my site load times drop from 4.2s to 1.8s. The support team actually knows what they\'re talking about!',
      rating: 5,
      plan: 'Professional Plan',
      improvement: '57% faster',
      category: 'Performance',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Digital Agency Owner',
      company: 'PixelCraft Studios',
      avatar: '/avatars/marcus.jpg',
      content: 'We host 50+ client sites on WaseerHost. The staging environments and one-click deployments save us hours every week. Best hosting decision we\'ve made.',
      rating: 5,
      plan: 'Business Plan',
      improvement: '10+ hours/week saved',
      category: 'Efficiency',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'E-commerce Manager',
      company: 'GreenLeaf Store',
      avatar: '/avatars/emily.jpg',
      content: 'Free migration was seamless - zero downtime. Our conversion rates improved 23% after switching, likely due to the faster loading times.',
      rating: 5,
      plan: 'Starter Plan',
      improvement: '23% conversion boost',
      category: 'Business Impact',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'CloudScale Solutions',
      avatar: '/avatars/david.jpg',
      content: 'The NVMe storage and HTTP/3 support are game-changers. Our API response times improved dramatically, and the 99.9% uptime guarantee is real.',
      rating: 5,
      plan: 'VPS Plan',
      improvement: '3x API performance',
      category: 'Technical',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Startup Founder',
      company: 'InnovateLab',
      avatar: '/avatars/lisa.jpg',
      content: 'Started with the $1 plan and scaled up seamlessly. The team helped us optimize everything. Couldn\'t be happier with the service.',
      rating: 5,
      plan: 'Starter Plan',
      improvement: 'Seamless scaling',
      category: 'Growth',
      gradient: 'from-indigo-400 to-blue-500'
    },
    {
      id: 6,
      name: 'Alex Johnson',
      role: 'WordPress Developer',
      company: 'WebCraft Pro',
      avatar: '/avatars/alex.jpg',
      content: 'The one-click installers and staging environments make WordPress development a breeze. Support is incredibly responsive.',
      rating: 5,
      plan: 'Professional Plan',
      improvement: 'Faster development',
      category: 'Developer Experience',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  const stats = [
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Guaranteed with credits',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Zap,
      value: '<2s',
      label: 'Page Load',
      description: 'Average LCP time',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      value: '24/7',
      label: 'Human Support',
      description: 'Real experts available',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Clock,
      value: '10min',
      label: 'Response Time',
      description: 'Average support response',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      gradient: 'from-purple-400 to-violet-500'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 sm:h-5 sm:w-5 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-bold mb-6 sm:mb-8">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
            <span>10,000+ Happy Customers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight px-4">
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              developers
            </span>
            <br />
            and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              businesses
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Join thousands of satisfied customers who&apos;ve experienced the WaseerHost difference. 
            Real results, real testimonials, real people.
          </p>
        </div>

        {/* Enhanced Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="group relative">
              {/* Background glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-soft border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote icon */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-blue-200 dark:text-blue-800 group-hover:text-blue-300 dark:group-hover:text-blue-700 transition-colors duration-300">
                  <Quote className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>

                {/* Category badge */}
                <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6">
                  <span>{testimonial.category}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 sm:mb-6">
                  {renderStars(testimonial.rating)}
                  <span className="ml-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Improvement highlight */}
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-800 rounded-lg">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-green-700 dark:text-green-300">
                        {testimonial.improvement}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        Performance improvement
                      </div>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg sm:text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-1">
                      {testimonial.plan}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Numbers That Speak for Themselves</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real performance metrics from real customers
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Trust the numbers that matter
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="relative">
                  {/* Background glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-br ${stat.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                    <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                    </div>
                    
                    <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.color} mb-2 sm:mb-3`}>
                      {stat.value}
                    </div>
                    
                    <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {stat.label}
                    </div>
                    
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-20"></div>
            
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl text-white overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-bold mb-6 sm:mb-8">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Join the community</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                  Ready to experience the difference?
                </h3>
                
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                  Start your hosting journey today with our 30-day money-back guarantee. 
                  Join thousands of satisfied customers who never looked back.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12">
                  <Link 
                    href="/pricing" 
                    className="group bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <Link 
                    href="/migration" 
                    className="group border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 sm:py-5 px-6 sm:px-10 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base"
                  >
                    <span>Free Migration Help</span>
                    <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <Star className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-300 mx-auto mb-3 sm:mb-4" />
                    <div className="text-white font-bold mb-2 text-sm sm:text-base">5-Star Rated</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-300 mx-auto mb-3 sm:mb-4" />
                    <div className="text-white font-bold mb-2 text-sm sm:text-base">Secure & Reliable</div>
                    <div className="text-blue-200 text-xs sm:text-sm">99.9% Uptime</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-10 w-10 sm:h-12 sm:w-12 text-blue-300 mx-auto mb-3 sm:mb-4" />
                    <div className="text-white font-bold mb-2 text-sm sm:text-base">Expert Support</div>
                    <div className="text-blue-200 text-xs sm:text-sm">24/7 Human Help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
