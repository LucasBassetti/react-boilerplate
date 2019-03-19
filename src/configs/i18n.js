import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import * as en from '../locales/en';

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en
    },
    // detection: {
    //   order: ['navigator'],
    // },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded'
    }
  });

export default i18n;
