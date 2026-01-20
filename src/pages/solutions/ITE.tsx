import { motion } from 'framer-motion'
import {
  Layers,
  ThermometerSnowflake,
  Building2,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Shield,
  Sun,
  Droplets,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const advantages = [
  {
    icon: ThermometerSnowflake,
    title: 'Suppression des ponts thermiques',
    description: 'L\'isolation extérieure enveloppe le bâtiment et élimine les ponts thermiques structurels.',
  },
  {
    icon: Building2,
    title: 'Préservation de la surface habitable',
    description: 'Aucune perte de surface intérieure, l\'isolation se fait par l\'extérieur du bâtiment.',
  },
  {
    icon: Sun,
    title: 'Confort été comme hiver',
    description: 'Inertie thermique préservée pour un confort optimal toute l\'année.',
  },
  {
    icon: Shield,
    title: 'Protection du bâti',
    description: 'L\'ITE protège les murs des intempéries et prolonge la durée de vie du bâtiment.',
  },
  {
    icon: Droplets,
    title: 'Rénovation esthétique',
    description: 'Possibilité de ravalement de façade avec finitions variées.',
  },
  {
    icon: TrendingDown,
    title: 'Économies significatives',
    description: 'Réduction de 25 à 40% des déperditions thermiques par les murs.',
  },
]

const techniques = [
  {
    title: 'Bardage ventilé',
    description: 'Parement extérieur avec lame d\'air ventilée, idéal pour les façades techniques.',
    applications: ['Bâtiments tertiaires', 'Façades exposées', 'Rénovation esthétique'],
  },
  {
    title: 'Enduit sur isolant (ETICS)',
    description: 'Isolant collé/fixé avec enduit de finition, solution économique et polyvalente.',
    applications: ['Immeubles résidentiels', 'Bâtiments publics', 'Réhabilitation'],
  },
  {
    title: 'Vêture et vêtage',
    description: 'Éléments de parement préfabriqués intégrant l\'isolant, mise en œuvre rapide.',
    applications: ['Bâtiments industriels', 'Façades modulaires', 'Extension'],
  },
]

const stats = [
  { value: '25-40%', label: 'Réduction des déperditions' },
  { value: '30 ans', label: 'Durée de vie moyenne' },
  { value: '70%', label: 'Financement CEE possible' },
  { value: 'R ≥ 3.7', label: 'Résistance thermique min.' },
]

export function ITE() {
  return (
    <>
      <SEO
        title="Isolation Thermique par l'Extérieur (ITE)"
        description="Installation d'isolation thermique par l'extérieur pour vos bâtiments professionnels. Suppression des ponts thermiques, financement CEE jusqu'à 70%."
        canonical="/solutions/ite"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Layers className="w-4 h-4" />
                Isolation Extérieure
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                ITE - Isolation Thermique par{' '}
                <span className="text-[#D4A84B]">l'Extérieur</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                L'isolation par l'extérieur est la solution la plus efficace pour
                améliorer la performance énergétique de votre bâtiment tout en
                préservant la surface habitable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander un Devis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-[#D4A84B]">{stat.value}</div>
                    <p className="text-white/80 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Avantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Avantages"
            title="Pourquoi choisir l'isolation par l'extérieur ?"
            description="L'ITE offre de nombreux avantages pour la performance et le confort de votre bâtiment."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Techniques Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Techniques"
            title="Les solutions d'ITE adaptées à votre projet"
            description="Plusieurs techniques d'isolation par l'extérieur pour répondre à vos contraintes."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {techniques.map((technique, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">
                    {technique.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed mb-4">
                    {technique.description}
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-xs font-medium text-[#1B4332] mb-2">Applications :</p>
                    <ul className="space-y-1">
                      {technique.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Financement Section */}
      <section className="py-16 md:py-24 bg-[#1B4332]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Financez votre ITE jusqu'à{' '}
                <span className="text-[#D4A84B]">70%</span>
              </h2>
              <p className="mt-4 text-white/80">
                L'isolation par l'extérieur est éligible aux Certificats d'Économies
                d'Énergie (CEE). Nous nous occupons du montage de votre dossier pour
                maximiser vos aides.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Fiche standardisée BAR-EN-102',
                  'Prime bonifiée coup de pouce isolation',
                  'Cumul possible avec autres aides',
                  'Dossier pris en charge par nos équipes',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A84B] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Demandez votre estimation
              </h3>
              <p className="text-[#636e72] mb-6">
                Obtenez gratuitement une estimation du coût de votre projet ITE et du
                montant des aides disponibles.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="w-full group">
                Estimer mon projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Prêt à isoler votre bâtiment par l'extérieur ?"
        description="Nos experts vous accompagnent de l'étude à la réalisation de vos travaux d'ITE."
        primaryCta={{ label: 'Demander un Devis Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default ITE
