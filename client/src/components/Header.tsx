import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(true); // Open by default
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.lang-menu') && !target.closest('.lang-button')) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  // Get current language
  const currentLanguage = i18n.language || 'en';
  
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });

  return (
    <>
      <div className="flex items-center absolute top-[82px] left-4 z-40 hidden sm:flex">
        <div className="flex items-center bg-black text-white px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs uppercase tracking-wider font-bold">{t('header.jobTitle')}</span>
        </div>
      </div>
      <header className={`bg-black bg-opacity-90 backdrop-blur-sm text-white py-3 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50 header-container transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/20' : ''}`}>
        <div className="flex items-center">
          <div className="logo">
            <h1 className="font-archivo text-white text-xl sm:text-2xl md:text-3xl font-black leading-none">
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  M<span className="text-mayache-green">A</span>Y<span className="text-mayache-teal">A</span>CHE
                </motion.span>
              </span>
            </h1>
          </div>
          
          {/* Language dropdown */}
          <div className="relative ml-3 md:ml-5 lang-button">
            <motion.button 
              className="flex items-center justify-center bg-mayache-teal hover:bg-mayache-green transition-colors duration-300 rounded-full h-9 w-9 md:h-10 md:w-10 text-black shadow-md hover:shadow-lg border-2 border-white"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Change language"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="uppercase text-xs font-bold">{currentLanguage.slice(0, 2)}</span>
              <motion.span 
                className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              ></motion.span>
            </motion.button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full left-0 mt-2 lang-menu">
                <motion.div 
                  className="bg-black border border-mayache-teal rounded-lg shadow-xl p-1.5 min-w-[130px] backdrop-blur-xl z-50"
                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                >
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'en' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('en')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇬🇧</span>
                    <span>English</span>
                    {currentLanguage === 'en' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>}
                  </motion.button>
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'de' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('de')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇩🇪</span>
                    <span>Deutsch</span>
                    {currentLanguage === 'de' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>}
                  </motion.button>
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'fr' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('fr')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇫🇷</span>
                    <span>Français</span>
                    {currentLanguage === 'fr' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>}
                  </motion.button>
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'es' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('es')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇪🇸</span>
                    <span>Español</span>
                    {currentLanguage === 'es' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>}
                  </motion.button>
                </motion.div>
              </div>
            )}
          </div>

          {/* Mobile job title - displayed inline for small screens */}
          <div className="flex items-center ml-3 sm:hidden">
            <div className="flex items-center bg-black bg-opacity-80 text-white px-2.5 py-1 rounded-full border border-mayache-teal shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
              <span className="text-[10px] uppercase tracking-wider font-bold">{t('header.jobTitle')}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:flex items-center mr-6 bg-black bg-opacity-80 rounded-full px-3 py-1 border border-gray-800">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs text-white font-mono">{formattedTime}</span>
          </div>
          
          <div className="text-right flex items-center">
            <h2 className="font-archivo text-white text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-none">
              <motion.span 
                className="inline-block"
                initial={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                PORT<span className="text-mayache-teal">FOLIO</span>
              </motion.span>
            </h2>
            <motion.button 
              className="ml-3 md:ml-4 md:hidden p-2 bg-mayache-dark rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col space-y-1.5 w-5">
                <span className="block w-5 h-0.5 bg-white"></span>
                <span className="block w-3.5 h-0.5 bg-white"></span>
                <span className="block w-4 h-0.5 bg-white ml-auto"></span>
              </div>
            </motion.button>
          </div>
        </div>
      </header>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
