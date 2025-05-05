import { useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

const languageFlags = {
  en: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      width="32"
      height="16"
    >
      <clipPath id="a">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="b">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0 0l60 30m0-30L0 30"
          clipPath="url(#b)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  ),
  de: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5 3"
      width="32"
      height="16"
    >
      <rect width="5" height="3" y="0" x="0" fill="#000" />
      <rect width="5" height="2" y="1" x="0" fill="#D00" />
      <rect width="5" height="1" y="2" x="0" fill="#FFCE00" />
    </svg>
  ),
  fr: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width="32"
      height="16"
    >
      <rect width="1" height="2" x="0" fill="#002654" />
      <rect width="1" height="2" x="1" fill="#fff" />
      <rect width="1" height="2" x="2" fill="#ED2939" />
    </svg>
  ),
  es: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 750 500"
      width="32"
      height="16"
    >
      <rect width="750" height="500" fill="#c60b1e" />
      <rect width="750" height="250" fill="#ffc400" y="125" />
    </svg>
  ),
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="bg-white py-4 px-6 flex justify-between items-center max-w-1200 mx-auto">
        <div className="logo">
          <h1 className="text-mayache-dark text-4xl font-black">MAYACHE</h1>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black">PORTFOLIO</h2>
        </div>
      </header>
      <div className="language-selector hidden">
        <button
          className={`w-8 h-8 rounded-full overflow-hidden border-2 ${
            i18n.language === "en"
              ? "border-mayache-green"
              : "border-gray-300 hover:border-mayache-green"
          } focus:outline-none transition-colors`}
          onClick={() => changeLanguage("en")}
          aria-label="Switch to English"
        >
          {languageFlags.en}
        </button>
        <button
          className={`w-8 h-8 rounded-full overflow-hidden border-2 ${
            i18n.language === "de"
              ? "border-mayache-green"
              : "border-gray-300 hover:border-mayache-green"
          } focus:outline-none transition-colors`}
          onClick={() => changeLanguage("de")}
          aria-label="Switch to German"
        >
          {languageFlags.de}
        </button>
        <button
          className={`w-8 h-8 rounded-full overflow-hidden border-2 ${
            i18n.language === "fr"
              ? "border-mayache-green"
              : "border-gray-300 hover:border-mayache-green"
          } focus:outline-none transition-colors`}
          onClick={() => changeLanguage("fr")}
          aria-label="Switch to French"
        >
          {languageFlags.fr}
        </button>
        <button
          className={`w-8 h-8 rounded-full overflow-hidden border-2 ${
            i18n.language === "es"
              ? "border-mayache-green"
              : "border-gray-300 hover:border-mayache-green"
          } focus:outline-none transition-colors`}
          onClick={() => changeLanguage("es")}
          aria-label="Switch to Spanish"
        >
          {languageFlags.es}
        </button>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
