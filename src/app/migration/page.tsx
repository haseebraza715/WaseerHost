'use client';

import { Check, Clock, Users, Zap, FileText, Database, Globe, Shield, Settings } from 'lucide-react';
import Link from 'next/link';

const MigrationPage = () => {
  const migrationSteps = [
    {
      step: 1,
      title: 'Assessment',
      description: 'We analyze your current hosting setup and create a migration plan',
      duration: '1-2 hours',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Preparation',
      description: 'Set up your new hosting environment and configure all services',
      duration: '2-4 hours',
      icon: Settings,
    },
    {
      step: 3,
      title: 'Migration',
      description: 'Transfer all files, databases, and configurations with zero downtime',
      duration: '2-6 hours',
      icon: Database,
    },
    {
      step: 4,
      title: 'Testing',
      description: 'Verify everything works perfectly on the new hosting platform',
      duration: '1-2 hours',
      icon: Check,
    },
    {
      step: 5,
      title: 'Go Live',
      description: 'Switch DNS and launch your site on the new hosting',
      duration: '15 minutes',
      icon: Globe,
    },
  ];

  const migrationFeatures = [
    {
      icon: Clock,
      title: 'Zero Downtime',
      description: 'Your site stays online throughout the entire migration process',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced technicians handle every aspect of your migration',
    },
    {
      icon: Shield,
      title: 'Data Safety',
      description: 'Multiple backups ensure your data is never at risk',
    },
    {
      icon: Zap,
      title: 'Performance Boost',
      description: 'Experience faster loading times immediately after migration',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              We&apos;ll move your site for free
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Zero downtime. Expert technicians. Complete peace of mind. Our free migration service 
              ensures your site moves seamlessly to WaseerHost with no interruption to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary text-lg px-8 py-4">
                Get Started
              </Link>
              <a href="tel:+15551234567" className="btn-outline text-lg px-8 py-4">
                Call to Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Migration process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How our migration process works
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {migrationSteps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="relative">
                    {/* Step number */}
                    <div className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    
                    {/* Connector line */}
                    {index < migrationSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
                    )}
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 dark:bg-brand-900/20 rounded-lg mb-4">
                      <step.icon className="h-6 w-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {step.description}
                    </p>
                    
                    <div className="text-sm text-brand-600 dark:text-brand-400 font-medium">
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration features */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why choose our migration service?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-100 dark:bg-brand-900/20 rounded-full mb-6">
                  <feature.icon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we migrate */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            What we migrate for you
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Website Files & Content
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">All website files and directories</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Images, videos, and media files</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Configuration files</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Custom themes and plugins</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Databases & Applications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">MySQL/MariaDB databases</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">WordPress, Joomla, Drupal sites</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">E-commerce platforms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Custom applications</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-soft border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to get started?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Book your free migration slot today. Our team will contact you within 24 hours to begin the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/pricing" className="btn-primary">
                    Choose Your Plan
                  </Link>
                  <a href="tel:+15551234567" className="btn-outline">
                    Call to Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don&apos;t let hosting hold you back
          </h2>
                      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Switch to WaseerHost and experience blazing-fast performance, enterprise security, 
            and 24/7 human support. Migration is completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 hover:scale-105">
              View Plans & Pricing
            </Link>
            <a href="tel:+15551234567" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-2xl transition-all duration-200 hover:scale-105">
              Talk to Migration Expert
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MigrationPage;
