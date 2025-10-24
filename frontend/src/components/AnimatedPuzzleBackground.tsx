'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedPuzzleBackgroundProps {
  opacity?: number;
  className?: string;
  circleCount?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export const AnimatedPuzzleBackground: React.FC<AnimatedPuzzleBackgroundProps> = ({ 
  opacity = 0.35, 
  className = "",
  circleCount = 6,
  primaryColor = 'rgba(16, 185, 129, 0.6)', // Emerald
  secondaryColor = 'rgba(168, 85, 247, 0.8)' // Purple
}) => {
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

      // Extended circles
      const circles = circleCount;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.8;

      for (let i = 0; i < circles; i++) {
        const radius = (maxRadius / circles) * (i + 1);

        // Draw circle with glow effect
        ctx.shadowColor = primaryColor;
        ctx.shadowBlur = 12;
        ctx.strokeStyle = primaryColor.replace('0.6', '0.4');
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glow
        ctx.shadowBlur = 18;
        ctx.strokeStyle = primaryColor.replace('0.6', '0.2');
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Reset shadow
        ctx.shadowBlur = 0;

        // Electric spark moving around each circle
        const directions = [1.2, -0.9, 1.7, -1.1, 0.8, -1.3];
        const sparkAngle = offset * directions[i % directions.length] + (i * 0.7);
        const sparkX = centerX + Math.cos(sparkAngle) * radius;
        const sparkY = centerY + Math.sin(sparkAngle) * radius;

        // Draw electric spark
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 18;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Primary color glow
        ctx.shadowColor = primaryColor.replace('0.6', '1');
        ctx.shadowBlur = 28;
        ctx.fillStyle = primaryColor.replace('0.6', '1');
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Secondary color accent glow for variety
        if (i % 2 === 0) {
          ctx.shadowColor = secondaryColor;
          ctx.shadowBlur = 25;
          ctx.fillStyle = secondaryColor.replace('0.8', '0.5');
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Reset shadow
        ctx.shadowBlur = 0;
      }

      // Draw center dot with enhanced glow
      ctx.shadowColor = primaryColor.replace('0.6', '1');
      ctx.shadowBlur = 25;
      ctx.fillStyle = primaryColor.replace('0.6', '0.9');
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
      const drawDottedLine = (x1: number, y1: number, x2: number, y2: number, color = primaryColor) => {
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const dotSpacing = 12;
        const dotSize = 1.8;

        for (let i = dotSpacing; i < distance; i += dotSpacing) {
          const ratio = i / distance;
          const x = x1 + (x2 - x1) * ratio;
          const y = y1 + (y2 - y1) * ratio;

          const alpha = Math.max(0.1, 0.7 - (i / distance) * 0.6);

          ctx.fillStyle = color.replace(/[\d.]+\)$/, `${alpha})`);
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
      const diagonalColor = secondaryColor.replace('0.8', '0.4');
      drawDottedLine(centerX - 15, centerY - 15, 0, 0, diagonalColor);
      drawDottedLine(centerX + 15, centerY - 15, canvas.width, 0, diagonalColor);
      drawDottedLine(centerX - 15, centerY + 15, 0, canvas.height, diagonalColor);
      drawDottedLine(centerX + 15, centerY + 15, canvas.width, canvas.height, diagonalColor);

      // Enhanced connecting lines
      const lines = 16;
      for (let i = 0; i < lines; i++) {
        const angle = (Math.PI * 2 / lines) * i + offset * 0.3;
        const x1 = centerX + Math.cos(angle) * (maxRadius * 0.12);
        const y1 = centerY + Math.sin(angle) * (maxRadius * 0.12);
        const x2 = centerX + Math.cos(angle) * maxRadius;
        const y2 = centerY + Math.sin(angle) * maxRadius;

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, primaryColor.replace('0.6', '0.2'));
        gradient.addColorStop(0.5, secondaryColor.replace('0.8', '0.1'));
        gradient.addColorStop(1, primaryColor.replace('0.6', '0'));

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
  }, [circleCount, primaryColor, secondaryColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
    />
  );
};

export default AnimatedPuzzleBackground;