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
            background="bg-green-400" 
            colSpan="col-span-2" 
            rowSpan="row-span-2"
            id="about"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="font-archivo text-black text-5xl font-black leading-tight">
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
                <p className="text-black text-sm mt-6 font-normal uppercase">
                  I have been building websites for more than 10 years. I always thought that focusing on just one area was not much fun, so I learned the whole process: planning, building and launching websites. This allowed me to specialize in storytelling, using skills like branding, design and motion, to drive the user's attention to the right places and create more engaging and memorable experiences.
                </p>
              </div>
            </div>
          </GridSection>

          {/* Middle column - Purple Block */}
          <div className="col-span-1 grid grid-rows-2 gap-2">
            {/* INTERNSHIP Section with Slider */}
            <GridSection 
              background="bg-purple-600" 
              id="internship"
            >
              <div className="flex flex-col h-full justify-between relative overflow-hidden">
                {/* Content container with slider */}
                <div className="relative overflow-hidden h-32">
                  {/* INTERNSHIP 1 */}
                  <div className={`transition-all duration-300 absolute inset-0 ${activeInternship === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2">
                      INTERNSHIP 1
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">WEB DEVELOPMENT</h3>
                    <p className="text-white text-xs font-normal uppercase">
                      First internship experience focused on web development and frontend design. Created responsive interfaces and learned modern JavaScript frameworks.
                    </p>
                  </div>
                  
                  {/* INTERNSHIP 2 */}
                  <div className={`transition-all duration-300 absolute inset-0 ${activeInternship === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2">
                      INTERNSHIP 2
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">UI/UX DESIGN</h3>
                    <p className="text-white text-xs font-normal uppercase">
                      Second internship focused on user experience design and interface prototyping. Created wireframes and worked on user testing methodologies.
                    </p>
                  </div>
                  
                  {/* INTERNSHIP 3 */}
                  <div className={`transition-all duration-300 absolute inset-0 ${activeInternship === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <h2 className="font-archivo text-white text-4xl font-black mb-2">
                      INTERNSHIP 3
                    </h2>
                    <h3 className="text-white text-base font-archivo mb-2">BACKEND DEVELOPMENT</h3>
                    <p className="text-white text-xs font-normal uppercase">
                      Third internship specializing in server-side technologies and database optimization. Built APIs and implemented security best practices.
                    </p>
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <div className="flex space-x-2 mt-auto justify-end">
                  <button 
                    className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={showPreviousInternship}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                    onClick={showNextInternship}
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </GridSection>
            
            {/* UI/UX Private School with background image */}
            <GridSection 
              backgroundImage={UxSchoolImg}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="font-archivo text-white text-3xl font-black mb-1">
                    UI/UX PRIVATE SCHOOL
                  </h2>
                  <h3 className="text-white text-base font-archivo mb-1">DESIGN AGENCY</h3>
                  <p className="text-white text-xs font-normal uppercase">
                    Specialized in UI/UX design for private schools and educational platforms. Creating modern digital experiences for students and educators.
                  </p>
                </div>
                <div className="flex space-x-2 mt-auto justify-end">
                  <button 
                    className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="bg-black w-8 h-8 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
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
              background="bg-red-500" 
              colSpan=""
              id="skills"
            >
              <div className="relative overflow-hidden h-full cursor-pointer" style={{ perspective: '1000px' }}>
                {/* Front side - HARDSKILL */}
                <div className="absolute inset-0 flex flex-col h-full p-5 bg-red-500 transition-all duration-500 ease-in-out backface-hidden transform-gpu group-hover:rotate-y-180 z-10">
                  <h2 className="font-archivo text-white text-4xl font-black mb-2">
                    HARDSKILL
                  </h2>
                  <ul className="text-white text-base font-archivo uppercase space-y-1">
                    <li>FIGMA</li>
                    <li>PHOTOSHOP</li>
                    <li>REACT</li>
                    <li>NEXTJS</li>
                    <li>JAVA/C++</li>
                    <li>PYTHON</li>
                    <li>PHP</li>
                  </ul>
                </div>
                
                {/* Back side - SOFTSKILL */}
                <div className="absolute inset-0 flex flex-col h-full p-5 bg-white rotate-y-180 transition-all duration-500 ease-in-out backface-hidden transform-gpu group-hover:rotate-y-0 z-20">
                  <h2 className="font-archivo text-red-500 text-4xl font-black mb-2">
                    SOFTSKILL
                  </h2>
                  <ul className="text-red-500 text-base font-archivo uppercase space-y-1">
                    <li>DESIGN</li>
                    <li>PROGRAMMING</li>
                    <li>PAINTER</li>
                    <li>CREATIVITY</li>
                    <li>FLEXIBILITY</li>
                    <li>TEAM-WORK</li>
                    <li>COMMUNICATION</li>
                  </ul>
                </div>
              </div>
            </GridSection>
            
            {/* Wanna Talk Block with background image */}
            <GridSection 
              background="bg-mayache-blue"
              backgroundImage={MessageSentImg}
              id="contact"
            >
              <div className="flex flex-col h-full justify-center">
                <div className="text-center z-20">
                  <h3 className="font-archivo text-white text-2xl font-black text-center">
                    WANNA<br/>TALK?<br/>SEND ME A<br/>MESSAGE.
                  </h3>
                  <p className="text-white text-xs text-center mt-2">
                    mayacheyassine2000@gmail.com
                  </p>
                </div>
              </div>
            </GridSection>
          </div>

          {/* Bottom Row - 5 blocks */}
          {/* Pink Block - BOOKING-APP */}
          <GridSection 
            background="bg-pink-500" 
            colSpan="col-span-1"
            id="portfolio"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <FaGithub className="h-6 w-6 text-black" />
                  <SiFigma className="h-6 w-6 text-black" />
                </div>
              </div>
              <div>
                <h2 className="font-archivo text-black text-xl font-black mt-4">
                  BOOKING-APP (MERN)
                </h2>
                <p className="text-black text-xs mt-2 font-normal uppercase">
                  Looking for a clean and fast build for your design? I'm your man.
                </p>
              </div>
            </div>
          </GridSection>

          {/* Grid section with background image */}
          <GridSection 
            colSpan="col-span-1"
            backgroundImage={PortfolioBgImg}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <SiWordpress className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-archivo text-white text-xl font-black mt-4">
                  PORTFOLIO SHOWCASE
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase">
                  View my latest portfolio projects and creative designs. Click to explore more.
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
