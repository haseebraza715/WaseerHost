'use client';

import { Phone, MessageCircle, Globe, Mail } from 'lucide-react';

const TechnicalSupport = () => {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-700">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 dark:border-green-700 mb-6">
                  24/7 Technical Support
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Support Team Is Here To Help You!
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our top-notch support team is a source of pride. They&apos;re available whenever you need them, ensuring uninterrupted assistance. Experience unparalleled support for your services, including servers, websites, mailboxes, and more. Discover hosting support that sets the standard for excellence.
                </p>
              </div>

              {/* Right Side - Illustration */}
              <div className="relative">
                {/* Main Dashboard Frame */}
                <div className="relative w-full h-80 bg-slate-100 dark:bg-slate-600 rounded-2xl border-2 border-slate-200 dark:border-slate-500 flex items-center justify-center">
                  {/* Support Team Illustration */}
                  <div className="flex items-center justify-center space-x-4">
                    {/* Left Person */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-lg font-bold">👩</span>
                      </div>
                      <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Center Person */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-xl font-bold">👨</span>
                      </div>
                      <div className="w-4 h-4 bg-green-500 rounded-full mx-auto"></div>
                    </div>
                    
                    {/* Right Person */}
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                        <span className="text-white text-lg font-bold">👩</span>
                      </div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto"></div>
                    </div>
                  </div>
                </div>

                {/* Communication Icons */}
                {/* Phone Icon - Top Left */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>

                {/* Chat Icon - Top Right */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>

                {/* Globe Icon - Bottom Left */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="h-6 w-6 text-white" />
                </div>

                {/* Mail Icon - Middle Right */}
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Phone to Dashboard */}
                  <div className="absolute top-0 left-0 w-4 h-0.5 bg-green-400 transform rotate-45 origin-left"></div>
                  
                  {/* Chat to Dashboard */}
                  <div className="absolute top-0 right-0 w-4 h-0.5 bg-green-400 transform -rotate-45 origin-right"></div>
                  
                  {/* Globe to Dashboard */}
                  <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-green-400 transform -rotate-45 origin-left"></div>
                  
                  {/* Mail to Dashboard */}
                  <div className="absolute top-1/2 right-0 w-6 h-0.5 bg-green-400 transform -translate-y-1/2"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-4 h-4 bg-purple-300 rounded-full opacity-60"></div>
                <div className="absolute -bottom-8 -left-8 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-8 w-2 h-2 bg-green-300 rounded-full opacity-60 transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupport;
