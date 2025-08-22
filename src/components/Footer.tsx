'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Github, Globe, Shield, Zap, Headphones } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hosting: [
      { name: 'Shared Hosting', href: '/pricing' },
      { name: 'Cloud Hosting', href: '/pricing#cloud' },
      { name: 'VPS Hosting', href: '/pricing#vps' },
      { name: 'Dedicated Servers', href: '/pricing#dedicated' },
      { name: 'Reseller Hosting', href: '/reseller' },
    ],
    features: [
      { name: 'Performance', href: '/features#performance' },
      { name: 'Security', href: '/features#security' },
      { name: 'Backups', href: '/features#backups' },
      { name: 'Migration', href: '/features#migration' },
      { name: 'Control Panel', href: '/features#control-panel' },
    ],
    support: [
      { name: 'Help Center', href: '/docs' },
      { name: 'Contact Support', href: '/support' },
      { name: 'System Status', href: '/status' },
      { name: 'Migration Help', href: '/migration' },
      { name: 'Knowledge Base', href: '/docs' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Partners', href: '/partners' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Acceptable Use Policy', href: '/legal/aup' },
      { name: 'Refund Policy', href: '/legal/refund' },
      { name: 'Uptime SLA', href: '/legal/uptime-sla' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:bg-blue-500' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:bg-blue-600' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:bg-blue-700' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:bg-gray-700' },
  ];

  const features = [
    { icon: Zap, title: 'Lightning Fast', description: 'NVMe SSD storage for blazing performance' },
    { icon: Shield, title: 'Enterprise Security', description: 'DDoS protection & SSL certificates' },
    { icon: Headphones, title: '24/7 Support', description: 'Human support when you need it' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
      
      {/* Main footer content */}
      <div className="container-custom py-16 sm:py-20 relative z-10">
        {/* Top section with features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company info and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">W</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-20"></div>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  WaseerHost
                </span>
                <p className="text-xs text-blue-400 font-medium">Premium Web Hosting</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg">
              Blazing-fast hosting for modern sites. NVMe speed, zero fuss, and human support when you need it.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Email Support</p>
                  <p className="font-medium text-sm sm:text-base">support@waseerhost.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Phone Support</p>
                  <p className="font-medium text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400">Headquarters</p>
                  <p className="font-medium text-sm sm:text-base">New York, NY, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg flex items-center">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
              Hosting
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group text-sm sm:text-base"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg flex items-center">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
              Features
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group text-sm sm:text-base"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg flex items-center">
              <Headphones className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group text-sm sm:text-base"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg flex items-center">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group text-sm sm:text-base"
                  >
                    <span className="group-hover:text-blue-400 transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Get the latest hosting tips, updates, and exclusive offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 text-sm sm:text-base"
              />
              <button className="btn-primary whitespace-nowrap text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 sm:space-y-6 lg:space-y-0">
            {/* Copyright and legal */}
            <div className="flex flex-col lg:flex-row items-center space-y-3 sm:space-y-4 lg:space-y-0 lg:space-x-6 sm:lg:space-x-8">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} WaseerHost. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
