import { ReactNode } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface GridSectionProps {
  children: ReactNode;
  background?: string;
  backgroundImage?: string;
  id?: string;
  rowSpan?: string;
  colSpan?: string;
  className?: string;
  delay?: number;
  index?: number; // Added index for staggered animations
}

// Enhanced animation variants for grid sections
const gridVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.97
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

// Child animation variants for elements inside grid sections
const childVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

const GridSection = ({
  children,
  background = "bg-white",
  backgroundImage,
  id,
  rowSpan,
  colSpan,
  className = "",
  delay = 0,
  index = 0
}: GridSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  if (isInView) {
    controls.start("visible");
  }
  
  // Calculate custom delay based on index and provided delay
  const staggerDelay = delay + (index * 0.08);
  
  return (
    <motion.div
      ref={ref}
      id={id}
      className={`${background} ${rowSpan || ""} ${colSpan || ""} ${className} relative grid-section`}
      variants={gridVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
      transition={{ 
        delay: staggerDelay,
        duration: 0.6, 
        ease: [0.25, 1, 0.5, 1] 
      }}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      
      <motion.div 
        className="w-full h-full"
        variants={childVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GridSection;
