import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json"; // Подключаем файл с русскими текстами
import en from "./locales/en.json"; // Добавляем английский перевод

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru }, // Только русский язык
    en: { translation: en }, // Подключаем английский язык
  },
  lng: "ru", // По умолчанию используем русский
  fallbackLng: "en", // Если не найден перевод на русском, используем английский
  interpolation: {
    escapeValue: false, // React уже защищает от XSS
  },
});

export default i18n;
