import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import GridSection from './GridSection';
import { useTranslation } from 'react-i18next';

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
      scale: { duration: 0.4 },
      filter: { duration: 0.2 },
    }
  })
};

const titleVariants: Variants = {
  initial: { y: 35, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      delay: 0.2, 
      duration: 0.5, 
      ease: [0.33, 1, 0.68, 1] 
    }
  },
  exit: { 
    y: -35, 
    opacity: 0, 
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
};

const descriptionVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 0.9, 
    transition: { 
      delay: 0.3, 
      duration: 0.6, 
      ease: [0.33, 1, 0.68, 1] 
    }
  },
  exit: { 
    y: -20, 
    opacity: 0, 
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
};

const yearTagVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      delay: 0.1, 
      duration: 0.4, 
      ease: "backOut" 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    transition: { 
      duration: 0.25, 
      ease: "easeInOut" 
    }
  }
};

const controlsVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      delay: 0.35, 
      duration: 0.5, 
      ease: "easeOut" 
    }
  },
  exit: { 
    y: 10, 
    opacity: 0, 
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  }
};

const ProjectSwapper = () => {
  const { t, i18n } = useTranslation();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const years = ['2021-2022', '2020-2021', '1337 SCHOOL', '2022', '1337 SCHOOL'];
    const ids = ['car-rental', 'wordpress', 'inception', 'react-laravel', 'ft-transcendence'];
    const projectColors = [
      { background: 'bg-mayache-blue', yearTagBackground: 'bg-white bg-opacity-20', yearTagTextColor: 'text-white' },
      { background: 'bg-mayache-purple', yearTagBackground: 'bg-white bg-opacity-20', yearTagTextColor: 'text-white' },
      { background: 'bg-mayache-teal', yearTagBackground: 'bg-white bg-opacity-20', yearTagTextColor: 'text-white' },
      { background: 'bg-mayache-green', yearTagBackground: 'bg-white bg-opacity-20', yearTagTextColor: 'text-white' },
      { background: 'bg-mayache-yellow', yearTagBackground: 'bg-black', yearTagTextColor: 'text-white' }
    ];

    // Get projects from translations
    try {
      const translatedProjects = [];
      
      // Hard-coded value approach - safer and more reliable
      const projectItems = 5;
      
      for (let i = 0; i < projectItems; i++) {
        translatedProjects.push({
          id: ids[i] || `project-${i}`,
          title: t(`projects.items.${i}.title`),
          description: t(`projects.items.${i}.description`),
          year: years[i] || '2022',
          background: projectColors[i]?.background || 'bg-mayache-blue',
          yearTagBackground: projectColors[i]?.yearTagBackground || 'bg-white bg-opacity-20',
          yearTagTextColor: projectColors[i]?.yearTagTextColor || 'text-white'
        });
      }
      
      setProjects(translatedProjects);
    } catch (error) {
      console.error('Error loading project translations:', error);
      
      // Fallback to default projects in case of error
      const defaultProjects = [
        {
          id: 'car-rental',
          title: 'CAR RENTAL APP',
          description: 'BUILT A FULL-STACK CAR RENTAL APPLICATION WITH NEXT.JS AND DJANGO. IMPLEMENTED REAL-TIME VEHICLE TRACKING, ADVANCED RESERVATION MANAGEMENT, AND SECURE PAYMENT INTEGRATION. FEATURED RESPONSIVE UI WITH TAILWIND CSS AND MATERIAL DESIGN COMPONENTS.',
          year: '2021-2022',
          background: 'bg-mayache-blue',
          yearTagBackground: 'bg-white bg-opacity-20',
          yearTagTextColor: 'text-white'
        },
        {
          id: 'wordpress',
          title: 'WORDPRESS SITES',
          description: 'DEVELOPED CUSTOM WORDPRESS THEMES AND PLUGINS FOR OVER 10 CLIENT WEBSITES. CREATED RESPONSIVE DESIGNS WITH ADVANCED CUSTOMIZATION OPTIONS. IMPLEMENTED WEB ANALYTICS, SEO OPTIMIZATION, AND E-COMMERCE FUNCTIONALITY. MAINTAINED PERFORMANCE AND SECURITY ACROSS ALL SITES.',
          year: '2020-2021',
          background: 'bg-mayache-purple',
          yearTagBackground: 'bg-white bg-opacity-20',
          yearTagTextColor: 'text-white'
        },
        {
          id: 'inception',
          title: 'INCEPTION',
          description: 'CREATED A MULTI-CONTAINER INFRASTRUCTURE USING DOCKER COMPOSE WITH NGINX, WORDPRESS, AND MARIADB SERVICES. IMPLEMENTED SECURE CONFIGURATION WITH TLS CERTIFICATES, OPTIMIZED CACHING, AND AUTOMATED DEPLOYMENT. DESIGNED FOR HIGH AVAILABILITY AND SCALABILITY IN PRODUCTION ENVIRONMENTS.',
          year: '1337 SCHOOL',
          background: 'bg-mayache-teal',
          yearTagBackground: 'bg-white bg-opacity-20',
          yearTagTextColor: 'text-white'
        },
        {
          id: 'react-laravel',
          title: 'REACT + LARAVEL PROJECT',
          description: 'DEVELOPED A MODERN WEB APPLICATION WITH REACT FRONTEND AND LARAVEL BACKEND. IMPLEMENTED AUTHENTICATION WITH JWT, REAL-TIME NOTIFICATIONS USING PUSHER, AND INTEGRATED RESTFUL API SERVICES. FEATURED DATA VISUALIZATION DASHBOARDS AND COMPREHENSIVE ADMIN FUNCTIONALITY.',
          year: '2022',
          background: 'bg-mayache-green',
          yearTagBackground: 'bg-white bg-opacity-20',
          yearTagTextColor: 'text-white'
        },
        {
          id: 'ft-transcendence',
          title: 'FT_TRANSCENDENCE',
          description: 'DEVELOPED A REAL-TIME MULTIPLAYER PONG GAME WITH REACTJS, NESTJS, AND WEBSOCKETS. IMPLEMENTED USER AUTHENTICATION WITH OAUTH 2.0, LIVE CHAT FUNCTIONALITY, FRIEND SYSTEM, AND TOURNAMENT LEADERBOARDS. DESIGNED RESPONSIVE UI WITH CUSTOM ANIMATIONS AND GAME PHYSICS.',
          year: '1337 SCHOOL',
          background: 'bg-mayache-yellow',
          yearTagBackground: 'bg-black',
          yearTagTextColor: 'text-white'
        }
      ];
      
      setProjects(defaultProjects);
    }
  }, [t, i18n.language]); // Update when language changes

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

  // Safety check - ensure we have projects and valid activeProjectIndex
  if (projects.length === 0) return null;
  
  const activeProject = projects[activeProjectIndex] || projects[0];
  if (!activeProject) return null;

  return (
    <div className="relative h-full project-swapper-container">
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
                  } text-3xl font-black mb-2 leading-tight`}
                >
                  {activeProject.title.split('').map((char: string, index: number) => (
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
                  className={`project-description ${
                    activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 
                    activeProject.id === 'wordpress' ? 'text-white' : 
                    'text-white'
                  } text-xs uppercase max-h-[210px] overflow-y-auto pr-1 leading-relaxed`}
                >
                  {activeProject.description.split(' ').map((word: string, index: number) => (
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
                  className="flex space-x-2"
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
                  {projects.map((_: Project, idx: number) => (
                    <motion.button
                      key={idx}
                      className={`w-3 h-3 md:w-2 md:h-2 rounded-full ${
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
                <div className="flex space-x-3">
                  <motion.button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-10 h-10 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110`}
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
                    <svg className="w-6 h-6 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                  <motion.button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-10 h-10 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110`}
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
                    <svg className="w-6 h-6 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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