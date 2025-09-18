'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone, CheckCircle, Star, Code, Palette, Zap, Shield, Users, ExternalLink, Calendar, MapPin, Download, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { websiteContent } from '@/data';

// Get the specific service data
const serviceData = websiteContent.services.find(service => service.category === 'mobile-app');

// Dummy project data for mobile app development
const mobileProjects = [
  {
    id: 1,
    title: "FitTracker Pro",
    description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features",
    image: "/api/placeholder/300/500",
    appStoreUrl: "#",
    playStoreUrl: "#",
    category: "Health & Fitness",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    features: ["Workout Tracking", "Nutrition Plans", "Social Sharing", "Progress Analytics"],
    downloads: "50K+",
    rating: 4.8,
    completedDate: "2024-01-20",
    client: "FitLife Solutions",
    location: "New York, USA"
  },
  {
    id: 2,
    title: "ShopEasy - E-commerce App",
    description: "Modern e-commerce mobile app with AR try-on features and personalized recommendations",
    image: "/api/placeholder/300/500",
    appStoreUrl: "#",
    playStoreUrl: "#",
    category: "E-commerce",
    platforms: ["iOS", "Android"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    features: ["AR Try-On", "Payment Gateway", "Push Notifications", "Order Tracking"],
    downloads: "100K+",
    rating: 4.6,
    completedDate: "2024-02-15",
    client: "ShopEasy Ltd",
    location: "London, UK"
  },
  {
    id: 3,
    title: "LearningHub - Education App",
    description: "Interactive learning platform with video courses, quizzes, and progress tracking",
    image: "/api/placeholder/300/500",
    appStoreUrl: "#",
    playStoreUrl: "#",
    category: "Education",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "Laravel", "MySQL", "AWS"],
    features: ["Video Streaming", "Interactive Quizzes", "Progress Tracking", "Offline Content"],
    downloads: "75K+",
    rating: 4.9,
    completedDate: "2024-03-01",
    client: "EduTech Academy",
    location: "Toronto, Canada"
  },
  {
    id: 4,
    title: "FoodieGo - Food Delivery",
    description: "On-demand food delivery app with real-time tracking and multiple payment options",
    image: "/api/placeholder/300/500",
    appStoreUrl: "#",
    playStoreUrl: "#",
    category: "Food & Drink",
    platforms: ["iOS", "Android"],
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    features: ["Real-time Tracking", "Multiple Payments", "Restaurant Management", "Delivery Analytics"],
    downloads: "200K+",
    rating: 4.7,
    completedDate: "2024-03-20",
    client: "FoodieGo Inc",
    location: "Mumbai, India"
  },
  {
    id: 5,
    title: "TravelMate - Trip Planner",
    description: "Comprehensive travel planning app with booking, itinerary management, and local guides",
    image: "/api/placeholder/300/500",
    appStoreUrl: "#",
    playStoreUrl: "#",
    category: "Travel",
    platforms: ["iOS", "Android"],
    technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    features: ["Trip Planning", "Hotel Booking", "Local Guides", "Expense Tracking"],
    downloads: "30K+",
    rating: 4.5,
    completedDate: "2024-04-10",
    client: "TravelMate Solutions",
    location: "Dubai, UAE"
  },
  {
    id: 6,
    title: "MediCare - Health Monitor",
    description: "Health monitoring app with medication reminders, appointment scheduling, and health records",
    image: "/api/placeholder/300/500",
    appStoreUrl: "#",
    playStoreUrl: "#",
    category: "Medical",
    platforms: ["iOS", "Android"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    features: ["Medication Reminders", "Health Records", "Doctor Consultation", "Vital Monitoring"],
    downloads: "40K+",
    rating: 4.8,
    completedDate: "2024-04-25",
    client: "MediCare Health",
    location: "Sydney, Australia"
  }
];

function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
      </motion.div>
      
      {/* Floating phone mockups */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
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
            <Smartphone size={20} className="text-white/10" />
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
            <Smartphone size={20} className="text-purple-400" />
            <span className="text-sm font-medium">Mobile App Development Services</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Mobile App
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Development
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-purple-100 max-w-3xl mx-auto leading-relaxed"
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
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your App Project
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
              View Our Apps
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
      icon: Smartphone,
      title: "Cross-Platform Development",
      description: "Build once, deploy everywhere with React Native and Flutter"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces designed for mobile-first user experience"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized apps that run smoothly on all devices"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Robust security measures to protect user data and privacy"
    },
    {
      icon: Code,
      title: "Native Features",
      description: "Access to device features like camera, GPS, and push notifications"
    },
    {
      icon: Users,
      title: "User Analytics",
      description: "Built-in analytics to track user behavior and app performance"
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
            Mobile App Development Features
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We create mobile apps that deliver exceptional user experiences across all platforms
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
              What We Deliver
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
                    <p className="text-gray-600">Expert implementation with cutting-edge technologies and best practices.</p>
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
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Build Your App?</h3>
              <p className="text-purple-100 mb-8">
                Transform your idea into a powerful mobile application that users will love.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Discuss Your App Idea
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
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mobile App Portfolio
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the innovative mobile applications we&apos;ve created for various industries
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project, index) => (
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
                  <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <Smartphone size={64} className="text-white/60" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* App Store Badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.platforms.includes('iOS') && (
                      <div className="w-8 h-8 bg-black/70 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">📱</span>
                      </div>
                    )}
                    {project.platforms.includes('Android') && (
                      <div className="w-8 h-8 bg-green-600/70 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">🤖</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{project.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Download size={14} />
                      <span>{project.downloads}</span>
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
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div>
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
    <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Launch Your Mobile App?
        </motion.h2>
        <motion.p 
          className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform your innovative ideas into powerful mobile applications that users will love
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
              className="px-10 py-5 bg-white text-purple-900 font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 relative overflow-hidden group text-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Mobile App
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

export default function MobileAppDevelopmentPage() {
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