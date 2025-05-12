import { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Enhanced animation variants for page transitions with subtle scale effect
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 15,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 0.99,
    y: -15,
  },
};

// Improved animation transition settings with custom cubic bezier
const pageTransition = {
  type: 'tween',
  ease: [0.33, 1, 0.68, 1], // custom cubic bezier for smooth motion
  duration: 0.6,
};

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <motion.div
      className={`${className} overflow-hidden`}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;