import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru.json"; // Подключаем файл с русскими текстами

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru }, // Только русский язык
  },
  lng: "ru", // По умолчанию используем русский
  fallbackLng: "ru", // Если текст не найден, снова используем русский
  interpolation: {
    escapeValue: false, // React уже защищает от XSS
  },
});

export default i18n;
