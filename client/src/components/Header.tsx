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
      <div className="flex items-center absolute top-[82px] left-4 z-50">
        <div className="flex items-center bg-black text-white px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs uppercase tracking-wider font-bold">Creative Developer</span>
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
          
          {/* Language buttons hidden as they don't appear in the reference image */}
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
                PORT<span className="text-cyan-400">FOLIO</span>
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
