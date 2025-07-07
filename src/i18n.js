import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ua from '../public/locales/ua.json';
import en from '../public/locales/en.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ua',
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