'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, ArrowRight, Code, Smartphone, Globe, Zap, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import { websiteContent } from '@/data';

const { companyInfo, features } = websiteContent;

// Reusable Animated Background Component
const AnimatedPuzzleBackground = ({ opacity = 0.35, className = "" }: { opacity?: number; className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationFrame: number;
    let offset = 0;

    const drawExtendedWireframe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Extended circles - continuing from main section
      const circles = 6; // More circles for extended section
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.8;

      for (let i = 0; i < circles; i++) {
        const radius = (maxRadius / circles) * (i + 1);

        // Draw circle with glow effect
        ctx.shadowColor = 'rgba(16, 185, 129, 0.6)'; // Emerald color for variation
        ctx.shadowBlur = 12;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glow
        ctx.shadowBlur = 18;
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Electric spark moving around each circle
        const directions = [1.2, -0.9, 1.7, -1.1, 0.8, -1.3];
        const sparkAngle = offset * directions[i] + (i * 0.7);
        const sparkX = centerX + Math.cos(sparkAngle) * radius;
        const sparkY = centerY + Math.sin(sparkAngle) * radius;

        // Draw electric spark
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 18;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Emerald glow
        ctx.shadowColor = 'rgba(16, 185, 129, 1)';
        ctx.shadowBlur = 28;
        ctx.fillStyle = 'rgba(16, 185, 129, 1)';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Purple accent glow for variety
        if (i % 2 === 0) {
          ctx.shadowColor = 'rgba(168, 85, 247, 0.8)';
          ctx.shadowBlur = 25;
          ctx.fillStyle = 'rgba(168, 85, 247, 0.5)';
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Reset shadow
        ctx.shadowBlur = 0;
      }

      // Draw center dot with enhanced glow
      ctx.shadowColor = 'rgba(16, 185, 129, 1)';
      ctx.shadowBlur = 25;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fill();

      // White center core
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Reset shadow
      ctx.shadowBlur = 0;

      // Extended dotted lines - more complex pattern
      const drawDottedLine = (x1: number, y1: number, x2: number, y2: number, color = 'rgba(16, 185, 129, 0.6)') => {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const dotSpacing = 12;
        const dotSize = 1.8;

        for (let i = dotSpacing; i < distance; i += dotSpacing) {
          const ratio = i / distance;
          const x = x1 + (x2 - x1) * ratio;
          const y = y1 + (y2 - y1) * ratio;

          const alpha = Math.max(0.1, 0.7 - (i / distance) * 0.6);

          ctx.fillStyle = color.replace('0.6', alpha.toString());
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      // Main cross lines
      drawDottedLine(centerX, centerY - 25, centerX, 0);
      drawDottedLine(centerX, centerY + 25, centerX, canvas.height);
      drawDottedLine(centerX - 25, centerY, 0, centerY);
      drawDottedLine(centerX + 25, centerY, canvas.width, centerY);

      // Diagonal lines for more complexity
      drawDottedLine(centerX - 15, centerY - 15, 0, 0, 'rgba(168, 85, 247, 0.4)');
      drawDottedLine(centerX + 15, centerY - 15, canvas.width, 0, 'rgba(168, 85, 247, 0.4)');
      drawDottedLine(centerX - 15, centerY + 15, 0, canvas.height, 'rgba(168, 85, 247, 0.4)');
      drawDottedLine(centerX + 15, centerY + 15, canvas.width, canvas.height, 'rgba(168, 85, 247, 0.4)');

      // Enhanced connecting lines
      const lines = 16;
      for (let i = 0; i < lines; i++) {
        const angle = (Math.PI * 2 / lines) * i + offset * 0.3;
        const x1 = centerX + Math.cos(angle) * (maxRadius * 0.12);
        const y1 = centerY + Math.sin(angle) * (maxRadius * 0.12);
        const x2 = centerX + Math.cos(angle) * maxRadius;
        const y2 = centerY + Math.sin(angle) * maxRadius;

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.1)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      offset += 0.006;
      animationFrame = requestAnimationFrame(drawExtendedWireframe);
    };

    drawExtendedWireframe();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
    />
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const icons = [Target, Rocket, Code, Smartphone, Globe, Zap, Shield, Users];
  const IconComponent = icons[index % icons.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-emerald-400/40 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
        <IconComponent size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default function AnimatedBackgroundPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Puzzle Background */}
      <AnimatedPuzzleBackground opacity={0.4} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-950" />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8 py-32 text-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            >
              <Target size={20} className="text-emerald-400" />
              <span className="text-sm font-medium">Animated Background Demo</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
              Experience Our<br />
              <span className="bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Animated Design
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              This page showcases the beautiful animated background with circles, dotted lines, and sparks that can be used throughout your website.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket size={20} />
                    Back to Home
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  View Services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose {companyInfo.name}?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(0, 6).map((feature, index) => (
                <FeatureCard key={feature.id} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Our Technology Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {companyInfo.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-2xl border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300"
                >
                  <span className="text-xl font-semibold text-white">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-300">
              {companyInfo.tagline}
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This animated background creates an immersive experience that represents our innovative approach to technology. 
              The dynamic circles and flowing lines symbolize the interconnected nature of modern digital solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}