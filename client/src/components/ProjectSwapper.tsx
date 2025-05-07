import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridSection from './GridSection';

type Project = {
  id: string;
  title: string;
  description: string;
  year: string;
  background: string;
  yearTagBackground?: string;
  yearTagTextColor?: string;
};

// Enhanced project carousel animation variants with improved transitions
const projectVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      x: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.6
      },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
      filter: { duration: 0.3 },
      when: "beforeChildren",
      staggerChildren: 0.08,
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
    transition: {
      x: { duration: 0.4 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
      filter: { duration: 0.2 },
    }
  })
};

// General content variants (fallback)
const contentVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

// Create separate variants for each text element type
const yearTagVariants = {
  hidden: { 
    opacity: 0,
    y: 15,
    x: -10,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.2, 0.65, 0.3, 0.9],
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.97,
    letterSpacing: "0.05em"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    letterSpacing: "0em",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const descriptionVariants = {
  hidden: { 
    opacity: 0,
    y: 25,
    clipPath: "inset(0% 10% 0% 10%)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const controlsVariants = {
  hidden: { 
    opacity: 0,
    y: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

const projects: Project[] = [
  {
    id: 'car-rental',
    title: 'CAR RENTAL APP',
    description: 'BUILT A CAR RENTAL APP WITH NEXT.JS AND DJANGO. IMPLEMENTED VEHICLE TRACKING AND RESERVATION MANAGEMENT.',
    year: '2021-2022',
    background: 'bg-mayache-blue',
    yearTagBackground: 'bg-white bg-opacity-20',
    yearTagTextColor: 'text-white'
  },
  {
    id: 'wordpress',
    title: 'WORDPRESS SITES',
    description: 'DEVELOPED CUSTOM WORDPRESS THEMES AND PLUGINS FOR VARIOUS CLIENT WEBSITES.',
    year: '2020-2021',
    background: 'bg-mayache-purple',
    yearTagBackground: 'bg-white bg-opacity-20',
    yearTagTextColor: 'text-white'
  },
  {
    id: 'inception',
    title: 'INCEPTION',
    description: 'CREATED A MULTI-CONTAINER INFRASTRUCTURE USING DOCKER COMPOSE WITH NGINX, WORDPRESS, AND MARIADB SERVICES.',
    year: '1337 SCHOOL',
    background: 'bg-mayache-teal',
    yearTagBackground: 'bg-white bg-opacity-20',
    yearTagTextColor: 'text-white'
  },
  {
    id: 'react-laravel',
    title: 'REACT + LARAVEL PROJECT',
    description: 'DEVELOPED A MODERN WEB APPLICATION WITH REACT FRONTEND AND LARAVEL BACKEND.',
    year: '2022',
    background: 'bg-mayache-green',
    yearTagBackground: 'bg-white bg-opacity-20',
    yearTagTextColor: 'text-white'
  },
  {
    id: 'ft-transcendence',
    title: 'FT_TRANSCENDENCE',
    description: 'DEVELOPED A REAL-TIME MULTIPLAYER PONG GAME WITH REACTJS, NESTJS, AND WEBSOCKETS.',
    year: '1337 SCHOOL',
    background: 'bg-mayache-yellow',
    yearTagBackground: 'bg-black',
    yearTagTextColor: 'text-white'
  }
];

const ProjectSwapper = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const activeProject = projects[activeProjectIndex];

  const nextProject = () => {
    setDirection(1);
    setActiveProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const selectProject = (index: number) => {
    setDirection(index > activeProjectIndex ? 1 : -1);
    setActiveProjectIndex(index);
  };

  return (
    <div className="relative h-full">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={activeProject.id}
          custom={direction}
          variants={projectVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="h-full"
        >
          <GridSection 
            background={activeProject.background} 
            index={2}
            delay={0.2}
          >
            <div className="section-content">
              <motion.span 
                variants={yearTagVariants}
                className={`inline-block px-2 py-1 ${activeProject.yearTagBackground || 'bg-black'} ${activeProject.yearTagTextColor || 'text-white'} text-xs font-bold rounded mb-2`}
              >
                {activeProject.year}
              </motion.span>
              
              <div className="overflow-hidden">
                <motion.h2 
                  variants={titleVariants}
                  className={`font-archivo ${
                    activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 
                    activeProject.id === 'wordpress' ? 'text-white' : 
                    'text-white'
                  } text-3xl font-black mb-1 leading-tight`}
                >
                  {activeProject.title.split('').map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 0.05 + (index * 0.03),
                          duration: 0.3,
                          ease: [0.2, 0.65, 0.3, 0.9]
                        }
                      }}
                      exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.h2>
              </div>
              
              <div className="overflow-hidden">
                <motion.p 
                  variants={descriptionVariants}
                  className={`${
                    activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 
                    activeProject.id === 'wordpress' ? 'text-white' : 
                    'text-white'
                  } text-xs uppercase`}
                >
                  {activeProject.description.split(' ').map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.3 + (index * 0.02),
                          duration: 0.3,
                          ease: [0.2, 0.65, 0.3, 0.9]
                        }
                      }}
                      exit={{ opacity: 0, x: 5, transition: { duration: 0.15 } }}
                      className="inline-block mr-1"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
              
              <motion.div 
                variants={controlsVariants}
                className="mt-auto pt-4 flex justify-between items-center"
              >
                <motion.div 
                  className="flex space-x-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.4,
                      duration: 0.5,
                      ease: [0.2, 0.65, 0.3, 0.9]
                    }
                  }}
                >
                  {projects.map((_, idx) => (
                    <motion.button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === activeProjectIndex 
                          ? 'bg-white' 
                          : 'bg-white opacity-30'
                      }`}
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ 
                        scale: idx === activeProjectIndex ? 1.25 : 1,
                        opacity: idx === activeProjectIndex ? 0.9 : 0.3,
                        transition: { 
                          delay: 0.45 + (idx * 0.05),
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }
                      }}
                      whileHover={{ 
                        scale: 1.3, 
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => selectProject(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </motion.div>
                <div className="flex space-x-2">
                  <motion.button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110`}
                    onClick={prevProject}
                    aria-label="Previous project"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 500,
                        damping: 25
                      }
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                  <motion.button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110`}
                    onClick={nextProject}
                    aria-label="Next project"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { 
                        delay: 0.5,
                        type: "spring",
                        stiffness: 500,
                        damping: 25
                      }
                    }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </GridSection>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSwapper;