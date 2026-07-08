import { useTranslation } from 'react-i18next'
import { ExternalLink, GitBranch } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import type { PortfolioProject } from '@/types'

interface PortfolioModalProps {
  project: PortfolioProject | null
  onClose: () => void
}

export function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const { t } = useTranslation()

  return (
    <Modal isOpen={!!project} onClose={onClose} labelledBy="portfolio-modal-title">
      {project && (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-3">
            {project.gallery.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            ))}
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary-600 dark:text-accent-400">
              {t(`portfolio.filters.${project.category}`)}
            </p>
            <h3
              id="portfolio-modal-title"
              className="mt-1 font-display text-2xl font-bold text-ink-900 dark:text-white"
            >
              {project.name}
            </h3>
            <p className="mt-3 text-ink-500 dark:text-ink-300">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">
                {t('portfolio.modal.technologies')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-ink-100 px-3 py-1 font-mono text-xs text-ink-600 dark:bg-white/10 dark:text-ink-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">
                {t('portfolio.modal.results')}
              </h4>
              <p className="text-sm text-ink-500 dark:text-ink-300">{project.results}</p>
            </div>
            <div>
              <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">
                {t('portfolio.modal.challenges')}
              </h4>
              <p className="text-sm text-ink-500 dark:text-ink-300">{project.challenges}</p>
            </div>
            <div>
              <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white">
                {t('portfolio.modal.solutions')}
              </h4>
              <p className="text-sm text-ink-500 dark:text-ink-300">{project.solutions}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-ink-100 pt-6 dark:border-white/10">
            {project.liveUrl && (
              <Button
                icon={<ExternalLink size={16} />}
                onClick={() => window.open(project.liveUrl, '_blank', 'noreferrer')}
              >
                {t('portfolio.liveDemo')}
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                icon={<GitBranch size={16} />}
                onClick={() => window.open(project.githubUrl, '_blank', 'noreferrer')}
              >
                GitHub
              </Button>
            )}
          </div>
        </div>
      )}
    </Modal>
  )
}
