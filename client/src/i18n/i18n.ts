import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import de from "./locales/de";
import fr from "./locales/fr";
import es from "./locales/es";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
