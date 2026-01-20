import { motion } from 'framer-motion'
import {
  HardHat,
  CheckCircle,
  ArrowRight,
  FileText,
  Building2,
  ClipboardCheck,
  Users,
  Wrench,
  Euro,
  Calendar,
  Shield,
  Target,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion, Timeline } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'
import type { TimelineStep } from '@/components/common'

const missionTypes = [
  {
    icon: FileText,
    title: 'Mission de Base',
    description: 'Conception et suivi de base pour les projets standards.',
    included: ['Études d\'avant-projet', 'DCE', 'Analyse des offres', 'Suivi de chantier'],
  },
  {
    icon: ClipboardCheck,
    title: 'Mission Complète',
    description: 'Accompagnement global de la conception à la réception.',
    included: ['Mission de base', 'Visa des études d\'exécution', 'Direction de chantier', 'OPR'],
  },
  {
    icon: Shield,
    title: 'Mission Étendue',
    description: 'Suivi renforcé avec commissioning et garantie de performance.',
    included: ['Mission complète', 'Commissioning', 'Suivi post-travaux', 'Garantie de résultat'],
  },
]

const projectPhases: TimelineStep[] = [
  {
    id: '1',
    title: 'Études Préliminaires (EP)',
    description: 'Analyse de l\'existant, définition du programme et des objectifs de performance.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Avant-Projet (AVP)',
    description: 'Conception des solutions techniques, estimation budgétaire et planning prévisionnel.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Projet (PRO/DCE)',
    description: 'Études détaillées, spécifications techniques et dossier de consultation des entreprises.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Travaux (ACT/VISA/DET)',
    description: 'Sélection des entreprises, suivi des travaux et coordination des intervenants.',
    status: 'upcoming',
  },
  {
    id: '5',
    title: 'Réception (AOR)',
    description: 'Opérations préalables à la réception, levée des réserves et mise en service.',
    status: 'upcoming',
  },
]

const interventionTypes = [
  {
    title: 'Rénovation Énergétique Globale',
    description: 'Isolation, menuiseries, chauffage, ventilation, éclairage - un projet cohérent.',
    icon: Building2,
  },
  {
    title: 'Remplacement de Chaufferie',
    description: 'Passage aux énergies renouvelables ou systèmes haute performance.',
    icon: Wrench,
  },
  {
    title: 'Installation GTB/GTC',
    description: 'Mise en place de la gestion technique du bâtiment pour le Décret BACS.',
    icon: Target,
  },
  {
    title: 'Rénovation de l\'Éclairage',
    description: 'Passage au LED, gestion automatisée, optimisation de l\'éclairage naturel.',
    icon: Building2,
  },
]

const guarantees = [
  {
    icon: Euro,
    title: 'Maîtrise des Coûts',
    description: 'Budget garanti avec suivi rigoureux et alertes en temps réel sur les dérives.',
  },
  {
    icon: Calendar,
    title: 'Respect des Délais',
    description: 'Planning réaliste et coordination efficace pour tenir les engagements.',
  },
  {
    icon: CheckCircle,
    title: 'Qualité des Travaux',
    description: 'Contrôle qualité en continu et réception avec levée systématique des réserves.',
  },
  {
    icon: Target,
    title: 'Performance Énergétique',
    description: 'Commissioning et suivi post-travaux pour garantir les économies attendues.',
  },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Quelle est la différence entre maîtrise d\'œuvre et maîtrise d\'ouvrage ?',
    answer: 'Le maître d\'ouvrage est le propriétaire du projet (vous). Le maître d\'œuvre est le professionnel qui conçoit et pilote le projet pour votre compte. Nous assurons la maîtrise d\'œuvre, c\'est-à-dire la conception technique et le suivi des travaux.',
  },
  {
    id: '2',
    question: 'Intervenez-vous sur tous types de bâtiments ?',
    answer: 'Nous intervenons principalement sur les bâtiments tertiaires (bureaux, commerces, hôtels), les bâtiments publics et les logements collectifs. Notre expertise couvre la rénovation énergétique et les installations techniques CVC/GTB.',
  },
  {
    id: '3',
    question: 'Comment assurez-vous la coordination des entreprises ?',
    answer: 'Nous organisons des réunions de chantier hebdomadaires, assurons la planification et le suivi d\'avancement, validons les situations de paiement et gérons les interfaces entre corps d\'état. Notre présence régulière sur site garantit une coordination efficace.',
  },
  {
    id: '4',
    question: 'Que comprend le commissioning ?',
    answer: 'Le commissioning (mise en service) comprend les essais de performance des équipements, le réglage des systèmes, la formation des équipes de maintenance et le suivi des consommations sur une année pour garantir les performances attendues.',
  },
  {
    id: '5',
    question: 'Pouvez-vous gérer les aides financières ?',
    answer: 'Oui, nous intégrons dès la conception l\'optimisation des aides : CEE, MaPrimeRénov\', aides régionales. Nous constituons les dossiers de demande et assurons le suivi administratif pour maximiser vos financements.',
  },
]

export function MaitriseOeuvre() {
  return (
    <>
      <SEO
        title="Maîtrise d'Œuvre Rénovation Énergétique"
        description="Maîtrise d'œuvre spécialisée en rénovation énergétique : pilotage de vos projets de la conception à la réception. Qualification OPQIBI."
        canonical="/expertises/maitrise-oeuvre"
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
              <HardHat className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Pilotage de projets</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Maîtrise d'Œuvre
              <span className="block text-[#D4A84B]">Rénovation Énergétique</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              De la conception à la réception, nous pilotons vos projets de rénovation énergétique
              avec une approche rigoureuse garantissant qualité, délais et budget.
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
                Discuter de mon Projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('missions')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Nos Missions
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
            >
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">50M€+</div>
                <div className="text-sm text-gray-300 mt-1">Travaux pilotés</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">98%</div>
                <div className="text-sm text-gray-300 mt-1">Projets dans le budget</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">OPQIBI</div>
                <div className="text-sm text-gray-300 mt-1">Qualification 1912</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission Types Section */}
      <section id="missions" className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Nos Missions"
            title="Un accompagnement adapté à vos besoins"
            description="Trois niveaux de mission pour répondre à la complexité et aux enjeux de votre projet."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {missionTypes.map((mission, index) => {
              const Icon = mission.icon
              return (
                <motion.div
                  key={mission.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">{mission.title}</h3>
                  <p className="text-[#636e72] mb-6">{mission.description}</p>
                  <ul className="space-y-2">
                    {mission.included.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#77C14A]" />
                        <span className="text-[#2D3436]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Project Phases Timeline */}
      <section className="py-20 bg-[#1B4332]">
        <Container>
          <SectionHeading
            eyebrow="Déroulement"
            title="Les phases de votre projet"
            description="Un processus structuré de la définition du besoin à la mise en service."
            centered
            dark
          />

          <div className="mt-12">
            <Timeline steps={projectPhases} />
          </div>
        </Container>
      </section>

      {/* Intervention Types */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Domaines d'Intervention"
            title="Types de projets accompagnés"
            description="Notre expertise couvre l'ensemble des travaux de rénovation énergétique."
            centered
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {interventionTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-[#F8F6F2] rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#77C14A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D3436] mb-1">{type.title}</h3>
                    <p className="text-[#636e72]">{type.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Nos Engagements"
            title="Ce que nous garantissons"
            description="Des engagements concrets pour la réussite de votre projet."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon
              return (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-6 shadow-sm"
                >
                  <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-[#2D3436] mb-2">{guarantee.title}</h3>
                  <p className="text-sm text-[#636e72]">{guarantee.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Our Role Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Notre Rôle"
                title="Votre interlocuteur unique"
                description="Nous coordonnons l'ensemble des intervenants pour vous garantir sérénité et résultats."
              />

              <div className="space-y-6 mt-8">
                {[
                  {
                    title: 'Conception technique',
                    desc: 'Nous définissons les solutions techniques optimales pour atteindre vos objectifs de performance.',
                  },
                  {
                    title: 'Consultation des entreprises',
                    desc: 'Nous rédigeons les cahiers des charges et analysons les offres pour sélectionner les meilleurs prestataires.',
                  },
                  {
                    title: 'Pilotage de chantier',
                    desc: 'Nous coordonnons les travaux, contrôlons la qualité et gérons le planning et le budget.',
                  },
                  {
                    title: 'Réception et mise en service',
                    desc: 'Nous assurons la réception des travaux et le commissioning pour garantir les performances.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="font-bold text-[#2D3436] mb-1">{item.title}</h4>
                    <p className="text-[#636e72]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-[#1B4332] rounded-2xl p-8 text-white">
              <Users className="w-12 h-12 text-[#D4A84B] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Une équipe à votre service</h3>
              <p className="text-gray-300 mb-6">
                Chef de projet dédié, ingénieurs spécialisés, économistes... Une équipe
                pluridisciplinaire mobilisée pour la réussite de votre projet.
              </p>
              <div className="space-y-3">
                {[
                  'Chef de projet MOE',
                  'Ingénieur thermicien',
                  'Économiste de la construction',
                  'Chargé d\'affaires CEE',
                ].map((role) => (
                  <div key={role} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#77C14A]" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
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
            description="Les réponses aux questions sur notre mission de maîtrise d'œuvre."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Un projet de rénovation énergétique ?"
        description="Discutons de votre projet et voyons comment nous pouvons vous accompagner de A à Z."
        primaryCta={{ label: 'Prendre Rendez-vous', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default MaitriseOeuvre
