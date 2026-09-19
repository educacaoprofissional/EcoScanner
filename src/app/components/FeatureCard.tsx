import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="
        relative p-6 rounded-2xl
        bg-gradient-to-br from-white/35 to-white/15
        backdrop-blur-xl
        border border-white/25
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)]
        transition-all duration-300
        overflow-hidden
        group
      "
    >
      {/* Glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-400/50 to-green-400/50 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7 text-white drop-shadow-lg" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
          {title}
        </h3>
        
        <p className="text-white/90 leading-relaxed drop-shadow-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
