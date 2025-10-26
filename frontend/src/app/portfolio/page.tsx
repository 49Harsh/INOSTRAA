'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Zap, Filter, Clock } from 'lucide-react';
import Link from 'next/link';
import { websiteContent } from '@/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';
import { ServiceCategory } from '@/types';

// Use real portfolio data from websiteContent
const extendedPortfolio = websiteContent.portfolio.map(project => ({
  ...project,
  category: project.category as ServiceCategory,
  technologies: project.category === 'website'
    ? ["React", "Next.js", "Tailwind CSS", "Node.js"]
    : project.category === 'mobile-app'
      ? ["React Native", "Node.js", "MongoDB", "Firebase"]
      : ["React", "Node.js", "PostgreSQL", "Docker"],
  year: 2024,
  team: 3,
  duration: "3-6 months",
  features: project.category === 'website'
    ? ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI"]
    : project.category === 'mobile-app'
      ? ["Cross Platform", "Push Notifications", "Offline Support", "Real-time Updates"]
      : ["Custom Features", "Scalable Architecture", "Security First", "Integration Ready"]
}));

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-gradient-to-br from-blue-800/20 to-purple-800/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing our best work and digital solutions that drive success
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { label: 'Projects Completed', value: extendedPortfolio.length },
              { label: 'Happy Clients', value: '7+' },
              { label: 'Technologies Used', value: '10+' },
              { label: 'Years Experience', value: '2+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2 text-blue-200">{stat.value}</div>
                <div className="text-blue-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(extendedPortfolio);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'website', label: 'Websites', icon: Zap },
    { id: 'mobile-app', label: 'Mobile Apps', icon: Users },
    { id: 'custom-software', label: 'Custom Software', icon: Github },
  ];

  const handleFilter = (filterId: string) => {
    setActiveFilter(filterId);
    if (filterId === 'all') {
      setFilteredProjects(extendedPortfolio);
    } else {
      setFilteredProjects(extendedPortfolio.filter(project => project.category === filterId));
    }
  };

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our diverse range of projects across different technologies and industries
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilter(filter.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === filter.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
            >
              <filter.icon size={18} className="mr-2" />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    {/* Project Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          {project.url !== '#' && (
                            <Link href={project.url} target="_blank">
                              <Button size="sm" variant="outline" className="bg-white text-gray-900 border-white">
                                <ExternalLink size={16} className="mr-2" />
                                Visit
                              </Button>
                            </Link>
                          )}
                          <Button size="sm" variant="outline" className="bg-white text-gray-900 border-white">
                            <Github size={16} className="mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Project Stats */}
                    {'year' in project && (
                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          {project.year}
                        </div>
                        {'team' in project && (
                          <div className="flex items-center">
                            <Users size={14} className="mr-2" />
                            {project.team} people
                          </div>
                        )}
                        {'duration' in project && (
                          <div className="flex items-center">
                            <Clock size={14} className="mr-2" />
                            {project.duration}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Technologies */}
                    {'technologies' in project && project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Features */}
                    {'features' in project && project.features && (
                      <ul className="space-y-1 text-sm text-gray-600">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500">No projects found for the selected category.</p>
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}

function CTASection() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Have a Project in Mind?
        </motion.h2>
        <motion.p
          className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s discuss how we can bring your vision to life with our expertise
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact">
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Start Your Project
            </Button>
          </Link>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

export default function PortfolioPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <PortfolioSection />
      <CTASection />
    </div>
  );
}
