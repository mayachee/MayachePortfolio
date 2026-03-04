import { SiGithub, SiFigma, SiLinkedin, SiInstagram, SiDribbble } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-6 md:pt-8 pb-5 md:pb-6 px-4 md:px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">

          {/* Social icons row */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/mayachee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://www.figma.com/@mayache" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="Figma"
            >
              <SiFigma className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mayachee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 text-black shadow-sm"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="h-5 w-5" />
            </a>
          </div>

          {/* PDF links row */}
          <div className="flex items-center gap-3">
            <a
              className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-black text-sm font-medium shadow-sm"
              href="https://ik.imagekit.io/szcfr7vth/Lebenslauf_Mohamed_Yassine_Ayache.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lebenslauf PDF
            </a>
            <a
              className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 text-black text-sm font-medium shadow-sm"
              href="https://ik.imagekit.io/szcfr7vth/Resume_Mohamed_Yassine_Ayache.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume PDF
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} <span className="font-bold text-black">MAYACHE</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
