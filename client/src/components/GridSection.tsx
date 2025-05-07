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
}

// Animation variants for grid sections
const gridVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
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
  delay = 0
}: GridSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  if (isInView) {
    controls.start("visible");
  }
  
  return (
    <motion.div
      ref={ref}
      id={id}
      className={`${background} ${rowSpan || ""} ${colSpan || ""} ${className} relative grid-section`}
      variants={gridVariants}
      initial="hidden"
      animate={controls}
      transition={{ 
        delay: delay,
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
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
      
      {children}
    </motion.div>
  );
};

export default GridSection;
