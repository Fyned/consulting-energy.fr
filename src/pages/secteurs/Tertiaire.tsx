import { motion } from 'framer-motion'
import {
  Building,
  CheckCircle,
  ArrowRight,
  Target,
  Calendar,
  TrendingDown,
  Shield,
  Users,
  Zap,
  ThermometerSun,
  Lightbulb,
  Settings,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'

const buildingTypes = [
  {
    title: 'Bureaux',
    description: 'Sièges sociaux, centres d\'affaires, espaces de coworking',
    challenges: ['Confort thermique', 'Qualité de l\'air', 'Éclairage'],
  },
  {
    title: 'Commerces',
    description: 'Boutiques, centres commerciaux, grandes surfaces',
    challenges: ['Climatisation', 'Éclairage intensif', 'Vitrines'],
  },
  {
    title: 'Hôtellerie',
    description: 'Hôtels, résidences de tourisme, auberges',
    challenges: ['ECS importante', 'Confort 24h/24', 'Blanchisserie'],
  },
  {
    title: 'Santé',
    description: 'Cliniques, cabinets médicaux, maisons de retraite',
    challenges: ['Exigences sanitaires', 'Ventilation', 'Continuité de service'],
  },
  {
    title: 'Restauration',
    description: 'Restaurants, cantines, cuisines centrales',
    challenges: ['Extraction', 'Production de froid', 'Chaleur process'],
  },
  {
    title: 'Enseignement',
    description: 'Écoles privées, centres de formation, universités',
    challenges: ['Occupation variable', 'Grandes surfaces', 'Confort acoustique'],
  },
]

const solutions = [
  {
    icon: Target,
    title: 'Stratégie Décret Tertiaire',
    description: 'Plan d\'actions pour atteindre -40% en 2030, -50% en 2040, -60% en 2050.',
  },
  {
    icon: Settings,
    title: 'Mise en place GTB',
    description: 'Installation de systèmes de gestion technique conforme au Décret BACS.',
  },
  {
    icon: ThermometerSun,
    title: 'Rénovation Thermique',
    description: 'Isolation, menuiseries, traitement des ponts thermiques.',
  },
  {
    icon: Zap,
    title: 'Optimisation CVC',
    description: 'Remplacement ou optimisation des systèmes de chauffage et climatisation.',
  },
  {
    icon: Lightbulb,
    title: 'Éclairage Performant',
    description: 'Passage au LED avec gestion automatisée et détection de présence.',
  },
  {
    icon: TrendingDown,
    title: 'Financement CEE',
    description: 'Maximisation des primes pour réduire votre investissement.',
  },
]

const stats = [
  { value: '1000m²', label: 'Seuil d\'assujettissement' },
  { value: '-40%', label: 'Objectif 2030' },
  { value: '200+', label: 'Bâtiments accompagnés' },
  { value: '25%', label: 'Économies moyennes' },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Mon immeuble de bureaux est-il concerné par le Décret Tertiaire ?',
    answer: 'Si la surface tertiaire cumulée de votre bâtiment ou ensemble de bâtiments sur une même unité foncière atteint ou dépasse 1000 m², vous êtes assujetti au Décret Tertiaire. Cela inclut les bureaux, mais aussi les espaces communs, cafétérias, salles de réunion, etc.',
  },
  {
    id: '2',
    question: 'Comment atteindre les objectifs dans un bâtiment ancien ?',
    answer: 'Les bâtiments anciens peuvent bénéficier de modulations si des contraintes techniques ou patrimoniales empêchent certains travaux. Nous établissons une stratégie sur mesure combinant rénovation progressive, optimisation des équipements et changements de comportements pour atteindre les objectifs réalisables.',
  },
  {
    id: '3',
    question: 'La GTB est-elle obligatoire pour mon commerce ?',
    answer: 'Si vos systèmes de chauffage ou climatisation ont une puissance supérieure à 290 kW, la GTB était obligatoire depuis janvier 2025. Pour les puissances entre 70 et 290 kW, l\'échéance est janvier 2027. Nous vous aidons à vérifier votre situation et à vous mettre en conformité.',
  },
  {
    id: '4',
    question: 'Quel budget prévoir pour une rénovation énergétique tertiaire ?',
    answer: 'Le budget varie considérablement selon l\'état initial, la surface et les objectifs. Comptez de 50 à 300€/m² pour une rénovation globale. Les CEE et autres aides peuvent couvrir 20 à 50% de ce montant. Nous réalisons des études de faisabilité avec chiffrage précis.',
  },
  {
    id: '5',
    question: 'Pouvez-vous intervenir sur un immeuble multi-locataires ?',
    answer: 'Oui, nous avons l\'habitude de gérer les situations complexes avec plusieurs preneurs à bail. Nous coordonnons les déclarations OPERAT, répartissons les responsabilités et proposons des solutions techniques adaptées à chaque configuration.',
  },
]

const references = [
  { type: 'Bureaux', surface: '15 000 m²', reduction: '-32%' },
  { type: 'Centre commercial', surface: '25 000 m²', reduction: '-28%' },
  { type: 'Hôtel 4*', surface: '8 000 m²', reduction: '-35%' },
  { type: 'Clinique', surface: '12 000 m²', reduction: '-24%' },
]

export function Tertiaire() {
  return (
    <>
      <SEO
        title="Performance Énergétique Secteur Tertiaire"
        description="Accompagnement énergétique du secteur tertiaire : bureaux, commerces, hôtels, santé. Décret Tertiaire, Décret BACS, rénovation énergétique."
        canonical="/secteurs/tertiaire"
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
              <Building className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Bureaux, commerces, hôtellerie, santé</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Secteur Tertiaire
              <span className="block text-[#D4A84B]">Performance Énergétique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Conformité Décret Tertiaire et BACS, rénovation énergétique, financement CEE :
              un accompagnement complet pour vos bâtiments tertiaires.
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
                Diagnostic Gratuit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/obligations/decret-tertiaire"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Décret Tertiaire
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

      {/* Building Types */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Types de Bâtiments"
            title="Tous les secteurs tertiaires"
            description="Une expertise adaptée aux spécificités de chaque type de bâtiment."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {buildingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{type.title}</h3>
                <p className="text-sm text-[#636e72] mb-4">{type.description}</p>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#1B4332] uppercase">Enjeux clés</span>
                  <div className="flex flex-wrap gap-2">
                    {type.challenges.map((challenge) => (
                      <span
                        key={challenge}
                        className="text-xs bg-[#F8F6F2] text-[#636e72] px-2 py-1 rounded"
                      >
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Regulatory Context */}
      <section className="py-16 bg-[#1B4332] text-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Contexte Réglementaire
              </h2>
              <p className="text-gray-300 mb-6">
                Le secteur tertiaire est soumis à deux obligations majeures :
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-[#D4A84B]" />
                    <span className="font-semibold">Décret Tertiaire</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Bâtiments &gt;1000m² : réduction des consommations de -40% en 2030, -50% en 2040, -60% en 2050.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Settings className="w-5 h-5 text-[#D4A84B]" />
                    <span className="font-semibold">Décret BACS</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    GTB obligatoire pour les systèmes &gt;290kW (2025) et &gt;70kW (2027).
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { year: '2030', target: '-40%' },
                { year: '2040', target: '-50%' },
                { year: '2050', target: '-60%' },
              ].map((obj, index) => (
                <div
                  key={obj.year}
                  className={`text-center p-4 rounded-xl ${
                    index === 0 ? 'bg-[#D4A84B]' : 'bg-white/10'
                  }`}
                >
                  <div className="text-2xl font-bold">{obj.target}</div>
                  <div className="text-sm mt-1">{obj.year}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos Solutions"
            title="Un accompagnement complet"
            description="De l'audit initial au suivi des performances, nous vous accompagnons à chaque étape."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#77C14A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#77C14A]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3436] mb-1">{solution.title}</h3>
                    <p className="text-sm text-[#636e72]">{solution.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* References */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Références"
            title="Ils nous ont fait confiance"
            description="Quelques exemples de projets accompagnés dans le secteur tertiaire."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {references.map((ref, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-[#77C14A] mb-2">{ref.reduction}</div>
                <div className="font-semibold text-[#2D3436]">{ref.type}</div>
                <div className="text-sm text-[#636e72]">{ref.surface}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Pourquoi Nous"
                title="L'expertise tertiaire"
                description="Plus de 15 ans d'expérience dans l'accompagnement énergétique des bâtiments tertiaires."
              />

              <div className="space-y-4 mt-8">
                {[
                  'Connaissance approfondie des réglementations tertiaires',
                  'Expérience multi-secteurs : bureaux, commerces, hôtels, santé',
                  'Approche pragmatique orientée résultats et ROI',
                  'Maîtrise des spécificités techniques de chaque usage',
                  'Réseau de partenaires qualifiés pour les travaux',
                  'Suivi des performances sur la durée',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#77C14A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D3436]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, value: 'OPQIBI', label: 'Certifié' },
                { icon: Users, value: '200+', label: 'Clients tertiaires' },
                { icon: Target, value: '98%', label: 'Objectifs atteints' },
                { icon: TrendingDown, value: '25%', label: 'Économies moyennes' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#F8F6F2] rounded-2xl p-6 text-center"
                  >
                    <Icon className="w-8 h-8 text-[#1B4332] mx-auto mb-3" />
                    <div className="text-2xl font-bold text-[#1B4332]">{stat.value}</div>
                    <div className="text-sm text-[#636e72]">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Fréquentes"
            description="Les réponses aux questions courantes sur l'accompagnement tertiaire."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Besoin d'accompagnement pour votre bâtiment tertiaire ?"
        description="Contactez-nous pour un diagnostic gratuit et une stratégie personnalisée."
        primaryCta={{ label: 'Diagnostic Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default Tertiaire
