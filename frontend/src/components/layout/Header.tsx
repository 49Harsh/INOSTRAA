'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code, Smartphone, Globe, Users, Mail, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { companyInfo } from '@/data';

const navItems = [
  { name: 'Home', href: '/', icon: null },
  { name: 'About', href: '/about', icon: Users },
  { 
    name: 'Services', 
    href: '/services', 
    icon: Code,
    submenu: [
      { name: 'Mobile App Development', href: '/services/mobile-app', icon: Smartphone },
      { name: 'Website Development', href: '/services/website', icon: Globe },
      { name: 'Custom Software', href: '/services/custom-software', icon: Code },
    ]
  },
  { name: 'Portfolio', href: '/portfolio', icon: BookOpen },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmenuToggle = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{companyInfo.name?.[0] || 'I'}</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <span className={cn(
                'text-xl font-bold transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}>
                {companyInfo.name}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative group"
              >
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 group',
                        isScrolled 
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      )}
                    >
                      {item.icon && <item.icon size={18} className="mr-2" />}
                      {item.name}
                      <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200/50 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {subItem.icon && <subItem.icon size={18} className="mr-3" />}
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group',
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                    )}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-lg"></span>
                    <span className="relative flex items-center">
                      {item.icon && <item.icon size={18} className="mr-2" />}
                      {item.name}
                    </span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Link
              href="/contact"
              className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></span>
              <span className="relative">Get Started</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors duration-300',
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            )}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 mt-4 rounded-b-xl overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => handleSubmenuToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            {item.icon && <item.icon size={20} className="mr-3" />}
                            {item.name}
                          </div>
                          <ChevronDown 
                            size={20} 
                            className={cn(
                              'transition-transform duration-200',
                              activeSubmenu === item.name && 'rotate-180'
                            )} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                                >
                                  {subItem.icon && <subItem.icon size={18} className="mr-3" />}
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                      >
                        {item.icon && <item.icon size={20} className="mr-3" />}
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4 border-t border-gray-200"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg text-center transition-all duration-300 hover:shadow-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
