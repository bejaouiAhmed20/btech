import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Globe } from 'lucide-react'
import { LANGUAGES } from '@/constants/site'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ solid }: { solid: boolean }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors',
          solid
            ? 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/10'
            : 'text-ink-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10',
        )}
      >
        <Globe size={16} />
        <span className="hidden sm:inline">
          {current.flag} {current.label}
        </span>
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-ink-100 bg-white p-1.5 shadow-lift dark:border-white/10 dark:bg-ink-900"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  role="option"
                  aria-selected={lang.code === i18n.language}
                  onClick={() => {
                    i18n.changeLanguage(lang.code)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-xl px-3 py-2 text-start text-sm transition-colors',
                    lang.code === i18n.language
                      ? 'bg-primary-50 text-primary-700 dark:bg-white/10 dark:text-accent-300'
                      : 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5',
                  )}
                >
                  <span>{lang.flag}</span>
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
