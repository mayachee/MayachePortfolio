import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
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
      {/* "Available" floating badge — sm+ screens only (below header) */}
      <div className="flex items-center absolute top-[82px] left-4 z-40 hidden sm:flex">
        <div className="flex items-center bg-black text-white px-3 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs uppercase tracking-wider font-bold">{t('header.jobTitle')}</span>
        </div>
      </div>

      <header className={`bg-black/95 backdrop-blur-md text-white sticky top-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/10' : 'border-transparent'}`}>

        {/* ── Mobile row ── */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">

          {/* Left: MAYACHE · PORTFOLIO */}
          <div className="flex">
            <motion.h1
              className="font-archivo text-white text-xl font-black leading-none tracking-tight"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            >
              M<span className="text-mayache-green">A</span>Y<span className="text-mayache-teal">A</span>CHE
            </motion.h1>
            <span className="h-4 w-px bg-white/25" />
          </div>
          {/* Right: available pill + hamburger */}
          <div className="flex items-center gap-2.5">

            {/* Animated hamburger → X */}
            <motion.button
              className="flex flex-col items-center justify-center w-11 h-11 bg-white/5 border border-white/15 hover:bg-white/10 hover:border-mayache-teal rounded-xl transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.88 }}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="block h-[2px] w-5 bg-white rounded-full origin-center"
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className="block h-[2px] w-3.5 bg-white rounded-full my-[5px]"
                variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block h-[2px] w-5 bg-white rounded-full origin-center"
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </motion.button>
          </div>
        </div>

        {/* ── Desktop row (unchanged) ── */}
        <div className="hidden md:flex items-center justify-between py-3 px-6">
          {/* Left: MAYACHE */}
          <h1 className="font-archivo text-white text-2xl md:text-3xl font-black leading-none">
            <motion.span
              className="inline-block"
              initial={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              M<span className="text-mayache-green">A</span>Y<span className="text-mayache-teal">A</span>CHE
            </motion.span>
          </h1>

          {/* Right: clock + lang + PORTFOLIO */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-black bg-opacity-80 rounded-full px-3 py-1 border border-gray-800">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-white font-mono">{formattedTime}</span>
            </div>

            {/* Language dropdown */}
            <div className="relative lang-button">
              <motion.button
                className="flex items-center justify-center bg-mayache-teal hover:bg-mayache-green transition-colors duration-300 rounded-full h-9 w-9 text-black shadow-sm hover:shadow-md border-2 border-white/60"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                aria-label="Change language"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="uppercase text-xs font-bold">{currentLanguage.slice(0, 2)}</span>
              </motion.button>

              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 lang-menu">
                  <motion.div
                    className="bg-black border border-mayache-teal rounded-lg shadow-xl p-1.5 min-w-[130px] backdrop-blur-xl z-50"
                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <motion.button className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'en' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`} onClick={() => changeLanguage('en')} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                      <span className="flag mr-2">🇬🇧</span><span>English</span>
                      {currentLanguage === 'en' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full" />}
                    </motion.button>
                    <motion.button className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'de' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`} onClick={() => changeLanguage('de')} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                      <span className="flag mr-2">🇩🇪</span><span>Deutsch</span>
                      {currentLanguage === 'de' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full" />}
                    </motion.button>
                    <motion.button className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'fr' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`} onClick={() => changeLanguage('fr')} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                      <span className="flag mr-2">🇫🇷</span><span>Français</span>
                      {currentLanguage === 'fr' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full" />}
                    </motion.button>
                    <motion.button className={`flex items-center w-full px-3 py-2.5 text-sm text-left rounded-md hover:bg-mayache-teal hover:bg-opacity-20 transition-colors duration-300 ${currentLanguage === 'es' ? 'bg-mayache-teal bg-opacity-20 font-medium' : ''}`} onClick={() => changeLanguage('es')} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                      <span className="flag mr-2">🇪🇸</span><span>Español</span>
                      {currentLanguage === 'es' && <span className="ml-auto w-2 h-2 bg-green-500 rounded-full" />}
                    </motion.button>
                  </motion.div>
                </div>
              )}
            </div>

            <h2 className="font-archivo text-white text-2xl md:text-3xl font-black tracking-tight leading-none">
              <motion.span className="inline-block" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                PORT<span className="text-mayache-teal">FOLIO</span>
              </motion.span>
            </h2>
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
