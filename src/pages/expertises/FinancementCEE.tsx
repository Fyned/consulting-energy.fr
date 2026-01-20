import { motion } from 'framer-motion'
import {
  FileCheck,
  ArrowRight,
  Euro,
  Building2,
  Factory,
  Zap,
  Calculator,
  Clock,
  Shield,
  FileText,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion, Timeline } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'
import type { TimelineStep } from '@/components/common'

const ceeOperations = [
  {
    category: 'Bâtiment Tertiaire',
    icon: Building2,
    operations: [
      { code: 'BAT-TH-116', name: 'Système de GTB', savings: 'Jusqu\'à 80% du coût' },
      { code: 'BAT-TH-104', name: 'Pompe à chaleur', savings: '20-40€/MWh' },
      { code: 'BAT-TH-102', name: 'Chaudière haute performance', savings: '15-30€/MWh' },
      { code: 'BAT-EN-101', name: 'Isolation des murs', savings: '8-15€/m²' },
      { code: 'BAT-EQ-133', name: 'Luminaires LED', savings: '3-5€/luminaire' },
    ],
  },
  {
    category: 'Industrie',
    icon: Factory,
    operations: [
      { code: 'IND-UT-102', name: 'Variateur de vitesse', savings: '25-50€/MWh' },
      { code: 'IND-UT-117', name: 'Récupération de chaleur', savings: '20-40€/MWh' },
      { code: 'IND-UT-113', name: 'Isolation des réseaux', savings: '10-20€/ml' },
      { code: 'IND-BA-112', name: 'Système de mesurage', savings: '15-25€/point' },
    ],
  },
]

const processSteps: TimelineStep[] = [
  {
    id: '1',
    title: 'Analyse du Projet',
    description: 'Identification des opérations éligibles et estimation du montant des primes CEE.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Montage du Dossier',
    description: 'Constitution du dossier technique avec tous les justificatifs requis.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Validation Préalable',
    description: 'Accord de principe avant le démarrage des travaux - étape obligatoire.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Suivi des Travaux',
    description: 'Contrôle de conformité et collecte des attestations sur l\'honneur.',
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'Versement de la Prime',
    description: 'Dépôt du dossier complet et réception de la prime sous 4-8 semaines.',
    status: 'upcoming',
  },
]

const advantages = [
  {
    icon: Euro,
    title: 'Primes Maximisées',
    description: 'Nous négocions les meilleurs tarifs et optimisons vos dossiers pour maximiser vos primes.',
  },
  {
    icon: Shield,
    title: 'Sécurité Juridique',
    description: 'Dossiers conformes aux exigences réglementaires, validés avant travaux.',
  },
  {
    icon: Clock,
    title: 'Délais Maîtrisés',
    description: 'Processus optimisé pour un versement rapide de vos primes après travaux.',
  },
  {
    icon: FileText,
    title: 'Accompagnement Complet',
    description: 'De l\'identification des opérations au versement de la prime, nous gérons tout.',
  },
]

const sectors = [
  { name: 'Tertiaire', examples: 'Bureaux, commerces, hôtels, santé', icon: Building2 },
  { name: 'Industrie', examples: 'Process, utilités, bâtiments', icon: Factory },
  { name: 'Transport', examples: 'Logistique, entrepôts, flottes', icon: Building2 },
  { name: 'Agriculture', examples: 'Serres, élevages, stockage', icon: Building2 },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Qu\'est-ce que le dispositif des CEE ?',
    answer: 'Les Certificats d\'Économies d\'Énergie (CEE) sont un dispositif qui oblige les fournisseurs d\'énergie à promouvoir les économies d\'énergie. Ils financent des primes pour les travaux d\'efficacité énergétique réalisés par les entreprises et particuliers.',
  },
  {
    id: '2',
    question: 'Quand faut-il déposer le dossier CEE ?',
    answer: 'Le dossier doit impérativement être engagé AVANT le démarrage des travaux. C\'est une condition sine qua non pour l\'éligibilité. Nous vous accompagnons en amont pour sécuriser votre dossier avant la signature des devis.',
  },
  {
    id: '3',
    question: 'Comment est calculé le montant de la prime ?',
    answer: 'Le montant dépend de plusieurs facteurs : le type d\'opération (fiche standardisée), les caractéristiques du site (zone climatique, surface, activité), les performances des équipements installés, et le cours du marché des CEE au moment du dépôt.',
  },
  {
    id: '4',
    question: 'Quelles sont les opérations éligibles ?',
    answer: 'Plus de 200 fiches d\'opérations standardisées couvrent l\'isolation, le chauffage, la ventilation, l\'éclairage, les process industriels, etc. Les opérations spécifiques (hors fiches) peuvent aussi être valorisées avec une étude énergétique préalable.',
  },
  {
    id: '5',
    question: 'Combien de temps pour recevoir la prime ?',
    answer: 'Après réception des travaux et dépôt du dossier complet, le délai moyen est de 4 à 8 semaines pour le versement de la prime. Ce délai peut varier selon la complexité du dossier et le partenaire choisi.',
  },
  {
    id: '6',
    question: 'Peut-on cumuler les CEE avec d\'autres aides ?',
    answer: 'Oui, les CEE sont cumulables avec la plupart des autres aides : MaPrimeRénov\', aides régionales, fonds chaleur ADEME, etc. Nous optimisons le plan de financement global de votre projet.',
  },
]

const stats = [
  { value: '8 Mds€', label: 'Budget CEE annuel en France' },
  { value: '200+', label: 'Fiches standardisées' },
  { value: '2030', label: 'Horizon du dispositif' },
  { value: '1050 TWhc', label: 'Objectif annuel' },
]

export function FinancementCEE() {
  return (
    <>
      <SEO
        title="Financement CEE - Certificats d'Économies d'Énergie"
        description="Optimisez vos primes CEE pour vos projets d'efficacité énergétique. Accompagnement complet du montage à l'obtention de vos Certificats d'Économies d'Énergie."
        canonical="/expertises/financement-cee"
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
              <FileCheck className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Certificats d'Économies d'Énergie</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Financement CEE
              <span className="block text-[#D4A84B]">Optimisez vos Primes</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Maximisez le financement de vos projets d'efficacité énergétique grâce aux
              Certificats d'Économies d'Énergie. Nous gérons l'intégralité de vos dossiers.
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
                Estimer mes Primes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('operations')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Opérations Éligibles
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

      {/* What is CEE Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Le Dispositif"
                title="Qu'est-ce que les CEE ?"
                description="Un mécanisme de financement puissant pour vos travaux d'efficacité énergétique."
              />

              <div className="mt-8 space-y-4">
                <p className="text-[#636e72]">
                  Le dispositif des Certificats d'Économies d'Énergie (CEE) est le principal outil
                  de financement de l'efficacité énergétique en France. Il oblige les fournisseurs
                  d'énergie à financer des actions d'économies d'énergie chez leurs clients.
                </p>
                <p className="text-[#636e72]">
                  Concrètement, cela se traduit par des primes pouvant couvrir 20 à 80% du coût
                  de vos travaux selon les opérations. Ces primes sont cumulables avec les autres
                  aides (MaPrimeRénov', aides régionales...).
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Isolation thermique', icon: Building2 },
                  { label: 'Chauffage performant', icon: Zap },
                  { label: 'Éclairage LED', icon: Zap },
                  { label: 'Régulation/GTB', icon: Calculator },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 bg-[#F8F6F2] rounded-lg">
                    <item.icon className="w-5 h-5 text-[#77C14A]" />
                    <span className="text-sm font-medium text-[#2D3436]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#77C14A]/10 to-[#1B4332]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#2D3436] mb-6">
                La 6ème période CEE (2026-2030)
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Durée', value: '5 ans (2026-2030)' },
                  { label: 'Objectif annuel', value: '~1 050 TWhc cumac' },
                  { label: 'Budget estimé', value: '~8 milliards €/an' },
                  { label: 'Bonifications', value: 'Zones prioritaires, précarité' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-[#636e72]">{item.label}</span>
                    <span className="font-bold text-[#1B4332]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Operations Section */}
      <section id="operations" className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Opérations Éligibles"
            title="Principales fiches CEE"
            description="Les opérations standardisées les plus courantes avec leurs niveaux de prime indicatifs."
            centered
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {ceeOperations.map((category) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#1B4332] rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D3436]">{category.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.operations.map((op) => (
                      <div key={op.code} className="flex items-center justify-between p-3 bg-[#F8F6F2] rounded-lg">
                        <div>
                          <span className="text-xs text-[#77C14A] font-mono">{op.code}</span>
                          <div className="font-medium text-[#2D3436]">{op.name}</div>
                        </div>
                        <div className="text-sm text-[#636e72]">{op.savings}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#636e72] mb-4">
              Plus de 200 opérations standardisées disponibles. Contactez-nous pour une étude personnalisée.
            </p>
            <Button href="/contact">
              Demander une Estimation
            </Button>
          </div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#1B4332]">
        <Container>
          <SectionHeading
            eyebrow="Le Processus"
            title="Comment obtenir vos CEE ?"
            description="Un processus en 5 étapes que nous gérons entièrement pour vous."
            centered
            dark
          />

          <div className="mt-12">
            <Timeline steps={processSteps} />
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-[#D4A84B]/20 text-[#D4A84B] px-6 py-3 rounded-full">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Important : le dossier doit être engagé AVANT les travaux</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Notre Valeur Ajoutée"
            title="Pourquoi nous confier vos CEE ?"
            description="Une expertise dédiée pour maximiser vos primes et sécuriser vos dossiers."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#77C14A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#77C14A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">{advantage.title}</h3>
                  <p className="text-[#636e72] text-sm">{advantage.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Secteurs"
            title="Tous secteurs d'activité"
            description="Nous accompagnons entreprises et collectivités dans tous les domaines."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <Icon className="w-10 h-10 text-[#1B4332] mx-auto mb-4" />
                  <h3 className="font-bold text-[#2D3436] mb-2">{sector.name}</h3>
                  <p className="text-sm text-[#636e72]">{sector.examples}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Simulation CTA */}
      <section className="py-16 bg-gradient-to-r from-[#77C14A] to-[#5fa336]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Estimez vos primes CEE gratuitement
              </h2>
              <p className="text-white/80">
                Envoyez-nous les détails de votre projet, nous vous retournons une estimation sous 48h.
              </p>
            </div>
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-[#1B4332] hover:bg-gray-100 flex-shrink-0"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Demander une Estimation
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Fréquentes"
            description="Tout ce que vous devez savoir sur le dispositif des CEE."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à optimiser vos financements ?"
        description="Notre équipe analyse votre projet et identifie toutes les primes CEE mobilisables."
        primaryCta={{ label: 'Estimer mes Primes', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default FinancementCEE
