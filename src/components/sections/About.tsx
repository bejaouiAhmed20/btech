import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Icon, type IconName } from '@/components/ui/Icon'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants'
import { teamValues, timelineYears } from '@/data/values'
import { useCountUp } from '@/hooks/useCountUp'
import { STATS } from '@/constants/site'

function StatCounter({
  value,
  suffix,
  label,
  index,
}: {
  value: number
  suffix: string
  label: string
  index: number
}) {
  const { ref, value: current } = useCountUp(value)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span className="font-display text-3xl font-bold text-ink-900 sm:text-4xl dark:text-white">
        <span ref={ref}>{current}</span>
        {suffix}
      </span>
      <span className="text-xs font-medium uppercase tracking-wide text-ink-500 sm:text-sm dark:text-ink-400">
        {label}
      </span>
    </motion.div>
  )
}

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="snap-section relative bg-ink-50/60 py-24 sm:py-32 dark:bg-ink-900/40">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          subtitle={t('about.description')}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-balance text-center font-display text-xl font-medium text-primary-700 sm:text-2xl dark:text-accent-300"
        >
          "{t('about.mission')}"
        </motion.p>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-x-8 gap-y-8 rounded-3xl border border-ink-100 bg-white px-8 py-8 shadow-soft sm:grid-cols-4 dark:border-white/10 dark:bg-ink-900/60">
          {STATS.map((stat, index) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.key)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5"
        >
          {teamValues.map((value) => (
            <motion.div
              key={value.id}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-soft dark:border-white/10 dark:bg-ink-900/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-white/10 dark:text-accent-300">
                <Icon name={value.icon as IconName} size={22} />
              </span>
              <h3 className="font-display text-sm font-semibold text-ink-900 sm:text-base dark:text-white">
                {t(value.titleKey)}
              </h3>
              <p className="text-xs text-ink-500 sm:text-sm dark:text-ink-300">{t(value.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative mx-auto w-full max-w-4xl">
          <div className="absolute start-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-ink-200 sm:block dark:bg-white/10" />
          <div className="flex flex-col gap-10 sm:gap-16">
            {timelineYears.map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col items-center gap-4 sm:flex-row ${
                  index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'sm:text-left' : 'sm:text-right'} text-center`}>
                  <h4 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {t(`about.timeline.${year}.title`)}
                  </h4>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                    {t(`about.timeline.${year}.description`)}
                  </p>
                </div>
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 font-mono text-sm font-semibold text-white shadow-lift">
                  {year}
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
