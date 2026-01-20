import { SEO } from '@/components/seo'
import {
  Hero,
  Stats,
  ObligationsSection,
  ExpertisesSection,
  SectorsSection,
  Testimonials,
  PartnersSection,
  CTASection,
} from '@/components/sections'

export function Home() {
  return (
    <>
      <SEO
        canonical="/"
        description="Consulting Energy - Bureau d'études en performance énergétique. Experts en Décret Tertiaire, BACS et financement CEE dans le Grand Est. Accompagnement personnalisé pour votre conformité réglementaire."
      />

      <Hero />
      <Stats />
      <ObligationsSection />
      <ExpertisesSection />
      <SectorsSection />
      <Testimonials />
      <PartnersSection />
      <CTASection />
    </>
  )
}

export default Home
