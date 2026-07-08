export const SITE = {
  name: 'BTech',
  tagline: 'Transforming Ideas Into Digital Experiences',
  email: 'hello@btech.agency',
  phone: '+216 00 000 000',
  address: 'Tunis, Tunisia',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    behance: 'https://behance.net',
    dribbble: 'https://dribbble.com',
  },
} as const

/** Essential links shown in the navbar — kept short and intentional. */
export const NAV_SECTIONS = [
  { id: 'home', key: 'nav.home' },
  { id: 'services', key: 'nav.services' },
  { id: 'portfolio', key: 'nav.portfolio' },
  { id: 'pricing', key: 'nav.pricing' },
  { id: 'contact', key: 'nav.contact' },
] as const

export const FOOTER_LINKS = [
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'portfolio', key: 'nav.portfolio' },
  { id: 'pricing', key: 'nav.pricing' },
  { id: 'testimonials', key: 'nav.testimonials' },
  { id: 'faq', key: 'nav.faq' },
  { id: 'contact', key: 'nav.contact' },
] as const

export const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇹🇳' },
] as const

export const STATS = [
  { id: 'projects', value: 180, suffix: '+', key: 'hero.stats.projects' },
  { id: 'clients', value: 120, suffix: '+', key: 'hero.stats.clients' },
  { id: 'years', value: 6, suffix: '+', key: 'hero.stats.years' },
  { id: 'satisfaction', value: 98, suffix: '%', key: 'hero.stats.satisfaction' },
] as const

export const TRUST_INDICATORS = [
  { id: 'projects', icon: 'Rocket', key: 'hero.trust.projects' },
  { id: 'delivery', icon: 'Zap', key: 'hero.trust.delivery' },
  { id: 'tech', icon: 'Cpu', key: 'hero.trust.tech' },
  { id: 'responsive', icon: 'Smartphone', key: 'hero.trust.responsive' },
] as const
