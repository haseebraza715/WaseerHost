'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Grid, ArrowLeftRight, CheckCircle, Menu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-100/50 dark:from-slate-800/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-slate-100/50 dark:from-slate-800/50 to-transparent"></div>

      <div className="relative z-10 container-custom pt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Badge */}
          <div className="flex justify-start mb-8">
            <div className="inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
              Up To 20X Faster, Cheap Web Hosting
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Headlines */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  <span className="block">Powerful Shared</span>
                  <span className="block">Hosting for</span>
                  <span className="block">
                    <span className="relative">
                      Every Website
                      <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 rounded-full"></div>
                    </span>
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-200">
                  Fast, Secure and Always Online!
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Experience the benefits of unmetered bandwidth and Unbeatable performance with our Cloud web hosting, which provides 24/7/365 Scalability, High Speed, and Security.
              </p>

              {/* Features */}
              <div className="space-y-3">
                {[
                  { icon: Globe, text: 'Free Domain and SSL' },
                  { icon: Grid, text: 'Free website builder' },
                  { icon: ArrowLeftRight, text: 'Free website migration' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link 
                    href="/pricing" 
                    className="group bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-md flex items-center justify-center space-x-2 text-base min-w-[180px]"
                  >
                    <Menu className="h-4 w-4" />
                    <span>Discover all services</span>
                  </Link>
                  
                  <div className="text-slate-900 dark:text-white font-semibold text-lg">
                    Website Hosting Starting @ $1/mo →
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Comparison Table */}
            <div className="flex justify-center lg:justify-end mt-0 lg:mt-0">
              <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl p-6 shadow-xl max-w-sm w-full border border-slate-200 dark:border-slate-700">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-3">Basic Shared Hosting</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    Easy, fast, and flexible cloud hosting built LiteSpeed and user-friendly hosting control panel.
                  </p>
                  <div className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium py-2 px-3 rounded-lg inline-block">
                    FREE SSL CERTIFICATES & UNLIMITED BANDWIDTH
                  </div>
                </div>
                
                {/* Comparison List */}
                <div className="space-y-2">
                  {[
                    { name: 'WaseerHost', price: '$1.00/mo', logo: 'W', color: 'bg-slate-900 dark:bg-white', highlight: true },
                    { name: 'SiteGround', price: '$19.99/mo', logo: 'S', color: 'bg-slate-700' },
                    { name: 'BlueHost', price: '$10.99/mo', logo: 'B', color: 'bg-slate-600' },
                    { name: 'HostGator', price: '$7.98/mo', logo: 'H', color: 'bg-slate-500' },
                    { name: 'DreamHost', price: '$8.10/mo', logo: 'D', color: 'bg-slate-400' },
                  ].map((provider, index) => (
                    <div key={index} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      provider.highlight ? 'bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600' : 'bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${provider.color} rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm flex-shrink-0`}>
                          {provider.logo}
                        </div>
                        <span className="font-medium text-sm">{provider.name}</span>
                      </div>
                      <span className={`font-bold text-lg ${provider.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {provider.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free migration included</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No hidden fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
