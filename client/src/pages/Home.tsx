import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import { FaGithub } from "react-icons/fa";
import { SiWordpress, SiFigma } from "react-icons/si";

const Home = () => {
  const { t } = useTranslation();

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
            {/* INTERNSHIP Section */}
            <GridSection 
              background="bg-purple-600" 
              id="internship"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="font-archivo text-white text-4xl font-black mb-2">
                    INTERNSHIP
                  </h2>
                  <h3 className="text-white text-base font-archivo mb-2">WEB DEVELOPMENT</h3>
                  <p className="text-white text-xs font-normal uppercase">
                    Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
                  </p>
                </div>
                <div className="flex space-x-2 mt-auto justify-end">
                  <button className="bg-black w-8 h-8 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="bg-black w-8 h-8 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </GridSection>
            
            {/* Second internship section */}
            <GridSection 
              background="bg-mayache-yellow" 
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h2 className="font-archivo text-black text-3xl font-black mb-1">
                    EXPERIENCE
                  </h2>
                  <h3 className="text-black text-base font-archivo mb-1">DESIGN AGENCY</h3>
                  <p className="text-black text-xs font-normal uppercase">
                    Worked on various projects for clients in different industries. Designed and developed websites and applications.
                  </p>
                </div>
                <div className="flex space-x-2 mt-auto justify-end">
                  <button className="bg-black w-8 h-8 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="bg-black w-8 h-8 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </GridSection>
          </div>

          <div className="col-span-1 grid grid-rows-2 gap-2">
            {/* Right column top - Red Block */}
            <GridSection 
              background="bg-red-500" 
              colSpan=""
              id="skills"
            >
              <div className="flex flex-col h-full">
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
            </GridSection>
            
            {/* Wanna Talk Block - Blue */}
            <GridSection 
              background="bg-mayache-blue"
              id="contact"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="text-center">
                  <img 
                    src="/assets/character.svg" 
                    alt="Character illustration" 
                    className="w-28 h-28 mx-auto"
                  />
                  <h3 className="font-archivo text-white text-2xl font-black text-center mt-2">
                    WANNA<br/>TALK?<br/>SEND ME A<br/>MESSAGE.
                  </h3>
                  <p className="text-white text-xs text-center mt-1">
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

          {/* Yellow Block - CREATE WEBSITES */}
          <GridSection 
            background="bg-yellow-400" 
            colSpan="col-span-1"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <SiWordpress className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="font-archivo text-black text-xl font-black mt-4">
                  ECO WEBSITES
                </h2>
                <p className="text-black text-xs mt-2 font-normal uppercase">
                  Looking for a clean and fast build for your design? I'm your man.
                </p>
              </div>
            </div>
          </GridSection>

          {/* Purple Block - UI/UX PRIVATE SCHOOL */}
          <GridSection 
            background="bg-purple-600" 
            colSpan="col-span-1"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="font-archivo text-white text-xl font-black mt-4">
                  UI/UX PRIVATE SCHOOL
                </h2>
                <p className="text-white text-xs mt-2 font-normal uppercase">
                  Looking for a clean and fast build for your design? I'm your man.
                </p>
              </div>
            </div>
          </GridSection>
          
          {/* Additional block 1 - Pink */}
          <GridSection 
            background="bg-pink-500" 
            colSpan="col-span-1"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <FaGithub className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="font-archivo text-black text-xl font-black mt-4">
                  PORTFOLIO
                </h2>
                <p className="text-black text-xs mt-2 font-normal uppercase">
                  Check out my latest projects and designs. Creative solutions for modern web.
                </p>
              </div>
            </div>
          </GridSection>
          
          {/* Additional block 2 - Green */}
          <GridSection 
            background="bg-green-400" 
            colSpan="col-span-1"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="font-archivo text-black text-xl font-black mt-4">
                  SECURITY FIRST
                </h2>
                <p className="text-black text-xs mt-2 font-normal uppercase">
                  All websites built with security in mind. HTTPS, secure data handling, and more.
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
