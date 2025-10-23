import React from 'react';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Inostraa Technologies
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Transforming ideas into digital reality with innovative solutions that drive business growth and success.
                </p>
              </div>
              
              {/* Contact Info with Icons */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer hover:translate-x-1 transform duration-200">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/40 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>contact@inostraatechnologies.com</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer hover:translate-x-1 transform duration-200">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/40 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span>+91 8097476088</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group cursor-pointer hover:translate-x-1 transform duration-200">
                  <div className="w-10 h-10 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/40 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <span>India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/services', label: 'Services' },
                  { href: '/portfolio', label: 'Portfolio' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href} className="hover:translate-x-1 transform duration-200">
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'Custom Software',
                  'UI/UX Design',
                  'Consulting',
                ].map((service) => (
                  <li key={service} className="hover:translate-x-1 transform duration-200">
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-white transition-colors"></div>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { 
                    name: 'Twitter', 
                    path: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                    color: 'hover:bg-purple-500'
                  },
                  { 
                    name: 'LinkedIn', 
                    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
                    color: 'hover:bg-emerald-500'
                  },
                  { 
                    name: 'GitHub', 
                    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                    color: 'hover:bg-purple-600'
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/70 hover:text-white ${social.color} transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:-translate-y-0.5 transform`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center text-gray-300">
                <p>© {new Date().getFullYear()} Inostraa Technologies. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
