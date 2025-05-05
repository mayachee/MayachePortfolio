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
              <div>
                <span className="inline-block px-3 py-1 bg-black text-white text-sm font-bold rounded mb-4">CREATIVE DEVELOPER</span>
                <h2 className="font-archivo text-black text-5xl font-black leading-tight tracking-tighter">
                  I'M MAYACHE,<br/>
                  A DESIGNER<br/>
                  AND<br/>
                  FULLSTACK<br/>
                  DEVELOPER<br/>
                  BASED IN<br/>
                  MOROCCO.
                </h2>
              </div>
              <div>
                <p className="text-black text-sm mt-6 font-normal uppercase tracking-wide leading-relaxed">
                  I have been building websites for more than 10 years. I always thought that focusing on just one area was not much fun, so I learned the whole process: planning, building and launching websites. This allowed me to specialize in storytelling, using skills like branding, design and motion, to drive the user's attention to the right places and create more engaging and memorable experiences.
                </p>
                <div className="mt-4 flex space-x-3">
                  <a href="#contact" className="inline-block px-4 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-colors duration-200">
                    CONTACT ME
                  </a>
                  <a href="#portfolio" className="inline-block px-4 py-2 border border-black text-black text-sm font-bold rounded hover:bg-black hover:text-white transition-colors duration-200">
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

          {/* Bottom Row - 5 blocks */}
          {/* Project 1 - Orange Block */}
          <GridSection 
            background="bg-mayache-orange" 
            colSpan="col-span-1"
            id="portfolio"
          >
            <div className="flex h-full flex-col justify-between hover-lift">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <FaGithub className="h-6 w-6 text-white" />
                  <SiFigma className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="font-archivo text-white text-xl font-black mt-4">
                  BOOKING-APP (MERN)
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase tracking-wide">
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
            <div className="flex h-full flex-col justify-between hover-lift">
              <div className="flex items-center">
                <SiWordpress className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-archivo text-white text-xl font-black mt-4">
                  PORTFOLIO SHOWCASE
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase tracking-wide">
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
