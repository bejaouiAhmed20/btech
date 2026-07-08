import { useTranslation } from 'react-i18next'
import { Seo } from '@/components/common/Seo'
import {
  Hero,
  About,
  Services,
  Process,
  Portfolio,
  Pricing,
  WhyChooseUs,
  Testimonials,
  Technologies,
  Faq,
  Contact,
} from '@/components/sections'

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Seo title={t('meta.title')} description={t('meta.description')} />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <Technologies />
      <Faq />
      <Contact />
    </>
  )
}
