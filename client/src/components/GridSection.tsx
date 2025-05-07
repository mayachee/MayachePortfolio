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

// Enhanced animation variants for grid sections with advanced physics
const gridVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      y: {
        type: "spring",
        stiffness: 350,
        damping: 25, 
        duration: 0.8
      },
      opacity: { duration: 0.6 },
      scale: { duration: 0.6 },
      filter: { duration: 0.5 },
      staggerChildren: 0.12,
      delayChildren: 0.07
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

// Child animation variants for elements inside grid sections with enhanced animations
const childVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 25,
    scale: 0.97,
    filter: "blur(2px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      y: {
        type: "spring",
        damping: 20, 
        stiffness: 350
      },
      opacity: { duration: 0.5 },
      filter: { duration: 0.4 },
      ease: [0.2, 0.65, 0.3, 0.9] // Matching cubic bezier from ProjectSwapper
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
        duration: 0.7, 
        ease: [0.2, 0.65, 0.3, 0.9] // Match cubic bezier from other components
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
