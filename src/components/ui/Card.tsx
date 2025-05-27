import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  glassEffect?: boolean;
  neonBorder?: boolean;
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className = '', 
  glassEffect = false, 
  neonBorder = false,
  onClick
}: CardProps) => {
  const baseClasses = 'rounded-xl p-5 transition-all duration-200';
  
  const glassClasses = glassEffect 
    ? 'bg-black/20 backdrop-blur-lg border border-white/10' 
    : 'bg-gray-900 border border-gray-800';
  
  const neonClasses = neonBorder 
    ? 'shadow-[0_0_15px_rgba(0,255,255,0.5)] border-[#00FFFF]/30' 
    : '';

  const hoverClasses = onClick ? 'cursor-pointer hover:shadow-lg' : '';
  
  const classes = [
    baseClasses,
    glassClasses,
    neonClasses,
    hoverClasses,
    className
  ].join(' ');

  return (
    <motion.div 
      className={classes}
      initial={{ opacity: 0.9, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={onClick ? { scale: 1.02 } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;