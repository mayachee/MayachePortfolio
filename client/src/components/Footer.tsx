import { SiGithub, SiFigma, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 items-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black"
            aria-label="GitHub"
          >
            <SiGithub className="h-6 w-6" />
          </a>
          <a 
            href="https://figma.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black"
            aria-label="Figma"
          >
            <SiFigma className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="text-right">
          <h2 className="font-archivo text-black text-4xl font-black">COPYRIGHT</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
