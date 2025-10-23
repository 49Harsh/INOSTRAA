'use client';

import React, { useEffect, useRef } from 'react';
import { BarChart3, TrendingUp, PieChart, CheckCircle2 } from 'lucide-react';

const PuzzleLandingPage = () => {
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

    const drawWireframe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Electric circles with sparks - bigger circles
      const circles = 4;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.7; // Even bigger circles

      for (let i = 0; i < circles; i++) {
        const radius = (maxRadius / circles) * (i + 1);

        // Draw circle with glow effect using website colors - thinner lines
        ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
        ctx.shadowBlur = 10;
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 1.5; // Reduced from 3 to 1.5
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glow - thinner
        ctx.shadowBlur = 15;
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
        ctx.lineWidth = 0.5; // Reduced from 1 to 0.5
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Electric spark moving around each circle with random directions
        const directions = [1, -1, 1.5, -0.8]; // Different directions and speeds for each circle
        const sparkAngle = offset * directions[i] + (i * 0.5);
        const sparkX = centerX + Math.cos(sparkAngle) * radius;
        const sparkY = centerY + Math.sin(sparkAngle) * radius;

        // Draw electric spark - smaller but more highlighted
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 15; // Increased highlight
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 3, 0, Math.PI * 2); // Reduced from 6 to 3
        ctx.fill();

        // Purple glow - more intense
        ctx.shadowColor = 'rgba(168, 85, 247, 1)';
        ctx.shadowBlur = 25; // Increased glow
        ctx.fillStyle = 'rgba(168, 85, 247, 1)'; // More opaque
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 2, 0, Math.PI * 2); // Reduced from 4 to 2
        ctx.fill();

        // Cyan accent glow - more intense
        ctx.shadowColor = 'rgba(139, 92, 246, 1)';
        ctx.shadowBlur = 30;
        ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 3, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;
      }

      // Draw center dot with glow
      ctx.shadowColor = 'rgba(168, 85, 247, 1)';
      ctx.shadowBlur = 20;
      ctx.fillStyle = 'rgba(168, 85, 247, 0.8)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fill();

      // White center core
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
      ctx.fill();

      // Reset shadow
      ctx.shadowBlur = 0;

      // Draw dotted cross lines like in the image
      const drawDottedLine = (x1: number, y1: number, x2: number, y2: number) => {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const dotSpacing = 15; // Space between dots
        const dotSize = 2;

        for (let i = dotSpacing; i < distance; i += dotSpacing) {
          const ratio = i / distance;
          const x = x1 + (x2 - x1) * ratio;
          const y = y1 + (y2 - y1) * ratio;

          // Fade effect - dots get fainter as they go away from center
          const alpha = Math.max(0.1, 0.6 - (i / distance) * 0.5);

          ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      // Vertical dotted line (up and down)
      drawDottedLine(centerX, centerY - 20, centerX, 0); // Up
      drawDottedLine(centerX, centerY + 20, centerX, canvas.height); // Down

      // Horizontal dotted line (left and right)
      drawDottedLine(centerX - 20, centerY, 0, centerY); // Left
      drawDottedLine(centerX + 20, centerY, canvas.width, centerY); // Right

      // Draw connecting lines to circles
      const lines = 12;
      for (let i = 0; i < lines; i++) {
        const angle = (Math.PI * 2 / lines) * i + offset * 0.5;
        const x1 = centerX + Math.cos(angle) * (maxRadius * 0.15);
        const y1 = centerY + Math.sin(angle) * (maxRadius * 0.15);
        const x2 = centerX + Math.cos(angle) * maxRadius;
        const y2 = centerY + Math.sin(angle) * maxRadius;

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      offset += 0.008; // Slower speed
      animationFrame = requestAnimationFrame(drawWireframe);
    };

    drawWireframe();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Wireframe Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950" />

      {/* Navigation
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
            <PieChart className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold">Puzzle</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Customers</a>
          <a href="#" className="hover:text-white transition-colors">Company</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-colors">
            Log in
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
            Get started for free
          </button>
        </div>
      </nav> */}

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

      {/* Floating Images Section
      <div className="relative z-10 flex justify-center gap-8 px-8 py-20">
        <FloatingImage delay={0} image="/api/placeholder/300/400" />
        <FloatingImage delay={1} image="/api/placeholder/300/400" />
        <FloatingImage delay={2} image="/api/placeholder/300/400" />
      </div> */}
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

const FloatingImage = ({ delay, image }: any) => (
  <div
    className="w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700/50"
    style={{
      animation: `float 3s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  >
    <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
    `}</style>
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 flex items-center justify-center">
      <div className="text-gray-600 text-sm">Image {delay + 1}</div>
    </div>
  </div>
);

export default PuzzleLandingPage;
