'use client';

import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      rating: 5,
      text: "WaseerHost has transformed our website performance. The speed improvements are incredible, and their support team is always there when we need them. Highly recommended!"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Store Owner",
      rating: 5,
      text: "Switched from a big hosting provider to WaseerHost and never looked back. The uptime is rock solid, and the pricing is unbeatable for the quality we get."
    },
    {
      name: "Emily Rodriguez",
      company: "Web Developer",
      rating: 5,
      text: "As a developer, I need reliable hosting that doesn't slow me down. WaseerHost's cloud infrastructure and cPanel access make my job so much easier."
    },
    {
      name: "David Thompson",
      company: "Startup Founder",
      rating: 5,
      text: "Started our company with WaseerHost and they've grown with us. The scalability is amazing - we can upgrade resources instantly when traffic spikes."
    },
    {
      name: "Lisa Wang",
      company: "Blog Owner",
      rating: 5,
      text: "The 1-click WordPress installation and free SSL certificates saved me hours of setup time. My blog loads faster than ever before!"
    },
    {
      name: "Robert Davis",
      company: "Small Business Owner",
      rating: 5,
      text: "Affordable pricing with enterprise-level features. The 99.9% uptime guarantee gives me peace of mind for my business website."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what real customers have to say about their WaseerHost experience.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-slate-200 dark:text-slate-600">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Customer Info */}
                <div className="border-t border-slate-100 dark:border-slate-700 pt-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Join Thousands of Happy Customers?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Experience the WaseerHost difference today. Get started with our reliable, fast, and affordable web hosting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300">
                  Get Started Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300">
                  View All Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
