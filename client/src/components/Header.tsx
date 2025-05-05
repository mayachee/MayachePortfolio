import { useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const languageSelector = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="language-selector absolute top-4 right-4 flex space-x-2 z-20">
      <button
        className={`w-8 h-8 flex items-center justify-center font-bold ${
          i18n.language === "en"
            ? "text-mayache-green"
            : "text-white hover:text-mayache-green"
        } focus:outline-none transition-colors`}
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`w-8 h-8 flex items-center justify-center font-bold ${
          i18n.language === "de"
            ? "text-mayache-green"
            : "text-white hover:text-mayache-green"
        } focus:outline-none transition-colors`}
        onClick={() => changeLanguage("de")}
        aria-label="Switch to German"
      >
        DE
      </button>
      <button
        className={`w-8 h-8 flex items-center justify-center font-bold ${
          i18n.language === "fr"
            ? "text-mayache-green"
            : "text-white hover:text-mayache-green"
        } focus:outline-none transition-colors`}
        onClick={() => changeLanguage("fr")}
        aria-label="Switch to French"
      >
        FR
      </button>
      <button
        className={`w-8 h-8 flex items-center justify-center font-bold ${
          i18n.language === "es"
            ? "text-mayache-green"
            : "text-white hover:text-mayache-green"
        } focus:outline-none transition-colors`}
        onClick={() => changeLanguage("es")}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white py-6 px-6 flex justify-between items-center max-w-1200 mx-auto">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-mayache-dark text-5xl font-black tracking-tight font-archivo">MAYACHE</h1>
        </motion.div>
        <motion.div 
          className="text-right"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-black tracking-tight font-archivo">PORTFOLIO</h2>
        </motion.div>
      </header>
      {languageSelector()}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
