import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
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
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });

  return (
    <>
      <header className={`${isScrolled ? 'bg-white shadow-md' : 'bg-white'} py-4 px-6 flex justify-between items-center sticky top-0 z-50 transition-all duration-300`}>
        <div className="flex items-center">
          <div className="logo relative">
            <h1 className="font-archivo text-black text-4xl font-black relative z-10">
              <span className="relative inline-block">
                M<span className="text-mayache-red">A</span>Y<span className="text-mayache-blue">A</span>CHE
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-mayache-red to-mayache-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </h1>
            <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-mayache-teal bg-opacity-20 animate-pulse"></div>
          </div>
          
          <div className="ml-6 hidden md:flex space-x-2">
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${i18n.language === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('de')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${i18n.language === 'de' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              DE
            </button>
            <button 
              onClick={() => changeLanguage('fr')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${i18n.language === 'fr' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              FR
            </button>
            <button 
              onClick={() => changeLanguage('es')}
              className={`px-2 py-1 text-xs font-bold rounded transition-colors ${i18n.language === 'es' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
            >
              ES
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:block mr-6">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-mayache-green mr-2 animate-pulse"></div>
              <span className="text-xs font-bold text-black opacity-70">{formattedTime}</span>
            </div>
          </div>
          
          <div className="text-right flex items-center">
            <h2 className="font-archivo text-black text-4xl font-black tracking-tight relative">
              <span className="inline-block relative">
                PORTFOLIO
                <div className="absolute -right-3 -top-3 bg-mayache-yellow w-5 h-5 rounded-full border-2 border-white shadow-sm"></div>
              </span>
            </h2>
            <button 
              className="ml-4 md:hidden flex flex-col space-y-1.5 hover:opacity-80 transition-opacity"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-4 h-0.5 bg-black ml-auto"></span>
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
