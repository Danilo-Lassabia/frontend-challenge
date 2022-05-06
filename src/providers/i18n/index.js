import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptbr from './ptbr.json';

i18next.use(initReactI18next).init({
    lng: 'ptbr',
    debug: false,
    resources: { ptbr },
    fallbackLng: 'ptbr',
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        useSuspense: true,
        bindI18nStore: '',
        transEmptyNodeValue: '',
        bindI18n: 'languageChanged',
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },
});

export default i18next;