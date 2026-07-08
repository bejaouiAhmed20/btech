import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PortfolioModal } from '@/components/sections/PortfolioModal'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { portfolioFilters, portfolioProjects } from '@/data/portfolio'
import type { PortfolioCategory, PortfolioProject } from '@/types'
import { cn } from '@/lib/utils'

export function Portfolio() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all')
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return portfolioProjects
    return portfolioProjects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="portfolio" className="snap-section py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={t('portfolio.eyebrow')}
          title={t('portfolio.title')}
          subtitle={t('portfolio.subtitle')}
        />

        <div className="flex flex-wrap justify-center gap-2">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lift'
                  : 'bg-ink-100 text-ink-600 hover:bg-ink-200 dark:bg-white/5 dark:text-ink-300 dark:hover:bg-white/10',
              )}
            >
              {t(`portfolio.filters.${filter}`)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                whileInView="visible"
                viewport={viewportOnce}
                className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-shadow hover:shadow-lift dark:border-white/10 dark:bg-ink-900/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
                      >
                        {t('portfolio.caseStudy')}
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 rounded-full bg-accent-500 px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                        >
                          {t('portfolio.liveDemo')} <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary-600 dark:text-accent-400">
                    <Layers size={12} /> {t(`portfolio.filters.${project.category}`)}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-ink-500 dark:text-ink-300">{project.shortDescription}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <PortfolioModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}
