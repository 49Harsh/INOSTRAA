'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Zap, Smartphone, Globe, Code, Clock, Sparkles, Rocket, Shield, Target, Brain, Lightbulb, Palette, Database, Cloud, Settings } from 'lucide-react';
import Link from 'next/link';
import { websiteContent } from '@/data';

const { services } = websiteContent;




// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          animate={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
        style={{ y, opacity }}
      />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-emerald-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-emerald-600/20 via-purple-600/20 to-emerald-600/20 animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Sparkles size={20} className="text-yellow-400" />
            <span className="text-sm font-medium">Premium Digital Solutions</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We craft extraordinary digital experiences that transform businesses and captivate audiences through innovative technology solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket size={20} />
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 cursor-pointer"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Interactive service card component
interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  features: string[];
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const serviceIcons = {
    'mobile-app': Smartphone,
    'website': Globe,
    'custom-software': Code,
  };

  const serviceColors = {
    'mobile-app': {
      gradient: 'from-purple-600 to-purple-700',
      accent: 'purple',
      particles: ['from-purple-400/30', 'from-purple-500/30', 'from-purple-600/30']
    },
    'website': {
      gradient: 'from-emerald-600 to-emerald-700',
      accent: 'emerald',
      particles: ['from-emerald-400/30', 'from-emerald-500/30', 'from-emerald-600/30']
    },
    'custom-software': {
      gradient: 'from-purple-500 to-emerald-500',
      accent: 'gradient',
      particles: ['from-purple-400/30', 'from-emerald-400/30', 'from-purple-500/30']
    },
  };

  const IconComponent = serviceIcons[service.category as keyof typeof serviceIcons] || Code;
  const colors = serviceColors[service.category as keyof typeof serviceColors] || serviceColors['mobile-app'];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="group cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative h-full bg-gradient-to-br from-white to-gray-50/50 rounded-3xl border border-gray-200/50 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-current/10 group-hover:border-transparent backdrop-blur-sm">
        {/* Dynamic gradient border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
          <div className="bg-white rounded-3xl h-full w-full"></div>
        </div>

        {/* Mouse follower effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute pointer-events-none z-10"
              style={{
                left: mousePosition.x - 50,
                top: mousePosition.y - 50,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div className={`w-24 h-24 bg-gradient-to-r ${colors.gradient} rounded-full blur-xl opacity-20`}></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating particles with physics */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {colors.particles.map((particle, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 bg-gradient-to-r ${particle} to-transparent rounded-full blur-sm`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: isHovered ? [-10, 10, -10] : [0, -5, 0],
                x: isHovered ? [-5, 5, -5] : [0, 2, 0],
                scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 p-8 h-full flex flex-col">
          {/* Icon with 3D effect */}
          <div className="text-center mb-8">
            <motion.div
              className={`relative w-28 h-28 bg-gradient-to-r ${colors.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 15,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D depth layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl transform translate-z-2"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-3xl"></div>

              <motion.div
                animate={{ rotateZ: isHovered ? 360 : 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <IconComponent size={48} className="text-white relative z-10 drop-shadow-lg" />
              </motion.div>

              {/* Glowing ring effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-3xl opacity-0 group-hover:opacity-60 blur-md`}
                animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {service.title}
            </motion.h3>
            <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
              {service.description}
            </p>
          </div>

          {/* Features with staggered reveal */}
          <div className="space-y-4 mb-8 flex-grow">
            <h4 className="font-semibold text-gray-900 flex items-center text-lg">
              <motion.div
                className={`w-3 h-3 bg-gradient-to-r ${colors.gradient} rounded-full mr-3`}
                animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              Key Features
            </h4>
            <ul className="space-y-3">
              {service.features.map((feature: string, i: number) => (
                <motion.li
                  key={i}
                  className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 mt-0.5"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check size={12} className="text-white" />
                  </motion.div>
                  <span className="text-sm font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Enhanced CTA button */}
          <div className="mt-auto">
            <Link href={`/services/${service.category}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r ${colors.gradient} hover:shadow-lg hover:shadow-current/25 transition-all duration-300 relative overflow-hidden group/btn`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket size={18} />
                  Explore Service
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServicesGrid() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full border border-purple-200/50 mb-8"
          >
            <Target size={20} className="text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Our Expertise</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-emerald-800 bg-clip-text text-transparent">
              Transformative
            </span>
            <br />
            <span className="text-gray-900">Solutions</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We deliver cutting-edge digital solutions that push boundaries and create exceptional user experiences
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Interactive process timeline
function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into understanding your business goals, target audience, and project requirements through comprehensive research and strategic planning.',
      icon: Brain,
      color: 'from-purple-500 to-purple-600',
      details: ['Market Research', 'User Analysis', 'Technical Planning', 'Strategy Development']
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our creative team crafts intuitive user interfaces and interactive prototypes that bring your vision to life with pixel-perfect precision.',
      icon: Palette,
      color: 'from-emerald-500 to-emerald-600',
      details: ['UI/UX Design', 'Interactive Prototypes', 'Design Systems', 'User Testing']
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Using cutting-edge technologies and best practices, we build robust, scalable solutions with clean, maintainable code architecture.',
      icon: Code,
      color: 'from-purple-500 to-emerald-500',
      details: ['Frontend Development', 'Backend Architecture', 'API Integration', 'Database Design']
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Rigorous quality assurance testing ensures flawless performance, followed by seamless deployment and ongoing support.',
      icon: Rocket,
      color: 'from-emerald-500 to-purple-500',
      details: ['Quality Assurance', 'Performance Testing', 'Deployment', 'Ongoing Support']
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-emerald-600/10 to-purple-600/10"></div>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Settings size={20} className="text-purple-400" />
            <span className="text-sm font-medium">Our Methodology</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-emerald-200 bg-clip-text text-transparent">
              Our Process
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A proven methodology that transforms ideas into exceptional digital experiences
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Interactive timeline */}
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`relative p-8 rounded-3xl border transition-all duration-500 ${activeStep === index
                  ? 'bg-white/10 border-white/30 backdrop-blur-sm'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                  {/* Step connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent transform -translate-y-1/2"></div>
                  )}

                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    animate={{
                      scale: activeStep === index ? 1.1 : 1,
                      rotateY: activeStep === index ? 15 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon size={32} className="text-white" />

                    {/* Glowing effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-md`}
                      animate={{
                        opacity: activeStep === index ? 0.6 : 0,
                        scale: activeStep === index ? 1.2 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>

                  <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${activeStep === index ? 'text-white' : 'text-gray-300'
                    }`}>
                    {step.title}
                  </h3>

                  <p className={`text-sm leading-relaxed transition-all duration-300 ${activeStep === index ? 'text-gray-200' : 'text-gray-400'
                    }`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active step details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    {processSteps[activeStep].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {processSteps[activeStep].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {processSteps[activeStep].details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full"></div>
                        <span className="text-sm font-medium">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    className={`w-64 h-64 bg-gradient-to-r ${processSteps[activeStep].color} rounded-3xl mx-auto flex items-center justify-center shadow-2xl`}
                    animate={{ rotateY: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {React.createElement(processSteps[activeStep].icon, { size: 80, className: "text-white" })}

                    {/* Floating elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-white/30 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Advanced tech stack with 3D carousel
function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const techCategories = {
    frontend: {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      techs: [
        { name: 'React', icon: '⚛️', description: 'Modern UI library' },
        { name: 'Next.js', icon: '▲', description: 'Full-stack framework' },
        { name: 'Vue.js', icon: '💚', description: 'Progressive framework' },
        { name: 'TypeScript', icon: '📘', description: 'Type-safe JavaScript' },
      ]
    },
    backend: {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      techs: [
        { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime' },
        { name: 'Laravel', icon: '🔧', description: 'PHP framework' },
        { name: 'Python', icon: '🐍', description: 'Versatile language' },
        { name: 'PostgreSQL', icon: '🐘', description: 'Advanced database' },
      ]
    },
    mobile: {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      techs: [
        { name: 'Flutter', icon: '🦋', description: 'Cross-platform' },
        { name: 'React Native', icon: '📱', description: 'Native performance' },
        { name: 'Swift', icon: '🍎', description: 'iOS development' },
        { name: 'Kotlin', icon: '🤖', description: 'Android development' },
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      techs: [
        { name: 'AWS', icon: '☁️', description: 'Cloud platform' },
        { name: 'Docker', icon: '🐳', description: 'Containerization' },
        { name: 'Kubernetes', icon: '⚙️', description: 'Orchestration' },
        { name: 'CI/CD', icon: '🚀', description: 'Automation' },
      ]
    }
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 mb-8"
          >
            <Lightbulb size={20} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Technology Stack</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="text-gray-900">Technologies</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We leverage the latest technologies and frameworks to build scalable, performant solutions
          </motion.p>
        </div>

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(techCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setSelectedCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${selectedCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
            >
              <category.icon size={20} />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Tech grid with 3D effects */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -10 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {techCategories[selectedCategory as keyof typeof techCategories].techs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  rotateY: 10,
                  rotateX: 5,
                  scale: 1.05
                }}
                className="group cursor-pointer perspective-1000"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent overflow-hidden">
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${techCategories[selectedCategory as keyof typeof techCategories].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [-5, 5, -5],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Tech icon with 3D effect */}
                    <motion.div
                      className={`w-24 h-24 bg-gradient-to-r ${techCategories[selectedCategory as keyof typeof techCategories].color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                      whileHover={{
                        rotateY: 15,
                        rotateX: 15,
                        scale: 1.1
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span className="text-3xl transform translate-z-4">{tech.icon}</span>

                      {/* 3D depth effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transform translate-z-2"></div>

                      {/* Glowing ring effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${techCategories[selectedCategory as keyof typeof techCategories].color} rounded-3xl opacity-0 group-hover:opacity-60 blur-md`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {tech.name}
                    </h3>

                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {tech.description}
                    </p>

                    {/* Animated underline */}
                    <motion.div
                      className={`w-0 h-0.5 bg-gradient-to-r ${techCategories[selectedCategory as keyof typeof techCategories].color} mx-auto mt-4 group-hover:w-full transition-all duration-500`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '50+', label: 'Technologies Mastered' },
            { number: '100+', label: 'Projects Delivered' },
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic background that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rotate-45"
          animate={{ rotate: 405 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Sparkles size={20} className="text-yellow-400" />
            <span className="text-sm font-medium">Ready to Transform?</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Let&apos;s Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your ideas into extraordinary digital experiences? Let&apos;s collaborate and create something remarkable together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden group text-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket size={22} />
                  Start Your Project
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </Link>

            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 relative overflow-hidden group text-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Shield size={22} />
                  View Our Work
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Enhanced trust indicators with animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Clock, number: '24/7', label: 'Support Available', color: 'from-blue-400 to-cyan-400' },
              { icon: Target, number: '100%', label: 'Client Satisfaction', color: 'from-green-400 to-emerald-400' },
              { icon: Zap, number: 'Fast', label: 'Project Delivery', color: 'from-yellow-400 to-orange-400' },
              { icon: Shield, number: 'Secure', label: 'Development', color: 'from-purple-400 to-pink-400' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon size={24} className="text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-white mb-2">{item.number}</div>
                <div className="text-blue-200 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <TechStackSection />
      <CTASection />
    </div>
  );
}
