import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  Calendar,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  FileText,
  TrendingDown,
  Building2,
  Factory,
  Zap,
  Euro,
  Search,
  BarChart3,
  Lightbulb,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion, Timeline } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'
import type { TimelineStep } from '@/components/common'

const auditTypes = [
  {
    title: 'Audit Réglementaire',
    description: 'Obligatoire pour les grandes entreprises (>250 salariés ou CA >50M€)',
    icon: FileText,
    deadline: 'Tous les 4 ans',
  },
  {
    title: 'Audit Décret Tertiaire',
    description: 'Pour les bâtiments tertiaires >1000m² dans le cadre de la conformité',
    icon: Building2,
    deadline: 'Recommandé',
  },
  {
    title: 'Audit Volontaire',
    description: 'Pour optimiser vos consommations et réduire vos coûts énergétiques',
    icon: Lightbulb,
    deadline: 'À votre convenance',
  },
]

const auditScope = [
  { title: 'Enveloppe du bâtiment', description: 'Isolation, menuiseries, étanchéité', icon: Building2 },
  { title: 'Systèmes CVC', description: 'Chauffage, ventilation, climatisation', icon: Zap },
  { title: 'Éclairage', description: 'Luminaires, commandes, éclairage naturel', icon: Lightbulb },
  { title: 'Process industriels', description: 'Équipements de production, utilités', icon: Factory },
  { title: 'Eau chaude sanitaire', description: 'Production et distribution ECS', icon: Zap },
  { title: 'Autres usages', description: 'Bureautique, process spécifiques', icon: BarChart3 },
]

const processSteps: TimelineStep[] = [
  {
    id: '1',
    title: 'Collecte des Données',
    description: 'Récupération des factures, plans, et données techniques de vos installations.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Visite de Site',
    description: 'Inspection détaillée des équipements, relevés de mesures et entretiens avec les équipes.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Analyse Énergétique',
    description: 'Modélisation thermique, identification des déperditions et analyse des postes de consommation.',
    status: 'current',
  },
  {
    id: '4',
    title: 'Rapport et Recommandations',
    description: 'Livraison du rapport détaillé avec plan d\'actions priorisé selon le retour sur investissement.',
    status: 'upcoming',
  },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Mon entreprise est-elle concernée par l\'obligation d\'audit ?',
    answer: 'L\'audit énergétique est obligatoire pour les grandes entreprises de plus de 250 salariés ou dont le chiffre d\'affaires annuel dépasse 50 millions d\'euros. Les entreprises certifiées ISO 50001 sont exemptées de cette obligation.',
  },
  {
    id: '2',
    question: 'Quelle est la différence entre un audit et un DPE ?',
    answer: 'Le DPE (Diagnostic de Performance Énergétique) est un diagnostic simplifié donnant une note de A à G. L\'audit énergétique est beaucoup plus approfondi : il analyse en détail tous les postes de consommation et propose un plan d\'actions chiffré avec les économies attendues et les temps de retour sur investissement.',
  },
  {
    id: '3',
    question: 'Combien de temps dure un audit énergétique ?',
    answer: 'La durée dépend de la taille et de la complexité du site. Pour un bâtiment tertiaire standard, comptez 2 à 4 semaines entre le lancement et la remise du rapport. Pour un site industriel complexe, cela peut prendre 6 à 8 semaines.',
  },
  {
    id: '4',
    question: 'Quelles économies peut-on attendre d\'un audit ?',
    answer: 'Un audit bien mené identifie généralement 15 à 30% d\'économies potentielles. Les actions à gain rapide (réglages, comportements) peuvent générer 5 à 10% d\'économies immédiates. Les investissements plus lourds (isolation, remplacement d\'équipements) permettent d\'atteindre les objectifs du Décret Tertiaire.',
  },
  {
    id: '5',
    question: 'L\'audit peut-il être financé ?',
    answer: 'Oui, plusieurs dispositifs permettent de financer votre audit : les CEE (Certificats d\'Économies d\'Énergie), les aides de l\'ADEME via le programme DIAG-ECO, et certaines aides régionales. Nous vous accompagnons pour maximiser ces financements.',
  },
]

const benefits = [
  {
    icon: Search,
    title: 'Vision Complète',
    description: 'Cartographie exhaustive de vos consommations et identification des gisements d\'économies.',
  },
  {
    icon: Euro,
    title: 'ROI Garanti',
    description: 'Plan d\'actions priorisé selon le retour sur investissement pour optimiser votre budget.',
  },
  {
    icon: CheckCircle,
    title: 'Conformité Réglementaire',
    description: 'Audit conforme aux exigences réglementaires (EN 16247) réalisé par un auditeur qualifié.',
  },
  {
    icon: TrendingDown,
    title: 'Réduction des Coûts',
    description: 'Identifiez 15 à 30% d\'économies potentielles sur votre facture énergétique.',
  },
]

export function AuditEnergetique() {
  return (
    <>
      <SEO
        title="Audit Énergétique Réglementaire et Volontaire"
        description="Audit énergétique réglementaire et volontaire pour entreprises et bâtiments tertiaires. Identifiez vos gisements d'économies d'énergie avec nos experts certifiés."
        canonical="/obligations/audit-energetique"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#1B4332] text-white overflow-hidden">
        {/* Background Pattern */}
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
              <ClipboardCheck className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Diagnostic complet de performance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Audit Énergétique
              <span className="block text-[#D4A84B]">Réglementaire et Volontaire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Identifiez vos gisements d'économies d'énergie et construisez votre feuille de route
              vers la performance énergétique avec un audit conforme à la norme EN 16247.
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
                Demander un Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => {
                  const element = document.getElementById('audit-types')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Types d'Audits
              </Button>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
            >
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">15-30%</div>
                <div className="text-sm text-gray-300 mt-1">Économies identifiées</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">4 ans</div>
                <div className="text-sm text-gray-300 mt-1">Validité réglementaire</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-2xl bg-white/10 backdrop-blur">
                <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">EN 16247</div>
                <div className="text-sm text-gray-300 mt-1">Norme européenne</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Audit Types Section */}
      <section id="audit-types" className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Types d'Audits"
            title="Quel audit pour votre situation ?"
            description="Selon votre taille, votre secteur et vos objectifs, différents types d'audits s'offrent à vous."
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {auditTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">{type.title}</h3>
                  <p className="text-[#636e72] mb-4">{type.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-[#D4A84B]" />
                    <span className="font-medium text-[#1B4332]">{type.deadline}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Obligation Alert */}
      <section className="py-12 bg-[#D4A84B]/10">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#D4A84B] rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#2D3436] mb-2">
                Grandes entreprises : audit obligatoire tous les 4 ans
              </h3>
              <p className="text-[#636e72]">
                Les entreprises de plus de 250 salariés ou avec un CA supérieur à 50M€ doivent réaliser
                un audit énergétique réglementaire. L'exemption est possible pour les sites certifiés ISO 50001.
              </p>
            </div>
            <Button href="/contact" className="flex-shrink-0">
              Vérifier mon obligation
            </Button>
          </div>
        </Container>
      </section>

      {/* Audit Scope */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Périmètre"
            title="Ce que couvre notre audit"
            description="Une analyse exhaustive de tous les postes de consommation énergétique de votre bâtiment ou site industriel."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {auditScope.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 p-6 bg-[#F8F6F2] rounded-xl"
                >
                  <div className="w-12 h-12 bg-[#1B4332] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2D3436] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#636e72]">{item.description}</p>
                  </div>
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
            eyebrow="Notre Méthodologie"
            title="Les 4 étapes de votre audit"
            description="Une approche structurée et éprouvée pour un audit de qualité conforme à la norme EN 16247."
            centered
            dark
          />

          <div className="mt-12">
            <Timeline steps={processSteps} />
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Vos Avantages"
            title="Pourquoi réaliser un audit ?"
            description="Au-delà de l'obligation réglementaire, l'audit énergétique est un investissement rentable."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#77C14A]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#77C14A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">{benefit.title}</h3>
                  <p className="text-[#636e72] text-sm">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Livrables"
                title="Ce que vous recevez"
                description="Un rapport complet et opérationnel pour piloter votre stratégie énergétique."
              />

              <div className="space-y-4 mt-8">
                {[
                  'Bilan énergétique détaillé avec répartition par usage',
                  'Analyse des déperditions et points d\'amélioration',
                  'Plan d\'actions priorisé avec chiffrage des investissements',
                  'Estimation des économies et temps de retour sur investissement',
                  'Synthèse exécutive pour la direction',
                  'Attestation de réalisation pour la conformité réglementaire',
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
                Exemple de structure du rapport
              </h3>
              <div className="space-y-4">
                {[
                  { num: '1', title: 'Présentation du site et périmètre', pages: '5-10 pages' },
                  { num: '2', title: 'Analyse des consommations', pages: '15-20 pages' },
                  { num: '3', title: 'Diagnostic technique', pages: '20-30 pages' },
                  { num: '4', title: 'Plan d\'actions et chiffrage', pages: '15-20 pages' },
                  { num: '5', title: 'Annexes techniques', pages: '10-15 pages' },
                ].map((section) => (
                  <div key={section.num} className="flex items-center gap-4 p-4 bg-[#F8F6F2] rounded-lg">
                    <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-white font-bold">
                      {section.num}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[#2D3436]">{section.title}</div>
                    </div>
                    <div className="text-sm text-[#636e72]">{section.pages}</div>
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
            description="Les réponses aux questions les plus courantes sur l'audit énergétique."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à identifier vos économies d'énergie ?"
        description="Nos auditeurs certifiés OPQIBI vous accompagnent pour réaliser un audit complet et conforme à vos obligations."
        primaryCta={{ label: 'Demander un Devis', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default AuditEnergetique
