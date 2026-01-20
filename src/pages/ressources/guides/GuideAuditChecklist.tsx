import { motion } from 'framer-motion'
import {
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
  FileText,
  AlertTriangle,
  Building2,
  Zap,
  Calendar,
  Users,
  HardDrive,
  Thermometer,
  BarChart3,
  Settings,
  FileSpreadsheet,
  Clock,
  Target,
  Lightbulb,
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
  { id: 'documents', title: 'Documents à rassembler' },
  { id: 'consommations', title: 'Données de consommation' },
  { id: 'plans', title: 'Plans et surfaces' },
  { id: 'equipements', title: 'Équipements techniques' },
  { id: 'rapport', title: 'Contenu du rapport' },
  { id: 'suites', title: 'Suites à donner' },
]

const documentsAdministratifs = [
  {
    title: 'Statuts de la société',
    description: 'Pour vérifier le type d\'assujettissement',
    obligatoire: false,
  },
  {
    title: 'Acte de propriété ou bail',
    description: 'Nature de l\'occupation du bâtiment',
    obligatoire: true,
  },
  {
    title: 'Permis de construire',
    description: 'Date de construction, extensions éventuelles',
    obligatoire: false,
  },
  {
    title: 'Diagnostics existants (DPE, amiante)',
    description: 'Informations techniques déjà disponibles',
    obligatoire: false,
  },
  {
    title: 'Contrats de maintenance',
    description: 'Chauffage, climatisation, ascenseurs',
    obligatoire: true,
  },
  {
    title: 'Rapports de contrôle réglementaire',
    description: 'Électricité, gaz, incendie',
    obligatoire: false,
  },
]

const donneesConsommation = [
  {
    type: 'Électricité',
    icon: Zap,
    details: [
      'Factures des 3 dernières années',
      'Courbes de charge si disponibles',
      'Puissance souscrite',
      'Répartition par compteur si plusieurs',
    ],
  },
  {
    type: 'Gaz naturel',
    icon: Thermometer,
    details: [
      'Factures des 3 dernières années',
      'Consommation en kWh PCS et PCI',
      'Coefficient de conversion utilisé',
    ],
  },
  {
    type: 'Fioul / GPL',
    icon: HardDrive,
    details: [
      'Factures ou bons de livraison',
      'Volume de la cuve',
      'Fréquence de remplissage',
    ],
  },
  {
    type: 'Réseaux de chaleur/froid',
    icon: Building2,
    details: [
      'Factures annuelles',
      'Mix énergétique du réseau',
      'Contrat d\'abonnement',
    ],
  },
]

const plansRequis = [
  {
    title: 'Plans de masse',
    description: 'Implantation du bâtiment, orientations',
    icon: Building2,
  },
  {
    title: 'Plans des niveaux',
    description: 'Répartition des locaux, surfaces par zone',
    icon: FileSpreadsheet,
  },
  {
    title: 'Plans techniques',
    description: 'Réseaux CVC, électricité, plomberie',
    icon: Settings,
  },
  {
    title: 'Surfaces SHON/SHAB',
    description: 'Surfaces réglementaires calculées',
    icon: BarChart3,
  },
]

const equipementsAnalyses = [
  {
    categorie: 'Chauffage',
    elements: [
      'Type de générateur (chaudière, PAC, etc.)',
      'Puissance nominale',
      'Année d\'installation',
      'Rendement ou COP',
      'Mode de régulation',
      'État d\'entretien',
    ],
  },
  {
    categorie: 'Climatisation / Rafraîchissement',
    elements: [
      'Type d\'équipement',
      'Puissance frigorifique',
      'Fluide frigorigène utilisé',
      'Classe énergétique',
    ],
  },
  {
    categorie: 'Ventilation',
    elements: [
      'Type de VMC (simple/double flux)',
      'Débit nominal',
      'Présence de récupérateur de chaleur',
      'État des filtres',
    ],
  },
  {
    categorie: 'Éclairage',
    elements: [
      'Types de luminaires',
      'Puissance installée',
      'Mode de gestion (détection, horloge)',
      'Niveau d\'éclairement',
    ],
  },
  {
    categorie: 'Eau chaude sanitaire',
    elements: [
      'Type de production',
      'Volume de stockage',
      'Calorifugeage des réseaux',
      'Température de consigne',
    ],
  },
  {
    categorie: 'Process / Production',
    elements: [
      'Équipements énergivores',
      'Cycles de fonctionnement',
      'Récupération de chaleur existante',
    ],
  },
]

const rapportContent = [
  {
    section: 'Synthèse',
    description: 'Résumé des enjeux et recommandations prioritaires',
  },
  {
    section: 'Analyse du bâti',
    description: 'État de l\'enveloppe, ponts thermiques, menuiseries',
  },
  {
    section: 'Analyse des systèmes',
    description: 'Performance des équipements CVC et éclairage',
  },
  {
    section: 'Bilan énergétique',
    description: 'Répartition des consommations, ratios, comparaisons',
  },
  {
    section: 'Plan d\'actions',
    description: 'Actions recommandées avec coûts, gains et temps de retour',
  },
  {
    section: 'Conformité réglementaire',
    description: 'Analyse Décret Tertiaire, BACS, autres obligations',
  },
]

export default function GuideAuditChecklist() {
  return (
    <>
      <SEO
        title="Checklist Audit Énergétique - Guide Préparation"
        description="Préparez votre audit énergétique réglementaire : documents à fournir, points de contrôle et livrables attendus. Checklist complète."
        canonical="/ressources/guides/audit-checklist"
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
              <ClipboardCheck className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Guide Méthodologie</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Checklist Audit Énergétique
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Préparez votre audit énergétique réglementaire : documents à fournir,
              points de contrôle et livrables attendus.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <FileText className="w-5 h-5" />
                <span>18 pages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>50+ points de contrôle</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>Norme NF EN 16247</span>
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
                  <h3 className="font-bold mb-2">Besoin d'un audit ?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Nos auditeurs certifiés réalisent votre diagnostic complet.
                  </p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-[#D4A84B] hover:bg-[#C49A3D]">
                      Demander un devis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#2D3436] mb-4">Durée type</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-bold text-[#1B4332]">1-2 jours</p>
                      <p className="text-sm text-gray-600">Visite sur site</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#1B4332]">2-3 semaines</p>
                      <p className="text-sm text-gray-600">Rapport complet</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#1B4332]">4 ans</p>
                      <p className="text-sm text-gray-600">Validité (grandes entreprises)</p>
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
                    L'audit énergétique est un <strong>diagnostic approfondi</strong> de la performance
                    énergétique d'un bâtiment ou d'un site. Il identifie les gisements d'économies
                    d'énergie et propose des actions d'amélioration chiffrées et hiérarchisées.
                  </p>
                  <p>
                    Ce guide vous aide à <strong>préparer votre audit</strong> en listant tous les
                    documents et informations nécessaires. Une bonne préparation permet un audit
                    plus efficace et des recommandations plus pertinentes.
                  </p>
                </div>

                {/* Who needs an audit */}
                <div className="bg-[#F8F6F2] rounded-xl p-6 mt-8">
                  <h3 className="font-bold text-[#2D3436] mb-4">Qui est concerné par l'obligation ?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#77C14A] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#2D3436]">Grandes entreprises</p>
                        <p className="text-sm text-gray-600">
                          &gt; 250 salariés ou CA &gt; 50 M€ et bilan &gt; 43 M€
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#77C14A] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#2D3436]">Périodicité</p>
                        <p className="text-sm text-gray-600">
                          Tous les 4 ans (ou ISO 50001)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-[#D4A84B] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#2D3436]">Volontaire</p>
                        <p className="text-sm text-gray-600">
                          Toute entreprise peut réaliser un audit volontaire
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-[#D4A84B] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-[#2D3436]">Décret Tertiaire</p>
                        <p className="text-sm text-gray-600">
                          Audit recommandé pour définir la stratégie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Documents administratifs */}
              <motion.section
                id="documents"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Documents à Rassembler
                </h2>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-[#1B4332] px-6 py-4">
                    <h3 className="font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Documents administratifs
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {documentsAdministratifs.map((doc, index) => (
                      <div key={index} className="px-6 py-4 flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            doc.obligatoire ? 'bg-[#77C14A]' : 'bg-gray-200'
                          }`}>
                            <CheckCircle className={`w-4 h-4 ${
                              doc.obligatoire ? 'text-white' : 'text-gray-500'
                            }`} />
                          </div>
                          <div>
                            <p className="font-semibold text-[#2D3436]">{doc.title}</p>
                            <p className="text-sm text-gray-600">{doc.description}</p>
                          </div>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          doc.obligatoire
                            ? 'bg-[#77C14A]/10 text-[#1B4332]'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {doc.obligatoire ? 'Obligatoire' : 'Recommandé'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Données de consommation */}
              <motion.section
                id="consommations"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Données de Consommation
                </h2>

                <p className="text-gray-600 mb-8">
                  Les données de consommation sont essentielles pour établir le bilan énergétique
                  et définir les objectifs d'amélioration. Prévoyez <strong>3 années de factures</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {donneesConsommation.map((energie, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                          <energie.icon className="w-5 h-5 text-[#1B4332]" />
                        </div>
                        <h3 className="font-bold text-[#2D3436]">{energie.type}</h3>
                      </div>
                      <ul className="space-y-2">
                        {energie.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#D4A84B]/10 border border-[#D4A84B]/30 rounded-xl">
                  <div className="flex gap-3">
                    <Lightbulb className="w-5 h-5 text-[#D4A84B] flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      <strong>Astuce :</strong> Demandez à vos fournisseurs d'énergie un export
                      de vos consommations au format tableur. Cela facilite l'analyse et évite
                      les erreurs de saisie.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Plans et surfaces */}
              <motion.section
                id="plans"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Plans et Surfaces
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {plansRequis.map((plan, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-5 bg-[#F8F6F2] rounded-xl"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <plan.icon className="w-6 h-6 text-[#1B4332]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2D3436]">{plan.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#2D3436] mb-4">Informations complémentaires</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-[#F8F6F2] rounded-lg">
                      <Calendar className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
                      <p className="font-semibold text-[#2D3436]">Année de construction</p>
                      <p className="text-sm text-gray-600">Et rénovations majeures</p>
                    </div>
                    <div className="text-center p-4 bg-[#F8F6F2] rounded-lg">
                      <Users className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
                      <p className="font-semibold text-[#2D3436]">Occupation</p>
                      <p className="text-sm text-gray-600">Horaires, effectifs</p>
                    </div>
                    <div className="text-center p-4 bg-[#F8F6F2] rounded-lg">
                      <Target className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
                      <p className="font-semibold text-[#2D3436]">Activités</p>
                      <p className="text-sm text-gray-600">Par zone du bâtiment</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Équipements techniques */}
              <motion.section
                id="equipements"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Équipements Techniques
                </h2>

                <p className="text-gray-600 mb-8">
                  L'inventaire des équipements permet d'évaluer leur performance et d'identifier
                  les opportunités de remplacement ou d'optimisation.
                </p>

                <div className="space-y-6">
                  {equipementsAnalyses.map((equip, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div className="bg-[#52796F]/10 px-6 py-3">
                        <h3 className="font-bold text-[#2D3436]">{equip.categorie}</h3>
                      </div>
                      <div className="px-6 py-4">
                        <ul className="grid md:grid-cols-2 gap-2">
                          {equip.elements.map((element, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Contenu du rapport */}
              <motion.section
                id="rapport"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Contenu du Rapport d'Audit
                </h2>

                <p className="text-gray-600 mb-8">
                  Le rapport d'audit conforme à la norme NF EN 16247 comprend les sections suivantes.
                  Vérifiez que votre prestataire les inclut toutes.
                </p>

                <div className="bg-[#F8F6F2] rounded-xl p-6">
                  <div className="space-y-4">
                    {rapportContent.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg"
                      >
                        <div className="w-8 h-8 bg-[#1B4332] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[#2D3436]">{item.section}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-6 border-l-4 border-[#1B4332] bg-[#1B4332]/5 rounded-r-xl">
                  <h3 className="font-bold text-[#2D3436] mb-2">Le plan d'actions : le cœur du rapport</h3>
                  <p className="text-gray-600 mb-4">
                    Chaque action recommandée doit être présentée avec :
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Description technique détaillée',
                      'Coût d\'investissement estimé',
                      'Économies d\'énergie attendues (kWh/an)',
                      'Économies financières (€/an)',
                      'Temps de retour sur investissement',
                      'Aides et financements mobilisables (CEE, subventions)',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#77C14A]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Suites à donner */}
              <motion.section
                id="suites"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Suites à Donner
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-[#77C14A]/10 border border-[#77C14A]/30 rounded-xl p-6">
                    <h3 className="font-bold text-[#1B4332] mb-4">Actions immédiates (0 investissement)</h3>
                    <ul className="space-y-2">
                      {[
                        'Optimisation des consignes de température',
                        'Ajustement des horaires de fonctionnement',
                        'Sensibilisation des occupants',
                        'Maintenance préventive',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#D4A84B]/10 border border-[#D4A84B]/30 rounded-xl p-6">
                    <h3 className="font-bold text-[#D4A84B] mb-4">Actions avec investissement</h3>
                    <ul className="space-y-2">
                      {[
                        'Prioriser par temps de retour',
                        'Identifier les financements (CEE, aides)',
                        'Planifier sur plusieurs années',
                        'Suivre les résultats après travaux',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-700 mb-2">Obligation de déclaration</h3>
                      <p className="text-red-600">
                        Les grandes entreprises doivent transmettre leur rapport d'audit à l'ADEME
                        via la plateforme dédiée. Le non-respect de cette obligation peut entraîner
                        des sanctions financières (jusqu'à 2% du CA).
                      </p>
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
                      Prêt pour votre Audit ?
                    </h2>
                    <p className="text-white/80 mb-6">
                      Nos auditeurs certifiés réalisent votre diagnostic énergétique complet
                      et vous accompagnent dans la mise en œuvre des recommandations.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Auditeurs qualifiés OPQIBI',
                        'Rapport conforme NF EN 16247',
                        'Plan d\'actions chiffré et priorisé',
                        'Accompagnement CEE inclus',
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
                        Demander un Devis
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/obligations/audit-energetique">
                      <Button size="lg" variant="outline" className="w-full border-white/50 text-white hover:bg-white/10">
                        En savoir plus sur l'obligation
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
                title: 'Décret Tertiaire',
                description: 'L\'audit énergétique au service de votre stratégie tertiaire',
                href: '/ressources/guides/decret-tertiaire',
                icon: Building2,
              },
              {
                title: 'Les CEE pour les Entreprises',
                description: 'Financer vos travaux suite à l\'audit',
                href: '/ressources/guides/cee-entreprises',
                icon: Zap,
              },
              {
                title: 'Plan d\'Actions Énergie',
                description: 'Mettre en œuvre les recommandations de l\'audit',
                href: '/ressources/guides/plan-actions',
                icon: Target,
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
