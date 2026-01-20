import { motion } from 'framer-motion'
import {
  Home,
  Clock,
  Euro,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Shield,
  Ruler,
  Wrench,
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
    icon: Clock,
    title: 'Installation rapide',
    description: 'Mise en œuvre plus rapide que l\'ITE, idéale pour les projets avec contraintes de délai.',
  },
  {
    icon: Euro,
    title: 'Coût maîtrisé',
    description: 'Solution plus économique à l\'investissement que l\'isolation par l\'extérieur.',
  },
  {
    icon: Shield,
    title: 'Pas d\'impact sur la façade',
    description: 'L\'aspect extérieur du bâtiment est préservé, adapté aux contraintes patrimoniales.',
  },
  {
    icon: TrendingDown,
    title: 'Efficacité immédiate',
    description: 'Gains énergétiques visibles dès la fin des travaux sur votre facture.',
  },
  {
    icon: Wrench,
    title: 'Travaux par zone',
    description: 'Possibilité d\'isoler par étapes sans perturber l\'ensemble du bâtiment.',
  },
  {
    icon: Ruler,
    title: 'Finitions intégrées',
    description: 'Rénovation des parements intérieurs incluse dans les travaux.',
  },
]

const techniques = [
  {
    title: 'Doublage collé',
    description: 'Complexe isolant (PSE + plaque de plâtre) collé sur le mur existant.',
    pros: ['Mise en œuvre simple', 'Économique', 'Épaisseur réduite'],
    applications: ['Murs sains', 'Rénovation légère'],
  },
  {
    title: 'Doublage sur ossature',
    description: 'Isolant entre montants métalliques avec parement rapporté.',
    pros: ['Correction des irrégularités', 'Passage de gaines', 'Souplesse de mise en œuvre'],
    applications: ['Murs irréguliers', 'Réseaux à intégrer'],
  },
  {
    title: 'Contre-cloison maçonnée',
    description: 'Isolant avec contre-cloison en briques ou carreaux de plâtre.',
    pros: ['Solidité', 'Inertie thermique', 'Durabilité'],
    applications: ['Locaux techniques', 'Sols humides'],
  },
]

const stats = [
  { value: '15-25%', label: 'Réduction des déperditions' },
  { value: '5-15 cm', label: 'Épaisseur isolant' },
  { value: '50%', label: 'Financement CEE possible' },
  { value: 'R ≥ 3.7', label: 'Résistance thermique min.' },
]

export function ITI() {
  return (
    <>
      <SEO
        title="Isolation Thermique par l'Intérieur (ITI)"
        description="Isolation thermique par l'intérieur pour vos bâtiments professionnels. Solution rapide et économique, financement CEE disponible."
        canonical="/solutions/iti"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Isolation Intérieure
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                ITI - Isolation Thermique par{' '}
                <span className="text-[#D4A84B]">l'Intérieur</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                L'isolation par l'intérieur est une solution rapide et économique
                pour améliorer le confort thermique de vos locaux sans modifier
                l'aspect extérieur du bâtiment.
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
            title="Les atouts de l'isolation par l'intérieur"
            description="Une solution adaptée à de nombreuses configurations de bâtiments professionnels."
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
            title="Les solutions d'ITI pour votre projet"
            description="Plusieurs techniques pour répondre à vos contraintes techniques et budgétaires."
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
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[#1B4332] mb-2">Avantages :</p>
                      <ul className="space-y-1">
                        {technique.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                            <CheckCircle2 className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs font-medium text-[#1B4332] mb-2">Applications :</p>
                      <div className="flex flex-wrap gap-2">
                        {technique.applications.map((app, appIndex) => (
                          <span key={appIndex} className="px-2 py-1 bg-[#1B4332]/10 text-[#1B4332] text-xs rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparaison ITE/ITI */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Comparatif"
            title="ITI ou ITE : quelle solution choisir ?"
            description="Le choix dépend de vos contraintes techniques, budgétaires et patrimoniales."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="p-6 border-2 border-[#1B4332]/20">
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">Choisir l'ITI quand...</h3>
              <ul className="space-y-3">
                {[
                  'La façade est protégée (monument historique)',
                  'Le budget est limité',
                  'Les travaux doivent être rapides',
                  'L\'isolation peut se faire par zones',
                  'L\'aspect extérieur doit être préservé',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#636e72]">
                    <CheckCircle2 className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-2 border-[#D4A84B]/20">
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">Privilégier l'ITE quand...</h3>
              <ul className="space-y-3">
                {[
                  'La performance maximale est recherchée',
                  'Les ponts thermiques sont critiques',
                  'La surface intérieure doit être préservée',
                  'Un ravalement est prévu',
                  'Le bâtiment peut être traité globalement',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#636e72]">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/solutions/ite" variant="outline" size="sm" className="mt-6">
                En savoir plus sur l'ITE
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      <CTASection
        title="Besoin de conseils sur votre isolation ?"
        description="Nos experts analysent votre bâtiment et vous recommandent la solution la plus adaptée."
        primaryCta={{ label: 'Demander un Diagnostic', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default ITI
