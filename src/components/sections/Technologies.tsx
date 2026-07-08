import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { technologies } from '@/data/technologies'

export function Technologies() {
  const { t } = useTranslation()
  const loopedTech = [...technologies, ...technologies]

  return (
    <section id="technologies" className="snap-section overflow-hidden py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('technologies.eyebrow')}
          title={t('technologies.title')}
          subtitle={t('technologies.subtitle')}
        />
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-ink-950" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-ink-950" />
        <div className="flex w-max animate-marquee gap-4">
          {loopedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white px-6 py-4 shadow-soft dark:border-white/10 dark:bg-ink-900/60"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary-600 to-accent-500" />
              <span className="whitespace-nowrap font-display text-sm font-semibold text-ink-800 dark:text-ink-100">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
