'use client';

import { Server, Zap, Shield, Settings, Gauge, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Server,
      title: "World's Best Control Panel",
      description: "Powered by cPanel with Cloudlinux based on LiteSpeed server technology."
    },
    {
      icon: Zap,
      title: "1-Click Installs",
      description: "Over 400+ OneOClick install Apps, including WordPress, Drupal, Open cart, Laravel."
    },
    {
      icon: Shield,
      title: "Built-in security",
      description: "To keep our customer websites secure and online, we have real-time malware scanner."
    },
    {
      icon: Settings,
      title: "Super Easy to Use",
      description: "Our unique control panel makes managing your web hosting easy and is straightforward to use."
    },
    {
      icon: Gauge,
      title: "Built for speed",
      description: "Up to 10x faster than competitors. You lose visitors, conversions, if your website is sluggish or unavailable."
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Anytime, day or night, if you get stuck, our highly-regarded experts are here to help."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              WaseerHost Helps You Succeed
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Join WaseerHost as your base to Grow your website more quickly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100 dark:border-slate-700">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-700">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
