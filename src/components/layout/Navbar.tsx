import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { NAV_SECTIONS } from '@/constants/site'
import { useScrolled } from '@/hooks/useScrolled'
import { useActiveSection } from '@/hooks/useActiveSection'
import { scrollToId, cn } from '@/lib/utils'

export function Navbar() {
  const { t } = useTranslation()
  const scrolled = useScrolled(40)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(NAV_SECTIONS.map((s) => s.id))
  const solid = scrolled || mobileOpen

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'glass border-b border-ink-100/80 shadow-soft dark:border-white/10' : 'bg-transparent',
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between py-3">
        <button
          onClick={() => handleNavClick('home')}
          className={cn(
            'font-display text-xl font-bold tracking-tight transition-colors',
            solid ? 'text-ink-900 dark:text-white' : 'text-ink-900 dark:text-white',
          )}
        >
          <span className="text-primary-600">B</span>Tech
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors',
                solid ? 'text-ink-600 dark:text-ink-200' : 'text-ink-800 dark:text-ink-100',
                'hover:text-primary-600 dark:hover:text-accent-300',
              )}
            >
              {t(section.key)}
              {activeId === section.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-primary-600 dark:bg-accent-400"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle solid={solid} />
          <LanguageSwitcher solid={solid} />
          <Button size="sm" className="hidden lg:inline-flex" onClick={() => handleNavClick('contact')}>
            {t('nav.cta')}
          </Button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={t('common.toggleMenu')}
            aria-expanded={mobileOpen}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full lg:hidden',
              solid ? 'text-ink-900 dark:text-white' : 'text-ink-900 dark:text-white',
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass overflow-hidden border-t border-ink-100/80 lg:hidden dark:border-white/10"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-start text-base font-medium transition-colors',
                    activeId === section.id
                      ? 'bg-primary-50 text-primary-700 dark:bg-white/10 dark:text-accent-300'
                      : 'text-ink-700 dark:text-ink-200',
                  )}
                >
                  {t(section.key)}
                </button>
              ))}
              <Button className="mt-2 w-full" onClick={() => handleNavClick('contact')}>
                {t('nav.cta')}
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
