import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ua from './assets/locales/ua.json';
import en from './assets/locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
        ua: {
            translation: ua
        },
        en: {
            translation: en
        }
    },
  });

export default i18n;