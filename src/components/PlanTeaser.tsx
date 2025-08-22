'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Rocket } from 'lucide-react';
import { plans } from '@/data/plans';
import PlanCard from './PlanCard';

const PlanTeaser = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  // Show first 3 plans
  const featuredPlans = plans.slice(0, 3);

  const quickStats = [
    { icon: Zap, value: '1.8s', label: 'Average Load Time', color: 'text-yellow-600' },
    { icon: Shield, value: '99.9%', label: 'Uptime SLA', color: 'text-green-600' },
    { icon: Users, value: '10,000+', label: 'Happy Customers', color: 'text-blue-600' },
  ];

  const valuePropositions = [
    { icon: Zap, title: 'Lightning Fast', description: 'NVMe SSD storage for blazing performance' },
    { icon: Shield, title: 'Enterprise Security', description: 'DDoS protection & SSL certificates' },
    { icon: Clock, title: '24/7 Support', description: 'Human support when you need it' },
    { icon: TrendingUp, title: 'Free Migration', description: 'Seamless site transfer included' },
  ];

  const additionalBenefits = [
    'Daily automated backups',
    'One-click app installers',
    'Staging environments',
    'Global CDN included',
    'Free SSL certificates',
    'DDoS protection',
    '99.9% uptime guarantee',
    '30-day money-back guarantee'
  ];

  return (
    <section className="section-compact bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-compact relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold mb-4 sm:mb-6">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
            <span>Most Popular Choice</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4">
            Hosting plans that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              scale with you
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Start small, grow big. Our hosting plans are designed to grow with your business, 
            from your first website to enterprise-scale applications.
          </p>
        </div>

        {/* Enhanced Billing Toggle */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Yearly Billing
              <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs rounded-full">
                Save up to 20%
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-2 sm:mb-3`}>
                <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color}`} />
              </div>
              <div className={`text-lg sm:text-xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Value Propositions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {valuePropositions.map((proposition, index) => (
            <div key={index} className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg mb-2 sm:mb-3">
                <proposition.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1">
                {proposition.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {proposition.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {featuredPlans.map((plan, index) => (
            <div key={plan.id} className="relative">
              {/* Add "Most Popular" badge to middle plan */}
              {index === 1 && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1.5 whitespace-nowrap">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className={`transition-all duration-300 ${index === 1 ? 'scale-100 sm:scale-105' : 'scale-100'}`}>
                <PlanCard plan={plan} billingCycle={billingCycle} />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold mb-4 sm:mb-6">
                <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Ready to get started?</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Join thousands of satisfied customers
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                Start your hosting journey today with our 30-day money-back guarantee. 
                No questions asked, no risk involved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link 
                  href="/pricing" 
                  className="group bg-white text-blue-600 hover:bg-gray-100 font-semibold py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
                >
                  <span>View All Plans</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <Link 
                  href="/migration" 
                  className="group border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Free Migration Help</span>
                  <CheckCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Additional Benefits */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Everything you need to succeed
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTeaser;
