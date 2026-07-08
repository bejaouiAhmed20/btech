import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en/translation.json'
import fr from './locales/fr/translation.json'
import ar from './locales/ar/translation.json'

export const supportedLocales = ['en', 'fr', 'ar'] as const
export const rtlLocales = ['ar']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    lng: undefined,
    fallbackLng: 'fr',
    supportedLngs: supportedLocales as unknown as string[],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      lookupLocalStorage: 'btech-language',
    },
  })

export default i18n
