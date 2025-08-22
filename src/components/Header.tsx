'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Phone, Mail, ChevronDown, Bell, Shield, Zap, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopBarOpen, setIsTopBarOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { 
      name: 'Hosting', 
      href: '/pricing',
      submenu: [
        { name: 'Shared Hosting', href: '/pricing#shared', description: 'Perfect for personal sites' },
        { name: 'Cloud Hosting', href: '/pricing#cloud', description: 'Scalable cloud infrastructure' },
        { name: 'VPS Hosting', href: '/pricing#vps', description: 'Dedicated resources' },
        { name: 'Dedicated Servers', href: '/pricing#dedicated', description: 'Complete server control' },
      ]
    },
    { 
      name: 'Features', 
      href: '/features',
      submenu: [
        { name: 'Performance', href: '/features#performance', description: 'NVMe storage & LiteSpeed' },
        { name: 'Security', href: '/features#security', description: 'WAF & DDoS protection' },
        { name: 'Backups', href: '/features#backups', description: 'Daily automated backups' },
        { name: 'Migration', href: '/migration', description: 'Free site migration' },
      ]
    },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Docs', href: '/docs' },
    { name: 'Support', href: '/support' },
  ];

  const topBarMessages = [
    "🚀 New: HTTP/3 support for faster loading",
    "🛡️ Free SSL certificates included",
    "⚡ NVMe storage - 7x faster than SATA",
    "💬 24/7 human support available"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Rotate top bar messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % topBarMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative">
      {/* Enhanced top bar */}
      {isTopBarOpen && (
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-pulse opacity-75"></div>
          
          <div className="container-custom relative z-10">
            <div className="flex items-center justify-between py-2 text-xs">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Rotating message */}
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 animate-pulse" />
                  <span className="font-medium text-xs">{topBarMessages[currentMessageIndex]}</span>
                </div>
                
                {/* Contact info - Hidden on small screens */}
                <div className="hidden md:flex items-center space-x-3">
                  <div className="flex items-center space-x-1.5">
                    <Phone className="h-3 w-3" />
                    <span className="text-xs">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Mail className="h-3 w-3" />
                    <span className="text-xs">support@waseerhost.com</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* System status */}
                <Link href="/status" className="flex items-center space-x-1.5 text-blue-100 hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="hidden sm:inline text-xs">All Systems Operational</span>
                </Link>
                
                {/* Language selector */}
                <div className="flex items-center space-x-1.5 text-blue-100 hover:text-white transition-colors cursor-pointer">
                  <Globe className="h-3 w-3" />
                  <span className="hidden sm:inline text-xs">EN</span>
                </div>
                
                {/* Close button */}
                <button
                  onClick={() => setIsTopBarOpen(false)}
                  className="text-blue-100 hover:text-white transition-colors p-0.5 rounded hover:bg-white/10"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced main navigation */}
      <nav className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Enhanced Logo - Only icon, no text */}
            <Link href="/" className="flex items-center group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg sm:text-xl">W</span>
              </div>
            </Link>

            {/* Desktop navigation with dropdowns */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 sm:py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm"
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  
                  {/* Dropdown menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="p-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block p-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            <div className="font-medium text-gray-900 dark:text-white mb-1 text-sm">
                              {subitem.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {subitem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced CTA buttons */}
            <div className="hidden lg:flex items-center space-x-2 sm:space-x-3">
              {/* Notifications */}
              <button className="relative p-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Login */}
              <Link 
                href="/login" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm"
              >
                Login
              </Link>
              
              {/* Get Started */}
              <Link 
                href="/pricing" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-1.5 text-sm"
              >
                <span>Get Started</span>
                <Zap className="h-3 w-3" />
              </Link>
            </div>

            {/* Enhanced mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Enhanced mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4 bg-white dark:bg-gray-900">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile submenu */}
                    {item.submenu && (
                      <div className="ml-4 space-y-1.5">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-medium text-sm">{subitem.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">
                              {subitem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <Link
                    href="/login"
                    className="block text-base font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/pricing"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-all duration-300 hover:scale-105"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
