import { motion } from 'framer-motion'
import {
  Wheat,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  TrendingDown,
  Sun,
  Thermometer,
  Droplets,
  Wind,
  BarChart3,
  Leaf,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'

const agriculturalSectors = [
  {
    title: 'Élevage',
    description: 'Bâtiments d\'élevage, ventilation, chauffage',
    icon: Wheat,
  },
  {
    title: 'Cultures sous serre',
    description: 'Serres maraîchères, horticoles, chauffage',
    icon: Leaf,
  },
  {
    title: 'Stockage',
    description: 'Silos, chambres froides, séchage',
    icon: Wheat,
  },
  {
    title: 'Transformation',
    description: 'Laiteries, caves vinicoles, fromageries',
    icon: Droplets,
  },
  {
    title: 'Irrigation',
    description: 'Pompage, systèmes d\'arrosage',
    icon: Droplets,
  },
  {
    title: 'Bâtiments agricoles',
    description: 'Hangars, ateliers, locaux techniques',
    icon: Wheat,
  },
]

const energyPosts = [
  {
    title: 'Chauffage',
    percentage: '30-50%',
    description: 'Bâtiments d\'élevage, serres',
    icon: Thermometer,
  },
  {
    title: 'Ventilation',
    percentage: '15-25%',
    description: 'Renouvellement d\'air, refroidissement',
    icon: Wind,
  },
  {
    title: 'Froid',
    percentage: '10-20%',
    description: 'Tanks à lait, stockage',
    icon: Thermometer,
  },
  {
    title: 'Éclairage',
    percentage: '5-15%',
    description: 'Bâtiments, parcours extérieurs',
    icon: Zap,
  },
]

const solutions = [
  {
    icon: BarChart3,
    title: 'Audit Énergétique Agricole',
    description: 'Diagnostic complet de vos installations et identification des économies possibles.',
  },
  {
    icon: Sun,
    title: 'Photovoltaïque',
    description: 'Installation de panneaux solaires sur toitures agricoles pour l\'autoconsommation.',
  },
  {
    icon: Thermometer,
    title: 'Récupération de Chaleur',
    description: 'Valorisation de la chaleur des tanks à lait, compresseurs et process.',
  },
  {
    icon: Target,
    title: 'Isolation des Bâtiments',
    description: 'Isolation thermique des bâtiments d\'élevage et de stockage.',
  },
  {
    icon: Wind,
    title: 'Ventilation Optimisée',
    description: 'Systèmes de ventilation performants avec régulation automatique.',
  },
  {
    icon: TrendingDown,
    title: 'Financement CEE',
    description: 'Optimisation des primes CEE agricoles pour vos projets.',
  },
]

const stats = [
  { value: '20-40%', label: 'Économies possibles' },
  { value: '100+', label: 'Exploitations accompagnées' },
  { value: '5-7 ans', label: 'ROI moyen' },
  { value: '2M€', label: 'Aides mobilisées' },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Quelles sont les aides disponibles pour les exploitations agricoles ?',
    answer: 'Les exploitations agricoles peuvent bénéficier de plusieurs aides : les CEE (Certificats d\'Économies d\'Énergie), les aides PCAE (Plan de Compétitivité et d\'Adaptation des Exploitations), les subventions régionales, et le crédit d\'impôt pour la transition énergétique. Le cumul de ces aides peut couvrir jusqu\'à 70% de l\'investissement.',
  },
  {
    id: '2',
    question: 'Le photovoltaïque est-il rentable pour une exploitation agricole ?',
    answer: 'Oui, le photovoltaïque est particulièrement adapté aux exploitations agricoles qui disposent de grandes surfaces de toiture. L\'autoconsommation permet de réduire la facture électrique de 30 à 50%, et le surplus peut être vendu. Avec les aides disponibles, le retour sur investissement est généralement de 7 à 10 ans.',
  },
  {
    id: '3',
    question: 'Comment réduire la consommation énergétique d\'un bâtiment d\'élevage ?',
    answer: 'Les principaux leviers sont : l\'isolation du bâtiment (toiture, murs), l\'optimisation de la ventilation avec des variateurs de vitesse, l\'installation d\'échangeurs de chaleur, le passage à l\'éclairage LED avec gestion automatique, et la récupération de chaleur sur le tank à lait pour les élevages laitiers.',
  },
  {
    id: '4',
    question: 'Les bâtiments agricoles sont-ils concernés par le Décret Tertiaire ?',
    answer: 'Non, les bâtiments à usage strictement agricole (stabulations, serres de production, hangars de stockage) ne sont pas concernés par le Décret Tertiaire. Seuls les locaux administratifs ou commerciaux de plus de 1000 m² seraient assujettis.',
  },
  {
    id: '5',
    question: 'Quelle est la durée d\'un projet de rénovation énergétique agricole ?',
    answer: 'Un projet complet comprend plusieurs phases : l\'audit (2-4 semaines), le montage des dossiers d\'aides (1-2 mois), la réalisation des travaux (variable selon l\'ampleur). Au total, comptez 6 à 12 mois entre le premier contact et la fin des travaux.',
  },
]

const ceeOperations = [
  { code: 'AGRI-TH-104', name: 'Récupérateur de chaleur sur tank à lait', prime: '500-800€' },
  { code: 'AGRI-TH-108', name: 'Échangeur de chaleur air/air', prime: '20-30€/m²' },
  { code: 'AGRI-EQ-101', name: 'Pré-refroidisseur de lait', prime: '200-400€' },
  { code: 'AGRI-BA-101', name: 'Isolation des serres', prime: '5-10€/m²' },
]

export function Agricole() {
  return (
    <>
      <SEO
        title="Efficacité Énergétique Secteur Agricole"
        description="Accompagnement énergétique du secteur agricole : audits, photovoltaïque, isolation, récupération de chaleur, financement CEE. Réduisez vos coûts énergétiques."
        canonical="/secteurs/agricole"
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
              <Wheat className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Exploitations et bâtiments agricoles</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Secteur Agricole
              <span className="block text-[#D4A84B]">Efficacité Énergétique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Optimisez la performance énergétique de votre exploitation agricole et réduisez
              vos charges grâce aux aides disponibles.
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
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('solutions')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Nos Solutions
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

      {/* Agricultural Sectors */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Types d'Exploitation"
            title="Tous les secteurs agricoles"
            description="Une expertise adaptée aux spécificités de chaque type d'exploitation."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {agriculturalSectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <motion.div
                  key={sector.title}
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
                    <h3 className="font-bold text-[#2D3436] mb-1">{sector.title}</h3>
                    <p className="text-sm text-[#636e72]">{sector.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Energy Posts */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Postes de Consommation"
            title="Où agir en priorité ?"
            description="Les principaux postes de consommation énergétique en agriculture."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {energyPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F8F6F2] rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#77C14A] mb-2">{post.percentage}</div>
                  <h3 className="font-bold text-[#2D3436] mb-1">{post.title}</h3>
                  <p className="text-sm text-[#636e72]">{post.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 bg-[#1B4332] text-white">
        <Container>
          <SectionHeading
            eyebrow="Nos Solutions"
            title="Performance énergétique agricole"
            description="Des solutions adaptées aux contraintes et enjeux du secteur agricole."
            centered
            dark
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
                  className="bg-white/10 backdrop-blur rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-[#D4A84B] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-gray-300">{solution.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CEE Operations */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Financement CEE"
            title="Primes agricoles"
            description="Les principales opérations CEE pour le secteur agricole."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-[#F8F6F2] rounded-2xl overflow-hidden">
              {ceeOperations.map((op, index) => (
                <motion.div
                  key={op.code}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 ${
                    index !== ceeOperations.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#77C14A] bg-[#77C14A]/10 px-2 py-1 rounded">
                      {op.code}
                    </span>
                    <span className="font-medium text-[#2D3436]">{op.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1B4332]">{op.prime}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-[#636e72] mt-4">
              Montants indicatifs, variables selon les caractéristiques du projet.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Notre Expertise"
                title="Spécialistes du secteur agricole"
                description="Une équipe expérimentée dans l'accompagnement des exploitations agricoles."
              />

              <div className="space-y-4 mt-8">
                {[
                  'Connaissance des contraintes et cycles agricoles',
                  'Maîtrise des aides spécifiques au secteur (PCAE, CEE)',
                  'Expertise en photovoltaïque sur toitures agricoles',
                  'Solutions de récupération de chaleur adaptées',
                  'Accompagnement complet du diagnostic aux travaux',
                  'Partenaires installateurs qualifiés',
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

              <Button href="/contact" className="mt-8">
                Demander un Diagnostic
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                Notre méthodologie
              </h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Visite & Diagnostic', desc: 'Analyse de vos installations et consommations' },
                  { num: '2', title: 'Préconisations', desc: 'Solutions adaptées et chiffrage détaillé' },
                  { num: '3', title: 'Montage Aides', desc: 'Dossiers CEE, PCAE et autres subventions' },
                  { num: '4', title: 'Suivi Travaux', desc: 'Coordination et réception des travaux' },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-semibold text-[#2D3436]">{step.title}</div>
                      <div className="text-sm text-[#636e72]">{step.desc}</div>
                    </div>
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
            description="Les réponses aux questions courantes sur l'accompagnement agricole."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à optimiser votre exploitation ?"
        description="Nos experts analysent votre exploitation et identifient vos gisements d'économies."
        primaryCta={{ label: 'Diagnostic Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33373982179' }}
      />
    </>
  )
}

export default Agricole
