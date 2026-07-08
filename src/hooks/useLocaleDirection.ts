import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { rtlLocales } from '@/i18n'

export function useLocaleDirection() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const isRtl = rtlLocales.includes(i18n.language)
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])
}
