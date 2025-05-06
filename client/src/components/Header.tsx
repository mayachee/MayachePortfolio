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
      <header className={`${isScrolled ? 'bg-white shadow-md' : 'bg-white'} py-3 md:py-4 px-4 md:px-6 flex justify-between items-center sticky top-0 z-50 transition-all duration-300`}>
        <div className="flex items-center">
          <div className="logo relative group">
            <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-mayache-teal to-mayache-blue rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-mayache-red to-mayache-orange rounded-full opacity-10 group-hover:scale-110 transition-transform duration-700 delay-100"></div>
            <h1 className="font-archivo text-black text-3xl md:text-4xl font-black relative z-10">
              <span className="relative inline-block group-hover:tracking-wider transition-all duration-300">
                M<span className="text-mayache-red">A</span>Y<span className="text-mayache-blue">A</span>CHE
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-mayache-red to-mayache-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
            </h1>
          </div>
          
          <div className="ml-8 hidden md:flex space-x-1">
            <button 
              onClick={() => changeLanguage('en')}
              className={`w-7 h-7 text-xs font-bold rounded-full flex items-center justify-center transition-all duration-200 ${i18n.language === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              aria-label="English language"
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('de')}
              className={`w-7 h-7 text-xs font-bold rounded-full flex items-center justify-center transition-all duration-200 ${i18n.language === 'de' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              aria-label="German language"
            >
              DE
            </button>
            <button 
              onClick={() => changeLanguage('fr')}
              className={`w-7 h-7 text-xs font-bold rounded-full flex items-center justify-center transition-all duration-200 ${i18n.language === 'fr' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              aria-label="French language"
            >
              FR
            </button>
            <button 
              onClick={() => changeLanguage('es')}
              className={`w-7 h-7 text-xs font-bold rounded-full flex items-center justify-center transition-all duration-200 ${i18n.language === 'es' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              aria-label="Spanish language"
            >
              ES
            </button>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:block mr-6">
            <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full shadow-sm">
              <div className="w-2 h-2 rounded-full bg-mayache-green mr-2 animate-pulse"></div>
              <span className="text-xs font-bold text-black">{formattedTime}</span>
            </div>
          </div>
          
          <div className="text-right flex items-center group">
            <h2 className="font-archivo text-black text-3xl md:text-4xl font-black tracking-tight relative">
              <span className="inline-block relative">
                <span className="group-hover:opacity-80 transition-opacity duration-300">PORT</span><span className="text-mayache-teal group-hover:text-black transition-colors duration-300">FOLIO</span>
                <div className="absolute -right-2 -top-2 bg-gradient-to-br from-mayache-yellow to-mayache-orange w-5 h-5 rounded-full border-2 border-white shadow-sm group-hover:scale-110 transition-transform duration-300"></div>
              </span>
            </h2>
            <button 
              className="ml-4 md:hidden p-2.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col space-y-1.5 w-6">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-4 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black ml-auto"></span>
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
