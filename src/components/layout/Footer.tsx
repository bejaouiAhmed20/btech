import { useTranslation } from 'react-i18next'
import { MessageCircle, Camera, Briefcase, Palette, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { FOOTER_LINKS, SITE } from '@/constants/site'
import { services } from '@/data/services'
import { scrollToId } from '@/lib/utils'

const socialLinks = [
  { href: SITE.social.facebook, icon: MessageCircle, label: 'Facebook' },
  { href: SITE.social.instagram, icon: Camera, label: 'Instagram' },
  { href: SITE.social.linkedin, icon: Briefcase, label: 'LinkedIn' },
  { href: SITE.social.dribbble, icon: Palette, label: 'Dribbble' },
]

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-300 dark:border-white/10">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <span className="font-display text-xl font-bold text-white">
            <span className="text-accent-400">B</span>Tech
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-ink-400">{t('footer.description')}</p>
          <div className="flex gap-2 pt-2">
            {socialLinks.map(({ href, icon: SocialIcon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-accent-500 hover:text-white"
              >
                <SocialIcon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t('footer.quickLinks')}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            {FOOTER_LINKS.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToId(section.id)}
                  className="transition-colors hover:text-accent-400"
                >
                  {t(section.key)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t('footer.services')}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <button
                  onClick={() => scrollToId('services')}
                  className="transition-colors hover:text-accent-400"
                >
                  {t(service.titleKey)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t('footer.contact')}
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent-400" /> {t('contact.info.address')}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-accent-400" /> {SITE.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-accent-400" /> {SITE.phone}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {year} BTech. {t('footer.rights')}
          </p>
          <p>{t('footer.madeWith')}</p>
        </Container>
      </div>
    </footer>
  )
}
