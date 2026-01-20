import { motion } from 'framer-motion'
import {
  Sun,
  Zap,
  TrendingDown,
  Building2,
  ArrowRight,
  CheckCircle2,
  Battery,
  BarChart3,
  Leaf,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const benefits = [
  {
    icon: TrendingDown,
    title: 'Réduction des factures',
    description: 'Produisez votre propre électricité et réduisez votre dépendance au réseau.',
  },
  {
    icon: Zap,
    title: 'Autoconsommation',
    description: 'Consommez directement l\'électricité que vous produisez en temps réel.',
  },
  {
    icon: Battery,
    title: 'Revente du surplus',
    description: 'Vendez l\'électricité excédentaire à un tarif garanti pendant 20 ans.',
  },
  {
    icon: Leaf,
    title: 'Énergie verte',
    description: 'Réduisez votre empreinte carbone avec une énergie 100% renouvelable.',
  },
  {
    icon: Building2,
    title: 'Valorisation patrimoine',
    description: 'Augmentez la valeur de votre bâtiment avec une installation photovoltaïque.',
  },
  {
    icon: BarChart3,
    title: 'Décret Tertiaire',
    description: 'L\'autoconsommation contribue à vos objectifs de réduction énergétique.',
  },
]

const configurations = [
  {
    title: 'Autoconsommation totale',
    description: 'Toute l\'électricité produite est consommée sur place. Idéal pour les sites avec une consommation constante en journée.',
    pros: ['Économies maximales sur la facture', 'Pas de démarche de revente', 'Simplicité de gestion'],
    ideal: 'Bureaux, commerces, industrie',
  },
  {
    title: 'Autoconsommation avec vente surplus',
    description: 'L\'excédent de production est vendu au réseau. Optimise la rentabilité de l\'installation.',
    pros: ['Revenus complémentaires garantis', 'Tarif de rachat fixé 20 ans', 'Meilleur ROI'],
    ideal: 'Toutes configurations',
  },
  {
    title: 'Vente totale',
    description: 'Toute la production est vendue au réseau. Adapté aux sites avec faible consommation diurne.',
    pros: ['Revenus prévisibles', 'Tarif d\'achat attractif', 'Optimisation fiscale'],
    ideal: 'Toitures disponibles, entrepôts',
  },
]

const process = [
  { step: '01', title: 'Étude de faisabilité', description: 'Analyse du potentiel solaire et dimensionnement optimal.' },
  { step: '02', title: 'Simulation financière', description: 'Estimation des économies et du retour sur investissement.' },
  { step: '03', title: 'Installation', description: 'Mise en œuvre par des installateurs RGE certifiés.' },
  { step: '04', title: 'Raccordement', description: 'Démarches Enedis et mise en service de l\'installation.' },
]

const stats = [
  { value: '20-30%', label: 'Économies sur l\'électricité' },
  { value: '25 ans', label: 'Durée de vie garantie' },
  { value: '6-10 ans', label: 'Retour sur investissement' },
  { value: '30%', label: 'Prime à l\'investissement' },
]

export function Photovoltaique() {
  return (
    <>
      <SEO
        title="Installation Photovoltaïque pour Professionnels"
        description="Installation de panneaux solaires pour entreprises et collectivités. Autoconsommation, vente surplus, financement. Éligible aux primes et CEE."
        canonical="/solutions/photovoltaique"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Sun className="w-4 h-4" />
                Photovoltaïque
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Produisez votre{' '}
                <span className="text-[#D4A84B]">propre électricité</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                L'énergie solaire est une solution durable pour réduire vos coûts
                énergétiques et contribuer à vos objectifs environnementaux.
                Nous vous accompagnons dans votre projet photovoltaïque.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Étudier mon Projet
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
            title="Pourquoi installer des panneaux solaires ?"
            description="Une solution rentable et durable pour votre entreprise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="w-12 h-12 bg-[#D4A84B]/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-[#D4A84B]" />
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

      {/* Configurations Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Configurations"
            title="Quelle solution pour votre projet ?"
            description="Plusieurs modes de valorisation selon votre profil de consommation."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {configurations.map((config, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">
                    {config.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed mb-4">
                    {config.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {config.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                        <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-[#1B4332] font-medium">
                      Idéal pour : {config.ideal}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Notre Accompagnement"
            title="Un projet clé en main"
            description="De l'étude à la mise en service, nous gérons l'ensemble de votre projet."
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-[#D4A84B]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{item.title}</h3>
                <p className="text-[#636e72] text-sm">{item.description}</p>
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
                Des aides pour votre{' '}
                <span className="text-[#D4A84B]">investissement</span>
              </h2>
              <p className="mt-4 text-white/80">
                Plusieurs dispositifs permettent de financer votre installation
                photovoltaïque et d'améliorer sa rentabilité.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Prime à l\'autoconsommation (jusqu\'à 380€/kWc)',
                  'Tarif d\'achat garanti 20 ans pour la vente surplus',
                  'TVA réduite à 10% pour les installations ≤ 3 kWc',
                  'Exonération d\'impôt sur le revenu (conditions)',
                  'CEE pour certaines configurations',
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
              <Sun className="w-12 h-12 text-[#D4A84B] mb-4" />
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Exemple de projet
              </h3>
              <div className="space-y-4 text-[#636e72]">
                <div className="flex justify-between py-2 border-b">
                  <span>Puissance installée</span>
                  <span className="font-medium text-[#2D3436]">100 kWc</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Surface toiture</span>
                  <span className="font-medium text-[#2D3436]">600 m²</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Production annuelle</span>
                  <span className="font-medium text-[#2D3436]">110 000 kWh</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Économies annuelles</span>
                  <span className="font-medium text-[#1B4332]">15 000 €/an</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>ROI estimé</span>
                  <span className="font-medium text-[#1B4332]">7 ans</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="w-full mt-6 group">
                Étudier mon projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Prêt à passer à l'énergie solaire ?"
        description="Nos experts étudient gratuitement le potentiel solaire de votre bâtiment."
        primaryCta={{ label: 'Demander une Étude Gratuite', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default Photovoltaique
