import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE } from '@/constants/site'
import { fadeUp, viewportOnce } from '@/animations/variants'

const infoItems = [
  { icon: MapPin, labelKey: 'contact.info.address' as const, value: SITE.address },
  { icon: Mail, labelKey: 'contact.info.email' as const, value: SITE.email },
  { icon: Phone, labelKey: 'contact.info.phone' as const, value: SITE.phone },
]

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="snap-section py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-4"
            >
              {infoItems.map((item) => (
                <div
                  key={item.labelKey}
                  className="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-ink-900/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-white/10 dark:text-accent-300">
                    <item.icon size={20} />
                  </span>
                  <span className="text-sm text-ink-700 dark:text-ink-200">{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative flex min-h-48 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid-fade-mask absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:28px_28px] opacity-50 dark:opacity-10" />
              <div className="relative flex flex-col items-center gap-2 text-ink-400 dark:text-ink-500">
                <MapPin size={28} />
                <span className="text-xs font-medium uppercase tracking-widest">Map placeholder</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
