import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import te from './locales/te.json';
import ta from './locales/ta.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    te: {translation: te},
    ta: {translation: ta},
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback if key missing
  interpolation: {escapeValue: false},
});

export default i18n;
