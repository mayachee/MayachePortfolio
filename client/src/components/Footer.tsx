import { SiGithub, SiFigma, SiLinkedin, SiInstagram, SiDribbble } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-6 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-archivo text-black text-xl font-black mb-4">MAYACHE</h3>
            <p className="text-gray-700 text-sm mb-4 uppercase tracking-wide max-w-xs">
              Creative software developer specializing in building beautiful, functional, and user-friendly digital experiences.
            </p>
            <p className="text-sm font-bold">
              <span className="text-mayache-teal">• </span>Available for freelance work
            </p>
          </div>
          
          <div className="md:mx-auto">
            <h3 className="font-archivo text-black text-lg font-black mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 text-sm uppercase tracking-wide hover:text-black transition-colors flex items-center">
                  <span className="w-1 h-1 bg-mayache-red rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 text-sm uppercase tracking-wide hover:text-black transition-colors flex items-center">
                  <span className="w-1 h-1 bg-mayache-blue rounded-full mr-2"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-700 text-sm uppercase tracking-wide hover:text-black transition-colors flex items-center">
                  <span className="w-1 h-1 bg-mayache-yellow rounded-full mr-2"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 text-sm uppercase tracking-wide hover:text-black transition-colors flex items-center">
                  <span className="w-1 h-1 bg-mayache-green rounded-full mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="lg:ml-auto">
            <h3 className="font-archivo text-black text-lg font-black mb-4">CONNECT</h3>
            <div className="flex space-x-3 mb-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-black"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-black"
                aria-label="Figma"
              >
                <SiFigma className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-black"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-black"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-black"
                aria-label="Dribbble"
              >
                <SiDribbble className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              mayacheyassine2000@gmail.com
            </p>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} MAYACHE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-xs uppercase hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs uppercase hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-xs uppercase hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
