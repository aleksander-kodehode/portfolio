import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "nb"],
    interpolation: {
      escapeValue: false,
    },
    //TODO: Disable before production build
    debug: true,
  });

export default i18next;
