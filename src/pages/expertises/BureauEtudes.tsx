import { motion } from 'framer-motion'
import {
  Calculator,
  CheckCircle,
  ArrowRight,
  FileText,
  Building2,
  Thermometer,
  BarChart3,
  Cpu,
  Award,
  Target,
  Zap,
  Settings,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'

const services = [
  {
    icon: Thermometer,
    title: 'Études Thermiques RT/RE',
    description: 'Calculs réglementaires RT2012 et RE2020 pour vos projets de construction ou rénovation.',
    features: ['Bbio', 'Cep', 'DH', 'Attestations'],
  },
  {
    icon: Cpu,
    title: 'Simulations Thermiques Dynamiques',
    description: 'Modélisation horaire du comportement thermique de vos bâtiments pour optimiser le confort.',
    features: ['Analyse de confort', 'Dimensionnement CVC', 'Optimisation'],
  },
  {
    icon: BarChart3,
    title: 'Audits Énergétiques',
    description: 'Diagnostics complets conformes à la norme EN 16247 pour identifier vos économies.',
    features: ['Audit réglementaire', 'Audit volontaire', 'Plan d\'actions'],
  },
  {
    icon: FileText,
    title: 'Études de Faisabilité',
    description: 'Analyse technico-économique de vos projets de rénovation énergétique.',
    features: ['Scénarios comparatifs', 'Chiffrage', 'ROI'],
  },
  {
    icon: Target,
    title: 'Accompagnement Décret Tertiaire',
    description: 'Stratégie et plan d\'actions pour atteindre les objectifs -40%, -50%, -60%.',
    features: ['Diagnostic initial', 'Plan d\'actions', 'Suivi OPERAT'],
  },
  {
    icon: Zap,
    title: 'Études CEE',
    description: 'Dimensionnement et calcul des primes CEE pour vos projets d\'efficacité énergétique.',
    features: ['Fiches standardisées', 'Fiches spécifiques', 'Optimisation'],
  },
]

const certifications = [
  { name: 'OPQIBI 1905', description: 'Audit énergétique des bâtiments' },
  { name: 'OPQIBI 1717', description: 'Études thermiques réglementaires' },
  { name: 'OPQIBI 1912', description: 'Maîtrise d\'œuvre en rénovation énergétique' },
  { name: 'RGE', description: 'Reconnu Garant de l\'Environnement' },
]

const methodology = [
  {
    step: '01',
    title: 'Cadrage',
    description: 'Définition du périmètre, des objectifs et collecte des données existantes.',
  },
  {
    step: '02',
    title: 'Analyse',
    description: 'Modélisation, calculs et simulations selon les méthodes appropriées.',
  },
  {
    step: '03',
    title: 'Préconisations',
    description: 'Recommandations techniques chiffrées avec analyse coûts/bénéfices.',
  },
  {
    step: '04',
    title: 'Accompagnement',
    description: 'Support technique pendant la mise en œuvre et le suivi des performances.',
  },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Quand faut-il réaliser une étude thermique RE2020 ?',
    answer: 'L\'étude thermique RE2020 est obligatoire pour tout permis de construire de bâtiment neuf depuis le 1er janvier 2022 (résidentiel) et 2023 (tertiaire). Elle doit être réalisée en amont du dépôt de permis pour obtenir l\'attestation Bbio.',
  },
  {
    id: '2',
    question: 'Quelle est la différence entre STD et étude thermique réglementaire ?',
    answer: 'L\'étude thermique réglementaire (RT/RE) utilise une méthode de calcul conventionnelle pour vérifier la conformité. La STD (Simulation Thermique Dynamique) modélise le comportement réel du bâtiment heure par heure, permettant d\'optimiser le confort et de dimensionner précisément les équipements.',
  },
  {
    id: '3',
    question: 'Intervenez-vous sur des projets de rénovation ?',
    answer: 'Oui, nous intervenons sur tous types de projets : construction neuve, rénovation globale, rénovation par étapes. Pour la rénovation, nous adaptons notre méthodologie avec des audits énergétiques préalables et des études de faisabilité technico-économiques.',
  },
  {
    id: '4',
    question: 'Vos études permettent-elles d\'obtenir des aides financières ?',
    answer: 'Nos qualifications OPQIBI et RGE permettent à nos clients de bénéficier des aides à la rénovation : MaPrimeRénov\', CEE, aides des collectivités. Nous vous accompagnons également dans le montage des dossiers de demande de financement.',
  },
  {
    id: '5',
    question: 'Travaillez-vous avec les architectes et maîtres d\'œuvre ?',
    answer: 'Absolument. Nous collaborons régulièrement avec les architectes, maîtres d\'œuvre et bureaux d\'études techniques. Notre rôle est d\'apporter l\'expertise énergétique en phase conception pour optimiser les choix techniques dès l\'amont du projet.',
  },
]

const projectTypes = [
  { icon: Building2, label: 'Bâtiments tertiaires', count: '200+' },
  { icon: Building2, label: 'Logements collectifs', count: '150+' },
  { icon: Building2, label: 'Sites industriels', count: '80+' },
  { icon: Building2, label: 'Bâtiments publics', count: '70+' },
]

export function BureauEtudes() {
  return (
    <>
      <SEO
        title="Bureau d'Études Thermiques et Énergétiques"
        description="Bureau d'études certifié OPQIBI : études thermiques RT/RE2020, simulations thermiques dynamiques, audits énergétiques. Expertise technique pour vos projets."
        canonical="/expertises/bureau-etudes"
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
              <Calculator className="w-5 h-5 text-[#D4A84B]" />
              <span className="text-sm font-medium">Expertise technique certifiée</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Bureau d'Études
              <span className="block text-[#D4A84B]">Thermiques et Énergétiques</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl"
            >
              Une équipe d'ingénieurs certifiés OPQIBI pour vous accompagner dans vos projets
              de construction et rénovation : études thermiques, audits, simulations.
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
                Demander un Devis
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
              className="mt-16 grid grid-cols-4 gap-4 max-w-3xl"
            >
              {projectTypes.map((type) => (
                <div key={type.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#D4A84B]">{type.count}</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">{type.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Certifications Banner */}
      <section className="py-8 bg-white border-b">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#D4A84B]" />
                <div>
                  <span className="font-bold text-[#1B4332]">{cert.name}</span>
                  <span className="text-sm text-[#636e72] ml-2 hidden md:inline">{cert.description}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Nos Services"
            title="Expertise technique complète"
            description="Une gamme complète de prestations pour répondre à tous vos besoins en ingénierie énergétique."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#77C14A] transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">{service.title}</h3>
                  <p className="text-[#636e72] mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-[#F8F6F2] text-[#1B4332] px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Notre Approche"
            title="Une méthodologie éprouvée"
            description="Un processus structuré pour garantir la qualité et la pertinence de nos études."
            centered
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {methodology.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-[#77C14A]/30" />
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 border-2 border-[#F8F6F2] hover:border-[#77C14A] transition-colors">
                  <div className="text-4xl font-bold text-[#77C14A]/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#636e72]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1B4332] text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Pourquoi Nous"
                title="L'expertise au service de vos projets"
                description="Plus de 15 ans d'expérience en ingénierie énergétique du bâtiment."
                dark
              />

              <div className="space-y-4 mt-8">
                {[
                  'Équipe d\'ingénieurs thermiciens expérimentés',
                  'Qualifications OPQIBI garantissant notre compétence',
                  'Maîtrise des outils de simulation les plus avancés',
                  'Connaissance approfondie des réglementations',
                  'Accompagnement personnalisé de la conception au suivi',
                  'Approche pragmatique orientée résultats',
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
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Années d\'expérience' },
                { value: '500+', label: 'Études réalisées' },
                { value: '98%', label: 'Clients satisfaits' },
                { value: '4', label: 'Qualifications OPQIBI' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#D4A84B]">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Nos Outils"
            title="Technologies et logiciels"
            description="Nous utilisons les outils de référence du marché pour des résultats fiables et précis."
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Pleiades+COMFIE', desc: 'STD & RT/RE' },
              { name: 'DesignBuilder', desc: 'Simulation avancée' },
              { name: 'Perrenoud', desc: 'Calculs RT' },
              { name: 'TRNSYS', desc: 'Systèmes complexes' },
              { name: 'AutoCAD', desc: 'Plans techniques' },
              { name: 'Revit', desc: 'BIM énergétique' },
              { name: 'Excel/VBA', desc: 'Calculs spécifiques' },
              { name: 'Python', desc: 'Analyses de données' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <Settings className="w-8 h-8 text-[#1B4332] mx-auto mb-3" />
                <div className="font-bold text-[#2D3436]">{tool.name}</div>
                <div className="text-sm text-[#636e72]">{tool.desc}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Fréquentes"
            description="Les réponses aux questions les plus courantes sur nos prestations de bureau d'études."
            centered
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Un projet d'étude thermique ?"
        description="Contactez nos ingénieurs pour discuter de votre projet et obtenir un devis personnalisé."
        primaryCta={{ label: 'Demander un Devis', href: '/contact' }}
        secondaryCta={{ label: 'Nous Appeler', href: 'tel:+33788097070' }}
      />
    </>
  )
}

export default BureauEtudes
