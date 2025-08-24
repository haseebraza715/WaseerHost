'use client';

import Link from 'next/link';
import { Check, X, Clock, Star, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Plan } from '@/data/plans';

interface PlanCardProps {
  plan: Plan;
  billingCycle: 'monthly' | 'yearly';
  className?: string;
}

const PlanCard = ({ plan, billingCycle, className = '' }: PlanCardProps) => {
  const price = billingCycle === 'monthly' ? plan.price_monthly : plan.price_yearly;
  const savings = billingCycle === 'yearly' ? Math.round((plan.price_monthly * 12 - plan.price_yearly) / (plan.price_monthly * 12) * 100) : 0;

  // Get plan color scheme based on name
  const getPlanColors = (planName: string) => {
    const colors = {
      'Starter': { accent: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/20' },
      'Professional': { accent: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
      'Business': { accent: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
      'Enterprise': { accent: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20' },
      'Basic': { accent: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-50 dark:bg-slate-900/20' },
      'Standard': { accent: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
      'Premium': { accent: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' }
    };
    return colors[planName as keyof typeof colors] || colors['Professional'];
  };

  const planColors = getPlanColors(plan.name);

  return (
    <div className={`group relative ${className}`}>
      {/* Background glow */}
      <div className={`absolute -inset-1 bg-slate-200 dark:bg-slate-700 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
      
      <div className={`relative card p-4 sm:p-6 hover:scale-105 transition-all duration-300 ${plan.badge ? 'ring-2 ring-blue-500' : ''}`}>
        {/* Enhanced Badge - Better positioning and styling */}
        {plan.badge && (
          <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
            <div className={`bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium shadow-sm flex items-center space-x-1.5 whitespace-nowrap`}>
              <Star className="h-3 w-3 fill-current" />
              <span>{plan.badge}</span>
            </div>
          </div>
        )}

        {/* Enhanced Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${planColors.bg} rounded-xl mb-3 shadow-sm`}>
            <Zap className={`h-5 w-5 sm:h-6 sm:w-6 ${planColors.accent}`} />
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
            {plan.name}
          </h3>
          
          <div className="mb-3">
            <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">${price}</span>
            <span className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">/{billingCycle === 'monthly' ? 'mo' : 'year'}</span>
          </div>
          
          {billingCycle === 'yearly' && savings > 0 && (
            <div className="inline-flex items-center space-x-1.5 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
              <TrendingUp className="h-3 w-3" />
              <span>Save {savings}% with yearly billing</span>
            </div>
          )}
        </div>

        {/* Enhanced Resources - Better mobile layout */}
        <div className="mb-4 sm:mb-6">
          <h4 className="font-medium text-slate-900 dark:text-white mb-3 text-center text-sm">Plan Resources</h4>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="text-center p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.resources.websites}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Website{plan.resources.websites !== 1 ? 's' : ''}</div>
            </div>
            <div className="text-center p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.resources.storageGB}GB</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Storage</div>
            </div>
            {plan.resources.cpu && (
              <div className="text-center p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.resources.cpu}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">CPU</div>
              </div>
            )}
            {plan.resources.ramGB && (
              <div className="text-center p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.resources.ramGB}GB</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">RAM</div>
              </div>
            )}
            <div className="text-center p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.resources.emails}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Email{plan.resources.emails !== 1 ? 's' : ''}</div>
            </div>
            <div className="text-center p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
              <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{plan.resources.databases}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Database{plan.resources.databases !== 1 ? 's' : ''}</div>
            </div>
          </div>
        </div>

        {/* Enhanced Features */}
        <div className="mb-4 sm:mb-6">
          <h4 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center space-x-2 text-sm">
            <Shield className="h-4 w-4 text-blue-600" />
            <span>What&apos;s included:</span>
          </h4>
          <ul className="space-y-1.5 sm:space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 group">
                <div className={`p-1 rounded-md flex-shrink-0 transition-all duration-300 ${
                  feature.included 
                    ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:scale-110' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500'
                }`}>
                  {feature.included ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <X className="h-3 w-3" />
                  )}
                </div>
                <span className={`text-xs transition-colors duration-300 ${
                  feature.included 
                    ? 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white' 
                    : 'text-slate-400 dark:text-slate-500'
                }`}>
                  {feature.label}
                  {feature.note && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                      {feature.note}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Support SLA */}
        {plan.limits.supportSLA && (
          <div className="mb-4 sm:mb-6 p-2.5 sm:p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
            <div className="flex items-center space-x-2 text-slate-800 dark:text-slate-200">
              <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-md">
                <Clock className="h-3 w-3" />
              </div>
              <div>
                <div className="text-xs font-medium">Support SLA</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">{plan.limits.supportSLA}</div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CTA */}
        <Link
          href={plan.cta.url}
          className="group w-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium py-2.5 px-4 rounded-lg transition-all duration-300 hover:shadow-md flex items-center justify-center space-x-2 text-sm"
        >
          <span>{plan.cta.text}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        {/* Enhanced Trial info */}
        {plan.cta.trialDays && (
          <div className="text-center mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-center space-x-1.5 text-green-700 dark:text-green-300">
              <Shield className="h-3 w-3" />
              <span className="text-xs font-medium">{plan.cta.trialDays}-day money-back guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
