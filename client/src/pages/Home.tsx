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
                      INTERNSHIP 1
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
              <div className="relative overflow-hidden h-full cursor-pointer" style={{ perspective: '1000px' }}>
                {/* Front side - HARDSKILL */}
                <div className="absolute inset-0 flex flex-col h-full p-5 bg-mayache-red transition-all duration-500 ease-in-out backface-hidden transform-gpu group-hover:rotate-y-180 z-10">
                  <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-2">FLIP ME</span>
                  <h2 className="font-archivo text-white text-4xl font-black mb-4 leading-tight">
                    HARD<br/>SKILLS
                  </h2>
                  <ul className="text-white text-base font-archivo uppercase space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>FIGMA</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>PHOTOSHOP</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>REACT</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>NEXT.JS</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>JAVA/C++</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>PYTHON</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-white rounded-full mr-2"></span>PHP</li>
                  </ul>
                </div>
                
                {/* Back side - SOFTSKILL */}
                <div className="absolute inset-0 flex flex-col h-full p-5 bg-white rotate-y-180 transition-all duration-500 ease-in-out backface-hidden transform-gpu group-hover:rotate-y-0 z-20">
                  <span className="inline-block px-2 py-1 bg-mayache-red bg-opacity-10 text-mayache-red text-xs font-bold rounded mb-2">FLIP BACK</span>
                  <h2 className="font-archivo text-mayache-red text-4xl font-black mb-4 leading-tight">
                    SOFT<br/>SKILLS
                  </h2>
                  <ul className="text-mayache-red text-base font-archivo uppercase space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>DESIGN</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>PROGRAMMING</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>PAINTER</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>CREATIVITY</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>FLEXIBILITY</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>TEAM-WORK</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-mayache-red rounded-full mr-2"></span>COMMUNICATION</li>
                  </ul>
                </div>
              </div>
            </GridSection>
            
            {/* Wanna Talk Block */}
            <GridSection 
              background="bg-mayache-blue"
              id="contact"
            >
              <div className="flex flex-col h-full justify-center hover-lift">
                <div className="text-center">
                  <div className="relative">
                    <img 
                      src={MessageSentImg} 
                      alt="Message sent illustration" 
                      className="w-32 h-32 mx-auto object-contain transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute -top-2 -right-2 bg-white text-mayache-blue text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-md">
                      <span>+1</span>
                    </div>
                  </div>
                  <h3 className="font-archivo text-white text-2xl font-black text-center mt-3 leading-tight">
                    WANNA<br/>TALK?<br/>SEND ME A<br/>MESSAGE.
                  </h3>
                  <p className="text-white text-xs text-center mt-2 tracking-wide">
                    mayacheyassine2000@gmail.com
                  </p>
                  <div className="mt-3">
                    <a href="mailto:mayacheyassine2000@gmail.com" className="inline-block px-3 py-1 bg-white text-mayache-blue text-xs font-bold rounded hover:bg-opacity-90 transition-all duration-200">
                      EMAIL ME
                    </a>
                  </div>
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
                <div className="mt-3">
                  <a href="#" className="inline-flex items-center text-white text-xs font-bold group/link">
                    VIEW PROJECT
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
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
                <div className="mt-3 flex items-center">
                  <a href="#" className="inline-flex items-center text-white text-xs font-bold mr-3 group/link">
                    LIVE DEMO
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                  <a href="#" className="inline-flex items-center text-white text-xs mr-3">|</a>
                  <a href="#" className="inline-flex items-center text-white text-xs font-bold group/link">
                    CASE STUDY
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
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
