import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridSectionProps {
  children: ReactNode;
  background?: string;
  backgroundImage?: string;
  id?: string;
  rowSpan?: string;
  colSpan?: string;
  className?: string;
}

const GridSection = ({
  children,
  background = "bg-white",
  backgroundImage,
  id,
  rowSpan,
  colSpan,
  className = "",
}: GridSectionProps) => {
  return (
    <motion.div
      id={id}
      className={`${background} ${rowSpan || ""} ${colSpan || ""} ${className} relative grid-section`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1.0] 
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
