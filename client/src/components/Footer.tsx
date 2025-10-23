import { SiGithub, SiFigma, SiLinkedin, SiInstagram, SiDribbble } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-6 md:pt-8 pb-5 md:pb-6 px-4 md:px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 md:space-x-5 mb-6 md:mb-0">
            <a 
              href="https://github.com/mayachee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="GitHub"
              onClick={() => window.open("https://github.com/mayachee", "_blank")}
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://www.figma.com/@mayache" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="Figma"
              onClick={() => window.open("https://www.figma.com/@mayache", "_blank")}
            >
              <SiFigma className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mayachee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="LinkedIn"
              onClick={() => window.open("https://www.linkedin.com/in/mayachee", "_blank")}
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
            <a  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              href="https://ik.imagekit.io/szcfr7vth/lebenlauf_mohamed_yassine_ayache.pdf?updatedAt=1759233747513" target="_blank">
              Lebenslauf PDF
            </a>
            <a  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              href="https://ik.imagekit.io/szcfr7vth/Mohamed_Yassine_Ayache_Resume.pdf?updatedAt=1761238380221" target="_blank">
                Resume PDF
            </a>
          </div>
          
          <div>
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
