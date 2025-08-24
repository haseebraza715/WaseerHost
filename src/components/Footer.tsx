'use client';

import Link from 'next/link';
import { Mail, Phone, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hosting: [
      { name: 'Shared Hosting', href: '/pricing' },
      { name: 'Cloud Hosting', href: '/pricing#cloud' },
      { name: 'VPS Hosting', href: '/pricing#vps' },
      { name: 'Dedicated Servers', href: '/pricing#dedicated' },
    ],
    support: [
      { name: 'Help Center', href: '/docs' },
      { name: 'Contact Support', href: '/support' },
      { name: 'Migration Help', href: '/migration' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Features', href: '/features' },
      { name: 'Why Choose Us', href: '/why-us' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white dark:text-slate-900 font-bold text-xl">W</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 dark:text-white">WaseerHost</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">Premium Web Hosting</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-md">
              Blazing-fast hosting for modern sites. NVMe speed, zero fuss, and human support when you need it.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="text-sm">support@waseerhost.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 text-slate-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-base">Hosting</h3>
            <ul className="space-y-2">
              {footerLinks.hosting.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 text-base">Support & Company</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © {currentYear} WaseerHost. All rights reserved.
            </p>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/legal/terms" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/legal/privacy" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>

            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
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
