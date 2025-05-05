import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridSectionProps {
  children: ReactNode;
  background?: string;
  backgroundImage?: string;
  colSpan?: string;
  rowSpan?: string;
  id?: string;
}

const GridSection = ({
  children,
  background = "bg-white",
  backgroundImage,
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  id,
}: GridSectionProps) => {
  return (
    <motion.div
      id={id}
      className={`${background} p-5 ${colSpan} ${rowSpan} flex flex-col relative overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GridSection;
