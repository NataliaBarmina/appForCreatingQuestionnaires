import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "@shared/ i18n/ru.json";
import en from "@shared/ i18n/en.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: "ru",
  fallbackLng: "en", // Если не найден перевод на русском, используем английский
  interpolation: {
    escapeValue: false, // React уже защищает от XSS
  },
});

export default i18n;
