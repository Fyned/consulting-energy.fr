import { motion } from 'framer-motion'
import {
  Factory,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  TrendingDown,
  Settings,
  Thermometer,
  Gauge,
  Wrench,
  BarChart3,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'

const industrialSectors = [
  {
    title: 'Agroalimentaire',
    description: 'Transformation, stockage frigorifique, conditionnement',
    icon: Factory,
  },
  {
    title: 'Métallurgie',
    description: 'Fonderies, forges, traitements thermiques',
    icon: Thermometer,
  },
  {
    title: 'Chimie & Pharmacie',
    description: 'Process de synthèse, salles blanches, utilités',
    icon: Factory,
  },
  {
    title: 'Plasturgie',
    description: 'Injection, extrusion, thermoformage',
    icon: Settings,
  },
  {
    title: 'Papier & Carton',
    description: 'Séchage, calandrage, recyclage',
    icon: Factory,
  },
  {
    title: 'Mécanique',
    description: 'Usinage, assemblage, traitements de surface',
    icon: Wrench,
  },
]

const energyPosts = [
  {
    title: 'Process de production',
    percentage: '60-70%',
    description: 'Fours, séchoirs, machines de production',
    icon: Settings,
  },
  {
    title: 'Air comprimé',
    percentage: '10-15%',
    description: 'Compresseurs, réseau de distribution',
    icon: Gauge,
  },
  {
    title: 'Froid industriel',
    percentage: '10-20%',
    description: 'Groupes froids, chambres froides',
    icon: Thermometer,
  },
  {
    title: 'Utilités',
    percentage: '5-15%',
    description: 'Chauffage, éclairage, ventilation',
    icon: Zap,
  },
]

const solutions = [
  {
    icon: BarChart3,
    title: 'Audit Énergétique Industriel',
    description: 'Analyse détaillée des process et identification des gisements d\'économies.',
  },
  {
    icon: Target,
    title: 'Optimisation des Process',
    description: 'Réglages, maintenance prédictive, récupération de chaleur.',
  },
  {
    icon: Settings,
    title: 'Variateurs de Vitesse',
    description: 'Installation de VEV sur moteurs et compresseurs pour adapter la puissance au besoin.',
  },
  {
    icon: Thermometer,
    title: 'Récupération de Chaleur',
    description: 'Valorisation des rejets thermiques des process et utilités.',
  },
  {
    icon: Gauge,
    title: 'Système de Mesurage',
    description: 'Comptage et monitoring pour piloter la performance énergétique.',
  },
  {
    icon: TrendingDown,
    title: 'Financement CEE',
    description: 'Optimisation des primes CEE industrielles (fiches IND).',
  },
]

const stats = [
  { value: '15-30%', label: 'Économies identifiées' },
  { value: '80+', label: 'Sites industriels' },
  { value: '3-5 ans', label: 'ROI moyen' },
  { value: '50M€', label: 'CEE générés' },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Un site industriel est-il concerné par le Décret Tertiaire ?',
    answer: 'Le Décret Tertiaire concerne uniquement les surfaces à usage tertiaire. Sur un site industriel, seuls les bureaux, locaux administratifs et autres surfaces tertiaires de plus de 1000 m² sont assujettis. Les surfaces de production sont exclues du périmètre.',
  },
  {
    id: '2',
    question: 'Quels sont les principaux leviers d\'économies en industrie ?',
    answer: 'Les principaux leviers sont : la récupération de chaleur sur les process et utilités (10-20% d\'économies), l\'optimisation de l\'air comprimé (30-50% sur ce poste), les variateurs de vitesse sur moteurs (20-40%), l\'isolation des réseaux thermiques, et l\'optimisation des cycles de production.',
  },
  {
    id: '3',
    question: 'L\'audit énergétique industriel est-il obligatoire ?',
    answer: 'L\'audit énergétique est obligatoire pour les grandes entreprises (plus de 250 salariés ou CA > 50 M€) tous les 4 ans. Les sites certifiés ISO 50001 sont exemptés. Au-delà de l\'obligation, l\'audit est un investissement rentable pour identifier des économies significatives.',
  },
  {
    id: '4',
    question: 'Comment financer les investissements industriels ?',
    answer: 'Plusieurs dispositifs permettent de financer vos investissements : les CEE (primes importantes sur les opérations industrielles), le fonds chaleur de l\'ADEME, les aides régionales à l\'industrie, et le dispositif de suramortissement pour les équipements de décarbonation.',
  },
  {
    id: '5',
    question: 'Intervenez-vous pendant la production ?',
    answer: 'Nous adaptons nos interventions à vos contraintes de production. Les audits peuvent être réalisés en période de fonctionnement normal pour être représentatifs. Les travaux sont planifiés lors des arrêts de maintenance ou pendant les périodes de moindre activité.',
  },
]

const ceeOperations = [
  { code: 'IND-UT-102', name: 'Variateur électronique de vitesse', prime: '20-50€/MWh' },
  { code: 'IND-UT-117', name: 'Récupération de chaleur', prime: '25-40€/MWh' },
  { code: 'IND-UT-113', name: 'Isolation de réseaux', prime: '10-20€/ml' },
  { code: 'IND-BA-112', name: 'Système de mesurage', prime: '15-25€/point' },
]

export function Industrie() {
  return (
    <>
      <SEO
        title="Efficacité Énergétique Secteur Industrie"
        description="Accompagnement énergétique du secteur industriel : audits, optimisation des process, récupération de chaleur, financement CEE. Réduisez vos coûts énergétiques."
        canonical="/secteurs/industrie"
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
              <Factory className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Sites industriels et manufacturiers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Secteur Industrie
              <span className="block text-[#D4A84B]">Efficacité Énergétique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Optimisez vos process, réduisez vos consommations et financez vos investissements
              grâce aux CEE. Une expertise dédiée au secteur industriel.
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

      {/* Industrial Sectors */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Secteurs d'Activité"
            title="Tous les secteurs industriels"
            description="Une expertise adaptée aux spécificités de chaque filière industrielle."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industrialSectors.map((sector, index) => {
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
            description="Les principaux postes de consommation énergétique en industrie."
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
            title="Optimisation industrielle"
            description="Des solutions adaptées aux contraintes et enjeux du secteur industriel."
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
            title="Primes industrielles"
            description="Les principales opérations CEE pour le secteur industriel."
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
                title="Spécialistes de l'industrie"
                description="Une équipe d'ingénieurs expérimentés dans l'optimisation énergétique industrielle."
              />

              <div className="space-y-4 mt-8">
                {[
                  'Connaissance des process industriels et de leurs contraintes',
                  'Maîtrise des technologies d\'efficacité énergétique',
                  'Expertise en récupération de chaleur et intégration thermique',
                  'Dimensionnement et optimisation des utilités',
                  'Montage des dossiers CEE industriels',
                  'Accompagnement ISO 50001',
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
                Demander un Audit
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                Notre méthodologie
              </h3>
              <div className="space-y-6">
                {[
                  { num: '1', title: 'Diagnostic', desc: 'Analyse des consommations et des process' },
                  { num: '2', title: 'Identification', desc: 'Gisements d\'économies et solutions techniques' },
                  { num: '3', title: 'Chiffrage', desc: 'Investissements, économies et financements' },
                  { num: '4', title: 'Mise en œuvre', desc: 'Accompagnement travaux et suivi performances' },
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
            description="Les réponses aux questions courantes sur l'accompagnement industriel."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à optimiser votre site industriel ?"
        description="Nos experts analysent vos process et identifient vos gisements d'économies."
        primaryCta={{ label: 'Demander un Audit', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default Industrie
