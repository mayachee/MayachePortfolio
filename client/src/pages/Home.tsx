import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import { FaGithub } from "react-icons/fa";
import { SiWordpress, SiFigma, SiReact } from "react-icons/si";
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
                  With over a decade of industry-leading web development expertise, I've mastered the complete digital creation process from strategy to launch. My holistic approach combines advanced storytelling techniques with premium branding, motion design, and behavioral psychology to craft immersive digital experiences that captivate audiences and deliver exceptional business results for elite global clients.
                </p>

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
                  {/* EDUCATION 1 */}
                  <div className={`transition-all duration-500 absolute inset-0 ${activeInternship === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2022-PRESENT</span>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                      STUDENT
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">1337 CODING SCHOOL</h3>
                    <p className="text-white text-xs font-normal uppercase tracking-wide leading-relaxed">
                      STUDYING SOFTWARE DEVELOPMENT AT MOHAMMED VI POLYTECHNIC UNIVERSITY (UM6P), PART OF THE 42 NETWORK. SUCCESSFULLY COMPLETED THE PISCINE, DEMONSTRATING STRONG PROBLEM-SOLVING AND CODING SKILLS.
                    </p>
                  </div>
                  
                  {/* EDUCATION 2 */}
                  <div className={`transition-all duration-500 absolute inset-0 ${activeInternship === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">2019-2021</span>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                      DIPLOMA
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">OFPPT TETOUAN</h3>
                    <p className="text-white text-xs font-normal uppercase tracking-wide leading-relaxed">
                      SPECIALIZED TECHNICIAN IN TECHNIQUES OF IT DEVELOPMENT. GAINED COMPREHENSIVE KNOWLEDGE IN SOFTWARE DEVELOPMENT AND PROGRAMMING FUNDAMENTALS.
                    </p>
                  </div>
                  
                  {/* INTERNSHIP */}
                  <div className={`transition-all duration-500 absolute inset-0 ${activeInternship === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">07/2021-12/2021</span>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2 leading-tight">
                      INTERNSHIP
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">ITT ONE</h3>
                    <p className="text-white text-xs font-normal uppercase tracking-wide leading-relaxed">
                      COLLABORATED ON WEB DEVELOPMENT PROJECTS, GAINING PRACTICAL EXPERIENCE IN FRONT-END AND BACK-END TECHNOLOGIES. CONTRIBUTED TO E-COMMERCE PLATFORMS AND INTERNAL TOOLS.
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
            
            {/* E-commerce Websites section */}
            <GridSection 
              background="bg-mayache-yellow"
            >
              <div className="flex flex-col h-full justify-between hover-lift">
                <div>
                  <span className="inline-block px-2 py-1 bg-black text-white text-xs font-bold rounded mb-2">DURING INTERNSHIP</span>
                  <h2 className="font-archivo text-black text-3xl font-black mb-1 leading-tight">
                    E-COMMERCE WEBSITES
                  </h2>
                  <h3 className="text-black text-base font-archivo mb-2 opacity-90">AJOUN.MA, SHOLEGOO.COM</h3>
                  <p className="text-black text-xs font-normal uppercase tracking-wide leading-relaxed">
                    BUILT PROFESSIONAL E-COMMERCE PLATFORMS USING WORDPRESS DURING MY INTERNSHIP AT ITT ONE. IMPLEMENTED PAYMENT GATEWAYS AND DEVELOPED USER-FRIENDLY INTERFACES FOR ENHANCED CUSTOMER EXPERIENCE.
                  </p>
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
                          <span className="text-white text-base font-archivo uppercase">C / C#</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">JAVA</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">JAVASCRIPT</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">HTML/CSS</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">REACT.JS</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">NEXT.JS</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">DOCKER</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-white bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </span>
                          <span className="text-white text-base font-archivo uppercase">FIGMA/PS</span>
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
                      <span className="inline-flex items-center px-2 py-1 bg-mayache-red text-white text-xs font-bold rounded">
                        <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                        FLIP BACK
                      </span>
                      <div className="ml-auto text-mayache-red/30 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    
                    <h2 className="font-archivo text-mayache-red text-4xl font-black mb-4 leading-tight relative">
                      SOFT<br/>SKILLS
                      <div className="absolute bottom-0 left-0 w-14 h-1 bg-mayache-red opacity-30"></div>
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-3">
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
                          <span className="text-mayache-red text-base font-archivo uppercase">TEAM COMMUNICATION</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">SELF-DIRECTED</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">LEARNING</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">MULTILINGUAL</span>
                        </div>
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
                          <span className="text-mayache-red text-base font-archivo uppercase">CREATIVITY</span>
                        </div>
                        <div className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                          <span className="flex items-center justify-center w-5 h-5 bg-mayache-red bg-opacity-10 rounded-full mr-3">
                            <span className="w-2 h-2 bg-mayache-red rounded-full"></span>
                          </span>
                          <span className="text-mayache-red text-base font-archivo uppercase">TIME MANAGEMENT</span>
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
                <span className="ml-auto inline-block px-2 py-0.5 bg-white bg-opacity-20 text-white text-xs font-bold rounded">2021-2022</span>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block w-10 h-1 bg-white mb-2"></span>
                <h2 className="font-archivo text-white text-xl font-black leading-tight">
                  CAR RENTAL APP
                  <span className="text-sm ml-2 font-archivo-regular font-normal opacity-80">(Next.js/Django)</span>
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase tracking-wide leading-relaxed">
                  DESIGNED AND DEVELOPED A FULL-STACK CAR RENTAL MANAGEMENT APPLICATION USING NEXT.JS AND DJANGO, IMPLEMENTING ADVANCED FEATURES FOR VEHICLE TRACKING AND BOOKING MANAGEMENT.
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
                  <FaGithub className="h-5 w-5 text-white" />
                </div>
                <span className="inline-block px-2 py-0.5 bg-white text-mayache-teal text-xs font-bold rounded shadow-sm">2022-PRESENT</span>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block w-10 h-1 bg-white mb-2"></span>
                <h2 className="font-archivo text-white text-xl font-black leading-tight relative">
                  1337 CODING SCHOOL
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase tracking-wide leading-relaxed">
                  STUDYING SOFTWARE DEVELOPMENT AT MOHAMMED VI POLYTECHNIC UNIVERSITY (UM6P), PART OF THE PRESTIGIOUS 42 NETWORK. MASTERING ADVANCED PROGRAMMING WITH C AND WORKING ON INNOVATIVE PROJECTS.
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
