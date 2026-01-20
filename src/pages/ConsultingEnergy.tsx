import { motion } from 'framer-motion'
import {
  Building2,
  Users,
  Target,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Calculator,
  Wrench,
  TrendingDown,
  Award,
  Shield,
  Lightbulb,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

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

const expertise = [
  {
    icon: Calculator,
    title: 'Étude du Besoin',
    description:
      'Analyse approfondie de votre situation énergétique actuelle et identification des axes d\'amélioration prioritaires.',
  },
  {
    icon: FileCheck,
    title: 'Montage des Dossiers CEE',
    description:
      'Prise en charge complète des dossiers de financement pour maximiser vos aides et réduire votre investissement.',
  },
  {
    icon: Wrench,
    title: 'Coordination des Travaux',
    description:
      'Suivi et pilotage de vos projets de rénovation énergétique avec des artisans qualifiés RGE.',
  },
  {
    icon: TrendingDown,
    title: 'Optimisation des Dépenses',
    description:
      'Solutions sur-mesure pour un gain énergétique rapide et mesurable sur votre facture d\'électricité.',
  },
]

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Un engagement qualité à chaque étape de votre projet.',
  },
  {
    icon: Shield,
    title: 'Transparence',
    description: 'Des conseils objectifs et un accompagnement sans surprise.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Les meilleures solutions techniques adaptées à votre activité.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description: 'Un interlocuteur dédié dans le Grand Est pour vous accompagner.',
  },
]

const commitments = [
  'Audit énergétique gratuit de votre bâtiment',
  'Estimation précise des économies réalisables',
  'Montage complet de vos dossiers CEE',
  'Coordination avec des artisans RGE certifiés',
  'Suivi post-travaux et mesure des performances',
  'Accompagnement sur la plateforme OPERAT',
]

export function ConsultingEnergy() {
  return (
    <>
      <SEO
        title="Consulting Energy | Votre Partenaire en Performance Énergétique"
        description="Bureau d'études spécialisé en rénovation énergétique des bâtiments professionnels dans le Grand Est. Accompagnement complet : études, financement CEE, coordination travaux."
        canonical="/consulting-energy"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                Bureau d'Études en Performance Énergétique
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Réduisez vos{' '}
                <span className="text-[#D4A84B]">consommations énergétiques</span>{' '}
                durablement
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                Nous accompagnons les professionnels dans leurs projets de rénovation
                énergétique afin de réduire durablement leur consommation et leur
                facture d'électricité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander un Diagnostic Gratuit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="/solutions"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#1B4332]"
                >
                  Découvrir nos Solutions
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
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A84B]">70%</div>
                    <p className="text-white/80 mt-2">De vos travaux financés par les CEE</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A84B]">-40%</div>
                    <p className="text-white/80 mt-2">Objectif Décret Tertiaire 2030</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A84B]">100+</div>
                    <p className="text-white/80 mt-2">Projets accompagnés</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-[#D4A84B]">Grand Est</div>
                    <p className="text-white/80 mt-2">Notre zone d'intervention</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Notre Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                subtitle="Notre Mission"
                title="Un accompagnement sur-mesure pour votre transition énergétique"
                align="left"
              />
              <div className="mt-6 space-y-4 text-[#636e72]">
                <p className="text-lg leading-relaxed">
                  <strong className="text-[#2D3436]">Consulting Energy</strong> est un bureau
                  d'études spécialisé dans la performance énergétique des bâtiments
                  professionnels. Implantés dans le Grand Est, nous accompagnons les
                  entreprises, collectivités et gestionnaires immobiliers dans leur
                  transition énergétique.
                </p>
                <p className="leading-relaxed">
                  Nous proposons une <strong>prise en charge complète</strong> de vos
                  projets : étude du besoin, montage des dossiers de financement CEE et
                  coordination des travaux avec des solutions adaptées à chaque activité.
                </p>
                <p className="leading-relaxed">
                  Notre objectif : <strong>optimiser vos dépenses énergétiques</strong>{' '}
                  avec un gain rapide et mesurable, tout en vous accompagnant vers la
                  conformité réglementaire (Décret Tertiaire, Décret BACS).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F8F6F2] rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                Nos Engagements
              </h3>
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#1B4332] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D3436]">{commitment}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Notre Approche Section */}
      <section id="approche" className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Notre Approche"
            title="Une méthodologie éprouvée pour des résultats concrets"
            description="De l'étude initiale à la réalisation des travaux, nous vous accompagnons à chaque étape avec une approche structurée et transparente."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {expertise.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Nos Valeurs Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Nos Valeurs"
            title="Ce qui nous guide au quotidien"
            description="Des principes forts pour un partenariat de confiance avec nos clients."
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[#D4A84B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#D4A84B]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#636e72] text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Pourquoi Nous Choisir Section */}
      <section className="py-16 md:py-24 bg-[#1B4332]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pourquoi choisir{' '}
                <span className="text-[#D4A84B]">Consulting Energy ?</span>
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4A84B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Expertise Réglementaire
                    </h3>
                    <p className="text-white/70 mt-1">
                      Maîtrise complète du Décret Tertiaire, Décret BACS et des
                      dispositifs de financement CEE.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4A84B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Approche Sur-Mesure
                    </h3>
                    <p className="text-white/70 mt-1">
                      Solutions adaptées à votre secteur d'activité et à vos
                      contraintes opérationnelles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#D4A84B] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Accompagnement Complet
                    </h3>
                    <p className="text-white/70 mt-1">
                      De l'audit initial aux travaux, un interlocuteur unique pour
                      simplifier votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Contactez-nous dès maintenant
              </h3>
              <p className="text-[#636e72] mb-6">
                Bénéficiez d'un diagnostic énergétique gratuit et découvrez les
                économies réalisables pour votre bâtiment.
              </p>
              <div className="space-y-4">
                <Button href="/contact" variant="primary" size="lg" className="w-full group">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  href="tel:0373982179"
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  Appeler le 03 73 98 21 79
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à réduire vos consommations énergétiques ?"
        description="Nos experts analysent gratuitement votre situation et vous proposent un plan d'actions personnalisé."
        primaryCta={{ label: 'Obtenir mon Diagnostic Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Découvrir nos Solutions', href: '/solutions' }}
      />
    </>
  )
}

export default ConsultingEnergy
