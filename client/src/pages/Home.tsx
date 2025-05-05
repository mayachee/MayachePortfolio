import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridSection from "@/components/GridSection";
import ContactForm from "@/components/ContactForm";
import { FaGithub, FaWordpress, FaGlobe, FaChevronUp, FaChevronDown } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="grid-container">
          {/* Intro Section */}
          <GridSection 
            background="bg-mayache-green" 
            colSpan="col-span-6 md:col-span-3" 
            rowSpan="row-span-2"
            id="about"
          >
            <h2 className="font-poppins text-mayache-dark text-5xl md:text-6xl font-black mb-4">
              {t("intro.title")}
            </h2>
            <p className="text-mayache-dark text-lg mt-6">
              {t("intro.description")}
            </p>
          </GridSection>

          {/* Internship Section */}
          <GridSection 
            background="bg-mayache-purple" 
            colSpan="col-span-6 md:col-span-2" 
            rowSpan="row-span-2"
          >
            <h2 className="font-poppins text-white text-4xl font-black mb-4">
              {t("internship.title")}
            </h2>
            <p className="text-white text-lg">
              {t("internship.description")}
            </p>
            <div className="flex space-x-2 mt-6">
              <button className="bg-mayache-dark rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <FaChevronUp className="h-5 w-5 text-white" />
              </button>
              <button className="bg-mayache-dark rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <FaChevronDown className="h-5 w-5 text-white" />
              </button>
            </div>
          </GridSection>

          {/* Skills Section */}
          <GridSection 
            background="bg-mayache-red" 
            colSpan="col-span-6 md:col-span-1" 
            rowSpan="row-span-2"
            id="skills"
          >
            <h2 className="font-poppins text-white text-4xl font-black mb-4">
              {t("skills.title")}
            </h2>
            <ul className="text-white text-lg space-y-1">
              <li>FIGMA</li>
              <li>PHOTOSHOP</li>
              <li>REACT</li>
              <li>NEXTJS</li>
              <li>JAVA/C++</li>
              <li>PYTHON</li>
              <li>PHP</li>
            </ul>
            
            <div className="mt-8">
              <h3 className="font-poppins text-white text-3xl font-bold mt-6">
                {t("contact.cta.title")}
              </h3>
              <p className="text-white text-sm mt-2">
                {t("contact.cta.email")}
              </p>
            </div>
          </GridSection>

          {/* GitHub Section */}
          <GridSection 
            background="bg-mayache-pink" 
            colSpan="col-span-3 md:col-span-2"
            id="portfolio"
          >
            <div className="flex items-center">
              <FaGithub className="h-10 w-10 text-mayache-dark" />
            </div>
            <h2 className="font-poppins text-mayache-dark text-3xl font-black mt-4">
              {t("portfolio.webflow.title")}
            </h2>
            <p className="text-mayache-dark mt-2">
              {t("portfolio.webflow.description")}
            </p>
          </GridSection>

          {/* WordPress Section */}
          <GridSection 
            background="bg-mayache-yellow" 
            colSpan="col-span-3 md:col-span-2"
          >
            <div className="flex items-center">
              <FaWordpress className="h-10 w-10 text-mayache-dark" />
            </div>
            <h2 className="font-poppins text-mayache-dark text-3xl font-black mt-4">
              {t("portfolio.eco.title")}
            </h2>
            <p className="text-mayache-dark mt-2">
              {t("portfolio.eco.description")}
            </p>
          </GridSection>

          {/* Design Section */}
          <GridSection 
            background="bg-mayache-purple" 
            colSpan="col-span-3 md:col-span-2"
          >
            <div className="flex items-center">
              <FaGlobe className="h-10 w-10 text-white" />
            </div>
            <h2 className="font-poppins text-white text-3xl font-black mt-4">
              {t("portfolio.eco2.title")}
            </h2>
            <p className="text-white mt-2">
              {t("portfolio.eco2.description")}
            </p>
          </GridSection>

          {/* Projects Section */}
          <GridSection 
            background="bg-white" 
            colSpan="col-span-6"
          >
            <h2 className="font-poppins text-mayache-dark text-4xl font-black mb-6">
              {t("projects.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="p-4 bg-mayache-dark">
                  <h3 className="font-poppins text-white text-xl font-bold">E-commerce Platform</h3>
                  <p className="text-gray-300 text-sm">NextJS, TailwindCSS, Stripe</p>
                  <div className="mt-4 flex justify-between">
                    <a href="#" className="text-mayache-green hover:underline transition-colors">View Live</a>
                    <a href="#" className="text-mayache-green hover:underline transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="p-4 bg-mayache-dark">
                  <h3 className="font-poppins text-white text-xl font-bold">SaaS Dashboard</h3>
                  <p className="text-gray-300 text-sm">React, NextJS, GraphQL</p>
                  <div className="mt-4 flex justify-between">
                    <a href="#" className="text-mayache-green hover:underline transition-colors">View Live</a>
                    <a href="#" className="text-mayache-green hover:underline transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="p-4 bg-mayache-dark">
                  <h3 className="font-poppins text-white text-xl font-bold">AI Content Generator</h3>
                  <p className="text-gray-300 text-sm">Python, NextJS, OpenAI</p>
                  <div className="mt-4 flex justify-between">
                    <a href="#" className="text-mayache-green hover:underline transition-colors">View Live</a>
                    <a href="#" className="text-mayache-green hover:underline transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </GridSection>

          {/* Contact Section */}
          <GridSection 
            background="bg-mayache-blue" 
            colSpan="col-span-6"
            id="contact"
          >
            <h2 className="font-poppins text-white text-4xl font-black mb-6">
              GET IN TOUCH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-white text-lg mb-4">
                  Let's create something amazing together. I'm always open to discussing new projects and opportunities.
                </p>
                <p className="text-white text-lg mb-6">
                  Email me directly at <span className="font-medium">contact@mayache.com</span>
                </p>
                <div className="flex space-x-4 mt-8">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mayache-green transition-colors">
                    <FaGithub className="h-8 w-8" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mayache-green transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mayache-green transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-8">
                  <svg className="w-full h-48 text-white opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M37.5,-48.1C52.1,-40.3,69.7,-33.9,76.9,-21.8C84,-9.8,80.8,8,73.8,22.5C66.9,37,56.3,48.3,43.5,55.1C30.7,61.9,15.4,64.4,0.4,63.8C-14.5,63.3,-29,59.8,-41.7,52C-54.4,44.3,-65.2,32.2,-70.3,17.6C-75.4,3.1,-74.7,-13.9,-67.6,-26.7C-60.5,-39.5,-47,-48.1,-33.8,-56.5C-20.7,-64.9,-7.8,-73,3.4,-77.4C14.6,-81.7,29.2,-82.4,37.5,-74.5C45.8,-66.7,47.8,-50.3,37.5,-48.1Z" transform="translate(100 100)" />
                  </svg>
                </div>
              </div>
              <div>
                <ContactForm />
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
