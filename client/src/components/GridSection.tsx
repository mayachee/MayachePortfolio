import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridSectionProps {
  children: ReactNode;
  background?: string;
  backgroundImage?: string;
  id?: string;
}

const GridSection = ({
  children,
  background = "bg-white",
  backgroundImage,
  id,
}: GridSectionProps) => {
  return (
    <motion.div
      id={id}
      className={`${background} relative grid-section`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
