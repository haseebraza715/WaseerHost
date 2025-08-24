'use client';

import { Cloud, HardDrive, Clock, Shield, DollarSign, Zap } from 'lucide-react';

const WhatMakesDifferent = () => {
  const features = [
    {
      icon: Cloud,
      title: "100% True Cloud Web Hosting",
      description: "All of WaseerHost's web hosting services are offered on our high-speed cloud, which was built for the best performance, absolute dependability, and ultimate scalability."
    },
    {
      icon: HardDrive,
      title: "SSD/NVMe Web Hosting",
      description: "Your shared server plan is housed on our enterprise-class RAID-10 Nvme SSD storage arrays, which provide dependable, super-fast data storage."
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "The Internet never sleeps, and even a brief period of downtime can harm your company's reputation and revenue. We have offered 99.9% website uptime since 2019!"
    },
    {
      icon: Shield,
      title: "Commitment to Security",
      description: "Among our many security features are Multi Factor Authentication, automatically enabled sFTP, and free secure web hosting with Let's Encrypt."
    },
    {
      icon: DollarSign,
      title: "Affordable Web Hosting",
      description: "From the start, one of our primary goals was to offer a remarkable premium web hosting service at a competitive price."
    },
    {
      icon: Zap,
      title: "LiteSpeed Web Hosting",
      description: "The LiteSpeed web server, which is up to 20x faster than conventional Apache, is included for free in every one of our web hosting plans."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700">
              Our Trust
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What Makes WaseerHost So Different?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              We have built our entire web hosting platform using the best hardware and software, unlike many of the &quot;big hosting&quot; companies out there. We also don&apos;t use conventional, outdated dedicated servers; instead, we built our entire infrastructure in the cloud, allowing us to scale resources as needed.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div key={index} className="group">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-200 dark:border-blue-700 group-hover:scale-110 transition-all duration-300">
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

export default WhatMakesDifferent;
