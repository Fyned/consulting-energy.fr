import { motion } from 'framer-motion'
import {
  Wind,
  Thermometer,
  Droplets,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  Building2,
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
    title: 'VMC Double Flux',
    description: 'Renouvellement d\'air avec récupération de chaleur sur l\'air extrait. Efficacité jusqu\'à 90%.',
    benefits: ['Récupération chaleur', 'Filtration air neuf', 'Économies chauffage'],
    savings: '20-30%',
  },
  {
    icon: Thermometer,
    title: 'VMC Hygroréglable',
    description: 'Débits modulés automatiquement selon l\'humidité pour optimiser les consommations.',
    benefits: ['Régulation automatique', 'Économies énergie', 'Confort adaptatif'],
    savings: '10-20%',
  },
  {
    icon: Droplets,
    title: 'CTA avec récupérateur',
    description: 'Centrale de traitement d\'air avec échangeur thermique pour les grandes installations.',
    benefits: ['Grands volumes', 'Traitement complet', 'Haute efficacité'],
    savings: '25-40%',
  },
  {
    icon: Shield,
    title: 'Ventilation naturelle assistée',
    description: 'Systèmes hybrides combinant ventilation naturelle et mécanique selon les besoins.',
    benefits: ['Faible consommation', 'Exploitation gratuite', 'Confort été'],
    savings: '15-25%',
  },
]

const benefits = [
  {
    icon: Users,
    title: 'Qualité de l\'air',
    description: 'Renouvellement permanent pour un air sain et une meilleure productivité des occupants.',
  },
  {
    icon: TrendingDown,
    title: 'Économies d\'énergie',
    description: 'Récupération de chaleur et débits optimisés pour réduire les consommations.',
  },
  {
    icon: Droplets,
    title: 'Gestion de l\'humidité',
    description: 'Évacuation de l\'humidité pour préserver le bâti et le confort.',
  },
  {
    icon: Shield,
    title: 'Conformité réglementaire',
    description: 'Respect des exigences de renouvellement d\'air des ERP et locaux de travail.',
  },
]

const applications = [
  { sector: 'Bureaux', description: 'VMC double flux ou CTA pour un air neuf filtré et tempéré.' },
  { sector: 'Industrie', description: 'Ventilation process et confort avec récupération de chaleur.' },
  { sector: 'Commerce', description: 'Systèmes adaptés aux flux de clientèle et aux horaires.' },
  { sector: 'Santé', description: 'Ventilation haute performance avec traitement d\'air spécifique.' },
  { sector: 'Restauration', description: 'Extraction cuisine avec compensation air neuf.' },
  { sector: 'Logement collectif', description: 'VMC collective hygroréglable pour optimiser les consommations.' },
]

const stats = [
  { value: '20-40%', label: 'Économies chauffage' },
  { value: '90%', label: 'Rendement récupération' },
  { value: '15 ans', label: 'Durée de vie' },
  { value: '60%', label: 'Financement CEE' },
]

export function VMC() {
  return (
    <>
      <SEO
        title="VMC et Ventilation Performante"
        description="Installation de systèmes de ventilation performants : VMC double flux, hygroréglable, CTA avec récupération. Qualité d'air et économies d'énergie."
        canonical="/solutions/vmc"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Wind className="w-4 h-4" />
                Ventilation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                VMC et systèmes de{' '}
                <span className="text-[#D4A84B]">ventilation performants</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Une ventilation efficace est essentielle pour la qualité de l'air
                et les performances énergétiques de votre bâtiment. Nous vous
                accompagnons dans le choix et l'installation de solutions adaptées.
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
            title="Des systèmes de ventilation adaptés à chaque besoin"
            description="Plusieurs technologies pour optimiser la qualité de l'air et les consommations."
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
                        <span className="px-3 py-1 bg-[#1B4332] text-white text-xs font-medium rounded-full">
                          -{solution.savings}
                        </span>
                      </div>
                      <p className="text-[#636e72] text-sm leading-relaxed mt-2 mb-4">
                        {solution.description}
                      </p>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                            <CheckCircle2 className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                            {benefit}
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

      {/* Bénéfices Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Bénéfices"
            title="Pourquoi optimiser votre ventilation ?"
            description="Des impacts positifs sur la santé, le confort et les économies d'énergie."
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

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Applications"
            title="Des solutions pour tous les secteurs"
            description="Notre expertise couvre tous les types de bâtiments professionnels."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 bg-[#F8F6F2] rounded-lg"
              >
                <Building2 className="w-6 h-6 text-[#1B4332] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#2D3436]">{app.sector}</h3>
                  <p className="text-sm text-[#636e72] mt-1">{app.description}</p>
                </div>
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
                Financez votre ventilation avec les{' '}
                <span className="text-[#D4A84B]">CEE</span>
              </h2>
              <p className="mt-4 text-white/80">
                Les systèmes de ventilation performants sont éligibles aux Certificats
                d'Économies d'Énergie. Plusieurs fiches CEE couvrent ces équipements.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { code: 'BAT-TH-155', label: 'VMC double flux avec récupérateur' },
                  { code: 'BAT-TH-142', label: 'Caisson de ventilation modulante' },
                  { code: 'BAR-TH-125', label: 'VMC double flux (résidentiel)' },
                  { code: 'BAR-TH-127', label: 'VMC hygroréglable type B' },
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
                Demandez votre audit ventilation
              </h3>
              <p className="text-[#636e72] mb-6">
                Nos experts analysent votre installation existante et vous proposent
                les solutions les plus adaptées à votre bâtiment et à vos usages.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="w-full group">
                Demander un Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Besoin d'optimiser votre ventilation ?"
        description="Nos experts analysent votre installation et vous proposent des solutions sur-mesure."
        primaryCta={{ label: 'Demander un Audit Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default VMC
