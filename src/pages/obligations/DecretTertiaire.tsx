import { motion } from 'framer-motion'
import {
  Building2,
  Calendar,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  FileText,
  TrendingDown,
  Users,
  ClipboardCheck,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion, Timeline } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'
import type { TimelineStep } from '@/components/common'

const objectives = [
  { year: '2030', target: '-40%', status: 'active' },
  { year: '2040', target: '-50%', status: 'upcoming' },
  { year: '2050', target: '-60%', status: 'upcoming' },
]

const concernedBuildings = [
  { title: 'Bureaux', description: 'Espaces de travail tertiaires', icon: Building2 },
  { title: 'Commerces', description: 'Surfaces de vente et centres commerciaux', icon: Building2 },
  { title: 'Hôtels', description: 'Établissements hôteliers et hébergements', icon: Building2 },
  { title: 'Établissements de santé', description: 'Cliniques, hôpitaux, maisons de retraite', icon: Building2 },
  { title: 'Enseignement', description: 'Écoles, universités, centres de formation', icon: Building2 },
  { title: 'Bâtiments publics', description: 'Administrations et services publics', icon: Building2 },
]

const processSteps: TimelineStep[] = [
  {
    id: '1',
    title: 'Audit Initial',
    description: 'Analyse complète de vos consommations énergétiques actuelles et identification des équipements.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Définition de la Référence',
    description: 'Choix de l\'année de référence et calcul de la consommation de référence selon la méthodologie ADEME.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Plan d\'Actions',
    description: 'Élaboration d\'un plan de réduction personnalisé avec priorisation des actions selon leur ROI.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Déclaration OPERAT',
    description: 'Saisie et suivi de vos données sur la plateforme officielle de l\'ADEME.',
    status: 'upcoming',
  },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Mon bâtiment est-il concerné par le Décret Tertiaire ?',
    answer: 'Le Décret Tertiaire s\'applique aux bâtiments, ou parties de bâtiments, à usage tertiaire dont la surface cumulée de plancher est supérieure ou égale à 1000 m². Cette surface s\'apprécie au niveau du bâtiment ou de l\'ensemble de bâtiments situés sur une même unité foncière ou sur un même site.',
  },
  {
    id: '2',
    question: 'Quelles sont les sanctions en cas de non-respect ?',
    answer: 'En cas de non-respect des obligations, les sanctions peuvent inclure la publication sur un site de l\'État de la mise en demeure (name and shame), et des amendes pouvant atteindre 7 500€ pour les personnes morales. La conformité est vérifiée annuellement via la plateforme OPERAT.',
  },
  {
    id: '3',
    question: 'Comment est calculée la consommation de référence ?',
    answer: 'La consommation de référence peut être calculée de deux manières : soit à partir d\'une année de référence choisie entre 2010 et 2019 (Cref), soit à partir d\'une valeur absolue définie par arrêté selon la catégorie d\'activité (Cabs). Nous vous aidons à déterminer la méthode la plus avantageuse.',
  },
  {
    id: '4',
    question: 'Qu\'est-ce que la modulation des objectifs ?',
    answer: 'Des modulations des objectifs peuvent être accordées pour des raisons techniques, architecturales, patrimoniales, ou en cas de disproportion économique manifeste. Ces modulations doivent être justifiées et déclarées sur la plateforme OPERAT. Notre expertise vous permet d\'identifier les modulations applicables à votre situation.',
  },
  {
    id: '5',
    question: 'Quand dois-je effectuer ma déclaration sur OPERAT ?',
    answer: 'La déclaration annuelle sur OPERAT doit être effectuée avant le 30 septembre de chaque année pour les données de l\'année précédente. Par exemple, les données 2025 doivent être déclarées avant le 30 septembre 2026. Nous vous accompagnons dans cette déclaration pour garantir sa conformité.',
  },
]

const benefits = [
  {
    icon: TrendingDown,
    title: 'Réduction des Coûts',
    description: 'Diminuez significativement votre facture énergétique grâce aux actions d\'efficacité identifiées.',
  },
  {
    icon: CheckCircle,
    title: 'Conformité Assurée',
    description: 'Évitez les sanctions et le name and shame grâce à un accompagnement rigoureux.',
  },
  {
    icon: FileText,
    title: 'Financement CEE',
    description: 'Optimisez le financement de vos travaux grâce aux certificats d\'économies d\'énergie.',
  },
  {
    icon: Users,
    title: 'Expertise Dédiée',
    description: 'Bénéficiez de l\'accompagnement d\'experts certifiés OPQIBI en performance énergétique.',
  },
]

export function DecretTertiaire() {
  return (
    <>
      <SEO
        title="Décret Tertiaire - Accompagnement Conformité"
        description="Expert en Décret Tertiaire dans le Grand Est. Accompagnement complet : audit énergétique, déclaration OPERAT, plan de réduction -40% en 2030. Bâtiments >1000m²."
        canonical="/obligations/decret-tertiaire"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D3436] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A84B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#52796F]/20 rounded-full blur-2xl" />
        </div>

        <Container className="relative">
          <div className="py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-[#D4A84B] text-sm font-medium rounded-full">
                  Obligation Réglementaire
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm font-medium rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  Échéance Sept. 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Décret Tertiaire
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Réduisez la consommation énergétique de vos bâtiments tertiaires et assurez votre conformité réglementaire avec l'accompagnement de nos experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Évaluer ma Situation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    const element = document.getElementById('objectifs')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Découvrir les Objectifs
                </Button>
              </div>
            </motion.div>

            {/* Objectives Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
            >
              {objectives.map((obj) => (
                <div
                  key={obj.year}
                  className={`text-center p-4 md:p-6 rounded-2xl ${
                    obj.status === 'active'
                      ? 'bg-[#D4A84B] text-white'
                      : 'bg-white/10 backdrop-blur'
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold">{obj.target}</div>
                  <div className={`text-sm ${obj.status === 'active' ? 'text-white/80' : 'text-gray-400'}`}>
                    Objectif {obj.year}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Who is Concerned */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Êtes-vous concerné ?"
            title="Bâtiments de plus de 1000 m²"
            description="Le Décret Tertiaire s'applique aux bâtiments à usage tertiaire dont la surface cumulée dépasse 1000 m². Vérifiez si votre établissement est concerné."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concernedBuildings.map((building, index) => (
              <motion.div
                key={building.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F8F6F2] rounded-xl"
              >
                <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#1B4332]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3436] mb-1">{building.title}</h3>
                  <p className="text-sm text-[#636e72]">{building.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-[#D4A84B]/10 border border-[#D4A84B]/30 rounded-xl"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#D4A84B] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#2D3436] mb-2">
                  Important : Surface cumulée
                </h4>
                <p className="text-[#636e72]">
                  La surface de 1000 m² s'apprécie au niveau de l'ensemble des locaux tertiaires sur une même unité foncière. Même si vos locaux font moins de 1000 m², vous pouvez être concerné si d'autres activités tertiaires sont présentes sur le site.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Objectives Section */}
      <section id="objectifs" className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Objectifs de Réduction"
            title="Un calendrier progressif jusqu'en 2050"
            description="Le Décret Tertiaire impose des objectifs de réduction de consommation énergétique ambitieux mais atteignables avec un accompagnement adapté."
            centered
          />

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress bar background */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2" />

              {/* Progress bar fill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '33%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-[#1B4332] to-[#D4A84B] rounded-full -translate-y-1/2"
              />

              <div className="relative grid grid-cols-3 gap-4">
                {objectives.map((obj, index) => (
                  <motion.div
                    key={obj.year}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center mb-4 ${
                        obj.status === 'active'
                          ? 'bg-[#1B4332] text-white ring-4 ring-[#D4A84B]'
                          : 'bg-white text-[#2D3436] border-2 border-gray-200'
                      }`}
                    >
                      <span className="text-2xl md:text-3xl font-bold">{obj.target}</span>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-[#2D3436]">{obj.year}</div>
                      {obj.status === 'active' && (
                        <span className="text-xs bg-[#D4A84B] text-white px-2 py-0.5 rounded-full">
                          Prochain objectif
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-[#1B4332]" />
                <h3 className="font-semibold text-lg text-[#2D3436]">Méthode Relative (Cref)</h3>
              </div>
              <p className="text-[#636e72]">
                Réduction calculée par rapport à une année de référence choisie entre 2010 et 2019. Idéale si votre bâtiment avait une consommation élevée pendant cette période.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="w-8 h-8 text-[#1B4332]" />
                <h3 className="font-semibold text-lg text-[#2D3436]">Méthode Absolue (Cabs)</h3>
              </div>
              <p className="text-[#636e72]">
                Objectif de consommation défini par arrêté selon votre catégorie d'activité. Recommandée si votre bâtiment était déjà performant avant 2019.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Notre Accompagnement"
            title="Un processus structuré pour votre conformité"
            description="De l'audit initial à la déclaration OPERAT, nous vous guidons à chaque étape de votre mise en conformité."
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <Timeline steps={processSteps} variant="vertical" />
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-[#1B4332] text-white">
        <Container>
          <SectionHeading
            eyebrow="Pourquoi nous choisir ?"
            title="Les avantages de notre accompagnement"
            centered
            dark
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-[#D4A84B] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Questions Fréquentes"
            title="Tout savoir sur le Décret Tertiaire"
            description="Retrouvez les réponses aux questions les plus courantes sur vos obligations réglementaires."
            centered
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* Key Dates */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Calendrier"
            title="Dates clés à retenir"
            centered
          />

          <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F6F2] rounded-xl p-6 text-center"
            >
              <Calendar className="w-10 h-10 text-[#1B4332] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#2D3436] mb-2">30 Sept. 2026</div>
              <p className="text-[#636e72] text-sm">
                Prochaine échéance de déclaration OPERAT pour les données 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#D4A84B]/10 border-2 border-[#D4A84B] rounded-xl p-6 text-center"
            >
              <Target className="w-10 h-10 text-[#D4A84B] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#2D3436] mb-2">2030</div>
              <p className="text-[#636e72] text-sm">
                Premier objectif de réduction : -40% par rapport à la référence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F8F6F2] rounded-xl p-6 text-center"
            >
              <TrendingDown className="w-10 h-10 text-[#1B4332] mx-auto mb-4" />
              <div className="text-2xl font-bold text-[#2D3436] mb-2">2050</div>
              <p className="text-[#636e72] text-sm">
                Objectif final : -60% pour atteindre la neutralité carbone
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

export default DecretTertiaire
