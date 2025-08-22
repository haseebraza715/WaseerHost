'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Grid, ArrowLeftRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-purple-50/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              Up To 20X Faster, Cheap Web Hosting
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Headlines */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="block">Powerful Shared</span>
                  <span className="block">Hosting for</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Every Website
                  </span>
                </h1>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Fast, Secure and Always Online!
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience the benefits of unmetered bandwidth and Unbeatable performance with our Cloud web hosting, which provides 24/7/365 Scalability, High Speed, and Security.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {[
                  { icon: Globe, text: 'Free Domain and SSL' },
                  { icon: Grid, text: 'Free website builder' },
                  { icon: ArrowLeftRight, text: 'Free website migration' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                  <Link 
                    href="/pricing" 
                    className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 text-lg min-w-[200px]"
                  >
                    <span>Discover all services</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <div className="text-gray-900 font-bold text-xl">
                    Website Hosting Starting @ $1/mo →
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Comparison Table */}
            <div className="flex justify-center xl:justify-end">
              <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl max-w-md w-full border border-gray-700">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Basic Shared Hosting</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Easy, fast, and flexible cloud hosting built with LiteSpeed and user-friendly hosting control panel.
                  </p>
                  <div className="bg-blue-600 text-white text-xs font-bold py-3 px-4 rounded-lg inline-block">
                    FREE SSL CERTIFICATES & UNLIMITED BANDWIDTH
                  </div>
                </div>
                
                {/* Comparison List */}
                <div className="space-y-3">
                  {[
                    { name: 'WaseerHost', price: '$1.00/mo', logo: 'W', color: 'bg-blue-600', highlight: true },
                    { name: 'SiteGround', price: '$19.99/mo', logo: 'S', color: 'bg-green-600' },
                    { name: 'BlueHost', price: '$10.99/mo', logo: 'B', color: 'bg-blue-500' },
                    { name: 'HostGator', price: '$7.98/mo', logo: 'H', color: 'bg-blue-700' },
                    { name: 'DreamHost', price: '$8.10/mo', logo: 'D', color: 'bg-indigo-600' },
                  ].map((provider, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                      provider.highlight ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-gray-800 hover:bg-gray-750'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 ${provider.color} rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                          {provider.logo}
                        </div>
                        <span className="font-semibold">{provider.name}</span>
                      </div>
                      <span className={`font-bold text-xl ${provider.highlight ? 'text-blue-400' : 'text-white'}`}>
                        {provider.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-20 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
