import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GridSectionProps {
  children: ReactNode;
  background?: string;
  colSpan?: string;
  rowSpan?: string;
  id?: string;
}

const GridSection = ({
  children,
  background = "bg-white",
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
  id,
}: GridSectionProps) => {
  return (
    <motion.div
      id={id}
      className={`${background} p-6 ${colSpan} ${rowSpan} flex flex-col transition-all duration-300 hover:scale-[1.02] hover:z-10 relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
    >
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GridSection;
