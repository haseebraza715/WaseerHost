'use client';

import { Globe, Server, Infinity, Zap, DollarSign, RefreshCw } from 'lucide-react';

const FreeFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "WordPress",
      description: "Over 400 Apps 1-Click installs, including WordPress, Drupal, Joomla & phpBB."
    },
    {
      icon: Server,
      title: "cPanel",
      description: "The most popular hosting control panel in the world is at your fingertips."
    },
    {
      icon: Infinity,
      title: "Unmetered bandwidth",
      description: "We can handle all the traffic you want to bring in to your website."
    },
    {
      icon: Zap,
      title: "100% Uptime",
      description: "We keep your site online 24/7 - day or night we keep your services online."
    },
    {
      icon: DollarSign,
      title: "30-day Money-Back",
      description: "If you're not completely satisfied, you can cancel within 30 days for a complete refund."
    },
    {
      icon: RefreshCw,
      title: "Free Site Transfer",
      description: "Our experts will help move your site from any compatible web hosting provider."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700">
              Oh Yaaa Free Features
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Hosting Is Even Better With All These FREE Features
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-slate-700 dark:text-slate-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
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

export default FreeFeatures;
