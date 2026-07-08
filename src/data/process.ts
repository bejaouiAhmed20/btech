import type { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    step: 1,
    titleKey: 'process.steps.discovery.title',
    descriptionKey: 'process.steps.discovery.description',
    icon: 'Search',
  },
  {
    id: 'planning',
    step: 2,
    titleKey: 'process.steps.planning.title',
    descriptionKey: 'process.steps.planning.description',
    icon: 'ClipboardList',
  },
  {
    id: 'design',
    step: 3,
    titleKey: 'process.steps.design.title',
    descriptionKey: 'process.steps.design.description',
    icon: 'Palette',
  },
  {
    id: 'development',
    step: 4,
    titleKey: 'process.steps.development.title',
    descriptionKey: 'process.steps.development.description',
    icon: 'Code2',
  },
  {
    id: 'testing',
    step: 5,
    titleKey: 'process.steps.testing.title',
    descriptionKey: 'process.steps.testing.description',
    icon: 'FlaskConical',
  },
  {
    id: 'launch',
    step: 6,
    titleKey: 'process.steps.launch.title',
    descriptionKey: 'process.steps.launch.description',
    icon: 'Rocket',
  },
  {
    id: 'support',
    step: 7,
    titleKey: 'process.steps.support.title',
    descriptionKey: 'process.steps.support.description',
    icon: 'LifeBuoy',
  },
]
