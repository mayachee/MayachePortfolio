import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import ProjectSwapper from "@/components/ProjectSwapper";
import PageTransition from "@/components/PageTransition";
import { FaGithub } from "react-icons/fa";
import { SiWordpress, SiFigma, SiReact } from "react-icons/si";

const Home = () => {
  const { t } = useTranslation();
  const [activeInternship, setActiveInternship] = useState<number>(1);
  
  const showPreviousInternship = () => {
    setActiveInternship(prev => (prev === 1 ? 3 : prev - 1));
  };
  
  const showNextInternship = () => {
    setActiveInternship(prev => (prev === 3 ? 1 : prev + 1));
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        
        <main className="flex-grow">
          <div className="grid-container">
          {/* Left column - Teal Block */}
          <div className="left-column">
            <GridSection 
              background="bg-mayache-teal" 
              id="about"
              delay={0.1}
              index={0}
              className="intro-section"
            >
              <div className="section-content flex flex-col justify-between h-full">
                <div className="absolute top-4 right-4 hidden sm:block">
                  <span className="text-xs font-bold text-white">EST. 2020</span>
                </div>
                <div className="flex items-center sm:items-start sm:block absolute top-3 left-3 sm:relative sm:top-0 sm:left-0">
                  <span className="sm:hidden px-2 py-1 bg-black bg-opacity-30 text-white text-xs rounded-md font-bold">EST. 2020</span>
                </div>
                <div className="relative mt-2 sm:mt-8 md:mt-16">
                  <motion.h1 
                    className="font-archivo text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {t('intro.title').split('\n').map((line, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                        className="inline-block mb-1"
                      >
                        {i === 0 ? (
                          <>
                            {line.replace('MAYACHE', '')} 
                            <span className="text-mayache-green">MAYACHE</span>
                          </>
                        ) : (
                          line
                        )}
                        <br/>
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>
                <div className="mt-3 sm:mt-4 md:mt-6">
                  <motion.p 
                    className="text-white text-sm sm:text-sm md:text-base font-normal uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {t('intro.description')}
                  </motion.p>
                </div>
              </div>
            </GridSection>
          </div>

          {/* Middle column */}
          <div className="column">
            {/* INTERNSHIP Section with Slider - Blue Block */}
            <GridSection 
              background="bg-mayache-blue" 
              id="experience"
              className="transition-all"
              delay={0.15}
              index={1}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-2xl sm:text-2xl md:text-3xl font-black mb-4 leading-tight section-header">
                  {t('nav.experience')}
                </h2>
                <div className="space-y-5">
                  <div className="experience-item">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-2 space-y-2 sm:space-y-0 sm:space-x-3">
                      <span className="inline-block px-3 py-1.5 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full shadow-sm">FREELANCE</span>
                      <div className="hidden sm:block h-1 w-1 bg-white rounded-full opacity-50"></div>
                      <span className="text-white text-sm uppercase opacity-75">{t('experience.company')}</span>
                    </div>
                    <h3 className="font-archivo text-white text-xl font-bold leading-tight mb-2">
                      {t('experience.title')}
                    </h3>
                    <ul className="text-white text-sm uppercase mt-3 space-y-2 list-disc pl-5">
                      {t('experience.duties').split('\n').map((duty, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                        >
                          {duty}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </GridSection>
            
            {/* Projects Grid with Swapping Feature */}
            <div className="row-span-2">
              <ProjectSwapper />
            </div>
          </div>

          {/* Right column */}
          <div className="column">
            {/* Skills - Purple Block */}
            <GridSection 
              background="bg-mayache-purple"
              id="skills"
              rowSpan="row-span-2" 
              className="overflow-y-auto"
              delay={0.2}
              index={2}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-2xl md:text-3xl font-black mb-3 md:mb-4 leading-tight sticky top-0 z-10 bg-mayache-purple py-2 section-header">
                  {t('nav.skills')}
                </h2>
                
                {/* Hard Skills */}
                <div className="mb-6 md:mb-8">
                  <h3 className="font-archivo text-white text-xl md:text-2xl font-bold mb-4 md:mb-5">{t('skills.title')}</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">C / C#</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-mayache-green rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '0.1s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">JAVA</span>
                        <span className="text-white text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">JAVASCRIPT</span>
                        <span className="text-white text-xs font-archivo">90%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '90%', animationDelay: '0.3s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">HTML/CSS</span>
                        <span className="text-white text-xs font-archivo">95%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '95%', animationDelay: '0.4s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">LARAVEL</span>
                        <span className="text-white text-xs font-archivo">75%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '75%', animationDelay: '0.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">PYTHON</span>
                        <span className="text-white text-xs font-archivo">70%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '70%', animationDelay: '0.6s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">SPRING BOOT</span>
                        <span className="text-white text-xs font-archivo">65%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '65%', animationDelay: '0.7s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">DOCKER</span>
                        <span className="text-white text-xs font-archivo">75%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '75%', animationDelay: '0.8s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">FIGMA</span>
                        <span className="text-white text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '0.9s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">MERN STACK</span>
                        <span className="text-white text-xs font-archivo">88%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '88%', animationDelay: '1.0s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">NEXT.JS</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '1.1s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">DJANGO</span>
                        <span className="text-white text-xs font-archivo">78%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '78%', animationDelay: '1.2s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div>
                  <h3 className="font-archivo text-white text-xl font-bold mb-3">{t('skills.softTitle')}</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">PROBLEM SOLVING</span>
                        <span className="text-white text-xs font-archivo">95%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '95%', animationDelay: '1.3s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">TEAM COMMUNICATION</span>
                        <span className="text-white text-xs font-archivo">90%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '90%', animationDelay: '1.4s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">SELF-DIRECTED LEARNING</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '1.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">ADAPTABILITY</span>
                        <span className="text-white text-xs font-archivo">88%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '88%', animationDelay: '1.6s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">CREATIVITY</span>
                        <span className="text-white text-xs font-archivo">92%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '92%', animationDelay: '1.7s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">TIME MANAGEMENT</span>
                        <span className="text-white text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '1.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">MULTILINGUAL</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 skill-bar-bg rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '1.6s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GridSection>
            
            {/* Education Section */}
            <GridSection 
              background="bg-mayache-green"
              className="col-span-1"
              id="education"
              delay={0.25}
              index={3}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-2xl sm:text-2xl md:text-3xl font-black mb-4 leading-tight section-header">
                  {t('nav.education')}
                </h2>
                <div className="space-y-6">
                  <motion.div 
                    className="education-item bg-black bg-opacity-10 p-4 rounded-lg shadow-inner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1.5 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full shadow-sm">2020-PRESENT</span>
                      <div className="w-2 h-2 rounded-full bg-mayache-teal mt-2"></div>
                    </div>
                    <h3 className="font-archivo text-white text-xl font-bold leading-tight mt-3 mb-2">
                      {t('education.degree1')}
                    </h3>
                    <p className="text-white text-sm uppercase tracking-wide">
                      {t('education.school1')}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="education-item bg-black bg-opacity-10 p-4 rounded-lg shadow-inner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1.5 bg-white bg-opacity-20 text-white text-sm font-medium rounded-full shadow-sm">09/2019 – 07/2021</span>
                      <div className="w-2 h-2 rounded-full bg-mayache-teal mt-2"></div>
                    </div>
                    <h3 className="font-archivo text-white text-xl font-bold leading-tight mt-3 mb-2">
                      {t('education.degree2')}
                    </h3>
                    <p className="text-white text-sm uppercase tracking-wide">
                      {t('education.school2')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </GridSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  </PageTransition>
  );
};

export default Home;