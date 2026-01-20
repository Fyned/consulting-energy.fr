import { motion } from 'framer-motion'
import {
  Shield,
  ArrowRight,
  CheckCircle,
  FileText,
  Target,
  TrendingUp,
  BarChart3,
  Clock,
  Euro,
  Lightbulb,
  Calendar,
  Settings,
  LineChart,
  AlertTriangle,
  Building2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SEO } from '@/components/seo/SEO'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const tableOfContents = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'diagnostic', title: 'Diagnostic initial' },
  { id: 'gisements', title: 'Identification des gisements' },
  { id: 'analyse', title: 'Analyse coût/bénéfice' },
  { id: 'priorisation', title: 'Priorisation des actions' },
  { id: 'planning', title: 'Planning de mise en œuvre' },
  { id: 'indicateurs', title: 'Indicateurs de suivi' },
]

const diagnosticElements = [
  {
    title: 'Analyse des factures',
    description: 'Évolution des consommations sur 3 ans minimum',
    icon: FileText,
  },
  {
    title: 'Benchmarking',
    description: 'Comparaison avec des bâtiments similaires',
    icon: BarChart3,
  },
  {
    title: 'Cartographie énergétique',
    description: 'Répartition par usage et par zone',
    icon: Target,
  },
  {
    title: 'Identification des dérives',
    description: 'Consommations anormales, gaspillages',
    icon: AlertTriangle,
  },
]

const gisementsCategories = [
  {
    categorie: 'Sobriété énergétique',
    description: 'Actions comportementales et organisationnelles',
    investissement: 'Faible',
    potentiel: '5-15%',
    exemples: [
      'Optimisation des consignes de température',
      'Ajustement des horaires de fonctionnement',
      'Extinction des équipements non utilisés',
      'Sensibilisation des occupants',
    ],
  },
  {
    categorie: 'Efficacité énergétique',
    description: 'Amélioration des équipements et systèmes',
    investissement: 'Moyen',
    potentiel: '15-30%',
    exemples: [
      'Remplacement des éclairages par LED',
      'Installation de variateurs de vitesse',
      'Calorifugeage des réseaux',
      'Mise en place d\'une GTB',
    ],
  },
  {
    categorie: 'Rénovation lourde',
    description: 'Travaux sur l\'enveloppe et les systèmes',
    investissement: 'Élevé',
    potentiel: '30-50%',
    exemples: [
      'Isolation thermique par l\'extérieur',
      'Remplacement des menuiseries',
      'Changement de générateur de chauffage',
      'Installation de panneaux solaires',
    ],
  },
]

const criteresAnalyse = [
  {
    critere: 'Temps de retour sur investissement (TRI)',
    description: 'Durée nécessaire pour amortir l\'investissement',
    seuils: ['< 3 ans : Excellent', '3-7 ans : Bon', '> 7 ans : À étudier'],
  },
  {
    critere: 'Coût du kWh économisé',
    description: 'Investissement rapporté aux économies sur la durée de vie',
    seuils: ['< 0,05 €/kWh : Très rentable', '0,05-0,10 €/kWh : Rentable'],
  },
  {
    critere: 'Réduction des émissions CO2',
    description: 'Impact environnemental de l\'action',
    seuils: ['Critère de plus en plus valorisé', 'Utile pour la RSE'],
  },
]

const phasesPlanning = [
  {
    phase: 'Court terme (0-1 an)',
    objectif: 'Quick wins et fondations',
    actions: [
      'Actions de sobriété immédiate',
      'Petits investissements à TRI < 2 ans',
      'Mise en place du monitoring',
      'Structuration de la gouvernance énergie',
    ],
    budget: '10-20% du budget total',
  },
  {
    phase: 'Moyen terme (1-3 ans)',
    objectif: 'Efficacité et optimisation',
    actions: [
      'Remplacement des équipements vétustes',
      'Installation GTB et pilotage',
      'Travaux d\'amélioration ciblés',
      'Formation approfondie des équipes',
    ],
    budget: '30-40% du budget total',
  },
  {
    phase: 'Long terme (3-5 ans)',
    objectif: 'Transformation profonde',
    actions: [
      'Rénovation de l\'enveloppe',
      'Changement de systèmes énergétiques',
      'Intégration des énergies renouvelables',
      'Certification HQE/BREEAM',
    ],
    budget: '40-60% du budget total',
  },
]

const indicateursKPI = [
  {
    categorie: 'Consommation',
    indicateurs: [
      'kWh/m²/an global',
      'kWh/m²/an par usage (chauffage, éclairage, etc.)',
      'Évolution mensuelle vs année n-1',
      'Écart à la cible Décret Tertiaire',
    ],
  },
  {
    categorie: 'Financier',
    indicateurs: [
      '€/m²/an de facture énergétique',
      'Économies réalisées (€)',
      'Investissements engagés (€)',
      'TRI réel vs prévisionnel',
    ],
  },
  {
    categorie: 'Environnement',
    indicateurs: [
      'kg CO2/m²/an',
      'Part des énergies renouvelables',
      'Réduction des émissions vs année de référence',
    ],
  },
  {
    categorie: 'Performance',
    indicateurs: [
      'Taux de réalisation des actions',
      'Respect du planning',
      'Satisfaction des occupants',
    ],
  },
]

export default function GuidePlanActions() {
  return (
    <>
      <SEO
        title="Plan d'Actions Énergie - Guide Méthodologique"
        description="Méthodologie pour construire un plan d'actions efficace : diagnostic, priorisation, ROI, planification et indicateurs de suivi."
        canonical="/ressources/guides/plan-actions"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-[#77C14A] mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Guide Méthodologie</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Élaborer son Plan d'Actions Énergie
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Méthodologie pour construire un plan d'actions efficace : priorisation,
              ROI, planification et suivi de votre performance énergétique.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <FileText className="w-5 h-5" />
                <span>24 pages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Target className="w-5 h-5" />
                <span>Matrice de priorisation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <LineChart className="w-5 h-5" />
                <span>KPIs de suivi</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#F8F6F2] rounded-xl p-6">
                  <h3 className="font-bold text-[#2D3436] mb-4">Sommaire</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-[#1B4332] hover:pl-2 transition-all"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-[#1B4332] rounded-xl p-6 text-white">
                  <h3 className="font-bold mb-2">Accompagnement expert</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Nos consultants vous aident à bâtir votre stratégie énergétique.
                  </p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-[#D4A84B] hover:bg-[#C49A3D]">
                      Nous contacter
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#2D3436] mb-4">Objectifs types</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xl font-bold text-[#1B4332]">-40%</p>
                      <p className="text-sm text-gray-600">Décret Tertiaire 2030</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#1B4332]">3-5 ans</p>
                      <p className="text-sm text-gray-600">TRI moyen acceptable</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#1B4332]">20-40%</p>
                      <p className="text-sm text-gray-600">Potentiel d'économies</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {/* Introduction */}
              <motion.section
                id="introduction"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Introduction
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Un <strong>plan d'actions énergie</strong> est une feuille de route structurée
                    pour améliorer la performance énergétique de votre patrimoine immobilier.
                    Il traduit les recommandations d'un audit en actions concrètes, chiffrées
                    et planifiées dans le temps.
                  </p>
                  <p>
                    Ce guide vous accompagne dans l'élaboration d'un plan d'actions efficace,
                    depuis le diagnostic initial jusqu'à la mise en place des indicateurs de suivi.
                  </p>
                </div>

                {/* Key principles */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      icon: Target,
                      title: 'Objectifs clairs',
                      description: 'Définir des cibles mesurables alignées sur les obligations',
                    },
                    {
                      icon: Euro,
                      title: 'Rentabilité',
                      description: 'Prioriser les actions à fort retour sur investissement',
                    },
                    {
                      icon: Clock,
                      title: 'Progressivité',
                      description: 'Étaler les investissements sur plusieurs années',
                    },
                  ].map((principle, index) => (
                    <div key={index} className="bg-[#F8F6F2] rounded-xl p-6">
                      <principle.icon className="w-8 h-8 text-[#1B4332] mb-3" />
                      <h3 className="font-bold text-[#2D3436] mb-2">{principle.title}</h3>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Diagnostic initial */}
              <motion.section
                id="diagnostic"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Diagnostic Initial
                </h2>

                <p className="text-gray-600 mb-8">
                  Avant d'agir, il est essentiel de bien connaître sa situation de départ.
                  Le diagnostic initial pose les bases d'un plan d'actions pertinent.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {diagnosticElements.map((element, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#1B4332]/30 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <element.icon className="w-6 h-6 text-[#1B4332]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2D3436]">{element.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{element.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#1B4332]/5 border-l-4 border-[#1B4332] rounded-r-xl">
                  <h3 className="font-bold text-[#2D3436] mb-2">L'année de référence</h3>
                  <p className="text-gray-600">
                    Pour le Décret Tertiaire, l'année de référence est cruciale. Elle sert de base
                    au calcul des objectifs de réduction. Choisissez une année représentative
                    (ni exceptionnellement haute ni basse) et documentez précisément les consommations.
                  </p>
                </div>
              </motion.section>

              {/* Identification des gisements */}
              <motion.section
                id="gisements"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Identification des Gisements d'Économies
                </h2>

                <p className="text-gray-600 mb-8">
                  Les gisements d'économies se répartissent en trois grandes catégories,
                  chacune avec ses caractéristiques d'investissement et de potentiel.
                </p>

                <div className="space-y-6">
                  {gisementsCategories.map((gisement, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-[#1B4332]/10 to-[#52796F]/10 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-[#2D3436]">{gisement.categorie}</h3>
                          <div className="flex gap-4">
                            <span className="text-sm bg-white px-3 py-1 rounded-full">
                              Investissement : <strong>{gisement.investissement}</strong>
                            </span>
                            <span className="text-sm bg-[#77C14A]/20 text-[#1B4332] px-3 py-1 rounded-full font-semibold">
                              Potentiel : {gisement.potentiel}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{gisement.description}</p>
                      </div>
                      <div className="p-6">
                        <p className="text-sm font-semibold text-gray-500 mb-3">Exemples d'actions :</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {gisement.exemples.map((exemple, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                              {exemple}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Analyse coût/bénéfice */}
              <motion.section
                id="analyse"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Analyse Coût/Bénéfice
                </h2>

                <p className="text-gray-600 mb-8">
                  Chaque action doit être évaluée selon des critères économiques et
                  environnementaux objectifs pour permettre une priorisation rationnelle.
                </p>

                <div className="space-y-6">
                  {criteresAnalyse.map((critere, index) => (
                    <div
                      key={index}
                      className="bg-[#F8F6F2] rounded-xl p-6"
                    >
                      <h3 className="font-bold text-[#2D3436] mb-2">{critere.critere}</h3>
                      <p className="text-gray-600 mb-4">{critere.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {critere.seuils.map((seuil, i) => (
                          <span
                            key={i}
                            className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200"
                          >
                            {seuil}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#2D3436] mb-4">Exemple de calcul</h3>
                  <div className="bg-[#F8F6F2] rounded-lg p-4 font-mono text-sm">
                    <p><strong>Action :</strong> Remplacement éclairage par LED</p>
                    <p><strong>Investissement :</strong> 15 000 €</p>
                    <p><strong>Économie annuelle :</strong> 4 500 €/an</p>
                    <p><strong>TRI :</strong> 15 000 / 4 500 = <span className="text-[#77C14A] font-bold">3,3 ans</span></p>
                    <p><strong>Prime CEE estimée :</strong> 3 000 €</p>
                    <p><strong>TRI avec CEE :</strong> (15 000 - 3 000) / 4 500 = <span className="text-[#77C14A] font-bold">2,7 ans</span></p>
                  </div>
                </div>
              </motion.section>

              {/* Priorisation */}
              <motion.section
                id="priorisation"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Priorisation des Actions
                </h2>

                <p className="text-gray-600 mb-8">
                  La matrice effort/impact permet de visualiser et prioriser les actions
                  selon leur difficulté de mise en œuvre et leur potentiel d'économies.
                </p>

                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                  <h3 className="font-bold text-[#2D3436] mb-6 text-center">Matrice de Priorisation</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1"></div>
                    <div className="text-center font-semibold text-gray-500">Effort Faible</div>
                    <div className="text-center font-semibold text-gray-500">Effort Fort</div>

                    <div className="font-semibold text-gray-500 flex items-center">Impact Fort</div>
                    <div className="bg-[#77C14A] text-white rounded-xl p-4 text-center">
                      <p className="font-bold">1. Quick Wins</p>
                      <p className="text-sm mt-1">À faire immédiatement</p>
                    </div>
                    <div className="bg-[#D4A84B] text-white rounded-xl p-4 text-center">
                      <p className="font-bold">2. Projets Majeurs</p>
                      <p className="text-sm mt-1">À planifier</p>
                    </div>

                    <div className="font-semibold text-gray-500 flex items-center">Impact Faible</div>
                    <div className="bg-[#52796F] text-white rounded-xl p-4 text-center">
                      <p className="font-bold">3. Petites Améliorations</p>
                      <p className="text-sm mt-1">Si ressources disponibles</p>
                    </div>
                    <div className="bg-gray-400 text-white rounded-xl p-4 text-center">
                      <p className="font-bold">4. Dernière Priorité</p>
                      <p className="text-sm mt-1">À reconsidérer</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#77C14A]/10 border border-[#77C14A]/30 rounded-xl p-6">
                    <h3 className="font-bold text-[#1B4332] mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Quick Wins typiques
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Optimisation des horaires de chauffage',
                        'Extinction des veilles',
                        'Réglage des températures de consigne',
                        'Remplacement des ampoules par LED',
                        'Calorifugeage des réseaux accessibles',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#D4A84B]/10 border border-[#D4A84B]/30 rounded-xl p-6">
                    <h3 className="font-bold text-[#D4A84B] mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Projets majeurs typiques
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Installation d\'une GTB complète',
                        'Remplacement de la chaufferie',
                        'Isolation thermique par l\'extérieur',
                        'Remplacement des menuiseries',
                        'Installation de panneaux solaires',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Planning */}
              <motion.section
                id="planning"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Planning de Mise en Œuvre
                </h2>

                <p className="text-gray-600 mb-8">
                  Le plan d'actions s'étale généralement sur 3 à 5 ans, avec des phases
                  progressives pour lisser les investissements et capitaliser sur les premiers résultats.
                </p>

                <div className="space-y-6">
                  {phasesPlanning.map((phase, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div className={`px-6 py-4 ${
                        index === 0 ? 'bg-[#77C14A]/10' :
                        index === 1 ? 'bg-[#D4A84B]/10' :
                        'bg-[#1B4332]/10'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-[#1B4332]" />
                            <div>
                              <h3 className="font-bold text-[#2D3436]">{phase.phase}</h3>
                              <p className="text-sm text-gray-600">{phase.objectif}</p>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-[#1B4332] bg-white px-3 py-1 rounded-full">
                            {phase.budget}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <ul className="grid md:grid-cols-2 gap-2">
                          {phase.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Indicateurs de suivi */}
              <motion.section
                id="indicateurs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Indicateurs de Suivi (KPIs)
                </h2>

                <p className="text-gray-600 mb-8">
                  Le suivi régulier des indicateurs permet de mesurer les progrès, détecter
                  les dérives et ajuster le plan d'actions si nécessaire.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {indicateursKPI.map((cat, index) => (
                    <div
                      key={index}
                      className="bg-[#F8F6F2] rounded-xl p-6"
                    >
                      <h3 className="font-bold text-[#2D3436] mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-[#1B4332]" />
                        {cat.categorie}
                      </h3>
                      <ul className="space-y-2">
                        {cat.indicateurs.map((indicateur, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                            {indicateur}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#1B4332]/5 border-l-4 border-[#1B4332] rounded-r-xl">
                  <div className="flex gap-4">
                    <Lightbulb className="w-6 h-6 text-[#1B4332] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#2D3436] mb-2">Fréquence de suivi recommandée</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• <strong>Mensuel :</strong> Consommations, alertes, écarts</li>
                        <li>• <strong>Trimestriel :</strong> Avancement des actions, budget</li>
                        <li>• <strong>Annuel :</strong> Bilan complet, ajustement du plan</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* CTA */}
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-r from-[#1B4332] to-[#2D5A45] rounded-2xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      Construisons votre Plan d'Actions
                    </h2>
                    <p className="text-white/80 mb-6">
                      Nos consultants vous accompagnent dans l'élaboration et la mise en œuvre
                      de votre stratégie de performance énergétique.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Diagnostic personnalisé',
                        'Plan d\'actions sur mesure',
                        'Optimisation des financements CEE',
                        'Suivi et reporting',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#77C14A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link to="/contact">
                      <Button size="lg" className="w-full bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                        Demander un Accompagnement
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/expertises/bureau-etudes">
                      <Button size="lg" variant="outline" className="w-full border-white/50 text-white hover:bg-white/10">
                        Notre Bureau d'Études
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <h2 className="text-2xl font-bold text-[#2D3436] mb-8">Guides Associés</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Checklist Audit Énergétique',
                description: 'Préparer votre audit pour alimenter le plan d\'actions',
                href: '/ressources/guides/audit-checklist',
                icon: Settings,
              },
              {
                title: 'Les CEE pour les Entreprises',
                description: 'Financer votre plan d\'actions avec les primes CEE',
                href: '/ressources/guides/cee-entreprises',
                icon: Euro,
              },
              {
                title: 'Décret Tertiaire',
                description: 'Aligner votre plan sur les objectifs réglementaires',
                href: '/ressources/guides/decret-tertiaire',
                icon: Building2,
              },
            ].map((guide, index) => (
              <Link
                key={index}
                to={guide.href}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <guide.icon className="w-10 h-10 text-[#1B4332] mb-4" />
                <h3 className="font-bold text-[#2D3436] group-hover:text-[#1B4332] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{guide.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#1B4332] font-semibold mt-4">
                  Consulter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
