'use client';

import Link from 'next/link';
import { Cloud, Server, Users, ArrowRight } from 'lucide-react';

const ScalableTechnology = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-700">
              Latest Technology
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Scalable Technology That Packs A Punch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
              Our servers offer the dedicated resources and cutting-edge processor technology your project has been craving. Get integrated security that protects your data and complete root access, including your choice of operating system.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Left Column - Large Blue Box */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white h-full">
                {/* Cloud Server Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-lg font-semibold">Robust Cloud Server</span>
                </div>

                {/* Main Title */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Cloud Dedicated Servers
                </h3>

                {/* Description */}
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Fully flexible, high-performance servers with dedicated resources and the ability to configure your own specs. Get down-to-the-minute billing and the ability to pause your server.
                </p>

                {/* Why Choose Section */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold mb-4">Why choose Cloud Server hosting?</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Wondering why Cloud Servers are for you? It&apos;s simple - they give the optimised performance, flexibility and scalability your project needs.
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/cloud-servers"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white hover:border-blue-100"
                >
                  <span>Explore cloud servers</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Two Smaller Boxes */}
            <div className="space-y-8">
              {/* Dedicated Servers Box */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                    <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Dedicated Servers
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Get ultimate performance from dedicated resources and top-of-the-line specs. Choose between SSD, HDD or NVMe storage and some of the best AMD and Intel tech.
                </p>
                <Link
                  href="/dedicated-servers"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <span>Choose Your Dedicated</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Reseller Hosting Box */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 lg:p-8 text-white shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Reseller Hosting</h3>
                </div>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Make money selling Waseerhosts products with major Reseller-exclusive discounts, unlimited web space and email accounts and 24/7 dedicated support.
                </p>
                <Link
                  href="/reseller-hosting"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border-2 border-white hover:border-blue-100"
                >
                  <span>Become A Reseller</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScalableTechnology;
