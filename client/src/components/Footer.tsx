import { useTranslation } from "react-i18next";
import { SiGithub, SiFigma, SiLinkedin, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

const socialIcons = [
  { 
    icon: <SiGithub className="h-6 w-6" />, 
    url: "https://github.com", 
    label: "GitHub",
    delay: 0
  },
  { 
    icon: <SiFigma className="h-6 w-6" />, 
    url: "https://figma.com", 
    label: "Figma",
    delay: 0.1
  },
  { 
    icon: <SiLinkedin className="h-6 w-6" />, 
    url: "https://linkedin.com", 
    label: "LinkedIn",
    delay: 0.2
  },
  { 
    icon: <SiInstagram className="h-6 w-6" />, 
    url: "https://instagram.com", 
    label: "Instagram",
    delay: 0.3
  }
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-6 px-6 max-w-1200 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          className="flex space-x-8 items-center mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {socialIcons.map((social, index) => (
            <motion.a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-mayache-green transition-all duration-300 hover:scale-110"
              aria-label={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: social.delay }}
              whileHover={{ scale: 1.2 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.div 
          className="text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-black tracking-tight font-archivo">COPYRIGHT</h2>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
