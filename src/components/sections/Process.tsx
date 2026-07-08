import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon, type IconName } from '@/components/ui/Icon'
import { staggerContainer, fadeUp, viewportOnce } from '@/animations/variants'
import { processSteps } from '@/data/process'

export function Process() {
  const { t } = useTranslation()

  return (
    <section id="process" className="snap-section bg-white py-24 sm:py-32 dark:bg-ink-950">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="pointer-events-none absolute top-[38px] hidden h-px w-full bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block dark:via-white/15" />
          {processSteps.map((step) => (
            <motion.div key={step.id} variants={fadeUp} className="relative flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-ink-100 bg-primary-50 shadow-soft dark:border-white/10 dark:bg-white/5">
                  <Icon
                    name={step.icon as IconName}
                    size={26}
                    className="text-primary-600 dark:text-accent-400"
                  />
                  <span className="absolute -top-2 -end-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 font-mono text-[11px] font-bold text-white">
                    {step.step}
                  </span>
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                {t(step.titleKey)}
              </h3>
              <p className="text-sm text-ink-500 dark:text-ink-300">{t(step.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
