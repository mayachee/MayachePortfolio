import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import { FaGithub } from "react-icons/fa";
import { SiWordpress, SiFigma } from "react-icons/si";
import MessageSentImg from "../assets/message-sent.png";
import PortfolioBgImg from "../assets/portfolio-bg.jpg";
import UxSchoolImg from "../assets/ux-school.webp";

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
          <GridSection 
            background="bg-mayache-green" 
            colSpan="col-span-2" 
            rowSpan="row-span-2"
            id="about"
          >
            <div className="flex flex-col h-full justify-between relative">
              <div className="absolute top-0 right-0 bg-black bg-opacity-10 p-2 rounded-bl-lg">
                <span className="text-xs font-bold text-black opacity-70">EST. 2020</span>
              </div>
              <div className="relative">
                <div className="absolute -left-2 top-0 w-1 h-32 bg-black bg-opacity-20 rounded"></div>
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-bold rounded mb-4 hover-scale shadow-md">
                  <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                  CREATIVE DEVELOPER
                </span>
                <h2 className="font-archivo text-black text-5xl font-extrabold leading-tight tracking-tighter text-shadow-sm relative z-10">
                  <span className="relative inline-block">
                    I'M <span className="gradient-text bg-clip-text">MAYACHE</span>,
                    <span className="absolute -right-2 -top-2 bg-mayache-teal text-white text-xs px-1 rounded-full font-bold transform rotate-12">PRO</span>
                  </span>
                  <br/>
                  A DESIGNER<br/>
                  AND<br/>
                  SOFTWARE<br/>
                  DEVELOPER<br/>
                  BASED IN<br/>
                  MOROCCO.
                </h2>
                <div className="flex space-x-2 mt-2">
                  <span className="inline-block bg-black bg-opacity-10 text-black text-xs px-2 py-1 rounded">React</span>
                  <span className="inline-block bg-black bg-opacity-10 text-black text-xs px-2 py-1 rounded">Next.js</span>
                  <span className="inline-block bg-black bg-opacity-10 text-black text-xs px-2 py-1 rounded">Figma</span>
                </div>
              </div>
              <div>
                <p className="text-black text-sm mt-6 font-normal uppercase tracking-wide leading-relaxed">
                  I have been building websites for more than 10 years. I always thought that focusing on just one area was not much fun, so I learned the whole process: planning, building and launching websites. This allowed me to specialize in storytelling, using skills like branding, design and motion, to drive the user's attention to the right places and create more engaging and memorable experiences.
                </p>
                <div className="mt-6 flex space-x-3">
                  <a href="#contact" className="group relative inline-flex items-center px-5 py-3 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all duration-300 overflow-hidden shadow-md">
                    <span className="absolute -left-4 w-2 h-full bg-mayache-teal transform skew-x-[20deg] group-hover:translate-x-52 transition-transform duration-700"></span>
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    CONTACT ME
                  </a>
                  <a href="#portfolio" className="group relative inline-flex items-center px-5 py-3 border-2 border-black text-black text-sm font-bold rounded overflow-hidden transition-all duration-300 hover:bg-black hover:text-white shadow-md">
                    <span className="absolute -left-4 w-2 h-full bg-mayache-orange transform skew-x-[20deg] opacity-50 group-hover:translate-x-52 transition-transform duration-700"></span>
                    <span className="mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                    </span>
                    VIEW WORK
                  </a>
                </div>
              </div>
            </div>
          </GridSection>

          {/* Middle column - Purple Block */}
          <div className="col-span-1 grid grid-rows-2 gap-2">
            {/* INTERNSHIP Section with Slider */}
            <GridSection 
              background="bg-mayache-purple" 
              id="internship"
            >
              <div className="flex flex-col h-full justify-between relative overflow-hidden">
                {/* Indicator dots */}
                <div className="flex space-x-1 mb-2">
                  <div className={`w-2 h-2 rounded-full ${activeInternship === 1 ? 'bg-white' : 'bg-white bg-opacity-30'} transition-all duration-300`}></div>
                  <div className={`w-2 h-2 rounded-full ${activeInternship === 2 ? 'bg-white' : 'bg-white bg-opacity-30'} transition-all duration-300`}></div>
                  <div className={`w-2 h-2 rounded-full ${activeInternship === 3 ? 'bg-white' : 'bg-white bg-opacity-30'} transition-all duration-300`}></div>
                </div>
                
                {/* Content container with slider */}
                <div className="relative overflow-hidden h-36">
                  {/* INTERNSHIP 1 */}
                  <div className={`transition-all duration-500 absolute inset-0 ${activeInternship === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2022-2023</span>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                      INTERNSHIP
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">WEB DEVELOPMENT</h3>
                    <p className="text-white text-xs font-normal uppercase tracking-wide leading-relaxed">
                      Focused on frontend development with modern frameworks including React and Next.js. Created responsive interfaces.
                    </p>
                  </div>
                  
                  {/* INTERNSHIP 2 */}
                  <div className={`transition-all duration-500 absolute inset-0 ${activeInternship === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2023-2024</span>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                      INTERNSHIP 2
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">UI/UX DESIGN</h3>
                    <p className="text-white text-xs font-normal uppercase tracking-wide leading-relaxed">
                      Explored user experience design and interface prototyping. Created wireframes and conducted user testing.
                    </p>
                  </div>
                  
                  {/* INTERNSHIP 3 */}
                  <div className={`transition-all duration-500 absolute inset-0 ${activeInternship === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2024-2025</span>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                      INTERNSHIP 3
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">BACKEND DEV</h3>
                    <p className="text-white text-xs font-normal uppercase tracking-wide leading-relaxed">
                      Specialized in server-side technologies and database optimization. Built secure APIs with best practices.
                    </p>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="flex space-x-2 mt-auto justify-end">
                  <button 
                    className="bg-white bg-opacity-20 backdrop-blur-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-colors duration-200 rounded-full shadow-md"
                    onClick={showPreviousInternship}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="bg-white bg-opacity-20 backdrop-blur-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:bg-opacity-30 transition-colors duration-200 rounded-full shadow-md"
                    onClick={showNextInternship}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </GridSection>
            
            {/* UI/UX Private School section */}
            <GridSection 
              background="bg-mayache-yellow"
            >
              <div className="flex flex-col h-full justify-between hover-lift">
                <div>
                  <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold rounded mb-2">FEATURED</span>
                  <h2 className="font-archivo text-black text-3xl font-black mb-1 leading-tight">
                    UI/UX PRIVATE SCHOOL
                  </h2>
                  <h3 className="text-black text-base font-archivo mb-2 opacity-90">DESIGN ACADEMY</h3>
                  <p className="text-black text-xs font-normal uppercase tracking-wide leading-relaxed">
                    Specialized in UI/UX design for educational platforms. Creating innovative digital experiences with modern interface design principles.
                  </p>
                </div>
                <div className="flex space-x-2 mt-auto justify-end">
                  <button 
                    className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 shadow-md"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 shadow-md"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </GridSection>
          </div>

          <div className="col-span-1 grid grid-rows-2 gap-2">
            {/* Right column top - Red Block with hover effect */}
            <GridSection 
              background="bg-mayache-red" 
              colSpan=""
              id="skills"
            >
              <div className="relative overflow-hidden h-full group" style={{ perspective: '1500px' }}>
                <div className="h-full w-full transition-all duration-700 ease-out transform-gpu preserve-3d hover:rotate-y-180 cursor-pointer relative">
                  {/* Front side - HARDSKILL */}
                  <div className="absolute inset-0 flex flex-col h-full p-5 bg-gradient-to-br from-mayache-red to-mayache-red/90 backface-hidden">
                    <div className="absolute top-4 right-4 flex space-x-1">
                      <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-60"></span>
                      <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-80"></span>
                      <span className="block w-1.5 h-1.5 bg-white rounded-full"></span>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded">
                        <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                        FLIP ME
                      </span>
                      <div className="ml-auto rotate-180 text-white/30 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    
                    <h2 className="font-archivo text-white text-4xl font-black mb-6 leading-tight text-shadow-sm relative">
                      HARD<br/>SKILLS
                      <div className="absolute bottom-0 left-0 w-14 h-1 bg-white opacity-30"></div>
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-3">
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">FIGMA</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">PHOTOSHOP</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">REACT</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">NEXT.JS</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">JAVA/C++</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">PYTHON</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">PHP</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">TYPESCRIPT</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative circles */}
                    <div className="absolute bottom-3 right-3 w-24 h-24 bg-black bg-opacity-5 rounded-full"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black bg-opacity-5 rounded-full"></div>
                  </div>
                  
                  {/* Back side - SOFTSKILL */}
                  <div className="absolute inset-0 flex flex-col h-full p-5 bg-white rotate-y-180 backface-hidden">
                    <div className="absolute top-4 right-4 flex space-x-1">
                      <span className="block w-1.5 h-1.5 bg-mayache-red rounded-full opacity-60"></span>
                      <span className="block w-1.5 h-1.5 bg-mayache-red rounded-full opacity-80"></span>
                      <span className="block w-1.5 h-1.5 bg-mayache-red rounded-full"></span>
                    </div>
                  
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2 py-1 bg-mayache-red bg-opacity-10 text-mayache-red text-xs font-bold rounded">
                        <span className="w-2 h-2 bg-mayache-red rounded-full mr-1.5 animate-pulse"></span>
                        FLIP BACK
                      </span>
                      <div className="ml-auto text-mayache-red/30 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    
                    <h2 className="font-archivo text-mayache-red text-4xl font-black mb-6 leading-tight relative">
                      SOFT<br/>SKILLS
                      <div className="absolute bottom-0 left-0 w-14 h-1 bg-mayache-red opacity-30"></div>
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-3">
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">TEAM PLAYER</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">COMMUNICATION</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">LEADERSHIP</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">CREATIVITY</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">ADAPTABILITY</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">PROBLEM SOLVING</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">TIME MANAGEMENT</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">DETAIL-ORIENTED</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative pattern */}
                    <div className="absolute right-0 bottom-0 w-1/3 h-1/3 opacity-5">
                      <div className="grid grid-cols-3 h-full w-full">
                        {[...Array(9)].map((_, index) => (
                          <div key={index} className="border border-mayache-red"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GridSection>
            
            {/* Wanna Talk Block */}
            <GridSection 
              background="bg-mayache-blue"
              id="contact"
            >
              <div className="flex flex-col h-full justify-center hover-scale overflow-hidden relative">
                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white bg-opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
                <div className="absolute top-0 left-0 w-20 h-20 bg-white bg-opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="text-center relative z-10">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-white bg-opacity-10 blur-xl rounded-full transform scale-125 animate-pulse-slow"></div>
                    <img 
                      src={MessageSentImg} 
                      alt="Message sent illustration" 
                      className="w-32 h-32 mx-auto object-contain transition-transform duration-300 hover:scale-110 relative z-10"
                    />
                    <div className="absolute -top-2 -right-2 bg-white text-mayache-blue text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md animate-bounce-gentle">
                      <span>+1</span>
                    </div>
                  </div>
                  
                  <h3 className="font-archivo text-white text-2xl font-black text-center mt-4 leading-tight text-shadow-sm">
                    <span className="opacity-90">WANNA</span><br/>
                    <span className="opacity-95">TALK?</span><br/>
                    <span className="opacity-100">SEND ME A</span><br/>
                    <span className="relative inline-block">
                      MESSAGE
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-30"></span>
                    </span>
                  </h3>
                  

                </div>
              </div>
            </GridSection>
          </div>

          {/* Bottom Row - Project Cards */}
          {/* Project 1 - Orange Block */}
          <GridSection 
            background="bg-mayache-orange" 
            colSpan="col-span-1"
            id="portfolio"
          >
            <div className="flex h-full flex-col justify-between hover-lift relative overflow-hidden group">
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500"></div>
              
              <div className="flex items-center relative z-10">
                <div className="flex space-x-2">
                  <div className="bg-white bg-opacity-20 p-1.5 rounded">
                    <FaGithub className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white bg-opacity-20 p-1.5 rounded">
                    <SiFigma className="h-5 w-5 text-white" />
                  </div>
                </div>
                <span className="ml-auto inline-block px-2 py-0.5 bg-white bg-opacity-20 text-white text-xs font-bold rounded">2023</span>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block w-10 h-1 bg-white mb-2"></span>
                <h2 className="font-archivo text-white text-xl font-black leading-tight">
                  BOOKING-APP
                  <span className="text-sm ml-2 font-archivo-regular font-normal opacity-80">(MERN)</span>
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase tracking-wide leading-relaxed">
                  A modern reservation system built using the MERN stack with real-time availability updates.
                </p>

              </div>
            </div>
          </GridSection>

          {/* Portfolio showcase section - Teal Block */}
          <GridSection 
            colSpan="col-span-1"
            background="bg-mayache-teal"
          >
            <div className="flex h-full flex-col justify-between hover-lift relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-3 h-full w-full">
                  {[...Array(9)].map((_, index) => (
                    <div key={index} className="border border-white border-opacity-20"></div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="bg-white bg-opacity-20 p-1.5 rounded">
                  <SiWordpress className="h-5 w-5 text-white" />
                </div>
                <span className="inline-block px-2 py-0.5 bg-white text-mayache-teal text-xs font-bold rounded shadow-sm">NEW</span>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block w-10 h-1 bg-white mb-2"></span>
                <h2 className="font-archivo text-white text-xl font-black leading-tight relative">
                  PORTFOLIO SHOWCASE
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase tracking-wide leading-relaxed">
                  An elegantly designed portfolio collection featuring interactive animations and responsive layouts.
                </p>

              </div>
            </div>
          </GridSection>


        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
