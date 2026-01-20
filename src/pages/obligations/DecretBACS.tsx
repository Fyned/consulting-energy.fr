import { motion } from 'framer-motion'
import {
  Gauge,
  Calendar,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Settings,
  Thermometer,
  Zap,
  Clock,
  FileCheck,
  Euro,
} from 'lucide-react'
import { SEO } from '@/components/seo'
import { Container, Button, SectionHeading, Accordion, Timeline } from '@/components/common'
import { CTASection } from '@/components/sections'
import type { AccordionItem } from '@/components/common'
import type { TimelineStep } from '@/components/common'

const deadlines = [
  {
    power: '>290 kW',
    date: '1er janvier 2025',
    status: 'passed',
    description: 'Systèmes CVC de puissance nominale supérieure à 290 kW',
  },
  {
    power: '>70 kW',
    date: '1er janvier 2027',
    status: 'upcoming',
    description: 'Systèmes CVC de puissance nominale supérieure à 70 kW',
  },
]

const gtbFeatures = [
  {
    icon: Thermometer,
    title: 'Régulation Thermique',
    description: 'Contrôle automatique du chauffage et de la climatisation selon l\'occupation et les besoins.',
  },
  {
    icon: Zap,
    title: 'Gestion Énergétique',
    description: 'Suivi en temps réel des consommations et optimisation automatique des équipements.',
  },
  {
    icon: Clock,
    title: 'Programmation Horaire',
    description: 'Planification des plages de fonctionnement adaptée à l\'utilisation réelle des locaux.',
  },
  {
    icon: Settings,
    title: 'Maintenance Prédictive',
    description: 'Détection des anomalies et alertes pour anticiper les interventions techniques.',
  },
]

const gtbClasses = [
  {
    class: 'A',
    name: 'Haute Performance',
    description: 'Systèmes intelligents avec fonctions avancées d\'optimisation et d\'adaptation.',
    features: ['Régulation pièce par pièce', 'Adaptation automatique', 'Détection de présence', 'Analyse prédictive'],
    recommended: true,
  },
  {
    class: 'B',
    name: 'Avancé',
    description: 'Systèmes automatisés avec régulation centralisée et programmation avancée.',
    features: ['Régulation par zone', 'Programmation horaire', 'Suivi des consommations', 'Alertes techniques'],
    recommended: true,
  },
  {
    class: 'C',
    name: 'Standard',
    description: 'Systèmes avec fonctions de base (non conforme au Décret BACS).',
    features: ['Régulation manuelle', 'Programmation simple', 'Pas de suivi automatique'],
    recommended: false,
  },
  {
    class: 'D',
    name: 'Minimal',
    description: 'Absence de système de régulation automatisée.',
    features: ['Aucune automatisation', 'Gestion manuelle uniquement'],
    recommended: false,
  },
]

const processSteps: TimelineStep[] = [
  {
    id: '1',
    title: 'Diagnostic GTB',
    description: 'Évaluation de vos systèmes CVC existants et de leur niveau d\'automatisation actuel.',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Étude de Faisabilité',
    description: 'Analyse des solutions techniques adaptées et chiffrage des investissements nécessaires.',
    status: 'current',
  },
  {
    id: '3',
    title: 'Optimisation CEE',
    description: 'Identification des financements disponibles via les certificats d\'économies d\'énergie (BAT-TH-116).',
    status: 'upcoming',
  },
  {
    id: '4',
    title: 'Mise en Œuvre',
    description: 'Accompagnement dans le déploiement et la mise en service de votre système GTB.',
    status: 'upcoming',
  },
]

const faqItems: AccordionItem[] = [
  {
    id: '1',
    question: 'Qu\'est-ce qu\'un système GTB conforme au Décret BACS ?',
    answer: 'Un système GTB (Gestion Technique du Bâtiment) conforme doit être de classe A ou B selon la norme NF EN ISO 52120-1:2022. Il doit permettre le suivi, l\'enregistrement et l\'analyse des consommations énergétiques, ainsi que la régulation automatique des équipements de chauffage, climatisation et ventilation.',
  },
  {
    id: '2',
    question: 'Mon bâtiment est-il concerné par le Décret BACS ?',
    answer: 'Le Décret BACS concerne les bâtiments tertiaires équipés de systèmes de chauffage, climatisation ou ventilation dont la puissance nominale utile dépasse 290 kW (échéance 2025) ou 70 kW (échéance 2027). Les bâtiments résidentiels ne sont pas concernés.',
  },
  {
    id: '3',
    question: 'Comment financer mon installation GTB ?',
    answer: 'L\'installation d\'un système GTB peut être financée par les Certificats d\'Économies d\'Énergie (CEE) via la fiche BAT-TH-116. Cette aide peut couvrir une part significative de l\'investissement. Nous vous accompagnons pour maximiser vos financements.',
  },
  {
    id: '4',
    question: 'Quelles sont les sanctions en cas de non-conformité ?',
    answer: 'En cas de non-respect des échéances, des sanctions administratives peuvent être appliquées. Au-delà des sanctions, la non-conformité représente surtout un manque à gagner en termes d\'économies d\'énergie : un système GTB performant permet de réduire les consommations de 10 à 25%.',
  },
  {
    id: '5',
    question: 'Quelle est la différence entre GTB et GTC ?',
    answer: 'La GTB (Gestion Technique du Bâtiment) est un système global qui intègre tous les lots techniques (CVC, éclairage, sécurité...). La GTC (Gestion Technique Centralisée) se concentre sur un lot spécifique. Pour la conformité BACS, c\'est la GTB ou au minimum une GTC de classe A ou B sur les systèmes CVC qui est requise.',
  },
]

const benefits = [
  {
    icon: Zap,
    title: '15-25% d\'Économies',
    description: 'Réduction moyenne de la consommation énergétique grâce à l\'automatisation.',
  },
  {
    icon: Euro,
    title: 'Financement CEE',
    description: 'Fiche BAT-TH-116 pour financer votre installation GTB.',
  },
  {
    icon: CheckCircle,
    title: 'Conformité Réglementaire',
    description: 'Respect des obligations du Décret BACS et du Décret Tertiaire.',
  },
  {
    icon: Settings,
    title: 'Maintenance Optimisée',
    description: 'Détection précoce des anomalies et réduction des coûts de maintenance.',
  },
]

export function DecretBACS() {
  return (
    <>
      <SEO
        title="Décret BACS - Installation GTB Obligatoire"
        description="Expert en Décret BACS dans le Grand Est. Installation de systèmes GTB classe A/B, financement CEE, accompagnement complet. Échéance janvier 2027 pour systèmes >70kW."
        canonical="/obligations/decret-bacs"
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
                  GTB Obligatoire
                </span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 text-sm font-medium rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  Échéance Janv. 2027
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Décret BACS
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Équipez vos bâtiments d'un système de Gestion Technique du Bâtiment (GTB) conforme et bénéficiez d'économies d'énergie significatives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Évaluer ma Conformité
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => {
                    const element = document.getElementById('classes-gtb')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Comprendre les Classes GTB
                </Button>
              </div>
            </motion.div>

            {/* Deadlines Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-16 grid md:grid-cols-2 gap-6 max-w-2xl"
            >
              {deadlines.map((deadline) => (
                <div
                  key={deadline.power}
                  className={`p-6 rounded-2xl ${
                    deadline.status === 'passed'
                      ? 'bg-gray-500/20 border border-gray-500/30'
                      : 'bg-[#D4A84B] text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5" />
                    <span className="font-semibold">{deadline.power}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{deadline.date}</div>
                  <p className={`text-sm ${deadline.status === 'passed' ? 'text-gray-400' : 'text-white/80'}`}>
                    {deadline.description}
                  </p>
                  {deadline.status === 'passed' && (
                    <span className="inline-block mt-2 text-xs bg-gray-500/30 px-2 py-0.5 rounded">
                      Échéance passée
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What is GTB */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Système GTB"
            title="Qu'est-ce que la Gestion Technique du Bâtiment ?"
            description="La GTB est un système intelligent qui centralise le pilotage de vos équipements techniques pour optimiser le confort et réduire les consommations."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gtbFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8F6F2] rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-[#2D3436] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#636e72]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* GTB Classes */}
      <section id="classes-gtb" className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Norme NF EN ISO 52120-1"
            title="Les classes de performance GTB"
            description="Le Décret BACS impose l'installation d'un système GTB de classe A ou B. Découvrez les caractéristiques de chaque classe."
            centered
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gtbClasses.map((gtb, index) => (
              <motion.div
                key={gtb.class}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-6 ${
                  gtb.recommended
                    ? 'ring-2 ring-[#1B4332] shadow-lg'
                    : 'border border-gray-200 opacity-60'
                }`}
              >
                {gtb.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#1B4332] text-white text-xs font-medium px-3 py-1 rounded-full">
                      Conforme BACS
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 pt-2">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-bold ${
                      gtb.recommended
                        ? 'bg-[#1B4332] text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {gtb.class}
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-center text-[#2D3436] mb-2">
                  Classe {gtb.class} - {gtb.name}
                </h3>
                <p className="text-sm text-[#636e72] text-center mb-4">{gtb.description}</p>

                <ul className="space-y-2">
                  {gtb.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          gtb.recommended ? 'text-[#1B4332]' : 'text-gray-300'
                        }`}
                      />
                      <span className={gtb.recommended ? 'text-[#2D3436]' : 'text-gray-400'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Notre Accompagnement"
            title="De l'audit à la mise en service"
            description="Nous vous accompagnons à chaque étape pour garantir la conformité et optimiser vos investissements."
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <Timeline steps={processSteps} variant="vertical" />
          </div>
        </Container>
      </section>

      {/* CEE Financing */}
      <section className="py-16 md:py-24 bg-[#1B4332] text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-[#D4A84B] text-sm font-medium rounded-full mb-4">
                Financement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Financez votre GTB avec les CEE
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                La fiche d'opération standardisée <strong>BAT-TH-116</strong> permet de financer l'installation de systèmes GTB performants via les Certificats d'Économies d'Énergie.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                  <span>Applicable aux bâtiments tertiaires existants de plus de 2 ans</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                  <span>Système GTB de classe A ou B requis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                  <span>Prime calculée selon la surface et le type de bâtiment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                  <span>Cumulable avec d'autres aides à la rénovation énergétique</span>
                </li>
              </ul>
              <Button href="/expertises/financement-cee" variant="outline" className="border-white text-white hover:bg-white/10">
                En savoir plus sur le financement CEE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <FileCheck className="w-16 h-16 text-[#D4A84B] mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Fiche BAT-TH-116</h3>
                <p className="text-gray-300 mt-2">Système de gestion technique du bâtiment</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Secteur</span>
                  <span className="font-medium">Tertiaire</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Classe minimale</span>
                  <span className="font-medium">A ou B</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="text-gray-300">Âge du bâtiment</span>
                  <span className="font-medium">&gt; 2 ans</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Durée de vie</span>
                  <span className="font-medium">16 ans</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Avantages"
            title="Pourquoi installer un système GTB ?"
            centered
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#1B4332]" />
                </div>
                <h3 className="font-semibold text-lg text-[#2D3436] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[#636e72]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Questions Fréquentes"
            title="Tout savoir sur le Décret BACS"
            centered
          />

          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </section>

      {/* Key Dates */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            eyebrow="Calendrier"
            title="Échéances à respecter"
            centered
          />

          <div className="mt-12 max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-xl p-6 text-center opacity-70"
            >
              <Calendar className="w-10 h-10 text-gray-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-600 mb-2">1er Janvier 2025</div>
              <p className="text-gray-500 text-sm mb-2">Systèmes CVC &gt; 290 kW</p>
              <span className="inline-block bg-gray-400 text-white text-xs px-2 py-1 rounded">
                Échéance passée
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#D4A84B] text-white rounded-xl p-6 text-center ring-4 ring-[#D4A84B]/30"
            >
              <Calendar className="w-10 h-10 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-2">1er Janvier 2027</div>
              <p className="text-white/80 text-sm mb-2">Systèmes CVC &gt; 70 kW</p>
              <span className="inline-block bg-white/20 text-white text-xs px-2 py-1 rounded">
                Prochaine échéance
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-[#D4A84B]/10 border border-[#D4A84B]/30 rounded-xl max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-[#D4A84B] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#2D3436] mb-2">
                  Anticipez dès maintenant
                </h4>
                <p className="text-[#636e72]">
                  Les délais d'étude, de financement et d'installation peuvent être longs. Nous vous recommandons de démarrer votre projet au moins 12 mois avant l'échéance pour garantir votre conformité.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}

export default DecretBACS
