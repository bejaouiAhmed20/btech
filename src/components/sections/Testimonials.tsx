import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const { t, i18n } = useTranslation()
  const [index, setIndex] = useState(0)
  const isRtl = i18n.dir() === 'rtl'

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const testimonial = testimonials[index]
  const PrevIcon = isRtl ? ChevronRight : ChevronLeft
  const NextIcon = isRtl ? ChevronLeft : ChevronRight

  return (
    <section id="testimonials" className="snap-section py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div className="relative mx-auto w-full max-w-3xl">
          <Quote className="absolute -top-6 start-6 text-primary-100 dark:text-white/10" size={72} />
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="relative flex flex-col items-center gap-6 rounded-3xl border border-ink-100 bg-white p-8 text-center shadow-soft sm:p-12 dark:border-white/10 dark:bg-ink-900/60"
            >
              <div className="flex gap-1 text-accent-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-balance text-lg font-medium text-ink-800 sm:text-xl dark:text-ink-100">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="text-start">
                  <p className="font-display text-sm font-semibold text-ink-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label={t('common.previous')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-primary-600 hover:text-primary-600 dark:border-white/15 dark:text-ink-300"
            >
              <PrevIcon size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((testimonialItem, i) => (
                <button
                  key={testimonialItem.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary-600' : 'w-2 bg-ink-200 dark:bg-white/15'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label={t('common.next')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-primary-600 hover:text-primary-600 dark:border-white/15 dark:text-ink-300"
            >
              <NextIcon size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
