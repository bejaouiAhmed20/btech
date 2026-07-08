export type Locale = 'en' | 'fr' | 'ar'

export type ServiceCategory =
  | 'web-development'
  | 'web-applications'
  | 'branding'
  | 'restaurant'
  | 'coffee-shop'
  | 'graphic-design'
  | 'digital-marketing'
  | 'ui-ux'

export interface Service {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
  features: string[]
  category: ServiceCategory
}

export type PortfolioCategory =
  'all' | 'websites' | 'web-apps' | 'branding' | 'restaurant' | 'coffee-shop' | 'graphic-design'

export interface PortfolioProject {
  id: string
  name: string
  category: Exclude<PortfolioCategory, 'all'>
  image: string
  gallery: string[]
  shortDescription: string
  description: string
  technologies: string[]
  challenges: string
  solutions: string
  results: string
  liveUrl?: string
  githubUrl?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  logo?: string
  rating: number
  quote: string
}

export interface ProcessStep {
  id: string
  step: number
  titleKey: string
  descriptionKey: string
  icon: string
}

export interface FaqItem {
  id: string
  questionKey: string
  answerKey: string
}

export interface TeamValue {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
}

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  budget: string
  message: string
}

export interface Technology {
  name: string
  icon: string
}

export type ThemeMode = 'light' | 'dark'
