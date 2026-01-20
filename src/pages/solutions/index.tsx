import { motion } from 'framer-motion'
import {
  Calculator,
  Layers,
  Home,
  Thermometer,
  Lightbulb,
  Droplets,
  Fan,
  Wind,
  Sun,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'
import { Link } from 'react-router-dom'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const solutions = [
  {
    icon: Calculator,
    title: "Bureau d'Études",
    description: 'Études thermiques, audits énergétiques et accompagnement réglementaire pour optimiser la performance de vos bâtiments.',
    href: '/solutions/bureau-etudes',
    features: ['Audits énergétiques', 'Études thermiques', 'Plans d\'actions'],
  },
  {
    icon: Layers,
    title: 'ITE - Isolation Extérieure',
    description: "Isolation thermique par l'extérieur pour une enveloppe performante sans perte de surface habitable.",
    href: '/solutions/ite',
    features: ['Réduction ponts thermiques', 'Confort été/hiver', 'Valorisation patrimoine'],
  },
  {
    icon: Home,
    title: 'ITI - Isolation Intérieure',
    description: "Isolation thermique par l'intérieur, solution rapide et économique pour améliorer votre confort.",
    href: '/solutions/iti',
    features: ['Installation rapide', 'Coût maîtrisé', 'Efficacité immédiate'],
  },
  {
    icon: Thermometer,
    title: 'Système de Chauffage',
    description: 'Installation et optimisation de systèmes de chauffage performants : pompes à chaleur, chaudières, régulation.',
    href: '/solutions/chauffage',
    features: ['Pompes à chaleur', 'Chaudières haute performance', 'Régulation intelligente'],
  },
  {
    icon: Lightbulb,
    title: 'Éclairage LED',
    description: 'Passage à l\'éclairage basse consommation pour réduire jusqu\'à 80% vos dépenses d\'éclairage.',
    href: '/solutions/eclairage-led',
    features: ['Économies immédiates', 'Durée de vie x10', 'Qualité lumineuse'],
  },
  {
    icon: Droplets,
    title: 'Désembouage',
    description: 'Nettoyage et traitement des circuits de chauffage pour restaurer leur efficacité optimale.',
    href: '/solutions/desembouage',
    features: ['Performance restaurée', 'Durée de vie prolongée', 'Économies d\'énergie'],
  },
  {
    icon: Fan,
    title: 'Déstratificateur d\'Air',
    description: 'Homogénéisation thermique des grands volumes pour un confort optimal et des économies significatives.',
    href: '/solutions/destratificateur',
    features: ['Jusqu\'à 30% d\'économies', 'Confort homogène', 'ROI rapide'],
  },
  {
    icon: Wind,
    title: 'Récupérateur de Chaleur',
    description: 'Récupération de chaleur sur air extrait et HP flottante pour valoriser l\'énergie perdue.',
    href: '/solutions/recuperateur-chaleur',
    features: ['Valorisation énergie', 'Économies chauffage', 'Confort amélioré'],
  },
  {
    icon: Sun,
    title: 'Photovoltaïque',
    description: 'Installation de panneaux solaires pour produire votre propre électricité et réduire vos factures.',
    href: '/solutions/photovoltaique',
    features: ['Autoconsommation', 'Revente surplus', 'Indépendance énergétique'],
  },
  {
    icon: Wind,
    title: 'VMC et Ventilation',
    description: 'Systèmes de ventilation performants pour une qualité d\'air optimale et des économies d\'énergie.',
    href: '/solutions/vmc',
    features: ['Qualité d\'air', 'Récupération chaleur', 'Régulation hygrométrique'],
  },
]

const benefits = [
  {
    title: 'Jusqu\'à 70% de financement CEE',
    description: 'Nos experts maximisent vos aides pour réduire votre investissement.',
  },
  {
    title: 'ROI rapide et mesurable',
    description: 'Des solutions avec un retour sur investissement de 2 à 5 ans.',
  },
  {
    title: 'Accompagnement complet',
    description: 'De l\'étude à la réalisation, un interlocuteur unique.',
  },
  {
    title: 'Artisans RGE qualifiés',
    description: 'Un réseau de partenaires certifiés pour des travaux de qualité.',
  },
]

export function Solutions() {
  return (
    <>
      <SEO
        title="Nos Solutions de Rénovation Énergétique"
        description="Découvrez nos solutions complètes pour réduire vos consommations : isolation ITE/ITI, éclairage LED, déstratificateur d'air, photovoltaïque, chauffage performant."
        canonical="/solutions"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
              Solutions Complètes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Des solutions adaptées à{' '}
              <span className="text-[#D4A84B]">chaque besoin</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              De l'étude technique à la réalisation des travaux, nous proposons une
              gamme complète de solutions pour optimiser la performance énergétique de
              vos bâtiments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button href="/contact" variant="secondary" size="lg" className="group">
                Demander un Diagnostic
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Avantages Section */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-bold text-[#1B4332]">{benefit.title}</h3>
                <p className="text-sm text-[#636e72] mt-1">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Nos Solutions"
            title="Une gamme complète pour votre transition énergétique"
            description="Chaque solution est adaptée à votre secteur d'activité et éligible aux financements CEE."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {solutions.map((solution, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={solution.href}>
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1B4332] transition-colors">
                      <solution.icon className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D3436] mb-2 group-hover:text-[#1B4332] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-[#636e72] text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4A84B] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-[#1B4332] font-medium text-sm group-hover:text-[#D4A84B] transition-colors">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Processus Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Notre Processus"
            title="Un accompagnement en 4 étapes"
            description="Une méthodologie éprouvée pour garantir le succès de votre projet."
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '01', title: 'Diagnostic', description: 'Analyse de vos consommations et identification des gisements d\'économies.' },
              { step: '02', title: 'Préconisations', description: 'Solutions sur-mesure avec estimation des économies et du financement CEE.' },
              { step: '03', title: 'Réalisation', description: 'Coordination des travaux avec nos partenaires RGE qualifiés.' },
              { step: '04', title: 'Suivi', description: 'Mesure des performances et accompagnement OPERAT.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#1B4332]/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{item.title}</h3>
                <p className="text-[#636e72] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Quelle solution pour votre bâtiment ?"
        description="Nos experts analysent gratuitement votre situation et vous recommandent les solutions les plus adaptées."
        primaryCta={{ label: 'Demander un Diagnostic Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Voir nos Obligations', href: '/obligations/decret-tertiaire' }}
      />
    </>
  )
}

export default Solutions
