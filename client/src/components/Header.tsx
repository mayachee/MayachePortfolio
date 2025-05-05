import { useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="bg-white py-4 px-6 flex justify-between items-center">
        <div className="logo">
          <h1 className="font-archivo text-black text-4xl font-black">MAYACHE</h1>
        </div>
        <div className="text-right">
          <h2 className="font-archivo text-black text-4xl font-black">PORTFOLIO</h2>
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
