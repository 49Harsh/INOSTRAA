'use client';

import React, { useState } from 'react';
import { BarChart3, TrendingUp, PieChart, CheckCircle2, Smartphone, Globe, Code, Check, ArrowRight, Rocket, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { websiteContent } from '@/data';
import AnimatedPuzzleBackground from '@/components/AnimatedPuzzleBackground';

// Get services from websiteContent
const { services, companyInfo } = websiteContent;

// Service Card Component
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
      <div className="relative h-full bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-current/10 group-hover:border-transparent">
        {/* Dynamic gradient border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]`}>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl h-full w-full"></div>
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

        {/* Floating particles */}
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
              className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {service.title}
            </motion.h3>
            <p className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300">
              {service.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8 flex-grow">
            <h4 className="font-semibold text-white flex items-center text-lg">
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
                  className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center mr-3 mt-0.5"
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

          {/* CTA button */}
          <div className="mt-auto">
            <Link href="/services">
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

const PuzzleLandingPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Continuous Animated Background for both sections */}
      <div className="fixed inset-0 w-full h-full z-0">
        <AnimatedPuzzleBackground opacity={0.35} />
      </div>

      {/* First Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950" />

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center px-8 py-20 text-center">
          <h1 className="text-6xl mt-22 md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Digital Solutions That<br />Transform Your Business
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            We create <span className="text-purple-400 font-semibold">websites</span>, <span className="text-cyan-400 font-semibold">mobile apps</span>, and <span className="text-emerald-400 font-semibold">software solutions</span>
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl w-full mt-12">
            {/* Card 1 - Website Development */}
            <FeatureCard
              title="Website Development"
              icon={<CheckCircle2 className="w-6 h-6" />}
              description="Modern, responsive websites that convert"
              delay={0}
            >
              <div className="flex gap-2 mb-4">
                <div className="flex-1 h-2 bg-gray-700 rounded" />
                <div className="px-3 py-1 bg-emerald-500 rounded text-xs">Live</div>
                <div className="flex-1 h-2 bg-gray-700 rounded" />
              </div>
              <div className="space-y-2 text-left text-sm">
                <div className="px-3 py-2 bg-gray-800/50 rounded">React/Next.js</div>
                <div className="px-3 py-2 bg-gray-800/80 rounded font-semibold">Responsive Design</div>
              </div>
            </FeatureCard>

            {/* Card 2 - Mobile App Development */}
            <FeatureCard
              title="Mobile App Development"
              icon={<TrendingUp className="w-6 h-6" />}
              description="iOS & Android apps that engage users"
              delay={0.5}
            >
              <div className="h-40">
                <BarChart3 className="w-full h-full text-purple-500/20" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>iOS</span>
                  <span>Android</span>
                  <span>React Native</span>
                  <span>Flutter</span>
                  <span>Native</span>
                  <span>PWA</span>
                </div>
              </div>
            </FeatureCard>

            {/* Card 3 - Software Solutions */}
            <FeatureCard
              title="Custom Software Solutions"
              icon={<PieChart className="w-6 h-6" />}
              description="Tailored software for your business needs"
              delay={1}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin" />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">100% Custom Built</div>
                    <div className="text-xs text-gray-500">for your business</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent" />
                  <div className="text-left">
                    <div className="text-sm text-gray-400">Scalable & Secure</div>
                    <div className="text-xs text-gray-500">enterprise ready</div>
                  </div>
                </div>
              </div>
            </FeatureCard>

            {/* Card 4 - Full-Stack Development */}
            <FeatureCard
              title="Full-Stack Development"
              icon={<BarChart3 className="w-6 h-6" />}
              description="End-to-end development services"
              delay={1.5}
            >
              <div className="space-y-2">
                {[
                  { label: 'Frontend', value: 'React/Vue', change: 'Modern' },
                  { label: 'Backend', value: 'Node.js/Python', change: 'Robust' },
                  { label: 'Database', value: 'SQL/NoSQL', change: 'Scalable' },
                  { label: 'Cloud', value: 'AWS/Azure', change: 'Reliable' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs bg-gray-800/30 px-3 py-2 rounded">
                    <span className="text-gray-400">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{item.value}</span>
                      <span className="text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FeatureCard>
          </div>
        </div>
      </div>

      {/* Extended Puzzle Section with Content */}
      <ExtendedPuzzleSection />

      {/* Services Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
        {/* Animated Background for Services Section */}
        <div className="absolute inset-0">
          <AnimatedPuzzleBackground opacity={0.25} />
        </div>

        {/* Gradient overlay for consistency */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-8"
            >
              <Target size={20} className="text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">Our Services</span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />
              <span className="text-white">That Transform</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
    </div>
  );
};

const FeatureCard = ({ title, icon, description, children, delay = 0 }: any) => (
  <div
    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all hover:shadow-xl hover:shadow-purple-500/10"
    style={{
      animation: `cardFloat 4s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <style jsx>{`
      @keyframes cardFloat {
        0%, 100% {
          transform: translateY(0px);
        }
        25% {
          transform: translateY(-15px);
        }
        50% {
          transform: translateY(-8px);
        }
        75% {
          transform: translateY(-20px);
        }
      }
    `}</style>
    <div className="flex items-center gap-2 mb-3 text-purple-400">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-xs text-gray-500 mb-4">{description}</p>
    <div className="mt-4">{children}</div>
  </div>
);

// Extended Puzzle Section Component
const ExtendedPuzzleSection = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* No background - uses the continuous background from parent */}

      {/* Same gradient overlay as first section - dark top, light center, dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Company Introduction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
              Welcome to {companyInfo.name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              We are a dynamic IT company dedicated to transforming businesses through innovative digital solutions.
              Our expertise spans across modern web development, mobile applications, and custom software solutions
              that drive growth and efficiency.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                {companyInfo.visionMission.vision}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Rocket size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                {companyInfo.visionMission.mission}
              </p>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Future-Ready Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {companyInfo.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-2xl border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300"
                >
                  <span className="text-lg font-semibold text-white">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Rocket size={20} />
                  Explore Our Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PuzzleLandingPage;