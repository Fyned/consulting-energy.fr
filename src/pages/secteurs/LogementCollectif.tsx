import { motion } from 'framer-motion'
import {
  Home,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Users,
  Building2,
  Thermometer,
  Zap,
  Euro,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'

const clientTypes = [
  {
    title: 'Copropriétés',
    description: 'Accompagnement des syndics et conseils syndicaux dans leurs projets de rénovation.',
    icon: Building2,
  },
  {
    title: 'Bailleurs Sociaux',
    description: 'Optimisation énergétique du parc HLM et stratégie patrimoniale.',
    icon: Home,
  },
  {
    title: 'Bailleurs Privés',
    description: 'Mise en conformité et valorisation du patrimoine locatif.',
    icon: Building2,
  },
  {
    title: 'Promoteurs',
    description: 'Études thermiques RE2020 et labels pour projets neufs.',
    icon: Building2,
  },
]

const workTypes = [
  {
    title: 'Isolation Thermique',
    description: 'Façades, toitures, planchers bas',
    savings: '25-40%',
    icon: Thermometer,
  },
  {
    title: 'Chauffage Collectif',
    description: 'Remplacement chaufferie, PAC, réseaux',
    savings: '20-35%',
    icon: Zap,
  },
  {
    title: 'Ventilation',
    description: 'VMC hygroréglable, double flux',
    savings: '10-15%',
    icon: Building2,
  },
  {
    title: 'Menuiseries',
    description: 'Fenêtres, portes, volets',
    savings: '10-20%',
    icon: Building2,
  },
]

const services = [
  {
    icon: Target,
    title: 'Audit Énergétique',
    description: 'Diagnostic complet avec scénarios de travaux et plan de financement.',
  },
  {
    icon: Euro,
    title: 'Ingénierie Financière',
    description: 'Montage CEE, MaPrimeRénov\' Copro, aides locales.',
  },
  {
    icon: Shield,
    title: 'Maîtrise d\'Œuvre',
    description: 'Pilotage des travaux de la conception à la réception.',
  },
  {
    icon: Users,
    title: 'Accompagnement Copropriété',
    description: 'Assistance aux AG, médiation, communication aux copropriétaires.',
  },
]

const stats = [
  { value: '150+', label: 'Copropriétés accompagnées' },
  { value: '10 000+', label: 'Logements rénovés' },
  { value: '35%', label: 'Économies moyennes' },
  { value: '70%', label: 'Aides mobilisées' },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Quelles aides pour la rénovation en copropriété ?',
    answer: 'Les copropriétés peuvent bénéficier de MaPrimeRénov\' Copropriété (jusqu\'à 75% pour les passoires énergétiques), des CEE (bonifications copropriétés fragiles), de l\'éco-PTZ collectif, et des aides locales (ANAH, collectivités). Nous optimisons le plan de financement pour minimiser le reste à charge.',
  },
  {
    id: '2',
    question: 'Comment convaincre les copropriétaires de voter les travaux ?',
    answer: 'Nous accompagnons le conseil syndical dans la préparation de l\'AG : présentation pédagogique des enjeux, chiffrage précis des économies par lot, simulation du reste à charge après aides. Notre expérience montre que 80% des AG votent favorablement avec une bonne préparation.',
  },
  {
    id: '3',
    question: 'Qu\'est-ce qu\'un DPE collectif ?',
    answer: 'Le DPE collectif évalue la performance énergétique globale d\'un immeuble. Obligatoire depuis 2024 pour les copropriétés de plus de 200 lots, il sera obligatoire pour toutes les copropriétés d\'ici 2026. Il conditionne l\'accès à MaPrimeRénov\' Copropriété.',
  },
  {
    id: '4',
    question: 'Combien coûte une rénovation globale en copropriété ?',
    answer: 'Le coût varie de 15 000 à 40 000€ par logement selon l\'ampleur des travaux. Avec les aides (MaPrimeRénov\', CEE, aides locales), le reste à charge peut descendre à 5 000-15 000€ par logement, souvent inférieur aux économies d\'énergie sur 10-15 ans.',
  },
  {
    id: '5',
    question: 'Les bailleurs sociaux sont-ils concernés par le Décret Tertiaire ?',
    answer: 'Non, le Décret Tertiaire ne concerne pas les logements, y compris sociaux. Cependant, les bailleurs sociaux sont soumis à des objectifs spécifiques via leur convention d\'utilité sociale (CUS) et doivent rénover leur parc pour atteindre une étiquette minimum.',
  },
]

const timeline = [
  { phase: 'Phase 1', title: 'Audit', duration: '2-3 mois', desc: 'Diagnostic technique et financier' },
  { phase: 'Phase 2', title: 'Vote AG', duration: '3-6 mois', desc: 'Préparation et accompagnement AG' },
  { phase: 'Phase 3', title: 'Travaux', duration: '6-18 mois', desc: 'Réalisation et suivi de chantier' },
  { phase: 'Phase 4', title: 'Suivi', duration: '1-2 ans', desc: 'Garantie de performance' },
]

export function LogementCollectif() {
  return (
    <>
      <SEO
        title="Rénovation Énergétique Logement Collectif"
        description="Rénovation énergétique des copropriétés et logements sociaux. Audit, ingénierie financière, maîtrise d'œuvre. MaPrimeRénov' Copropriété, CEE."
        canonical="/secteurs/logement-collectif"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#1B4332] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <Container className="relative py-20 lg:py-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Home className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Copropriétés et bailleurs sociaux</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Logement Collectif
              <span className="block text-[#D4A84B]">Rénovation Énergétique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Accompagnement complet des copropriétés et bailleurs dans leurs projets
              de rénovation énergétique : audit, financement, maîtrise d'œuvre.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                href="/contact"
                size="lg"
                className="bg-[#D4A84B] hover:bg-[#c49a3d] text-white"
              >
                Audit Gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('services')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Nos Services
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur">
                  <div className="text-xl md:text-2xl font-bold text-[#D4A84B]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Nos Clients"
            title="Qui accompagnons-nous ?"
            description="Une expertise adaptée à chaque type de propriétaire ou gestionnaire."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {clientTypes.map((client, index) => {
              const Icon = client.icon
              return (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="font-bold text-[#2D3436] mb-2">{client.title}</h3>
                  <p className="text-sm text-[#636e72]">{client.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Work Types */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Types de Travaux"
            title="Les leviers d'économies"
            description="Les principaux postes de rénovation et leur potentiel d'économies."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {workTypes.map((work, index) => {
              const Icon = work.icon
              return (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F8F6F2] rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-[#77C14A] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#77C14A] mb-2">{work.savings}</div>
                  <h3 className="font-bold text-[#2D3436] mb-1">{work.title}</h3>
                  <p className="text-sm text-[#636e72]">{work.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-[#1B4332] text-white">
        <Container>
          <SectionHeading
            eyebrow="Nos Services"
            title="Un accompagnement complet"
            description="De l'audit à la réception des travaux, nous sommes à vos côtés."
            centered
            dark
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-[#D4A84B] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Le Processus"
            title="Les étapes de votre projet"
            description="Un accompagnement structuré de l'audit à la garantie de performance."
            centered
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-4 gap-4">
              {timeline.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-[#77C14A]/30" />
                  )}
                  <div className="relative z-10 bg-white rounded-xl p-4 border-2 border-[#F8F6F2] hover:border-[#77C14A] transition-colors text-center">
                    <div className="text-xs font-semibold text-[#77C14A] mb-1">{step.phase}</div>
                    <h3 className="font-bold text-[#2D3436] mb-1">{step.title}</h3>
                    <p className="text-xs text-[#636e72] mb-2">{step.desc}</p>
                    <div className="text-xs font-medium text-[#1B4332] bg-[#F8F6F2] px-2 py-1 rounded inline-block">
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Financing */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Financements"
                title="Jusqu'à 70% d'aides"
                description="Nous mobilisons toutes les aides pour réduire votre reste à charge."
              />

              <div className="space-y-4 mt-8">
                {[
                  { name: 'MaPrimeRénov\' Copropriété', desc: 'Jusqu\'à 75% pour les passoires énergétiques' },
                  { name: 'CEE Coup de pouce', desc: 'Primes bonifiées pour rénovation globale' },
                  { name: 'Éco-PTZ collectif', desc: 'Prêt à taux zéro jusqu\'à 50 000€/logement' },
                  { name: 'Aides locales', desc: 'Région, département, intercommunalité' },
                ].map((aid, index) => (
                  <motion.div
                    key={aid.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-[#77C14A] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#2D3436]">{aid.name}</span>
                      <p className="text-sm text-[#636e72]">{aid.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                Exemple de financement
              </h3>
              <p className="text-sm text-[#636e72] mb-6">
                Pour une rénovation globale d'une copropriété de 30 logements :
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Coût total des travaux', value: '600 000€' },
                  { label: 'MaPrimeRénov\' Copropriété', value: '-300 000€', highlight: true },
                  { label: 'CEE Coup de pouce', value: '-120 000€', highlight: true },
                  { label: 'Aides locales', value: '-30 000€', highlight: true },
                  { label: 'Reste à charge copropriété', value: '150 000€' },
                  { label: 'Soit par logement', value: '5 000€' },
                ].map((line) => (
                  <div
                    key={line.label}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      line.highlight ? 'bg-[#77C14A]/10' : 'bg-[#F8F6F2]'
                    }`}
                  >
                    <span className={line.highlight ? 'text-[#1B4332]' : 'text-[#636e72]'}>
                      {line.label}
                    </span>
                    <span className={`font-bold ${line.highlight ? 'text-[#77C14A]' : 'text-[#2D3436]'}`}>
                      {line.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Fréquentes"
            description="Les réponses aux questions des copropriétés et bailleurs."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Projet de rénovation pour votre copropriété ?"
        description="Contactez-nous pour un audit gratuit et une estimation des aides mobilisables."
        primaryCta={{ label: 'Audit Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default LogementCollectif
