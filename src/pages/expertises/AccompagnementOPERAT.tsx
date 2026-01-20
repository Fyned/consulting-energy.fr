import { motion } from 'framer-motion'
import {
  Users,
  CheckCircle,
  ArrowRight,
  FileText,
  Calendar,
  BarChart3,
  AlertTriangle,
  Target,
  Clock,
  Shield,
  Upload,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion, Timeline } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'
import type { TimelineStep } from '@/components/common'

const services = [
  {
    icon: Upload,
    title: 'Déclaration Initiale',
    description: 'Création de votre compte, rattachement des bâtiments et saisie des données de référence.',
  },
  {
    icon: BarChart3,
    title: 'Saisie Annuelle',
    description: 'Collecte et saisie de vos consommations annuelles avant l\'échéance du 30 septembre.',
  },
  {
    icon: Target,
    title: 'Suivi des Objectifs',
    description: 'Analyse de votre trajectoire et recommandations pour atteindre les jalons réglementaires.',
  },
  {
    icon: FileText,
    title: 'Modulations',
    description: 'Identification et justification des modulations applicables à votre situation.',
  },
]

const processSteps: TimelineStep[] = [
  {
    id: '1',
    title: 'Audit du Patrimoine',
    description: 'Inventaire de vos bâtiments assujettis et collecte des données techniques.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Création des Comptes',
    description: 'Ouverture de votre espace sur OPERAT et rattachement des entités fonctionnelles.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Déclaration Référence',
    description: 'Choix de l\'année de référence et saisie de la consommation de référence.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Déclarations Annuelles',
    description: 'Saisie annuelle des consommations et vérification de la conformité.',
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'Attestations',
    description: 'Génération des attestations annuelles de conformité depuis la plateforme.',
    status: 'upcoming',
  },
]

const deadlines = [
  { year: '2030', reduction: '-40%', status: 'Premier jalon' },
  { year: '2040', reduction: '-50%', status: 'Deuxième jalon' },
  { year: '2050', reduction: '-60%', status: 'Objectif final' },
]

const modulations = [
  {
    type: 'Technique',
    description: 'Contraintes techniques rendant impossible l\'atteinte des objectifs',
    examples: 'Patrimoine historique, contraintes structurelles',
  },
  {
    type: 'Architecturale',
    description: 'Contraintes patrimoniales ou architecturales',
    examples: 'Monuments historiques, façades protégées',
  },
  {
    type: 'Économique',
    description: 'Disproportion manifeste du coût des actions par rapport aux bénéfices',
    examples: 'ROI supérieur à 20 ans',
  },
  {
    type: 'Volume d\'activité',
    description: 'Variation significative du volume d\'activité',
    examples: 'Augmentation de surface, changement d\'usage',
  },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Qu\'est-ce que la plateforme OPERAT ?',
    answer: 'OPERAT (Observatoire de la Performance Énergétique, de la Rénovation et des Actions du Tertiaire) est la plateforme de l\'ADEME où les assujettis au Décret Tertiaire doivent déclarer leurs consommations énergétiques annuelles et suivre leur trajectoire vers les objectifs de réduction.',
  },
  {
    id: '2',
    question: 'Quand dois-je effectuer ma déclaration annuelle ?',
    answer: 'La déclaration annuelle doit être effectuée avant le 30 septembre de chaque année pour les données de l\'année précédente. Par exemple, les consommations 2025 doivent être déclarées avant le 30 septembre 2026.',
  },
  {
    id: '3',
    question: 'Comment choisir mon année de référence ?',
    answer: 'L\'année de référence peut être choisie entre 2010 et 2019. Il est stratégique de choisir l\'année où vos consommations étaient les plus élevées pour faciliter l\'atteinte des objectifs. Nous analysons vos historiques pour identifier la meilleure option.',
  },
  {
    id: '4',
    question: 'Que se passe-t-il si je ne respecte pas les objectifs ?',
    answer: 'En cas de non-respect des objectifs sans justification (modulation), vous risquez une mise en demeure publiée sur un site de l\'État (name and shame) et des amendes pouvant atteindre 7 500€ pour les personnes morales.',
  },
  {
    id: '5',
    question: 'Puis-je demander des modulations ?',
    answer: 'Oui, des modulations sont possibles pour raisons techniques, architecturales, patrimoniales ou économiques. Elles doivent être justifiées et déclarées sur OPERAT. Nous vous accompagnons pour identifier et documenter les modulations applicables.',
  },
  {
    id: '6',
    question: 'Faut-il un compte par bâtiment ?',
    answer: 'Non, un seul compte OPERAT peut gérer plusieurs bâtiments. La plateforme fonctionne par "entités fonctionnelles assujettis" (EFA) qui correspondent aux périmètres de 1000m² ou plus de surface tertiaire.',
  },
]

const advantages = [
  {
    icon: Clock,
    title: 'Gain de Temps',
    description: 'Nous prenons en charge la collecte des données et la saisie sur la plateforme.',
  },
  {
    icon: Shield,
    title: 'Conformité Garantie',
    description: 'Déclarations vérifiées et conformes aux exigences réglementaires.',
  },
  {
    icon: Target,
    title: 'Vision Stratégique',
    description: 'Analyse de votre trajectoire et recommandations pour atteindre vos objectifs.',
  },
  {
    icon: Users,
    title: 'Interlocuteur Dédié',
    description: 'Un référent unique qui connaît votre patrimoine et vos enjeux.',
  },
]

export function AccompagnementOPERAT() {
  return (
    <>
      <SEO
        title="Accompagnement OPERAT - Décret Tertiaire"
        description="Accompagnement complet pour vos déclarations OPERAT dans le cadre du Décret Tertiaire. Saisie annuelle, suivi des objectifs, modulations."
        canonical="/expertises/accompagnement-operat"
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
              <Users className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Plateforme ADEME</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Accompagnement
              <span className="block text-[#D4A84B]">OPERAT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Nous gérons vos déclarations sur la plateforme OPERAT de l'ADEME :
              création de compte, saisie annuelle, suivi des objectifs et modulations.
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
                Nous Confier mes Déclarations
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

            {/* Deadlines */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
            >
              {deadlines.map((deadline, index) => (
                <div
                  key={deadline.year}
                  className={`text-center p-4 md:p-6 rounded-2xl ${
                    index === 0 ? 'bg-[#D4A84B] text-white' : 'bg-white/10 backdrop-blur'
                  }`}
                >
                  <div className="text-2xl md:text-3xl font-bold">{deadline.reduction}</div>
                  <div className="text-sm mt-1">{deadline.year}</div>
                  <div className={`text-xs mt-2 ${index === 0 ? 'text-white/80' : 'text-gray-400'}`}>
                    {deadline.status}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Alert Banner */}
      <section className="py-6 bg-[#D4A84B]/10">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#D4A84B] rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="font-bold text-[#2D3436]">Prochaine échéance : 30 septembre 2026</span>
              <span className="text-[#636e72] ml-2">Déclaration des données 2025</span>
            </div>
            <Button href="/contact" size="sm" className="flex-shrink-0">
              Préparer ma déclaration
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos Services"
            title="Un accompagnement complet"
            description="De la création de votre compte à la génération de vos attestations, nous gérons tout."
            centered
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
                  className="text-center bg-[#F8F6F2] rounded-2xl p-6"
                >
                  <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#2D3436] mb-2">{service.title}</h3>
                  <p className="text-sm text-[#636e72]">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#1B4332]">
        <Container>
          <SectionHeading
            eyebrow="Le Processus"
            title="Les étapes de l'accompagnement"
            description="Un processus structuré pour une conformité sans faille."
            centered
            dark
          />

          <div className="mt-12">
            <Timeline steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* What is OPERAT */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="La Plateforme"
                title="Qu'est-ce qu'OPERAT ?"
              />

              <div className="mt-6 space-y-4">
                <p className="text-[#636e72]">
                  <strong className="text-[#2D3436]">OPERAT</strong> (Observatoire de la Performance Énergétique,
                  de la Rénovation et des Actions du Tertiaire) est la plateforme numérique de l'ADEME
                  dédiée au suivi du Décret Tertiaire.
                </p>
                <p className="text-[#636e72]">
                  Tous les propriétaires et preneurs à bail de bâtiments tertiaires de plus de 1000m²
                  doivent y déclarer leurs consommations énergétiques annuelles et suivre leur progression
                  vers les objectifs de réduction.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Création et gestion des entités fonctionnelles',
                  'Déclaration des consommations par source d\'énergie',
                  'Suivi de la trajectoire vers les objectifs',
                  'Demande de modulations et justificatifs',
                  'Génération des attestations annuelles',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#77C14A]" />
                    <span className="text-[#2D3436]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F8F6F2] to-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">
                Données à déclarer
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Électricité', unit: 'kWh' },
                  { label: 'Gaz naturel', unit: 'kWh PCS' },
                  { label: 'Fioul domestique', unit: 'litres' },
                  { label: 'Réseaux de chaleur/froid', unit: 'kWh' },
                  { label: 'Autres énergies', unit: 'selon type' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-[#2D3436]">{item.label}</span>
                    <span className="text-sm text-[#636e72] bg-[#F8F6F2] px-3 py-1 rounded">{item.unit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modulations Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Modulations"
            title="Ajustement des objectifs"
            description="Dans certains cas, des modulations permettent d'adapter les objectifs à votre situation."
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {modulations.map((mod, index) => (
              <motion.div
                key={mod.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#1B4332] mb-2">Modulation {mod.type}</h3>
                <p className="text-[#636e72] mb-3">{mod.description}</p>
                <div className="text-sm bg-[#F8F6F2] p-3 rounded-lg">
                  <span className="font-medium text-[#2D3436]">Exemples : </span>
                  <span className="text-[#636e72]">{mod.examples}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-[#636e72] mb-4">
              Nous analysons votre situation pour identifier toutes les modulations applicables.
            </p>
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos Atouts"
            title="Pourquoi nous choisir ?"
            description="L'expertise au service de votre conformité réglementaire."
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

      {/* Sanctions Warning */}
      <section className="py-12 bg-red-50">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#2D3436] mb-2">
                Sanctions en cas de non-conformité
              </h3>
              <p className="text-[#636e72]">
                Le non-respect des obligations expose à une mise en demeure publiée sur un site de l'État
                (name and shame) et à des amendes pouvant atteindre <strong>7 500€</strong> pour les personnes morales.
              </p>
            </div>
            <Button href="/contact" className="flex-shrink-0">
              Vérifier ma conformité
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
            description="Les réponses à vos questions sur OPERAT et les déclarations Décret Tertiaire."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Besoin d'aide pour vos déclarations OPERAT ?"
        description="Notre équipe prend en charge l'intégralité de vos déclarations sur la plateforme ADEME."
        primaryCta={{ label: 'Nous Confier mes Déclarations', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default AccompagnementOPERAT
