'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className, 
  hover = true, 
  gradient = false, 
  glass = false,
  onClick 
}: CardProps) {
  const MotionComponent = onClick ? motion.button : motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? {
        y: -5,
        transition: {
          duration: 0.2,
          ease: "easeOut"
        }
      } : undefined}
      className={cn(
        'group relative overflow-hidden rounded-xl border transition-all duration-300',
        gradient 
          ? 'bg-gradient-to-br from-white/10 via-indigo-500/5 to-purple-500/10 border-indigo-200/20' 
          : glass 
            ? 'backdrop-blur-sm bg-white/5 border-white/10' 
            : 'bg-white/5 border-white/10',
        hover && 'hover:bg-white/10 hover:border-white/20',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Shimmer effect */}
      <div 
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* Glass reflection */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
      />

      {/* Inner shadow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] pointer-events-none"
      />

      {/* Content with padding */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </MotionComponent>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-white/10', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-white/60 group-hover:text-white/70 transition-colors duration-300', className)}>
      {children}
    </p>
  );
}
