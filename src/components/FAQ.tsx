'use client';

import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle, Zap, Shield, Clock, CreditCard, ArrowRight, Star } from 'lucide-react';
import { FAQ as FAQItem, getFAQsByCategory, getFAQsBySearch } from '@/data/faq';
import Link from 'next/link';

interface FAQProps {
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  showCategories?: boolean;
  maxItems?: number;
  className?: string;
}

const FAQ = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Everything you need to know about our hosting services",
  showSearch = true,
  showCategories = true,
  maxItems,
  className = ''
}: FAQProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSearching, setIsSearching] = useState(false);

  const categories = [
    { 
      id: 'all', 
      name: 'All Questions', 
      count: 0, 
      icon: HelpCircle,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100 dark:bg-gray-800'
    },
    { 
      id: 'general', 
      name: 'General', 
      count: 0, 
      icon: HelpCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    { 
      id: 'technical', 
      name: 'Technical', 
      count: 0, 
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20'
    },
    { 
      id: 'billing', 
      name: 'Billing', 
      count: 0, 
      icon: CreditCard,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    { 
      id: 'support', 
      name: 'Support', 
      count: 0, 
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    { 
      id: 'migration', 
      name: 'Migration', 
      count: 0, 
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
  ];

  // Get filtered FAQs
  let filteredFAQs: FAQItem[] = [];
  if (searchQuery) {
    filteredFAQs = getFAQsBySearch(searchQuery);
  } else if (selectedCategory !== 'all') {
    filteredFAQs = getFAQsByCategory(selectedCategory as 'general' | 'technical' | 'billing' | 'support' | 'migration');
  } else {
    filteredFAQs = maxItems ? getFAQsBySearch('').slice(0, maxItems) : getFAQsBySearch('');
  }

  // Update category counts
  categories.forEach(cat => {
    if (cat.id === 'all') {
      cat.count = getFAQsBySearch('').length;
    } else {
      cat.count = getFAQsByCategory(cat.id as 'general' | 'technical' | 'billing' | 'support' | 'migration').length;
    }
  });

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 500);
  };

  const popularQuestions = [
    'How fast is your hosting?',
    'Do you offer free migration?',
    'What is your uptime guarantee?',
    'How do I get support?'
  ];

  return (
    <section className={`section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-800 relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="h-4 w-4" />
            <span>Got Questions? We&apos;ve Got Answers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight px-4">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              {subtitle}
            </p>
          )}
        </div>

        {/* Popular Questions */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Popular Questions
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {popularQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(question.split(' ').slice(0, 3).join(' '))}
                  className="px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        {(showSearch || showCategories) && (
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            {/* Enhanced Search */}
            {showSearch && (
              <div className="relative mb-6 sm:mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-base sm:text-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearch('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
                
                {/* Search suggestions */}
                {searchQuery && filteredFAQs.length > 0 && (
                  <div className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
                    Found {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}

            {/* Enhanced Categories */}
            {showCategories && (
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        selectedCategory === category.id
                          ? `${category.bgColor} ${category.color} shadow-lg`
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      <IconComponent className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        selectedCategory === category.id ? category.color : 'text-gray-400'
                      }`} />
                      <span>{category.name}</span>
                      <span className={`px-1.5 sm:px-2 py-1 rounded-full text-xs ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-current'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Enhanced FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4 sm:space-y-6">
              {filteredFAQs.map((faq: FAQItem, index) => (
                <div
                  key={faq.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-4 sm:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <div className="flex-1 text-left">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {faq.question}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`p-1.5 sm:p-2 rounded-lg transition-all duration-300 ${
                        openItems.has(faq.id) 
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }`}>
                        <ChevronDown
                          className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 ${
                            openItems.has(faq.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </button>
                  
                  {openItems.has(faq.id) && (
                    <div className="px-4 sm:px-8 pb-4 sm:pb-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="prose prose-gray dark:prose-invert max-w-none">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                        
                        {/* Helpful actions */}
                        <div className="mt-3 sm:mt-4 flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
                          <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Helpful</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Still need help?</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="text-gray-400 dark:text-gray-500 mb-6">
                <Search className="h-16 w-16 sm:h-20 sm:w-20 mx-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {searchQuery ? 'No questions found' : 'No questions available'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base px-4">
                {searchQuery 
                  ? `No questions match "${searchQuery}". Try a different search term or browse our categories.`
                  : 'No questions available in this category. Please try another category or contact our support team.'
                }
              </p>
              
              {searchQuery && (
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => handleSearch('')}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-300 text-sm sm:text-base"
                  >
                    Clear Search
                  </button>
                  <Link
                    href="/support"
                    className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-xl transition-colors duration-300 text-sm sm:text-base"
                  >
                    Contact Support
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Enhanced Show more link */}
        {maxItems && filteredFAQs.length === maxItems && (
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>View all questions</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        )}

        {/* Contact Support CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <span className="text-blue-600 font-semibold text-base sm:text-lg">Still have questions?</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
              Our support team is here to help
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Can&apos;t find what you&apos;re looking for? Our expert team is available 24/7 to assist you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/support"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-colors duration-300 text-sm sm:text-base"
              >
                Contact Support
              </Link>
              <Link
                href="/docs"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-colors duration-300 text-sm sm:text-base"
              >
                Browse Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
