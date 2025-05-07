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

const projects: Project[] = [
  {
    id: 'car-rental',
    title: 'CAR RENTAL SYSTEM MANAGMENT',
    description: 'BUILT A CAR RENTAL APP WITH NEXT.JS AND DJANGO. IMPLEMENTED VEHICLE TRACKING AND RESERVATION MANAGEMENT.',
    year: '2021-2022',
    background: 'bg-mayache-orange',
    yearTagBackground: 'bg-black',
    yearTagTextColor: 'text-white'
  },
  {
    id: 'wordpress',
    title: 'WORDPRESS SITES',
    description: 'DEVELOPED CUSTOM WORDPRESS THEMES AND PLUGINS FOR VARIOUS CLIENT WEBSITES.',
    year: '2020-2021',
    background: 'bg-mayache-blue',
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
    background: 'bg-mayache-purple',
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
  const activeProject = projects[activeProjectIndex];

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ 
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="h-full"
        >
          <div className={`${activeProject.background} h-full flex flex-col`}>
            <div className="section-content flex-grow flex flex-col justify-between p-6">
              <div>
                <span className={`inline-block px-2 py-1 ${activeProject.yearTagBackground || 'bg-black'} ${activeProject.yearTagTextColor || 'text-white'} text-xs font-bold rounded mb-2`}>
                  {activeProject.year}
                </span>
                <h2 className={`font-archivo ${activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 'text-white'} text-3xl font-black mb-1 leading-tight`}>
                  {activeProject.title}
                </h2>
                <p className={`${activeProject.background === 'bg-mayache-yellow' ? 'text-black' : 'text-white'} text-xs font-normal uppercase`}>
                  {activeProject.description}
                </p>
              </div>
              
              <div className="mt-auto pt-4 flex justify-between items-center">
                <div className="flex space-x-1">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === activeProjectIndex 
                          ? 'bg-white opacity-90' 
                          : 'bg-white opacity-30'
                      }`}
                      onClick={() => setActiveProjectIndex(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-8 h-8 flex items-center justify-center rounded-full`}
                    onClick={prevProject}
                    aria-label="Previous project"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className={`${activeProject.background === 'bg-mayache-yellow' ? 'bg-black text-white' : 'bg-white bg-opacity-20 text-white'} w-8 h-8 flex items-center justify-center rounded-full`}
                    onClick={nextProject}
                    aria-label="Next project"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectSwapper;