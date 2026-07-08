import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export function ThemeToggle({ solid }: { solid: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <button
      onClick={toggleTheme}
      aria-label={t('common.toggleTheme')}
      className={cn(
        'relative flex h-9 w-9 items-center justify-center rounded-full transition-colors',
        solid
          ? 'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/10'
          : 'text-ink-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10',
      )}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </motion.span>
    </button>
  )
}
