import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as englishTranslation from './translation/en.json';
import * as portugueseTranslation from './translation/pt.json';

const resources = {
    en: {
        translation: englishTranslation
    },
    pt: {
        translation: portugueseTranslation
    }
}

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources
});

export default i18n;