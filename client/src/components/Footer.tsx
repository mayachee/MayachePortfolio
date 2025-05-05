import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { SiGithub, SiFigma, SiLinkedin } from "react-icons/si";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white py-4 px-6 max-w-1200 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-mayache-green transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="h-6 w-6" />
          </a>
          <a 
            href="https://figma.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-mayache-green transition-colors"
            aria-label="Figma"
          >
            <SiFigma className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-mayache-green transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black">COPYRIGHT</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
