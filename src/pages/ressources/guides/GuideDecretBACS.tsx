import { motion } from 'framer-motion'
import {
  Zap,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Calendar,
  Settings,
  Cpu,
  Clock,
  ChevronRight,
  Euro,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SEO } from '@/components/seo/SEO'

const tableOfContents = [
  { id: 'introduction', title: 'Qu\'est-ce que le Décret BACS ?' },
  { id: 'obligations', title: 'Obligations par puissance CVC' },
  { id: 'classes-gtb', title: 'Classes GTB (A, B, C, D)' },
  { id: 'fonctionnalites', title: 'Fonctionnalités requises' },
  { id: 'financement', title: 'Financement CEE (BAT-TH-116)' },
  { id: 'calendrier', title: 'Calendrier d\'installation' },
]

const obligations = [
  {
    puissance: '> 290 kW',
    deadline: '1er janvier 2025',
    status: 'passed',
    description: 'Bâtiments avec une puissance CVC nominale supérieure à 290 kW',
  },
  {
    puissance: '> 70 kW',
    deadline: '1er janvier 2027',
    status: 'upcoming',
    description: 'Extension aux bâtiments avec une puissance CVC comprise entre 70 et 290 kW',
  },
]

const gtbClasses = [
  {
    class: 'A',
    name: 'GTB Haute Performance',
    description: 'Système de gestion technique avancé avec optimisation énergétique automatique.',
    features: ['Régulation automatique', 'Optimisation prédictive', 'Auto-apprentissage', 'Reporting avancé'],
    compliant: true,
  },
  {
    class: 'B',
    name: 'GTB Avancée',
    description: 'Système avec fonctions de régulation et de suivi énergétique.',
    features: ['Régulation automatique', 'Programmes horaires', 'Détection de défauts', 'Sous-comptage'],
    compliant: true,
  },
  {
    class: 'C',
    name: 'GTB Standard',
    description: 'Système basique avec contrôle centralisé mais fonctionnalités limitées.',
    features: ['Contrôle centralisé', 'Alarmes basiques', 'Programmes simples'],
    compliant: false,
  },
  {
    class: 'D',
    name: 'Pas de GTB',
    description: 'Aucun système de gestion technique centralisé.',
    features: ['Contrôles manuels', 'Pas de centralisation'],
    compliant: false,
  },
]

const requiredFeatures = [
  {
    category: 'Suivi et enregistrement',
    features: [
      'Enregistrement continu des consommations',
      'Sous-comptage par usage (CVC, éclairage, etc.)',
      'Historisation des données',
      'Génération de rapports périodiques',
    ],
  },
  {
    category: 'Régulation automatique',
    features: [
      'Régulation de la température par zone',
      'Programmation horaire adaptable',
      'Gestion des intermittences',
      'Régulation de la ventilation',
    ],
  },
  {
    category: 'Détection et alertes',
    features: [
      'Détection des dérives de consommation',
      'Alertes de maintenance préventive',
      'Signalement des défauts d\'équipement',
      'Supervision en temps réel',
    ],
  },
]

const ceeDetails = {
  ficheName: 'BAT-TH-116',
  description: 'Installation d\'un système de gestion technique du bâtiment pour le chauffage, la ventilation, le refroidissement, l\'eau chaude sanitaire et l\'éclairage.',
  conditions: [
    'GTB de classe A ou B selon NF EN ISO 52120-1:2022',
    'Bâtiment tertiaire existant',
    'Rôle actif des occupants',
    'Mise en service par un professionnel',
  ],
  primeEstimate: '3 à 8 €/m²',
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function GuideDecretBACS() {
  return (
    <>
      <SEO
        title="Guide Décret BACS - GTB Obligatoire 2027"
        description="Comprendre le Décret BACS : obligations GTB par puissance CVC, classes A et B, fonctionnalités requises, financement CEE et calendrier d'installation."
        canonical="/ressources/guides/decret-bacs"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/ressources/guides" className="hover:text-white">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Décret BACS</span>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#D4A84B] text-white text-xs font-semibold rounded-full uppercase">
                Guide Complet
              </span>
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                Réglementation
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Décret BACS : Guide de Mise en Conformité GTB
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Tout comprendre sur le Décret BACS et l'obligation d'installer une GTB :
              classes requises, fonctionnalités, financement CEE et calendrier d'application.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Temps de lecture : 12 min
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Mis à jour : Janvier 2026
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-[#F8F6F2] border-b border-gray-200 sticky top-16 z-30">
        <Container>
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="text-sm font-semibold text-[#2D3436] whitespace-nowrap">Sommaire :</span>
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-gray-600 hover:text-[#1B4332] whitespace-nowrap transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Introduction */}
              <motion.div
                id="introduction"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Qu'est-ce que le Décret BACS ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Le <strong>Décret BACS</strong> (Building Automation and Control Systems), issu du
                    décret n°2020-887 du 20 juillet 2020, impose l'installation de systèmes d'automatisation
                    et de contrôle des bâtiments, communément appelés <strong>GTB</strong> (Gestion Technique
                    du Bâtiment).
                  </p>
                  <p>
                    Ce décret transpose la directive européenne sur la performance énergétique des bâtiments
                    (DPEB) et vise à améliorer l'efficacité énergétique des bâtiments tertiaires grâce à
                    l'automatisation de la gestion des équipements techniques.
                  </p>
                </div>

                <div className="mt-8 bg-[#1B4332]/5 border-l-4 border-[#1B4332] rounded-r-xl p-6">
                  <div className="flex items-start gap-4">
                    <Cpu className="w-6 h-6 text-[#1B4332] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D3436] mb-2">GTB : Définition</h4>
                      <p className="text-gray-600">
                        La Gestion Technique du Bâtiment (GTB) est un système informatique centralisé
                        permettant de superviser, contrôler et optimiser les équipements techniques
                        d'un bâtiment (CVC, éclairage, sécurité, etc.).
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Obligations */}
              <motion.div
                id="obligations"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Obligations par Puissance CVC
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Le Décret BACS s'applique aux bâtiments tertiaires neufs et existants, avec des
                    échéances différentes selon la <strong>puissance nominale du système CVC</strong>
                    (Chauffage, Ventilation, Climatisation).
                  </p>
                </div>

                <div className="space-y-4">
                  {obligations.map((ob) => (
                    <div
                      key={ob.puissance}
                      className={`rounded-xl p-6 ${
                        ob.status === 'passed' ? 'bg-red-50 border border-red-200' : 'bg-amber-50 border border-amber-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`text-2xl font-bold ${
                            ob.status === 'passed' ? 'text-red-700' : 'text-amber-700'
                          }`}>
                            Puissance {ob.puissance}
                          </span>
                          <p className={`mt-1 ${ob.status === 'passed' ? 'text-red-600' : 'text-amber-600'}`}>
                            {ob.description}
                          </p>
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          ob.status === 'passed'
                            ? 'bg-red-200 text-red-800'
                            : 'bg-amber-200 text-amber-800'
                        }`}>
                          {ob.status === 'passed' ? 'Échéance passée' : 'À venir'}
                        </span>
                      </div>
                      <div className={`flex items-center gap-2 ${
                        ob.status === 'passed' ? 'text-red-700' : 'text-amber-700'
                      }`}>
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold">Échéance : {ob.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Classes GTB */}
              <motion.div
                id="classes-gtb"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Classes GTB selon NF EN ISO 52120-1:2022
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    La norme NF EN ISO 52120-1:2022 définit 4 classes de GTB. Seules les <strong>classes
                    A et B</strong> sont conformes aux exigences du Décret BACS.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {gtbClasses.map((gtb) => (
                    <div
                      key={gtb.class}
                      className={`rounded-xl p-6 ${
                        gtb.compliant
                          ? 'bg-green-50 border-2 border-green-200'
                          : 'bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-3xl font-bold ${
                          gtb.compliant ? 'text-green-700' : 'text-gray-400'
                        }`}>
                          Classe {gtb.class}
                        </span>
                        {gtb.compliant ? (
                          <span className="flex items-center gap-1 text-green-700 text-sm font-semibold">
                            <CheckCircle className="w-4 h-4" />
                            Conforme
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-500 text-sm font-semibold">
                            <AlertTriangle className="w-4 h-4" />
                            Non conforme
                          </span>
                        )}
                      </div>
                      <h4 className={`font-semibold mb-2 ${gtb.compliant ? 'text-green-800' : 'text-gray-600'}`}>
                        {gtb.name}
                      </h4>
                      <p className={`text-sm mb-4 ${gtb.compliant ? 'text-green-700' : 'text-gray-500'}`}>
                        {gtb.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {gtb.features.map((feature) => (
                          <span
                            key={feature}
                            className={`px-2 py-1 text-xs rounded ${
                              gtb.compliant ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Fonctionnalités */}
              <motion.div
                id="fonctionnalites"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Fonctionnalités Requises
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Pour être conforme au Décret BACS, votre système GTB doit intégrer les
                    fonctionnalités suivantes :
                  </p>
                </div>

                <div className="space-y-6">
                  {requiredFeatures.map((cat) => (
                    <div key={cat.category} className="bg-[#F8F6F2] rounded-xl p-6">
                      <h4 className="font-bold text-[#1B4332] text-lg mb-4 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        {cat.category}
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cat.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#77C14A] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Financement CEE */}
              <motion.div
                id="financement"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Financement CEE : Fiche BAT-TH-116
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    L'installation d'une GTB conforme est éligible aux <strong>Certificats d'Économies
                    d'Énergie</strong> via la fiche d'opération standardisée BAT-TH-116.
                  </p>
                </div>

                <div className="bg-[#1B4332] rounded-2xl p-8 text-white">
                  <div className="flex items-start gap-4 mb-6">
                    <Euro className="w-8 h-8 text-[#D4A84B] flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">Fiche {ceeDetails.ficheName}</h4>
                      <p className="text-white/80">{ceeDetails.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-[#D4A84B] mb-3">Conditions d'éligibilité</h5>
                      <ul className="space-y-2">
                        {ceeDetails.conditions.map((condition) => (
                          <li key={condition} className="flex items-start gap-2 text-white/90">
                            <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-1" />
                            {condition}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6">
                      <h5 className="font-semibold text-white mb-2">Prime estimée</h5>
                      <div className="text-3xl font-bold text-[#D4A84B] mb-2">
                        {ceeDetails.primeEstimate}
                      </div>
                      <p className="text-white/70 text-sm">
                        Variable selon la surface et la zone climatique
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Calendrier */}
              <motion.div
                id="calendrier"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Calendrier d'Installation
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Voici les étapes clés pour une installation réussie de votre GTB :
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#1B4332]/20" />
                  <div className="space-y-6">
                    {[
                      { phase: 'Phase 1', title: 'Audit et diagnostic', duration: '2-4 semaines', desc: 'Analyse des équipements existants et définition des besoins' },
                      { phase: 'Phase 2', title: 'Conception et choix du système', duration: '2-3 semaines', desc: 'Sélection de la solution GTB adaptée et dimensionnement' },
                      { phase: 'Phase 3', title: 'Installation', duration: '4-8 semaines', desc: 'Déploiement du matériel, câblage et paramétrage' },
                      { phase: 'Phase 4', title: 'Mise en service', duration: '1-2 semaines', desc: 'Tests, formation des utilisateurs et optimisation' },
                      { phase: 'Phase 5', title: 'Suivi et maintenance', duration: 'Continu', desc: 'Monitoring des performances et ajustements' },
                    ].map((step) => (
                      <div key={step.phase} className="relative pl-12">
                        <div className="absolute left-2 w-5 h-5 bg-[#1B4332] rounded-full border-4 border-white" />
                        <div className="bg-[#F8F6F2] rounded-xl p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-[#1B4332]">{step.phase}</span>
                            <span className="text-sm text-gray-500">{step.duration}</span>
                          </div>
                          <h4 className="font-bold text-[#2D3436] mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <div className="bg-[#1B4332] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Besoin d'une GTB ?</h3>
                  <p className="text-white/80 mb-6">
                    Nos experts vous accompagnent dans le choix et l'installation de votre système GTB.
                  </p>
                  <Link to="/contact" className="block">
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1B4332] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      Demander un Devis
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                {/* Alert */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-amber-800 mb-2">Échéance Proche</h4>
                      <p className="text-amber-700 text-sm">
                        Si votre bâtiment a une puissance CVC &gt; 70 kW, vous devez être équipé
                        d'une GTB conforme avant le <strong>1er janvier 2027</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Pages */}
                <div className="bg-[#F8F6F2] rounded-xl p-6">
                  <h4 className="font-bold text-[#2D3436] mb-4">Pages Liées</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        to="/obligations/decret-bacs"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <Zap className="w-4 h-4" />
                        Nos Services Décret BACS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/expertises/financement-cee"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <Euro className="w-4 h-4" />
                        Financement CEE
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ressources/calendrier"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <Calendar className="w-4 h-4" />
                        Calendrier Réglementaire
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1B4332]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à Installer votre GTB ?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Bénéficiez de notre expertise et des aides CEE pour financer votre installation GTB.
              Devis gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                  Demander un Devis GTB
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/ressources/guides">
                <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                  Voir tous les Guides
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
