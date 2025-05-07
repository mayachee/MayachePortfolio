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

// Enhanced project carousel animation variants
const projectVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    }
  })
};

// Animation variants for project content elements
const contentVariants = {
  hidden: { 
    opacity: 0,
    y: 15 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
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
                variants={contentVariants}
                className={`inline-block px-2 py-1 ${activeProject.yearTagBackground || 'bg-black'} ${activeProject.yearTagTextColor || 'text-white'} text-xs font-bold rounded mb-2`}
              >
                {activeProject.year}
              </motion.span>
              
              <motion.h2 
                variants={contentVariants}
                className={`font-archivo ${
                  activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 
                  activeProject.id === 'wordpress' ? 'text-white' : 
                  'text-white'
                } text-3xl font-black mb-1 leading-tight`}
              >
                {activeProject.title}
              </motion.h2>
              
              <motion.p 
                variants={contentVariants}
                className={`${
                  activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 
                  activeProject.id === 'wordpress' ? 'text-white' : 
                  'text-white'
                } text-xs uppercase`}
              >
                {activeProject.description}
              </motion.p>
              
              <motion.div 
                variants={contentVariants}
                className="mt-auto pt-4 flex justify-between items-center"
              >
                <div className="flex space-x-1">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeProjectIndex 
                          ? 'bg-white opacity-90 scale-125' 
                          : 'bg-white opacity-30'
                      }`}
                      onClick={() => selectProject(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-8 h-8 flex items-center justify-center rounded-full transition-transform hover:scale-110`}
                    onClick={prevProject}
                    aria-label="Previous project"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-8 h-8 flex items-center justify-center rounded-full transition-transform hover:scale-110`}
                    onClick={nextProject}
                    aria-label="Next project"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
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