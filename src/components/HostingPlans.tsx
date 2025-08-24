'use client';

import Link from 'next/link';
import { Monitor, ArrowUpDown, Shield, HardDrive, Cpu, Server, Globe, CheckCircle } from 'lucide-react';

const HostingPlans = () => {
  const plans = [
    {
      title: 'Starter',
      description: 'Ideal for a simple website or blog, with backups and security.',
      originalPrice: '$3.99',
      discount: 'SAVE 75%',
      currentPrice: '$1.00/mo',
      buttonText: 'GET WEB HOSTING',
      buttonLink: '/pricing',
      features: [
        { icon: Monitor, text: 'Host 2 Website' },
        { icon: ArrowUpDown, text: 'Unlimited Bandwidth' },
        { icon: Shield, text: 'Free SSL Certificate(s)' },
        { icon: HardDrive, text: 'cPanel + One-click Installer' },
        { icon: Shield, text: 'Free Backups' },
        { icon: HardDrive, text: '15 GB NVMe Storage' },
        { icon: CheckCircle, text: '24/7 Tech Support' }
      ],
      featureTitle: 'Web hosting features'
    },
    {
      title: 'Cloud Hosting',
      description: 'All you need for smooth, secure, and reliable cloud hosting.',
      originalPrice: '$13.99',
      discount: 'SAVE 68%',
      currentPrice: '$4.49/mo',
      buttonText: 'GET CLOUD HOSTING',
      buttonLink: '/pricing',
      features: [
        { icon: Monitor, text: 'Host 100 Websites' },
        { icon: Cpu, text: '3 CPU Cores' },
        { icon: Server, text: '4 GB RAM' },
        { icon: Globe, text: 'Free Domain With (Yearly)' },
        { icon: Shield, text: 'Free SSL Certificate(s)' },
        { icon: HardDrive, text: '200 GB NVMe Storage' },
        { icon: CheckCircle, text: '24/7 Tech Support' }
      ],
      featureTitle: 'Cloud hosting features'
    },
    {
      title: 'VPS Server',
      description: 'Fast VPS plans to kickstart your success—get online instantly!',
      originalPrice: '$15.99',
      discount: 'SAVE 50%',
      currentPrice: '$7.99/mo',
      buttonText: 'BUY YOUR VPS',
      buttonLink: '/pricing',
      features: [
        { icon: Cpu, text: '1 CPU Cores' },
        { icon: Server, text: '2 GB RAM' },
        { icon: HardDrive, text: '20 GB NVMe Storage' },
        { icon: ArrowUpDown, text: '10 TB Bandwidth' },
        { icon: Globe, text: 'Dedicated IPv4 + 1 IPv6' },
        { icon: Shield, text: 'Full Root Access' },
        { icon: CheckCircle, text: '24/7 Tech Support' }
      ],
      featureTitle: 'VPS hosting features'
    },
    {
      title: 'Dedicated Server',
      description: 'Your gateway to top performance with dedicated servers.',
      originalPrice: '$139.99',
      discount: 'SAVE 47%',
      currentPrice: '$74.99/mo',
      buttonText: 'CONFIGURE YOUR DEDI!',
      buttonLink: '/pricing',
      features: [
        { icon: Cpu, text: 'Intel Xeon E3-1246V3' },
        { icon: Server, text: '32 GB DDR4 RAM' },
        { icon: HardDrive, text: '2 x 512 GB SSD Storage' },
        { icon: ArrowUpDown, text: 'Unlimited Bandwidth' },
        { icon: Globe, text: 'Dedicated IPv4 + IPv6' },
        { icon: Shield, text: 'Full Root Access' },
        { icon: CheckCircle, text: '24/7 Tech Support' }
      ],
      featureTitle: 'Dedicated Servers features'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Web Hosting Plans That Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ultrafast And Secure</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Our platform is truly unique. We&apos;ve got you covered with both managed and self-managed hosting.
            </p>
          </div>

          {/* Hosting Plan Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden min-w-[320px]">
                {/* Background Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {plan.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-slate-400 dark:text-slate-500 line-through text-base">
                      {plan.originalPrice}
                    </span>
                    <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {plan.discount}
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white relative z-10">
                      {plan.currentPrice}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl opacity-15 -z-10 transform scale-125"></div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-8">
                  <Link
                    href={plan.buttonLink}
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {plan.buttonText}
                  </Link>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-6 text-center text-lg">
                    {plan.featureTitle}
                  </h4>
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100 dark:border-blue-800">
                          <feature.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Not sure which website hosting plan is right for you? We can help.{' '}
              <Link 
                href="/support" 
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                Click to Consult FREE →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
