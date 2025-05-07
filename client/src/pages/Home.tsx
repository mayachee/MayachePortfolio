import { useTranslation } from "react-i18next";
import { useState } from "react";
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
          {/* Left column - Green Block */}
          <div className="left-column">
            <GridSection 
              background="bg-mayache-green" 
              id="about"
              delay={0.1}
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
                    A dedicated and self-taught Full-Stack Developer and Designer with a strong foundation in software engineering, specializing in creating and designing innovative websites, applications, and digital solutions. Currently pursuing advanced studies at 1337 Coding School (part of Mohammed VI Polytechnic University and 42 Network), I bring hands-on experience in web development, UI/UX design, and modern frameworks. With fluent German skills (B2 level) and a strong motivation to relocate to an English-speaking country, I am eager to contribute to the global tech industry as a Software Developer and work on innovative projects.
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
              id="experience"
              className="transition-all"
              delay={0.2}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-2xl font-black mb-3 leading-tight">
                  PROFESSIONAL EXPERIENCE
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-1">07/2021 – 12/2021</span>
                    <h3 className="font-archivo text-white text-lg font-bold leading-tight">
                      WEB DEVELOPMENT INTERN
                    </h3>
                    <p className="text-white text-xs uppercase">
                      ITT ONE, TETOUAN, MOROCCO
                    </p>
                    <ul className="text-white text-xs uppercase mt-2 space-y-1 list-disc pl-4">
                      <li>Collaborated on web development projects, gaining practical experience in front-end and back-end technologies.</li>
                      <li>Contributed to the development of e-commerce platforms and internal tools, enhancing team productivity.</li>
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
            {/* Skills - Red Block */}
            <GridSection 
              background="bg-mayache-red"
              id="skills"
              rowSpan="row-span-2" 
              className="overflow-y-auto"
              delay={0.3}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-3xl font-black mb-4 leading-tight sticky top-0 z-10 bg-mayache-red py-2">
                  SKILLS
                </h2>
                
                {/* Hard Skills */}
                <div className="mb-6">
                  <h3 className="font-archivo text-white text-xl font-bold mb-3">HARD SKILLS</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">C / C#</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '0.1s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">JAVA</span>
                        <span className="text-white text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '0.2s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">JAVASCRIPT</span>
                        <span className="text-white text-xs font-archivo">90%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '90%', animationDelay: '0.3s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">HTML/CSS</span>
                        <span className="text-white text-xs font-archivo">95%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '95%', animationDelay: '0.4s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">LARAVEL</span>
                        <span className="text-white text-xs font-archivo">75%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '75%', animationDelay: '0.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">PYTHON</span>
                        <span className="text-white text-xs font-archivo">70%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '70%', animationDelay: '0.6s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">SPRING BOOT</span>
                        <span className="text-white text-xs font-archivo">65%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '65%', animationDelay: '0.7s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">DOCKER</span>
                        <span className="text-white text-xs font-archivo">75%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '75%', animationDelay: '0.8s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">FIGMA</span>
                        <span className="text-white text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
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
                  <h3 className="font-archivo text-white text-xl font-bold mb-3">SOFT SKILLS</h3>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">PROBLEM SOLVING</span>
                        <span className="text-white text-xs font-archivo">95%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '95%', animationDelay: '1.0s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">TEAM COMMUNICATION</span>
                        <span className="text-white text-xs font-archivo">90%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '90%', animationDelay: '1.1s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">SELF-DIRECTED LEARNING</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '85%', animationDelay: '1.2s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">ADAPTABILITY</span>
                        <span className="text-white text-xs font-archivo">88%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '88%', animationDelay: '1.3s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">CREATIVITY</span>
                        <span className="text-white text-xs font-archivo">92%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '92%', animationDelay: '1.4s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">TIME MANAGEMENT</span>
                        <span className="text-white text-xs font-archivo">80%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full animate-skill-fill" 
                          style={{ width: '80%', animationDelay: '1.5s' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-archivo uppercase">MULTILINGUAL</span>
                        <span className="text-white text-xs font-archivo">85%</span>
                      </div>
                      <div className="h-2 bg-white bg-opacity-10 rounded-full overflow-hidden">
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
            
            {/* Education Section */}
            <GridSection 
              background="bg-mayache-teal"
              className="col-span-1"
              id="education"
              delay={0.4}
            >
              <div className="section-content">
                <h2 className="font-archivo text-white text-2xl font-black mb-3 leading-tight">
                  EDUCATION
                </h2>
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-1">2020-PRESENT</span>
                    <h3 className="font-archivo text-white text-lg font-bold leading-tight">
                      COMPUTER SCIENCE
                    </h3>
                    <p className="text-white text-xs uppercase">
                      1337 SCHOOL (42 NETWORK), UM6P
                    </p>
                  </div>
                  
                  <div>
                    <span className="inline-block px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-bold rounded mb-1">09/2019 – 07/2021</span>
                    <h3 className="font-archivo text-white text-lg font-bold leading-tight">
                      SPECIALIZED TECHNICIAN
                    </h3>
                    <p className="text-white text-xs uppercase">
                      TECHNIQUES OF IT DEVELOPMENT
                    </p>
                  </div>
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