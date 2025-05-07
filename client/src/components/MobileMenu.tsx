import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { SiGithub, SiFigma, SiLinkedin } from "react-icons/si";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-10/12 max-w-sm bg-white shadow-xl z-50 md:hidden overflow-auto"
          >
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-archivo text-black text-xl font-black">MENU</h2>
                <button 
                  onClick={onClose}
                  className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-black" />
                </button>
              </div>
              
              {/* Language selection - better positioned at the top for mobile */}
              <div className="mb-6 language-switcher-mobile">
                <h3 className="text-xs text-gray-500 uppercase mb-2 font-bold">{t("nav.language")}</h3>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded-full transition-colors ${i18n.language === 'en' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    aria-label="English"
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => changeLanguage('de')}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded-full transition-colors ${i18n.language === 'de' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    aria-label="German"
                  >
                    DE
                  </button>
                  <button 
                    onClick={() => changeLanguage('fr')}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded-full transition-colors ${i18n.language === 'fr' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    aria-label="French"
                  >
                    FR
                  </button>
                  <button 
                    onClick={() => changeLanguage('es')}
                    className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded-full transition-colors ${i18n.language === 'es' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    aria-label="Spanish"
                  >
                    ES
                  </button>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="mb-8">
                <h3 className="text-xs text-gray-500 uppercase mb-2 font-bold">{t("nav.sections")}</h3>
                <ul className="space-y-2">
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <button
                      onClick={() => handleLinkClick("about")}
                      className="w-full text-left flex items-center py-5 px-4 text-gray-800 font-bold hover:bg-mayache-yellow hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <span className="w-2 h-2 bg-mayache-yellow rounded-full mr-3"></span>
                      <span className="uppercase text-sm tracking-wide">{t("nav.about")}</span>
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <button
                      onClick={() => handleLinkClick("skills")}
                      className="w-full text-left flex items-center py-5 px-4 text-gray-800 font-bold hover:bg-mayache-red hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <span className="w-2 h-2 bg-mayache-red rounded-full mr-3"></span>
                      <span className="uppercase text-sm tracking-wide">{t("nav.skills")}</span>
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button
                      onClick={() => handleLinkClick("experience")}
                      className="w-full text-left flex items-center py-5 px-4 text-gray-800 font-bold hover:bg-mayache-purple hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <span className="w-2 h-2 bg-mayache-purple rounded-full mr-3"></span>
                      <span className="uppercase text-sm tracking-wide">{t("nav.experience")}</span>
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      onClick={() => handleLinkClick("portfolio")}
                      className="w-full text-left flex items-center py-5 px-4 text-gray-800 font-bold hover:bg-mayache-orange hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <span className="w-2 h-2 bg-mayache-orange rounded-full mr-3"></span>
                      <span className="uppercase text-sm tracking-wide">{t("nav.portfolio")}</span>
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button
                      onClick={() => handleLinkClick("contact")}
                      className="w-full text-left flex items-center py-5 px-4 text-gray-800 font-bold hover:bg-mayache-blue hover:bg-opacity-10 rounded-lg transition-colors"
                    >
                      <span className="w-2 h-2 bg-mayache-blue rounded-full mr-3"></span>
                      <span className="uppercase text-sm tracking-wide">{t("nav.messages")}</span>
                    </button>
                  </motion.li>
                </ul>
              </nav>
              
              {/* Social links */}
              <div>
                <h3 className="text-xs text-gray-500 uppercase mb-3 font-bold">{t("nav.connect")}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <SiGithub className="h-6 w-6 text-black" />
                  </a>
                  <a 
                    href="https://figma.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <SiFigma className="h-6 w-6 text-black" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <SiLinkedin className="h-6 w-6 text-black" />
                  </a>
                </div>
              </div>
              

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
