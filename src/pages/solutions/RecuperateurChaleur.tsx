import { motion } from 'framer-motion'
import {
  Wind,
  Thermometer,
  TrendingDown,
  Factory,
  ArrowRight,
  CheckCircle2,
  Zap,
  Gauge,
  Recycle,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const solutions = [
  {
    icon: Wind,
    title: 'Récupération sur air extrait',
    description: 'Échangeurs thermiques sur les systèmes de ventilation pour préchauffer l\'air neuf avec l\'air extrait.',
    applications: ['VMC double flux', 'CTA avec récupérateur', 'Process industriels'],
    efficiency: '70-90%',
  },
  {
    icon: Thermometer,
    title: 'HP Flottante (Haute Pression)',
    description: 'Optimisation des groupes froids par régulation de la HP en fonction de la température extérieure.',
    applications: ['Groupes frigorifiques', 'Climatisation', 'Process froid'],
    efficiency: '15-30%',
  },
  {
    icon: Recycle,
    title: 'Récupération sur compresseurs',
    description: 'Valorisation de la chaleur dégagée par les compresseurs d\'air pour le chauffage ou l\'ECS.',
    applications: ['Air comprimé', 'Compresseurs frigorifiques', 'Industrie'],
    efficiency: '50-70%',
  },
  {
    icon: Factory,
    title: 'Récupération sur process',
    description: 'Captation de la chaleur fatale sur les process industriels (fours, étuves, bains...).',
    applications: ['Fours industriels', 'Étuves', 'Bains de traitement'],
    efficiency: '40-60%',
  },
]

const benefits = [
  {
    icon: TrendingDown,
    title: 'Réduction des coûts',
    description: 'Valorisation d\'énergie habituellement perdue pour réduire les factures.',
  },
  {
    icon: Zap,
    title: 'Performance énergétique',
    description: 'Amélioration significative du bilan énergétique du bâtiment.',
  },
  {
    icon: Gauge,
    title: 'Conformité réglementaire',
    description: 'Contribution aux objectifs du Décret Tertiaire et BACS.',
  },
  {
    icon: Recycle,
    title: 'Impact environnemental',
    description: 'Réduction de l\'empreinte carbone par valorisation de l\'énergie.',
  },
]

const stats = [
  { value: '20-50%', label: 'Économies sur le chauffage' },
  { value: '90%', label: 'Rendement récupérateurs' },
  { value: '2-4 ans', label: 'Retour sur investissement' },
  { value: '70%', label: 'Financement CEE possible' },
]

export function RecuperateurChaleur() {
  return (
    <>
      <SEO
        title="Récupérateur de Chaleur et HP Flottante"
        description="Solutions de récupération de chaleur et optimisation HP flottante pour valoriser l'énergie perdue. Financement CEE jusqu'à 70%."
        canonical="/solutions/recuperateur-chaleur"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Wind className="w-4 h-4" />
                Récupération de Chaleur
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Valorisez l'énergie{' '}
                <span className="text-[#D4A84B]">perdue</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Récupérateurs de chaleur et HP flottante : des solutions pour capter
                l'énergie habituellement évacuée et la réutiliser pour chauffer vos
                locaux ou votre eau chaude.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander une Étude
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

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Nos Solutions"
            title="Des technologies adaptées à chaque situation"
            description="Plusieurs approches pour récupérer et valoriser la chaleur perdue dans vos installations."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-7 h-7 text-[#1B4332]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-[#2D3436]">
                          {solution.title}
                        </h3>
                        <span className="px-3 py-1 bg-[#D4A84B]/10 text-[#D4A84B] text-xs font-medium rounded-full">
                          Efficacité {solution.efficiency}
                        </span>
                      </div>
                      <p className="text-[#636e72] text-sm leading-relaxed mt-2 mb-4">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.applications.map((app, appIndex) => (
                          <span key={appIndex} className="px-2 py-1 bg-[#F8F6F2] text-[#636e72] text-xs rounded">
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

      {/* Bénéfices Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Bénéfices"
            title="Pourquoi récupérer la chaleur perdue ?"
            description="Une démarche vertueuse pour l'économie et l'environnement."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 text-center">
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* HP Flottante Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Focus"
                title="HP Flottante : optimisez vos groupes froids"
                align="left"
              />
              <div className="mt-6 space-y-4 text-[#636e72]">
                <p>
                  La régulation en <strong className="text-[#2D3436]">Haute Pression flottante</strong>{' '}
                  permet d'adapter la pression de condensation à la température extérieure,
                  réduisant la consommation des compresseurs frigorifiques.
                </p>
                <p>
                  Cette technique est particulièrement efficace sur les installations de
                  climatisation et de froid commercial où les gains peuvent atteindre
                  15 à 30% de la consommation électrique.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Économies immédiates sans modification majeure',
                  'Compatible avec la plupart des installations existantes',
                  'Éligible aux CEE (fiche BAT-TH-134)',
                  'ROI souvent inférieur à 2 ans',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#2D3436]">
                    <CheckCircle2 className="w-5 h-5 text-[#1B4332] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F6F2] rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Principe de fonctionnement
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1B4332] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-[#636e72] text-sm">
                    Mesure en temps réel de la température extérieure
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1B4332] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-[#636e72] text-sm">
                    Calcul de la pression de condensation optimale
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#1B4332] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-[#636e72] text-sm">
                    Ajustement automatique de la consigne HP
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#D4A84B] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <p className="text-[#636e72] text-sm">
                    Réduction de la consommation électrique des compresseurs
                  </p>
                </div>
              </div>
            </motion.div>
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
                Financez vos projets avec les{' '}
                <span className="text-[#D4A84B]">CEE</span>
              </h2>
              <p className="mt-4 text-white/80">
                Les solutions de récupération de chaleur bénéficient de nombreuses
                fiches CEE pour financer vos projets.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { code: 'BAT-TH-134', label: 'HP flottante sur groupe froid' },
                  { code: 'BAT-TH-155', label: 'Récupérateur sur air extrait (VMC)' },
                  { code: 'IND-UT-117', label: 'Récupération chaleur sur process' },
                  { code: 'IND-UT-103', label: 'Récupération sur compresseur d\'air' },
                ].map((fiche, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <span className="px-2 py-1 bg-[#D4A84B] text-xs font-mono rounded">
                      {fiche.code}
                    </span>
                    <span className="text-white/90">{fiche.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Demandez votre étude gratuite
              </h3>
              <p className="text-[#636e72] mb-6">
                Nos experts identifient les gisements de récupération de chaleur
                dans votre installation et estiment les économies réalisables.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="w-full group">
                Demander une Étude
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="De l'énergie perdue dans vos installations ?"
        description="Nos experts identifient les opportunités de récupération de chaleur pour réduire vos factures."
        primaryCta={{ label: 'Demander une Étude Gratuite', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default RecuperateurChaleur
