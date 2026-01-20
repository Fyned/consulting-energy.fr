import { motion } from 'framer-motion'
import {
  Landmark,
  CheckCircle,
  ArrowRight,
  Target,
  Calendar,
  TrendingDown,
  Shield,
  Users,
  Building2,
  GraduationCap,
  Heart,
  Waves,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'

const buildingTypes = [
  {
    title: 'Mairies et Administrations',
    description: 'Hôtels de ville, centres administratifs, maisons de services',
    icon: Landmark,
  },
  {
    title: 'Établissements Scolaires',
    description: 'Écoles, collèges, lycées, centres de formation',
    icon: GraduationCap,
  },
  {
    title: 'Équipements Sportifs',
    description: 'Gymnases, piscines, stades, salles polyvalentes',
    icon: Waves,
  },
  {
    title: 'Équipements Culturels',
    description: 'Médiathèques, salles de spectacle, musées',
    icon: Building2,
  },
  {
    title: 'Établissements de Santé',
    description: 'EHPAD, centres de santé, crèches',
    icon: Heart,
  },
  {
    title: 'Logements Sociaux',
    description: 'Parcs de logements des offices HLM et bailleurs',
    icon: Building2,
  },
]

const obligations = [
  {
    title: 'Décret Tertiaire',
    description: 'Bâtiments publics >1000m² : objectifs de réduction -40% (2030), -50% (2040), -60% (2050)',
    deadline: 'Déclaration OPERAT annuelle',
  },
  {
    title: 'Décret BACS',
    description: 'GTB obligatoire pour systèmes >290kW (2025) et >70kW (2027)',
    deadline: 'Janvier 2027 pour >70kW',
  },
  {
    title: 'SPASER',
    description: 'Schéma de promotion des achats responsables pour les collectivités >100M€',
    deadline: 'Obligatoire depuis 2023',
  },
]

const services = [
  {
    icon: Target,
    title: 'Stratégie Patrimoniale',
    description: 'Diagnostic global du patrimoine et priorisation des actions selon l\'urgence et le ROI.',
  },
  {
    icon: Calendar,
    title: 'Accompagnement OPERAT',
    description: 'Gestion des déclarations annuelles pour l\'ensemble de votre patrimoine.',
  },
  {
    icon: TrendingDown,
    title: 'Plan Pluriannuel',
    description: 'Programmation des investissements sur 5-10 ans avec optimisation des financements.',
  },
  {
    icon: Shield,
    title: 'Montage Financier',
    description: 'Mobilisation des CEE, fonds vert, DSIL, DETR et autres aides publiques.',
  },
]

const stats = [
  { value: '70+', label: 'Collectivités accompagnées' },
  { value: '500+', label: 'Bâtiments publics audités' },
  { value: '15M€', label: 'Aides mobilisées' },
  { value: '30%', label: 'Économies moyennes' },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Quels bâtiments communaux sont concernés par le Décret Tertiaire ?',
    answer: 'Tous les bâtiments à usage tertiaire de plus de 1000 m² sont concernés : mairies, écoles, gymnases, médiathèques, etc. La surface s\'apprécie par bâtiment ou par ensemble de bâtiments sur une même parcelle. Les logements sociaux ne sont pas concernés par ce décret.',
  },
  {
    id: '2',
    question: 'Comment gérer les déclarations OPERAT pour un patrimoine important ?',
    answer: 'Nous proposons un accompagnement mutualisé pour gérer efficacement les déclarations de l\'ensemble de votre patrimoine. Nous centralisons la collecte des données, effectuons les saisies et assurons le suivi de la conformité pour chaque bâtiment.',
  },
  {
    id: '3',
    question: 'Quels financements sont disponibles pour les collectivités ?',
    answer: 'Les collectivités peuvent mobiliser plusieurs sources de financement : CEE (primes importantes), fonds vert (ex-DSIL), DETR, FEDER, contrats de plan État-région, et aides spécifiques des conseils départementaux et régionaux. Nous optimisons le plan de financement global.',
  },
  {
    id: '4',
    question: 'Comment prioriser les travaux sur un patrimoine diversifié ?',
    answer: 'Nous réalisons un diagnostic patrimonial global qui analyse chaque bâtiment selon plusieurs critères : consommation énergétique, état technique, usage, contraintes patrimoniales, potentiel d\'économies et coût des travaux. Cette analyse permet de définir une programmation pluriannuelle optimisée.',
  },
  {
    id: '5',
    question: 'Proposez-vous des Contrats de Performance Énergétique (CPE) ?',
    answer: 'Oui, nous accompagnons les collectivités dans la mise en place de CPE pour les patrimoines importants. Le CPE permet de garantir contractuellement les économies d\'énergie et de les financer par les économies générées, limitant ainsi l\'impact sur le budget.',
  },
]

const financingOptions = [
  { name: 'CEE', description: 'Certificats d\'Économies d\'Énergie', coverage: '20-40%' },
  { name: 'Fonds Vert', description: 'Ex-DSIL rénovation énergétique', coverage: '30-50%' },
  { name: 'DETR', description: 'Dotation d\'équipement des territoires ruraux', coverage: '20-40%' },
  { name: 'FEDER', description: 'Fonds européen de développement régional', coverage: '30-50%' },
]

export function Collectivites() {
  return (
    <>
      <SEO
        title="Collectivités Territoriales - Bâtiments Publics"
        description="Accompagnement énergétique des collectivités : bâtiments publics, écoles, équipements sportifs. Décret Tertiaire, financement, stratégie patrimoniale."
        canonical="/secteurs/collectivites"
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
              <Landmark className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Bâtiments publics et équipements municipaux</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Collectivités
              <span className="block text-[#D4A84B]">Territoriales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Accompagnement global de votre patrimoine public : conformité réglementaire,
              stratégie énergétique et optimisation des financements.
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
                Diagnostic Patrimoine
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('obligations')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Vos Obligations
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
            eyebrow="Patrimoine Public"
            title="Tous vos bâtiments"
            description="Une expertise adaptée à chaque type d'équipement public."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {buildingTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#1B4332]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3436] mb-1">{type.title}</h3>
                    <p className="text-sm text-[#636e72]">{type.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Obligations */}
      <section id="obligations" className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Réglementation"
            title="Vos obligations"
            description="Les principales obligations réglementaires pour les collectivités."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {obligations.map((obligation, index) => (
              <motion.div
                key={obligation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8F6F2] rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-[#1B4332] mb-3">{obligation.title}</h3>
                <p className="text-[#636e72] mb-4">{obligation.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-[#D4A84B]" />
                  <span className="font-medium text-[#2D3436]">{obligation.deadline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#1B4332] text-white">
        <Container>
          <SectionHeading
            eyebrow="Nos Services"
            title="Accompagnement sur mesure"
            description="Des solutions adaptées aux enjeux spécifiques des collectivités."
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

      {/* Financing */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Financements"
            title="Optimisation des aides"
            description="Nous mobilisons toutes les aides disponibles pour vos projets."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {financingOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8F6F2] rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-[#77C14A] mb-2">{option.coverage}</div>
                <h3 className="font-bold text-[#2D3436] mb-1">{option.name}</h3>
                <p className="text-sm text-[#636e72]">{option.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#636e72] mb-4">
              Cumul possible de plusieurs aides pour financer jusqu'à 80% de vos travaux.
            </p>
            <Button href="/contact">
              Estimer mes Financements
            </Button>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Notre Approche"
                title="Une vision globale du patrimoine"
                description="Nous vous accompagnons dans une démarche structurée et progressive."
              />

              <div className="space-y-4 mt-8">
                {[
                  'Diagnostic énergétique global du patrimoine',
                  'Analyse des consommations et benchmarking',
                  'Identification des bâtiments prioritaires',
                  'Définition de la stratégie pluriannuelle',
                  'Recherche et optimisation des financements',
                  'Accompagnement à la mise en œuvre',
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

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                Exemple de programmation
              </h3>
              <div className="space-y-4">
                {[
                  { year: 'Année 1', actions: 'Audit global, quick wins, déclarations OPERAT' },
                  { year: 'Année 2-3', actions: 'Rénovation des bâtiments prioritaires' },
                  { year: 'Année 4-5', actions: 'Extension aux autres bâtiments' },
                  { year: 'Suivi', actions: 'Monitoring et ajustements continus' },
                ].map((step) => (
                  <div key={step.year} className="flex items-start gap-4 p-4 bg-[#F8F6F2] rounded-lg">
                    <div className="font-bold text-[#1B4332] whitespace-nowrap">{step.year}</div>
                    <div className="text-[#636e72]">{step.actions}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-[#636e72]">Ils nous font confiance</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              'Communes',
              'Communautés de communes',
              'Départements',
              'Régions',
              'SDIS',
              'Offices HLM',
            ].map((type) => (
              <div key={type} className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#77C14A]" />
                <span className="font-medium text-[#2D3436]">{type}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Fréquentes"
            description="Les réponses aux questions des collectivités."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Besoin d'accompagnement pour votre collectivité ?"
        description="Contactez-nous pour un diagnostic gratuit de votre patrimoine."
        primaryCta={{ label: 'Diagnostic Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default Collectivites
