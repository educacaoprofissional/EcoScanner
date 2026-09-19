import { motion } from "motion/react";
import { useRef } from "react";

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlassButton({ children, onClick, className = "" }: GlassButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    // Play click sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    onClick?.();
  };

  return (
    <>
      <motion.button
        className={`
          relative px-8 py-4 rounded-2xl
          bg-gradient-to-br from-white/40 to-white/10
          backdrop-blur-md
          border border-white/30
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
          hover:shadow-[0_12px_40px_0_rgba(31,38,135,0.5)]
          transition-all duration-300
          overflow-hidden
          group
          ${className}
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        {/* Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Glass shine */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
        
        {/* Content */}
        <span className="relative z-10 font-semibold text-white drop-shadow-lg">
          {children}
        </span>
      </motion.button>
      
      {/* Audio element for click sound */}
      <audio
        ref={audioRef}
        preload="auto"
        src="data:audio/wav;base64,UklGRhwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAo="
      />
    </>
  );
}
