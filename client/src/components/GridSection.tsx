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
      className={`${background} p-5 ${colSpan} ${rowSpan} flex flex-col relative overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GridSection;
