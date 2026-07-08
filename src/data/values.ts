import type { TeamValue } from '@/types'

export const teamValues: TeamValue[] = [
  {
    id: 'creativity',
    icon: 'Lightbulb',
    titleKey: 'about.values.creativity.title',
    descriptionKey: 'about.values.creativity.description',
  },
  {
    id: 'innovation',
    icon: 'Rocket',
    titleKey: 'about.values.innovation.title',
    descriptionKey: 'about.values.innovation.description',
  },
  {
    id: 'professionalism',
    icon: 'BadgeCheck',
    titleKey: 'about.values.professionalism.title',
    descriptionKey: 'about.values.professionalism.description',
  },
  {
    id: 'quality',
    icon: 'Gem',
    titleKey: 'about.values.quality.title',
    descriptionKey: 'about.values.quality.description',
  },
  {
    id: 'support',
    icon: 'HeartHandshake',
    titleKey: 'about.values.support.title',
    descriptionKey: 'about.values.support.description',
  },
]

export const timelineYears = ['2019', '2021', '2023', '2025'] as const

export const whyChooseItems = [
  { id: 'fast', icon: 'Zap' },
  { id: 'design', icon: 'Palette' },
  { id: 'pricing', icon: 'Wallet' },
  { id: 'tech', icon: 'Cpu' },
  { id: 'responsive', icon: 'Smartphone' },
  { id: 'seo', icon: 'TrendingUp' },
  { id: 'scalable', icon: 'Layers' },
  { id: 'support', icon: 'LifeBuoy' },
] as const

export const faqItems = [
  { id: 'timeline' },
  { id: 'cost' },
  { id: 'revisions' },
  { id: 'support' },
  { id: 'technologies' },
] as const
