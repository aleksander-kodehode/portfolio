import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "../locales/en/translation.json";
import translationNb from "../locales/nb/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  nb: {
    translation: translationNb,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "nb"],
    nonExplicitSupportedLngs: true,
    fallbackLng: "en",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "../publ/locales/{{lng}}/{{ns}}",
      parse: function (data) {
        console.log(data);
      },
    },
    //TODO: Disable before production build
    debug: true,
  });

export default i18next;
