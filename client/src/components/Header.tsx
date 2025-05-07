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
      <div className="flex items-center absolute top-[82px] left-4 z-50">
        <div className="flex items-center bg-black text-white px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs uppercase tracking-wider font-bold">{t('header.jobTitle')}</span>
        </div>
      </div>
      <header className="bg-black text-white py-3 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50 relative">
        <div className="flex items-center">
          <div className="logo">
            <h1 className="font-archivo text-white text-2xl md:text-3xl font-black">
              <span className="relative inline-block">
                M<span className="text-mayache-green">A</span>Y<span className="text-mayache-teal">A</span>CHE
              </span>
            </h1>
          </div>
          
          {/* Language dropdown */}
          <div className="relative ml-4 lang-button">
            <button 
              className="flex items-center justify-center bg-mayache-teal hover:bg-mayache-green transition-colors duration-300 rounded-full h-9 w-9 text-black shadow-lg hover:shadow-mayache-teal/50 border-2 border-white"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Change language"
            >
              <span className="uppercase text-xs font-bold">{currentLanguage.slice(0, 2)}</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute top-full left-0 mt-1 lang-menu">
                <motion.div 
                  className="bg-black border border-mayache-teal rounded-lg shadow-lg p-1 min-w-[120px] backdrop-blur-lg lang-menu-highlight"
                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                >
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2 text-xs text-left rounded hover:bg-mayache-dark transition-colors duration-300 ${currentLanguage === 'en' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('en')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇬🇧</span>
                    <span>English</span>
                    {currentLanguage === 'en' && <span className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                  </motion.button>
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2 text-xs text-left rounded hover:bg-mayache-dark transition-colors duration-300 ${currentLanguage === 'de' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('de')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇩🇪</span>
                    <span>Deutsch</span>
                    {currentLanguage === 'de' && <span className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                  </motion.button>
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2 text-xs text-left rounded hover:bg-mayache-dark transition-colors duration-300 ${currentLanguage === 'fr' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('fr')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇫🇷</span>
                    <span>Français</span>
                    {currentLanguage === 'fr' && <span className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                  </motion.button>
                  <motion.button 
                    className={`flex items-center w-full px-3 py-2 text-xs text-left rounded hover:bg-mayache-dark transition-colors duration-300 ${currentLanguage === 'es' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`}
                    onClick={() => changeLanguage('es')}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flag mr-2">🇪🇸</span>
                    <span>Español</span>
                    {currentLanguage === 'es' && <span className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full"></span>}
                  </motion.button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:block mr-6">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-white font-mono">{formattedTime}</span>
            </div>
          </div>
          
          <div className="text-right flex items-center">
            <h2 className="font-archivo text-white text-2xl md:text-3xl font-black tracking-tight">
              <span className="inline-block">
                PORT<span className="text-mayache-teal">FOLIO</span>
              </span>
            </h2>
            <button 
              className="ml-4 md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col space-y-1.5 w-6">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-4 h-0.5 bg-white"></span>
                <span className="block w-5 h-0.5 bg-white ml-auto"></span>
              </div>
            </button>
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
