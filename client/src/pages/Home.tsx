import { useTranslation } from "react-i18next";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
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
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="grid-container">
          {/* Left column - Green Block */}
          <div className="left-column">
            <GridSection 
              background="bg-mayache-green" 
              id="about"
            >
              <div className="section-content flex flex-col justify-between">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold text-black">EST. 2020</span>
                </div>
                <div className="relative mt-16">
                  <h2 className="font-archivo text-black text-5xl font-extrabold leading-tight tracking-tight">
                    I'M <span className="text-blue-400">MAYACHE</span>,
                    <br/>
                    A DESIGNER<br/>
                    AND<br/>
                    SOFTWARE<br/>
                    DEVELOPER<br/>
                    BASED IN<br/>
                    MOROCCO.
                  </h2>
                </div>
                <div>
                  <p className="text-black text-sm mt-6 font-normal uppercase tracking-wide">
                    With over a decade of industry-leading web development expertise, I've mastered the complete digital creation process from strategy to launch. My holistic approach combines advanced storytelling techniques with premium branding, motion design, and behavioral psychology to craft immersive digital experiences that captivate audiences and deliver exceptional business results for elite global clients.
                  </p>
                </div>
              </div>
            </GridSection>
          </div>

          {/* Middle column */}
          <div className="column">
            {/* INTERNSHIP Section with Slider - Purple Block */}
            <GridSection 
              background="bg-mayache-purple" 
              id="internship"
            >
              <div className="section-content flex flex-col justify-between">
                <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2022-PRESENT</span>
                <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                  1337 CODING SCHOOL
                </h2>
                <p className="text-white text-xs font-normal uppercase">
                  STUDYING SOFTWARE DEVELOPMENT AT UM6P (42 NETWORK). MASTERING ADVANCED NETWORK, PROGRAMMING WITH C AND WORKING ON INDIVIDUAL PROJECTS.
                </p>
                <div className="flex space-x-2 mt-4 justify-end">
                  <button 
                    className="bg-white bg-opacity-20 w-8 h-8 flex items-center justify-center rounded-full"
                    onClick={showPreviousInternship}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="bg-white bg-opacity-20 w-8 h-8 flex items-center justify-center rounded-full"
                    onClick={showNextInternship}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </GridSection>
            
            {/* Car Rental section */}
            <GridSection 
              background="bg-mayache-orange"
            >
              <div className="section-content">
                <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold rounded mb-2">2021-2022</span>
                <h2 className="font-archivo text-white text-3xl font-black mb-1 leading-tight">
                  CAR RENTAL APP
                </h2>
                <p className="text-white text-xs font-normal uppercase">
                  BUILT A CAR RENTAL APP WITH NEXT.JS AND DJANGO. IMPLEMENTED VEHICLE TRACKING AND RESERVATION MANAGEMENT.
                </p>
              </div>
            </GridSection>
            
            {/* WordPress section */}
            <GridSection 
              background="bg-mayache-blue"
              id="wordpress"
            >
              <div className="section-content">
                <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2020-2021</span>
                <h2 className="font-archivo text-white text-3xl font-black mb-1 leading-tight">
                  WORDPRESS SITES
                </h2>
                <p className="text-white text-xs font-normal uppercase">
                  DEVELOPED CUSTOM WORDPRESS THEMES AND PLUGINS FOR VARIOUS CLIENT WEBSITES.
                </p>
              </div>
            </GridSection>
          </div>

          {/* Right column */}
          <div className="column">
            {/* Skills - Red Block */}
            <GridSection 
              background="bg-mayache-red"
              id="skills"
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-3xl font-black mb-3 leading-tight">
                  SKILLS
                </h2>
                
                {/* Hard Skills */}
                <div className="mb-5">
                  <h3 className="font-archivo text-white text-lg md:text-xl font-bold mb-2">HARD SKILLS</h3>
                  <div className="space-y-1.5">
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">C / C#</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '0.1s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">JAVA</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">JAVASCRIPT</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">90%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '90%', animationDelay: '0.3s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">HTML/CSS</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">95%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '95%', animationDelay: '0.4s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">LARAVEL</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">75%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '75%', animationDelay: '0.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">PYTHON</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">70%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '70%', animationDelay: '0.6s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">SPRING BOOT</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">65%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '65%', animationDelay: '0.7s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">DOCKER</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">75%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '75%', animationDelay: '0.8s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">FIGMA</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '0.9s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Soft Skills */}
                <div>
                  <h3 className="font-archivo text-white text-lg md:text-xl font-bold mb-2">SOFT SKILLS</h3>
                  <div className="space-y-1.5">
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">PROBLEM SOLVING</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">95%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '95%', animationDelay: '1.0s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">TEAM COMMUNICATION</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">90%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '90%', animationDelay: '1.1s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">SELF-DIRECTED LEARNING</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '1.2s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">ADAPTABILITY</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">88%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '88%', animationDelay: '1.3s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">CREATIVITY</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">92%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '92%', animationDelay: '1.4s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">TIME MANAGEMENT</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '1.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-xs md:text-sm font-archivo uppercase">MULTILINGUAL</span>
                        <span className="text-white text-[10px] md:text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '1.6s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GridSection>
            
            {/* React project */}  
            <GridSection 
              background="bg-mayache-purple"
            >
              <div className="section-content">
                <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2022</span>
                <h2 className="font-archivo text-white text-3xl font-black mb-1 leading-tight">
                  REACT + LARAVEL PROJECT
                </h2>
                <p className="text-white text-xs font-normal uppercase">
                  DEVELOPED A MODERN WEB APPLICATION WITH REACT FRONTEND AND LARAVEL BACKEND.
                </p>
              </div>
            </GridSection>
            
            {/* FT_TRANSCENDENCE */}
            <GridSection 
              background="bg-mayache-yellow"
            >
              <div className="section-content">
                <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold rounded mb-2">1337 SCHOOL</span>
                <h2 className="font-archivo text-black text-3xl font-black mb-1 leading-tight">
                  FT_TRANSCENDENCE
                </h2>
                <p className="text-black text-xs font-normal uppercase">
                  DEVELOPED A REAL-TIME MULTIPLAYER PONG GAME WITH REACTJS, NESTJS, AND WEBSOCKETS.
                </p>
              </div>
            </GridSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;