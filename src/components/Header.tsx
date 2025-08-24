'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';

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
      name: 'WordPress', 
      href: '/wordpress',
      submenu: [
        { name: 'WordPress Hosting', href: '/wordpress/hosting', description: 'Optimized for WordPress' },
        { name: 'Managed WordPress', href: '/wordpress/managed', description: 'Fully managed solution' },
        { name: 'WordPress Themes', href: '/wordpress/themes', description: 'Premium themes included' },
      ]
    },
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
      name: 'VPS & Dedicated', 
      href: '/vps-dedicated',
      submenu: [
        { name: 'VPS Hosting', href: '/vps', description: 'Virtual private servers' },
        { name: 'Dedicated Servers', href: '/dedicated', description: 'Full server control' },
        { name: 'Cloud VPS', href: '/cloud-vps', description: 'Scalable cloud VPS' },
      ]
    },
    { 
      name: 'Domains', 
      href: '/domains',
      submenu: [
        { name: 'Domain Search', href: '/domains/search', description: 'Find your perfect domain' },
        { name: 'Domain Transfer', href: '/domains/transfer', description: 'Move domains to us' },
        { name: 'Domain Management', href: '/domains/manage', description: 'Manage all your domains' },
      ]
    },
  ];

  return (
    <header className="relative">
      {/* Promotional top bar */}
      {isTopBarOpen && (
        <div className="bg-blue-600 text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Flash sale message */}
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Hosting Flash Sale: Starting at $1.0/mo for a limited time &gt;</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Phone */}
                <div className="flex items-center space-x-1.5 text-white">
                  <Phone className="h-3 w-3" />
                  <span className="text-xs">+447476885240</span>
                </div>
                
                {/* Live Chat */}
                <div className="flex items-center space-x-1.5 text-white">
                  <MessageCircle className="h-3 w-3" />
                  <span className="text-xs">Live Chat</span>
                </div>
                
                {/* Close button */}
                <button
                  onClick={() => setIsTopBarOpen(false)}
                  className="text-white hover:text-blue-100 transition-colors p-0.5 rounded hover:bg-white/10"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation */}
      <nav className={`bg-white border-b border-slate-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div className="ml-2 flex items-center">
                <span className="text-slate-900 font-bold text-lg">Waseer</span>
                <span className="text-yellow-500 font-bold text-lg">Host</span>
              </div>
            </Link>

            {/* Desktop navigation with dropdowns */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium rounded-lg hover:bg-slate-100 text-sm"
                  >
                    <span>{item.name}</span>
                    {item.submenu && <ChevronDown className="h-3 w-3" />}
                  </Link>
                  
                  {/* Dropdown menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="p-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="font-medium text-slate-900 mb-1 text-sm">
                              {subitem.name}
                            </div>
                            <div className="text-xs text-slate-500">
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

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Login */}
              <Link 
                href="/login" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-md flex items-center space-x-1.5 text-sm"
              >
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4 bg-white">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-base font-medium text-slate-900 hover:text-slate-700 transition-colors mb-2"
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
                            className="block text-slate-600 hover:text-slate-700 transition-colors py-1.5"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-medium text-sm">{subitem.name}</div>
                            <div className="text-xs text-slate-500">
                              {subitem.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <Link
                    href="/login"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg text-center transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
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
