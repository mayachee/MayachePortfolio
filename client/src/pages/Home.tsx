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
              <div className="section-content flex flex-col justify-between h-full relative">
                {/* EST. 2020 Badge */}
                <div className="absolute top-4 right-4 hidden sm:block">
                  <motion.span 
                    className="text-xs font-bold text-white bg-white bg-opacity-10 px-3 py-1 rounded-full border border-white border-opacity-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    EST. 2020
                  </motion.span>
                </div>
                
                {/* Mobile EST. 2020 Badge */}
                <div className="flex items-center sm:items-start sm:block absolute top-3 left-3 sm:relative sm:top-0 sm:left-0">
                  <motion.span 
                    className="sm:hidden px-3 py-1 bg-black bg-opacity-40 text-white text-xs rounded-full font-bold border border-white border-opacity-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    EST. 2020
                  </motion.span>
                </div>

                {/* Main Content */}
                <div className="relative mt-2 sm:mt-8 md:mt-16 flex-1 flex flex-col justify-center">
                  {/* Title */}
                  <motion.h1 
                    className="font-archivo text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    {t('intro.title').split('\n').map((line, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.3 + (i * 0.1),
                          ease: [0.2, 0.65, 0.3, 0.9]
                        }}
                        className="inline-block mb-1"
                      >
                        {i === 0 ? (
                          <>
                            {line.replace('MAYACHE', '')} 
                            <motion.span 
                              className="text-mayache-green"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.6 }}
                            >
                              MAYACHE
                            </motion.span>
                          </>
                        ) : (
                          line
                        )}
                        <br/>
                      </motion.span>
                    ))}
                  </motion.h1>

                </div>

                {/* Description */}
                <motion.div 
                  className="mt-4 sm:mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <p className="text-white text-sm sm:text-sm md:text-base font-normal leading-relaxed tracking-wide opacity-90">
                    {t('intro.description')}
                  </p>
                  
                </motion.div>
              </div>
            </GridSection>
          </div>

          {/* Middle column */}
          <div className="column">
            {/* PROFESSIONAL EXPERIENCE Section - Blue Block */}
            <GridSection 
              background="bg-mayache-blue" 
              id="experience"
              className="transition-all"
              delay={0.15}
              index={1}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-2xl sm:text-2xl md:text-3xl font-black mb-6 leading-tight section-header">
                  {t('nav.experience')}
                </h2>
                <div className="space-y-8">
                  {/* Current Experience */}
                  <motion.div 
                    className="experience-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 space-y-2 sm:space-y-0 sm:space-x-4">
                      <span className="inline-block px-4 py-2 bg-white bg-opacity-25 text-white text-sm font-bold rounded-full shadow-lg border border-white border-opacity-20">
                        {t('experience.current.period')}
                      </span>
                      <div className="hidden sm:block h-1 w-1 bg-white rounded-full opacity-60"></div>
                      <span className="text-white text-sm uppercase opacity-90 font-semibold tracking-wide">
                        {t('experience.current.company')}
                      </span>
                    </div>
                    <h3 className="font-archivo text-white text-xl sm:text-2xl font-bold leading-tight mb-4">
                      {t('experience.current.title')}
                    </h3>
                    <ul className="text-white text-sm uppercase mt-4 space-y-3 list-none pl-0">
                      {t('experience.current.duties').split('\n').map((duty, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                        >
                          <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{duty}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Divider */}
                  <motion.div 
                    className="flex items-center my-6"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="flex-1 h-px bg-white bg-opacity-30"></div>
                    <div className="mx-4 w-2 h-2 bg-white rounded-full opacity-60"></div>
                    <div className="flex-1 h-px bg-white bg-opacity-30"></div>
                  </motion.div>

                  {/* Previous Experience */}
                  <motion.div 
                    className="experience-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 space-y-2 sm:space-y-0 sm:space-x-4">
                      <span className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white text-sm font-bold rounded-full shadow-lg border border-white border-opacity-15">
                        {t('experience.previous.period')}
                      </span>
                      <div className="hidden sm:block h-1 w-1 bg-white rounded-full opacity-60"></div>
                      <span className="text-white text-sm uppercase opacity-90 font-semibold tracking-wide">
                        {t('experience.previous.company')}
                      </span>
                    </div>
                    <h3 className="font-archivo text-white text-xl sm:text-2xl font-bold leading-tight mb-4">
                      {t('experience.previous.title')}
                    </h3>
                    <ul className="text-white text-sm uppercase mt-4 space-y-3 list-none pl-0">
                      {t('experience.previous.duties').split('\n').map((duty, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                        >
                          <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="leading-relaxed">{duty}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
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
                
                {/* Technical Skills */}
                <motion.div 
                  className="mb-8 md:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">💻</span>
                    </div>
                    <h3 className="font-archivo text-white text-xl md:text-2xl font-bold">{t('skills.title')}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Programming Languages */}
                    <div className="space-y-4">
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider opacity-80 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-mayache-green rounded-full mr-2"></span>
                        {t('skills.languages')}
                      </h4>
                      {['C/C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'PHP'].map((skill, index) => (
                        <motion.div 
                          key={skill}
                          className="skill-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">{skill}</span>
                            <span className="text-white text-xs font-semibold bg-white bg-opacity-20 px-2 py-1 rounded-full">
                              {skill === 'JavaScript' ? '90%' : skill === 'Python' ? '85%' : skill === 'Java' ? '80%' : '75%'}
                            </span>
                          </div>
                          <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-mayache-green to-mayache-teal rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: skill === 'JavaScript' ? '90%' : skill === 'Python' ? '85%' : skill === 'Java' ? '80%' : '75%' }}
                              transition={{ duration: 1, delay: 0.6 + (index * 0.1) }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Frontend Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider opacity-80 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-mayache-orange rounded-full mr-2"></span>
                        {t('skills.frontend')}
                      </h4>
                      {['React', 'Next.js', 'Angular', 'TailwindCSS', 'Material-UI'].map((skill, index) => (
                        <motion.div 
                          key={skill}
                          className="skill-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">{skill}</span>
                            <span className="text-white text-xs font-semibold bg-white bg-opacity-20 px-2 py-1 rounded-full">
                              {skill === 'React' ? '95%' : skill === 'Next.js' ? '90%' : skill === 'TailwindCSS' ? '88%' : '80%'}
                            </span>
                          </div>
                          <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-mayache-orange to-mayache-green rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: skill === 'React' ? '95%' : skill === 'Next.js' ? '90%' : skill === 'TailwindCSS' ? '88%' : '80%' }}
                              transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Backend Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider opacity-80 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-mayache-blue rounded-full mr-2"></span>
                        {t('skills.backend')}
                      </h4>
                      {['Django', 'Laravel', 'Express.js', 'Node.js', 'RESTful APIs'].map((skill, index) => (
                        <motion.div 
                          key={skill}
                          className="skill-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">{skill}</span>
                            <span className="text-white text-xs font-semibold bg-white bg-opacity-20 px-2 py-1 rounded-full">
                              {skill === 'Django' ? '88%' : skill === 'Node.js' ? '85%' : skill === 'Laravel' ? '80%' : '75%'}
                            </span>
                          </div>
                          <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-mayache-blue to-mayache-purple rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: skill === 'Django' ? '88%' : skill === 'Node.js' ? '85%' : skill === 'Laravel' ? '80%' : '75%' }}
                              transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Development Tools */}
                    <div className="space-y-4">
                      <h4 className="text-white text-sm font-semibold uppercase tracking-wider opacity-80 mb-3 flex items-center">
                        <span className="w-2 h-2 bg-mayache-teal rounded-full mr-2"></span>
                        {t('skills.devTools')}
                      </h4>
                      {['Docker', 'Git/GitHub', 'Supabase', 'Nginx', 'Postman'].map((skill, index) => (
                        <motion.div 
                          key={skill}
                          className="skill-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-sm font-medium">{skill}</span>
                            <span className="text-white text-xs font-semibold bg-white bg-opacity-20 px-2 py-1 rounded-full">
                              {skill === 'Git/GitHub' ? '95%' : skill === 'Docker' ? '85%' : '80%'}
                            </span>
                          </div>
                          <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-mayache-teal to-mayache-blue rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: skill === 'Git/GitHub' ? '95%' : skill === 'Docker' ? '85%' : '80%' }}
                              transition={{ duration: 1, delay: 0.9 + (index * 0.1) }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">🧠</span>
                    </div>
                    <h3 className="font-archivo text-white text-xl md:text-2xl font-bold">{t('skills.softTitle')}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Problem-Solving', 'Teamwork', 'Self-Learning', 'Adaptability', 'Communication'].map((skill, index) => (
                      <motion.div 
                        key={skill}
                        className="skill-item bg-white bg-opacity-5 p-4 rounded-lg border border-white border-opacity-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-mayache-green rounded-full mr-3"></div>
                          <span className="text-white text-sm font-medium">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
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
                <h2 className="font-archivo text-white text-2xl sm:text-2xl md:text-3xl font-black mb-6 leading-tight section-header">
                  {t('nav.education')}
                </h2>
                
                <div className="space-y-6">
                  {/* Current Education */}
                  <motion.div 
                    className="education-item bg-white bg-opacity-10 p-6 rounded-xl shadow-lg border border-white border-opacity-20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-4 py-2 bg-white bg-opacity-25 text-white text-sm font-bold rounded-full shadow-lg border border-white border-opacity-30">
                        2022-PRESENT
                      </span>
                      <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                    </div>
                    <h3 className="font-archivo text-white text-xl font-bold leading-tight mb-3">
                      {t('education.degree1')}
                    </h3>
                    <p className="text-white text-sm font-medium mb-3 opacity-90">
                      {t('education.school1')}
                    </p>
                    <p className="text-white text-xs leading-relaxed opacity-80">
                      {t('education.description1')}
                    </p>
                  </motion.div>
                  
                  {/* Previous Education */}
                  <motion.div 
                    className="education-item bg-white bg-opacity-10 p-6 rounded-xl shadow-lg border border-white border-opacity-20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white text-sm font-bold rounded-full shadow-lg border border-white border-opacity-25">
                        2019-2021
                      </span>
                      <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                    </div>
                    <h3 className="font-archivo text-white text-xl font-bold leading-tight mb-3">
                      {t('education.degree2')}
                    </h3>
                    <p className="text-white text-sm font-medium mb-3 opacity-90">
                      {t('education.school2')}
                    </p>
                    <p className="text-white text-xs leading-relaxed opacity-80">
                      {t('education.description2')}
                    </p>
                  </motion.div>

                  {/* Certifications */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h3 className="font-archivo text-white text-lg font-bold mb-4 flex items-center">
                      <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">🏆</span>
                      </span>
                      {t('education.certifications')}
                    </h3>
                    <div className="space-y-3">
                      {t('education.certs').map((cert, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center p-3 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                        >
                          <div className="w-2 h-2 bg-mayache-orange rounded-full mr-3"></div>
                          <span className="text-white text-sm font-medium">{cert}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Languages */}
                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <h3 className="font-archivo text-white text-lg font-bold mb-4 flex items-center">
                      <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-xs font-bold">🌍</span>
                      </span>
                      {t('education.languages')}
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {t('education.langList').map((lang, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded-lg border border-white border-opacity-10"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-mayache-teal rounded-full mr-3"></div>
                            <span className="text-white text-sm font-medium">{lang}</span>
                          </div>
                          {lang.includes('B2') && (
                            <span className="text-white text-xs font-semibold bg-mayache-teal bg-opacity-20 px-2 py-1 rounded-full">
                              Certified
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
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