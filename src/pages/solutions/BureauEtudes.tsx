import { motion } from 'framer-motion'
import {
  Calculator,
  FileText,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  Target,
  BarChart3,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const services = [
  {
    icon: FileText,
    title: 'Audit Énergétique',
    description: 'Diagnostic complet de la performance énergétique de votre bâtiment avec identification des gisements d\'économies.',
    features: ['Analyse des consommations', 'Thermographie infrarouge', 'Rapport détaillé'],
  },
  {
    icon: Calculator,
    title: 'Étude Thermique',
    description: 'Modélisation thermique pour optimiser l\'enveloppe et les systèmes techniques de votre bâtiment.',
    features: ['Simulation dynamique', 'Calcul réglementaire', 'Optimisation solutions'],
  },
  {
    icon: ClipboardCheck,
    title: 'Plan d\'Actions',
    description: 'Définition d\'une stratégie d\'amélioration énergétique avec priorisation et chiffrage des actions.',
    features: ['ROI par action', 'Phasage travaux', 'Trajectoire énergétique'],
  },
  {
    icon: BarChart3,
    title: 'Accompagnement OPERAT',
    description: 'Déclaration et suivi sur la plateforme ADEME pour votre conformité Décret Tertiaire.',
    features: ['Collecte données', 'Déclaration annuelle', 'Ajustement objectifs'],
  },
]

const benefits = [
  'Identification précise des gisements d\'économies',
  'Priorisation des actions selon le ROI',
  'Conformité réglementaire assurée',
  'Valorisation de votre patrimoine immobilier',
  'Accompagnement sur les financements CEE',
  'Suivi de performance post-travaux',
]

export function BureauEtudes() {
  return (
    <>
      <SEO
        title="Bureau d'Études Énergétiques | Audits et Études Thermiques"
        description="Bureau d'études spécialisé en performance énergétique : audits, études thermiques, plans d'actions et accompagnement OPERAT pour vos bâtiments professionnels."
        canonical="/solutions/bureau-etudes"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Bureau d'Études
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Études énergétiques pour{' '}
                <span className="text-[#D4A84B]">optimiser vos bâtiments</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Notre bureau d'études réalise des audits et études thermiques pour
                identifier les leviers d'économies d'énergie et définir une stratégie
                d'amélioration efficace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander un Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Nos Avantages</h3>
                <ul className="space-y-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-[#D4A84B] flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Nos Prestations"
            title="Une expertise complète en performance énergétique"
            description="De l'audit initial à l'accompagnement réglementaire, nous couvrons tous vos besoins d'études énergétiques."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4332]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-[#1B4332]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#636e72] text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                            <CheckCircle2 className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Méthodologie Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Notre Méthodologie"
            title="Un processus rigoureux pour des résultats fiables"
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '01', title: 'Collecte de données', description: 'Factures, plans, équipements techniques...' },
              { step: '02', title: 'Visite technique', description: 'Inspection détaillée et mesures sur site.' },
              { step: '03', title: 'Analyse et modélisation', description: 'Simulation des performances et scénarios.' },
              { step: '04', title: 'Restitution', description: 'Rapport complet avec plan d\'actions chiffré.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-[#1B4332]/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{item.title}</h3>
                <p className="text-[#636e72] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Secteurs Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Secteurs d'Intervention"
                title="Une expertise multi-sectorielle"
                align="left"
              />
              <p className="mt-4 text-[#636e72]">
                Notre bureau d'études intervient sur tous types de bâtiments
                professionnels, avec une expertise particulière sur les secteurs
                soumis au Décret Tertiaire.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Building2, label: 'Bureaux et tertiaire' },
                  { icon: Target, label: 'Industrie' },
                  { icon: Building2, label: 'Collectivités' },
                  { icon: Building2, label: 'Logement collectif' },
                ].map((sector, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-[#F8F6F2] rounded-lg">
                    <sector.icon className="w-5 h-5 text-[#1B4332]" />
                    <span className="text-sm font-medium text-[#2D3436]">{sector.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B4332] rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Financement de vos études</h3>
              <p className="text-white/80 mb-6">
                Vos audits et études énergétiques peuvent être financés par les
                Certificats d'Économies d'Énergie (CEE). Nous vous accompagnons dans
                le montage de vos dossiers.
              </p>
              <Button
                href="/expertises/financement-cee"
                variant="secondary"
                size="lg"
                className="w-full group"
              >
                Découvrir les financements CEE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Besoin d'un audit énergétique ?"
        description="Nos experts analysent gratuitement votre situation et vous proposent un accompagnement sur-mesure."
        primaryCta={{ label: 'Demander un Devis', href: '/contact' }}
      />
    </>
  )
}

export default BureauEtudes
