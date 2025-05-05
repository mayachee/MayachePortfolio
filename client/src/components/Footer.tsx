import { SiGithub, SiFigma, SiLinkedin, SiInstagram, SiDribbble } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-8 pb-6 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-5 mb-6 md:mb-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://figma.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="Figma"
            >
              <SiFigma className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <p className="text-sm font-bold flex items-center">
              <span className="inline-block w-2 h-2 bg-mayache-teal rounded-full mr-2"></span>
              <span className="text-gray-700">Available for freelance work</span>
            </p>
            
            <a href="mailto:mayacheyassine2000@gmail.com" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              mayacheyassine2000@gmail.com
            </a>
            
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-bold text-black">MAYACHE</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
