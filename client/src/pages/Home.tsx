import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import { FaGithub, FaWordpress, FaGlobe } from "react-icons/fa";
import { SiWordpress } from "react-icons/si";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow">
        <div className="grid-container">
          {/* Intro Section - Large Green Block */}
          <GridSection 
            background="bg-green-400" 
            colSpan="col-span-2" 
            rowSpan="row-span-2"
            id="about"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="font-poppins text-black text-5xl font-black leading-tight">
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
                <p className="text-black text-sm mt-6">
                  I HAVE BEEN BUILDING WEBSITES FOR MORE THAN 10 YEARS. I ALWAYS THOUGHT THAT FOCUSING ON JUST ONE AREA WAS NOT MUCH FUN, SO I LEARNED THE WHOLE PROCESS: PLANNING, BUILDING AND LAUNCHING WEBSITES. THIS ALLOWED ME TO SPECIALIZE IN STORYTELLING, USING SKILLS LIKE BRANDING, DESIGN AND MOTION, TO DRIVE THE USER'S ATTENTION TO THE RIGHT PLACES AND CREATE MORE ENGAGING AND MEMORABLE EXPERIENCES.
                </p>
              </div>
            </div>
          </GridSection>

          {/* Internship Section - Purple Block */}
          <GridSection 
            background="bg-purple-600" 
            colSpan="col-span-1" 
            rowSpan="row-span-2"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="font-poppins text-white text-4xl font-black mb-4">
                  INTERNSHIP
                </h2>
                <p className="text-white text-sm">
                  DAY HANDSOME ADDITION HORRIBLE SENSIBLE GOODNESS TWO CONTEMPT. EVENING FOR MARRIED HIS ACCOUNT REMOVAL. ESTIMABLE ME DISPOSING OF BE MOONLIGHT CORDIALLY CURIOSITY. DELAY RAPID JOY SHARE ALLOW AGE MANOR SIX. WENT WHY FAR SAW MANY KNEW. EXQUISITE EXCELLENT SON GENTLEMAN ACUTENESS HER. DO IS VOICE TOTAL POWER MR YE MIGHT ROUND STILL.
                </p>
              </div>
              <div className="flex space-x-2 mt-auto justify-end">
                <button className="bg-black w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="bg-black w-10 h-10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </GridSection>

          {/* Skills Section - Red Block */}
          <GridSection 
            background="bg-red-500" 
            colSpan="col-span-1" 
            rowSpan="row-span-2"
            id="skills"
          >
            <div>
              <h2 className="font-poppins text-white text-4xl font-black mb-4">
                HARDSKILL
              </h2>
              <ul className="text-white text-xl space-y-1 font-bold">
                <li>FIGMA</li>
                <li>PHOTOSHOP</li>
                <li>REACT</li>
                <li>NEXTJS</li>
                <li>JAVA/C++</li>
                <li>PYTHON</li>
                <li>PHP</li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" 
                  alt="Developer profile" 
                  className="w-32 h-32 rounded-full mx-auto mt-4"
                />
                <h3 className="font-poppins text-white text-2xl font-black text-center mt-4">
                  WANNA<br/>TALK?<br/>SEND ME A<br/>MESSAGE.
                </h3>
                <p className="text-white text-sm text-center mt-2">
                  mayacheyassine2000@gmail.com
                </p>
              </div>
            </div>
          </GridSection>

          {/* Webflow Development - Pink Block */}
          <GridSection 
            background="bg-pink-500" 
            colSpan="col-span-1"
            id="portfolio"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <FaGithub className="h-8 w-8 text-black" />
              </div>
              <div>
                <h2 className="font-poppins text-black text-2xl font-black mt-4">
                  WEBFLOW DEVELOPMENT
                </h2>
                <p className="text-black text-sm mt-2">
                  LOOKING FOR A CLEAN AND FAST BUILD FOR YOUR DESIGN? I'M YOUR MAN.
                </p>
              </div>
            </div>
          </GridSection>

          {/* Eco Websites - Yellow Block */}
          <GridSection 
            background="bg-yellow-400" 
            colSpan="col-span-1"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <SiWordpress className="h-8 w-8 text-black" />
              </div>
              <div>
                <h2 className="font-poppins text-black text-2xl font-black mt-4">
                  ECO WEBSITES
                </h2>
                <p className="text-black text-sm mt-2">
                  LOOKING FOR A CLEAN AND FAST BUILD FOR YOUR DESIGN? I'M YOUR MAN.
                </p>
              </div>
            </div>
          </GridSection>

          {/* Eco Websites 2 - Purple Block */}
          <GridSection 
            background="bg-purple-600" 
            colSpan="col-span-1"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center">
                <FaGlobe className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="font-poppins text-white text-2xl font-black mt-4">
                  ECO WEBSITES
                </h2>
                <p className="text-white text-sm mt-2">
                  LOOKING FOR A CLEAN AND FAST BUILD FOR YOUR DESIGN? I'M YOUR MAN.
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
