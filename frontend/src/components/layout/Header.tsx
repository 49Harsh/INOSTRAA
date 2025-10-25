'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Code, Smartphone, Globe, Users, Mail, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';


const navItems = [
  { name: 'Home', href: '/', icon: null },
  { name: 'About', href: '/about', icon: Users },
  {
    name: 'Services',
    href: '/services',
    icon: Code,
    submenu: [
      { name: 'Website Development', href: '/services/website-development', icon: Globe },
      { name: 'Mobile App Development', href: '/services/mobile-app-development', icon: Smartphone },
      { name: 'Custom Software Development', href: '/services/custom-software-development', icon: Code },
    ]
  },
  { name: 'Portfolio', href: '/portfolio', icon: BookOpen },
  // { name: 'Animated BG', href: '/animated-bg', icon: Code },
  // { name: 'Team', href: '/team', icon: Users },
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
      className="fixed z-50 w-full"
      style={{
        top: isScrolled ? '1rem' : '0',
        paddingLeft: isScrolled ? '1rem' : '0',
        paddingRight: isScrolled ? '1rem' : '0',
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      <div className={cn(
        'mx-auto',
        isScrolled
          ? 'max-w-6xl bg-gray-900/90 backdrop-blur-lg border border-purple-500/20 shadow-2xl shadow-purple-500/10 rounded-2xl'
          : 'max-w-7xl bg-transparent'
      )}
        style={{
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        <nav className={cn(
          'transition-all duration-[800ms] ease-out px-4 sm:px-6 lg:px-8'
        )}>
          <div className={cn(
            'flex justify-between items-center transition-all duration-[800ms] ease-out',
            isScrolled ? 'h-14' : 'h-16 lg:h-20'
          )}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className={cn(
                      'transition-all duration-[800ms] ease-out',
                      isScrolled
                        ? 'h-8 w-auto sm:h-10 md:h-12'
                        : 'h-12 w-auto sm:h-16 md:h-20 lg:h-24'
                    )}
                  />

                </div>

              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
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
                            ? 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/10'
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
                            className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-xl border border-purple-500/20 overflow-hidden"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-200"
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
                          ? 'text-gray-300 hover:text-purple-400'
                          : 'text-white/90 hover:text-white'
                      )}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-emerald-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-lg"></span>
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
              className="hidden md:block"
            >
              <Link
                href="/contact"
                className={cn(
                  "relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg overflow-hidden group hover:shadow-lg hover:scale-105 shadow-emerald-500/20 transition-all duration-[800ms] ease-out",
                  isScrolled ? "px-3 py-2 text-sm" : "px-6 py-3"
                )}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></span>
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
                'md:hidden p-2 rounded-lg transition-colors duration-300',
                isScrolled
                  ? 'text-gray-300 hover:bg-purple-500/10'
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
                className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-purple-500/20 mt-4 rounded-b-xl overflow-hidden"
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
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:bg-purple-500/10 rounded-lg transition-colors duration-200"
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
                                    className="flex items-center px-4 py-2 text-gray-400 hover:bg-purple-500/10 hover:text-purple-400 rounded-lg transition-colors duration-200"
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
                          className="flex items-center px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 rounded-lg transition-colors duration-200"
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
                    className="pt-4 border-t border-purple-500/20"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg text-center transition-all duration-300 hover:shadow-lg shadow-emerald-500/20"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
}
