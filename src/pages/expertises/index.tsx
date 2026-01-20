import { motion } from 'framer-motion'
import {
  Calculator,
  HardHat,
  Coins,
  Users,
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

const expertises = [
  {
    icon: Calculator,
    title: "Bureau d'Études Thermique",
    description: 'Études thermiques, audits énergétiques et diagnostics complets pour optimiser la performance de vos bâtiments.',
    href: '/expertises/bureau-etudes',
    features: ['Audits énergétiques réglementaires', 'Études de faisabilité', 'Dimensionnement des équipements'],
  },
  {
    icon: HardHat,
    title: "Maîtrise d'Œuvre",
    description: 'Pilotage complet de vos projets de rénovation énergétique, de la conception à la réception des travaux.',
    href: '/expertises/maitrise-oeuvre',
    features: ['Coordination des entreprises', 'Suivi de chantier', 'Contrôle qualité'],
  },
  {
    icon: Coins,
    title: 'Financement CEE',
    description: 'Optimisation et montage de vos dossiers CEE pour maximiser vos financements sur les travaux éligibles.',
    href: '/expertises/financement-cee',
    features: ['Montage dossiers complets', 'Valorisation optimisée', 'Suivi jusqu\'au paiement'],
  },
  {
    icon: Users,
    title: 'Accompagnement OPERAT',
    description: 'Gestion complète de vos déclarations sur la plateforme OPERAT pour le Décret Tertiaire.',
    href: '/expertises/accompagnement-operat',
    features: ['Création de compte', 'Déclarations annuelles', 'Suivi des objectifs'],
  },
]

const benefits = [
  {
    title: 'Expertise reconnue',
    description: 'Plus de 10 ans d\'expérience dans la rénovation énergétique.',
  },
  {
    title: 'Accompagnement complet',
    description: 'De l\'étude à la réalisation, un interlocuteur unique.',
  },
  {
    title: 'Conformité garantie',
    description: 'Respect des normes et réglementations en vigueur.',
  },
  {
    title: 'Optimisation financière',
    description: 'Maximisation des aides et subventions disponibles.',
  },
]

export function Expertises() {
  return (
    <>
      <SEO
        title="Nos Expertises en Efficacité Énergétique"
        description="Découvrez nos expertises : bureau d'études thermique, maîtrise d'œuvre, financement CEE et accompagnement OPERAT pour vos projets de rénovation énergétique."
        canonical="/expertises"
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
              Nos Expertises
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              L'expertise au service de{' '}
              <span className="text-[#D4A84B]">votre performance</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
              Une équipe d'experts pour vous accompagner dans tous vos projets
              d'efficacité énergétique : études, travaux, financement et conformité réglementaire.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button href="/contact" variant="secondary" size="lg" className="group">
                Nous Contacter
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

      {/* Expertises Grid */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Nos Domaines"
            title="Des expertises complémentaires"
            description="Chaque expertise répond à un besoin spécifique de votre projet de rénovation énergétique."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mt-12"
          >
            {expertises.map((expertise, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link to={expertise.href}>
                  <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1B4332] transition-colors">
                      <expertise.icon className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D3436] mb-2 group-hover:text-[#1B4332] transition-colors">
                      {expertise.title}
                    </h3>
                    <p className="text-[#636e72] text-sm leading-relaxed mb-4">
                      {expertise.description}
                    </p>
                    <ul className="space-y-2">
                      {expertise.features.map((feature, featureIndex) => (
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
            subtitle="Notre Approche"
            title="Un accompagnement structuré"
            description="Une méthodologie éprouvée pour garantir le succès de votre projet."
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {[
              { step: '01', title: 'Analyse', description: 'Compréhension de vos enjeux et de votre patrimoine.' },
              { step: '02', title: 'Étude', description: 'Diagnostic technique et identification des solutions.' },
              { step: '03', title: 'Action', description: 'Mise en œuvre des solutions et coordination des travaux.' },
              { step: '04', title: 'Suivi', description: 'Mesure des résultats et accompagnement réglementaire.' },
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
        title="Besoin d'un accompagnement expert ?"
        description="Nos spécialistes sont à votre écoute pour analyser votre projet et vous proposer les solutions adaptées."
        primaryCta={{ label: 'Demander un Rendez-vous', href: '/contact' }}
        secondaryCta={{ label: 'Découvrir nos Solutions', href: '/solutions' }}
      />
    </>
  )
}

export default Expertises
