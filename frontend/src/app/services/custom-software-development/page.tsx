'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, CheckCircle, Star, Database, Settings, Zap, Shield, Users, ExternalLink, Calendar, MapPin, BarChart, Cog, Monitor, Cloud } from 'lucide-react';
import Link from 'next/link';
import { websiteContent } from '@/data';

// Get the specific service data
const serviceData = websiteContent.services.find(service => service.category === 'custom-software');

// Dummy project data for custom software development
const softwareProjects = [
  {
    id: 1,
    title: "ERP Management System",
    description: "Comprehensive enterprise resource planning system for manufacturing company with inventory, HR, and finance modules",
    image: "/api/placeholder/600/400",
    demoUrl: "#",
    category: "Enterprise Software",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    features: ["Inventory Management", "HR Module", "Financial Reporting", "Real-time Analytics"],
    users: "500+ Users",
    modules: 12,
    completedDate: "10/01/2024",
    client: "ManufacturePro Ltd",
    industry: "Manufacturing"
  },
  {
    id: 2,
    title: "AI Interview Help Software",
    description: "Desktop application built with Electron.js that provides AI-powered interview preparation with mock interviews, question analysis, and performance feedback",
    image: "/api/placeholder/600/400",
    demoUrl: "#",
    category: "AI Software",
    technologies: ["Electron.js", "React", "Node.js", "OpenAI API", "SQLite"],
    features: ["AI Mock Interviews", "Question Analysis", "Performance Feedback", "Interview Recording"],
    users: "100+ Users",
    modules: 6,
    completedDate: "15/03/2024",
    client: "CareerBoost Solutions",
    industry: "Education & Career"
  }

  // Commented out previous projects:
  // {
  //   id: 3,
  //   title: "Hospital Management System",
  //   description: "Complete healthcare management solution with patient records, appointment scheduling, and billing integration",
  //   category: "Healthcare Software",
  //   technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
  //   features: ["Patient Records", "Appointment Scheduling", "Billing System", "Medical Reports"],
  //   industry: "Healthcare"
  // },
  // {
  //   id: 4,
  //   title: "Financial Analytics Platform",
  //   description: "Advanced financial analytics and reporting platform with real-time market data and predictive modeling",
  //   category: "Financial Software", 
  //   technologies: ["Python", "React", "PostgreSQL", "AWS"],
  //   features: ["Real-time Analytics", "Predictive Modeling", "Risk Assessment", "Custom Reports"],
  //   industry: "Finance"
  // },
  // {
  //   id: 5,
  //   title: "School Management System",
  //   description: "Comprehensive school administration system with student records, gradebook, and parent communication portal",
  //   category: "Education Software",
  //   technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
  //   features: ["Student Management", "Gradebook", "Parent Portal", "Attendance Tracking"],
  //   industry: "Education"
  // },
  // {
  //   id: 6,
  //   title: "CRM & Sales Platform",
  //   description: "Customer relationship management system with sales pipeline, lead tracking, and automated marketing",
  //   category: "CRM Software",
  //   technologies: ["React", "Laravel", "MySQL", "Redis"],
  //   features: ["Lead Management", "Sales Pipeline", "Email Automation", "Performance Analytics"],
  //   industry: "Sales & Marketing"
  // }
];

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 via-blue-600/20 to-purple-600/20"></div>
      </motion.div>

      {/* Floating code elements */}
      <div className="absolute inset-0">
        {[Code, Database, Settings, Monitor, Cloud, Cog].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Icon size={24} className="text-white/10" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Code size={20} className="text-gray-400" />
            <span className="text-sm font-medium">Custom Software Development Services</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-blue-200 bg-clip-text text-transparent">
              Custom Software
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Development
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {serviceData?.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-blue-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Software Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Solutions
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business requirements"
    },
    {
      icon: Database,
      title: "Database Architecture",
      description: "Robust and scalable database design optimized for performance and security"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration with existing systems and third-party services"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and custom reporting for data-driven decisions"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security measures and compliance with industry standards"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud-based architectures for modern business needs"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Software Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We build enterprise-grade software solutions that scale with your business
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              What We Build
            </h2>
            <div className="space-y-6">
              {serviceData?.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                    <p className="text-gray-600">Enterprise-level implementation with scalability and maintainability in mind.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Need Custom Software?</h3>
              <p className="text-gray-100 mb-8">
                Let&apos;s discuss your requirements and build a solution that perfectly fits your business needs.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-white text-gray-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Discuss Your Requirements
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Software Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of custom software solutions across various industries
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-500 to-blue-600 flex items-center justify-center">
                    <Monitor size={48} className="text-white/60" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Industry Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Users size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{project.users}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Settings size={14} />
                      <span>{project.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(project.completedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t pt-4 mt-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <Star size={12} className="text-yellow-500 fill-current" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users size={14} />
                          <span>Client: {project.client}</span>
                        </div>
                        {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div> */}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build Custom Software?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s create a powerful software solution that streamlines your business processes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 relative overflow-hidden group text-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Software Project
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-lg"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ServiceDetailsSection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
}