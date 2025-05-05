import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { t } = useTranslation();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 md:hidden z-50 fixed w-full shadow-lg"
        >
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleLinkClick("about")}
                className="w-full text-left block py-2 px-4 text-mayache-dark font-medium hover:bg-mayache-green hover:text-white rounded transition-colors"
              >
                {t("nav.about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("skills")}
                className="w-full text-left block py-2 px-4 text-mayache-dark font-medium hover:bg-mayache-green hover:text-white rounded transition-colors"
              >
                {t("nav.skills")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("portfolio")}
                className="w-full text-left block py-2 px-4 text-mayache-dark font-medium hover:bg-mayache-green hover:text-white rounded transition-colors"
              >
                {t("nav.portfolio")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full text-left block py-2 px-4 text-mayache-dark font-medium hover:bg-mayache-green hover:text-white rounded transition-colors"
              >
                {t("nav.contact")}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
