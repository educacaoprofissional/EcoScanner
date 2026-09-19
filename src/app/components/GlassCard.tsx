import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`
        relative p-8 rounded-3xl
        bg-gradient-to-br from-white/30 to-white/10
        backdrop-blur-lg
        border border-white/20
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        overflow-hidden
        ${className}
      `}
    >
      {/* Top glass shine */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-3xl" />
      
      {/* Subtle reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
