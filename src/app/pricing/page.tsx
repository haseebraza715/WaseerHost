'use client';

import { useState } from 'react';
import { Check, Star, TrendingUp, Zap, Shield, Users, Award, ArrowRight, Sparkles, Plus } from 'lucide-react';

import { addons, getPlansByCategory } from '@/data/plans';
import PlanCard from '@/components/PlanCard';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeTab, setActiveTab] = useState<'shared' | 'cloud' | 'vps' | 'dedicated' | 'reseller'>('shared');

  const categories = [
    { 
      id: 'shared', 
      name: 'Shared Hosting', 
      description: 'Perfect for personal sites and small businesses',
      icon: Users,
      color: 'from-blue-400 to-blue-600'
    },
    { 
      id: 'cloud', 
      name: 'Cloud Hosting', 
      description: 'Scalable cloud infrastructure for growing applications',
      icon: Zap,
      color: 'from-purple-400 to-purple-600'
    },
    { 
      id: 'vps', 
      name: 'VPS Hosting', 
      description: 'Dedicated resources with full root access',
      icon: Shield,
      color: 'from-green-400 to-green-600'
    },
    { 
      id: 'dedicated', 
      name: 'Dedicated Servers', 
      description: 'Complete server control for enterprise needs',
      icon: Star,
      color: 'from-orange-400 to-orange-600'
    },
    { 
      id: 'reseller', 
      name: 'Reseller Hosting', 
      description: 'White-label hosting for agencies and developers',
      icon: TrendingUp,
      color: 'from-indigo-400 to-indigo-600'
    },
  ];

  const getPlansForCategory = (category: string) => {
    return getPlansByCategory(category as 'shared' | 'cloud' | 'vps' | 'dedicated' | 'reseller');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Header */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Transparent pricing, no hidden fees</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Simple,{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                transparent
              </span>{' '}
              pricing
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Start with our $1 starter plan and scale as you grow. All plans include free SSL, 
              daily backups, and 24/7 human support.
            </p>

            {/* Enhanced Billing toggle */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 inline-flex items-center space-x-2 mb-8">
              <span className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 hover:scale-105"
                style={{
                  backgroundColor: billingCycle === 'yearly' ? '#ffffff' : 'rgba(255,255,255,0.3)'
                }}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full transition-all duration-300 ${
                    billingCycle === 'yearly' ? 'translate-x-8 bg-blue-600' : 'translate-x-1 bg-white'
                  }`}
                />
              </button>
              <span className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                billingCycle === 'yearly' 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}>
                Yearly
                <span className="ml-2 text-yellow-300 font-medium text-sm">
                  (Save up to 17%)
                </span>
              </span>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">$1</div>
                <div className="text-blue-200 text-sm">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">30 Days</div>
                <div className="text-blue-200 text-sm">Money Back</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Free</div>
                <div className="text-blue-200 text-sm">SSL & Migration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Human Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Category tabs */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 py-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id as 'shared' | 'cloud' | 'vps' | 'dedicated' | 'reseller')}
                className={`group relative px-8 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                } ${activeTab === category.id ? category.color : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <category.icon className={`h-5 w-5 ${activeTab === category.id ? 'text-white' : 'text-gray-500'}`} />
                  <span>{category.name}</span>
                </div>
                {activeTab === category.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plans for selected category */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Enhanced Category description */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${categories.find(c => c.id === activeTab)?.color} shadow-lg`}>
                {(() => {
                  const IconComponent = categories.find(c => c.id === activeTab)?.icon || Users;
                  return <IconComponent className="h-8 w-8 text-white" />;
                })()}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {categories.find(c => c.id === activeTab)?.name}
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {categories.find(c => c.id === activeTab)?.description}
            </p>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {getPlansForCategory(activeTab).map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
              />
            ))}
          </div>

          {/* Enhanced Add-ons section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Add-ons & Extras
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Enhance your hosting experience with these powerful add-ons
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addons.map((addon) => (
                <div key={addon.id} className="group relative">
                  {/* Background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  <div className="relative card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          {addon.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${billingCycle === 'monthly' ? addon.monthlyPrice : addon.yearlyPrice}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          /{billingCycle === 'monthly' ? 'mo' : 'year'}
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Plus className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <button className="btn-outline w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                      Add to Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Comparison table */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Compare features across all {categories.find(c => c.id === activeTab)?.name} plans
            </p>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-700 shadow-soft">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700/50">
                  <th className="text-left py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                    Feature
                  </th>
                  {getPlansForCategory(activeTab).map((plan) => (
                    <th key={plan.id} className="text-center py-6 px-8 font-semibold text-gray-900 dark:text-white text-lg">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">
                    Websites
                  </td>
                  {getPlansForCategory(activeTab).map((plan) => (
                    <td key={plan.id} className="text-center py-6 px-8 text-gray-900 dark:text-white font-semibold">
                      {plan.resources.websites}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">
                    Storage
                  </td>
                  {getPlansForCategory(activeTab).map((plan) => (
                    <td key={plan.id} className="text-center py-6 px-8 text-gray-900 dark:text-white font-semibold">
                      {plan.resources.storageGB}GB
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">
                    Bandwidth
                  </td>
                  {getPlansForCategory(activeTab).map((plan) => (
                    <td key={plan.id} className="text-center py-6 px-8 text-gray-900 dark:text-white font-semibold">
                      {plan.resources.bandwidth}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">
                    Email Accounts
                  </td>
                  {getPlansForCategory(activeTab).map((plan) => (
                    <td key={plan.id} className="text-center py-6 px-8 text-gray-900 dark:text-white font-semibold">
                      {plan.resources.emails}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-6 px-8 font-medium text-gray-700 dark:text-gray-300">
                    Support SLA
                  </td>
                  {getPlansForCategory(activeTab).map((plan) => (
                    <td key={plan.id} className="text-center py-6 px-8 text-gray-900 dark:text-white font-semibold">
                      {plan.limits.supportSLA}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="relative section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="text-white/90 font-medium">30-day money-back guarantee</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers and businesses who&apos;ve switched to WaseerHost. 
              Start with our 30-day money-back guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="/checkout" className="group bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
                <span>Get Started Now</span>
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

export default PricingPage;
