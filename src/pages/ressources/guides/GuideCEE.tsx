import { motion } from 'framer-motion'
import {
  Calculator,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building2,
  Factory,
  Euro,
  FileText,
  Clock,
  Target,
  TrendingUp,
  Lightbulb,
  Zap,
  ThermometerSun,
  Wind,
  Gauge,
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
  { id: 'introduction', title: 'Introduction aux CEE' },
  { id: 'fonctionnement', title: 'Fonctionnement du dispositif' },
  { id: 'operations-tertiaire', title: 'Opérations éligibles tertiaire' },
  { id: 'operations-industrie', title: 'Opérations éligibles industrie' },
  { id: 'estimation', title: 'Estimation des primes' },
  { id: 'processus', title: 'Processus de demande' },
  { id: 'pieges', title: 'Pièges à éviter' },
]

const operationsTertiaire = [
  {
    code: 'BAT-TH-116',
    title: 'Système de GTB',
    description: 'Installation d\'un système de Gestion Technique du Bâtiment',
    prime: '4 à 8 €/m²',
    icon: Gauge,
  },
  {
    code: 'BAT-TH-104',
    title: 'Robinets thermostatiques',
    description: 'Installation de robinets thermostatiques sur radiateurs',
    prime: '20 à 50 €/radiateur',
    icon: ThermometerSun,
  },
  {
    code: 'BAT-TH-146',
    title: 'Isolation des réseaux',
    description: 'Isolation des réseaux hydrauliques de chauffage ou ECS',
    prime: '6 à 12 €/m',
    icon: Wind,
  },
  {
    code: 'BAT-EN-101',
    title: 'Isolation des combles',
    description: 'Isolation thermique des combles perdus ou aménagés',
    prime: '8 à 15 €/m²',
    icon: Building2,
  },
  {
    code: 'BAT-TH-102',
    title: 'Chaudière collective',
    description: 'Chaudière collective haute performance énergétique',
    prime: '2000 à 8000 €',
    icon: Zap,
  },
  {
    code: 'BAT-EQ-133',
    title: 'Éclairage LED',
    description: 'Luminaires à modules LED avec dispositif de contrôle',
    prime: '15 à 40 €/luminaire',
    icon: Lightbulb,
  },
]

const operationsIndustrie = [
  {
    code: 'IND-UT-102',
    title: 'Système de variation électronique',
    description: 'Variateur de vitesse sur moteur électrique',
    prime: '50 à 200 €/kW',
    icon: Gauge,
  },
  {
    code: 'IND-UT-103',
    title: 'Récupération de chaleur',
    description: 'Récupération de chaleur sur compresseur d\'air',
    prime: '500 à 2000 €/compresseur',
    icon: ThermometerSun,
  },
  {
    code: 'IND-UT-117',
    title: 'Moteur premium',
    description: 'Moteur électrique à haut rendement (IE4)',
    prime: '30 à 100 €/kW',
    icon: Zap,
  },
  {
    code: 'IND-BA-112',
    title: 'Isolation industrielle',
    description: 'Isolation des points singuliers d\'un réseau',
    prime: '200 à 600 €/point',
    icon: Wind,
  },
  {
    code: 'IND-UT-134',
    title: 'Système de mesurage',
    description: 'Système de mesurage d\'indicateurs de performance',
    prime: '10 000 à 50 000 €',
    icon: Target,
  },
  {
    code: 'IND-EN-101',
    title: 'Isolation bâtiment',
    description: 'Isolation des murs et toitures de bâtiments industriels',
    prime: '10 à 25 €/m²',
    icon: Building2,
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Étude préalable',
    description: 'Audit énergétique et identification des gisements d\'économies',
    duration: '2-4 semaines',
  },
  {
    step: 2,
    title: 'Constitution du dossier',
    description: 'Collecte des pièces justificatives et devis détaillés',
    duration: '1-2 semaines',
  },
  {
    step: 3,
    title: 'Validation CEE',
    description: 'Dépôt et validation du dossier AVANT travaux',
    duration: '1-3 semaines',
    important: true,
  },
  {
    step: 4,
    title: 'Réalisation des travaux',
    description: 'Mise en œuvre par un professionnel RGE si requis',
    duration: 'Variable',
  },
  {
    step: 5,
    title: 'Contrôle et attestation',
    description: 'Vérification de conformité et attestation sur l\'honneur',
    duration: '1 semaine',
  },
  {
    step: 6,
    title: 'Versement de la prime',
    description: 'Paiement après validation finale du dossier complet',
    duration: '4-8 semaines',
  },
]

const commonMistakes = [
  {
    mistake: 'Démarrer les travaux avant accord',
    consequence: 'Dossier rejeté, aucune prime versée',
    solution: 'Toujours attendre la validation écrite avant de signer le devis',
  },
  {
    mistake: 'Devis non conforme',
    consequence: 'Retard ou rejet du dossier',
    solution: 'Vérifier que tous les éléments techniques requis sont mentionnés',
  },
  {
    mistake: 'Entreprise non qualifiée',
    consequence: 'Inéligibilité de l\'opération',
    solution: 'Vérifier les qualifications RGE sur le site officiel',
  },
  {
    mistake: 'Double demande',
    consequence: 'Rejet et potentielle sanction',
    solution: 'Ne jamais demander de primes à plusieurs organismes pour la même opération',
  },
  {
    mistake: 'Documents incomplets',
    consequence: 'Délais allongés, dossier bloqué',
    solution: 'Constituer un dossier complet dès le départ avec notre checklist',
  },
]

export default function GuideCEE() {
  return (
    <>
      <SEO
        title="Guide CEE pour les Entreprises - Financement"
        description="Guide complet sur les Certificats d'Économies d'Énergie : opérations éligibles, estimation des primes, processus de demande et pièges à éviter."
        canonical="/ressources/guides/cee-entreprises"
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
              <Calculator className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Guide Financement</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Les CEE pour les Entreprises
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Maximisez vos primes CEE : éligibilité, montants, processus de demande
              et fiches d'opérations clés pour le tertiaire et l'industrie.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <FileText className="w-5 h-5" />
                <span>28 pages</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Euro className="w-5 h-5" />
                <span>~8 Mrd€/an de budget</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span>6ème période 2026-2030</span>
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
                  <h3 className="font-bold mb-2">Besoin d'aide ?</h3>
                  <p className="text-sm text-white/80 mb-4">
                    Nos experts optimisent vos primes CEE et gèrent vos dossiers.
                  </p>
                  <Link to="/contact">
                    <Button size="sm" className="w-full bg-[#D4A84B] hover:bg-[#C49A3D]">
                      Estimation gratuite
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-[#2D3436] mb-4">Chiffres clés</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-2xl font-bold text-[#1B4332]">1 050 TWhc</p>
                      <p className="text-sm text-gray-600">Obligation annuelle</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1B4332]">8 Mrd€</p>
                      <p className="text-sm text-gray-600">Budget annuel</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1B4332]">200+</p>
                      <p className="text-sm text-gray-600">Fiches standardisées</p>
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
                  Introduction aux CEE
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Les <strong>Certificats d'Économies d'Énergie (CEE)</strong> constituent le principal
                    mécanisme de financement des travaux d'efficacité énergétique en France. Ce dispositif,
                    créé en 2006, impose aux fournisseurs d'énergie (les "obligés") de promouvoir activement
                    les économies d'énergie auprès de leurs clients.
                  </p>
                  <p>
                    Pour les entreprises, c'est une opportunité majeure de financer leurs projets de
                    rénovation énergétique. Les primes peuvent couvrir <strong>20 à 80%</strong> du coût
                    des travaux selon les opérations.
                  </p>
                </div>

                {/* Key benefits */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      icon: Euro,
                      title: 'Primes substantielles',
                      description: 'Jusqu\'à 80% du coût des travaux financé',
                    },
                    {
                      icon: CheckCircle,
                      title: 'Processus simplifié',
                      description: 'Dossier géré par votre partenaire CEE',
                    },
                    {
                      icon: TrendingUp,
                      title: 'Cumul possible',
                      description: 'Compatible avec d\'autres aides (ADEME, régions)',
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="bg-[#F8F6F2] rounded-xl p-6">
                      <benefit.icon className="w-8 h-8 text-[#1B4332] mb-3" />
                      <h3 className="font-bold text-[#2D3436] mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Fonctionnement */}
              <motion.section
                id="fonctionnement"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Fonctionnement du Dispositif CEE
                </h2>

                <div className="bg-gradient-to-r from-[#1B4332]/5 to-[#52796F]/5 rounded-xl p-8 mb-8">
                  <h3 className="font-bold text-[#2D3436] mb-4">Le principe en bref</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <h4 className="font-semibold text-[#2D3436] mb-2">Obligation</h4>
                      <p className="text-sm text-gray-600">
                        L'État impose aux fournisseurs d'énergie de réaliser des économies
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <h4 className="font-semibold text-[#2D3436] mb-2">Financement</h4>
                      <p className="text-sm text-gray-600">
                        Les obligés financent vos travaux pour obtenir des certificats
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <h4 className="font-semibold text-[#2D3436] mb-2">Économies</h4>
                      <p className="text-sm text-gray-600">
                        Vous bénéficiez de primes et réduisez vos factures énergétiques
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <h3>La 6ème période (2026-2030)</h3>
                  <p>
                    La nouvelle période quinquennale fixe des objectifs ambitieux avec une obligation
                    annuelle d'environ <strong>1 050 TWhc</strong> (térawattheures cumulés actualisés).
                    Cela représente un budget annuel d'environ 8 milliards d'euros pour financer
                    les travaux d'efficacité énergétique.
                  </p>
                  <h3>Les acteurs du dispositif</h3>
                  <ul>
                    <li><strong>Les obligés :</strong> Fournisseurs d'énergie (EDF, Engie, TotalEnergies, etc.)</li>
                    <li><strong>Les éligibles :</strong> Collectivités, bailleurs sociaux, ANAH</li>
                    <li><strong>Les bénéficiaires :</strong> Entreprises, particuliers, collectivités</li>
                    <li><strong>Les partenaires :</strong> Bureaux d'études, installateurs RGE</li>
                  </ul>
                </div>
              </motion.section>

              {/* Opérations Tertiaire */}
              <motion.section
                id="operations-tertiaire"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-[#1B4332]" />
                  <h2 className="text-3xl font-bold text-[#2D3436]">
                    Opérations Éligibles Tertiaire
                  </h2>
                </div>

                <p className="text-gray-600 mb-8">
                  Les principales fiches d'opérations standardisées pour le secteur tertiaire
                  (bureaux, commerces, hôtellerie, santé, enseignement).
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {operationsTertiaire.map((operation, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1B4332]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <operation.icon className="w-6 h-6 text-[#1B4332]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-mono text-[#52796F] bg-[#52796F]/10 px-2 py-1 rounded">
                            {operation.code}
                          </span>
                          <h3 className="font-bold text-[#2D3436] mt-2">{operation.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{operation.description}</p>
                          <p className="text-sm font-semibold text-[#D4A84B] mt-2">
                            Prime estimée : {operation.prime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Opérations Industrie */}
              <motion.section
                id="operations-industrie"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Factory className="w-8 h-8 text-[#1B4332]" />
                  <h2 className="text-3xl font-bold text-[#2D3436]">
                    Opérations Éligibles Industrie
                  </h2>
                </div>

                <p className="text-gray-600 mb-8">
                  Les principales fiches d'opérations standardisées pour le secteur industriel
                  et manufacturier.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {operationsIndustrie.map((operation, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1B4332]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#52796F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <operation.icon className="w-6 h-6 text-[#52796F]" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-mono text-[#52796F] bg-[#52796F]/10 px-2 py-1 rounded">
                            {operation.code}
                          </span>
                          <h3 className="font-bold text-[#2D3436] mt-2">{operation.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{operation.description}</p>
                          <p className="text-sm font-semibold text-[#D4A84B] mt-2">
                            Prime estimée : {operation.prime}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Estimation des primes */}
              <motion.section
                id="estimation"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Estimation des Primes CEE
                </h2>

                <div className="bg-[#F8F6F2] rounded-xl p-8 mb-8">
                  <h3 className="font-bold text-[#2D3436] mb-4">Formule de calcul</h3>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <p className="text-center text-lg font-mono text-[#1B4332]">
                      Prime (€) = Volume CEE (kWh cumac) × Prix du CEE (€/kWh)
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2D3436] mb-2">Volume CEE</h4>
                      <p className="text-sm text-gray-600">
                        Déterminé par les fiches standardisées selon le type de travaux,
                        la zone climatique, la surface ou la puissance concernée.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D3436] mb-2">Prix du CEE</h4>
                      <p className="text-sm text-gray-600">
                        Variable selon l'offre et la demande. En moyenne 6 à 8 €/MWh cumac
                        en 2026. Les prix évoluent régulièrement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-[#D4A84B] pl-6 py-2 bg-[#D4A84B]/5 rounded-r-xl">
                  <h3 className="font-bold text-[#2D3436] mb-2">Bon à savoir</h3>
                  <p className="text-gray-600">
                    Les primes peuvent être bonifiées dans certaines situations :
                    zones géographiques prioritaires, opérations "coup de pouce",
                    cumul avec le Décret Tertiaire. Nos experts optimisent votre dossier
                    pour maximiser le montant des primes.
                  </p>
                </div>
              </motion.section>

              {/* Processus de demande */}
              <motion.section
                id="processus"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Processus de Demande CEE
                </h2>

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex gap-6 p-6 rounded-xl border ${
                        step.important
                          ? 'border-[#D4A84B] bg-[#D4A84B]/5'
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.important ? 'bg-[#D4A84B]' : 'bg-[#1B4332]'
                      }`}>
                        <span className="text-white font-bold">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-[#2D3436]">{step.title}</h3>
                          {step.important && (
                            <span className="text-xs bg-[#D4A84B] text-white px-2 py-1 rounded-full">
                              CRITIQUE
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                        <p className="text-sm text-[#52796F] mt-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Durée : {step.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-700 mb-2">Attention : règle du "coup parti"</h3>
                      <p className="text-red-600">
                        Le dossier CEE doit être validé <strong>AVANT</strong> le début des travaux
                        (signature du devis ou bon de commande). Tout dossier déposé après le démarrage
                        des travaux sera automatiquement rejeté. Cette règle est strictement appliquée
                        sans exception.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Pièges à éviter */}
              <motion.section
                id="pieges"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Pièges à Éviter
                </h2>

                <p className="text-gray-600 mb-8">
                  Les erreurs les plus fréquentes qui peuvent compromettre votre dossier CEE
                  et vous faire perdre vos primes.
                </p>

                <div className="space-y-6">
                  {commonMistakes.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div className="bg-red-50 px-6 py-4 border-b border-red-100">
                        <div className="flex items-center gap-3">
                          <AlertTriangle className="w-5 h-5 text-red-500" />
                          <h3 className="font-bold text-red-700">{item.mistake}</h3>
                        </div>
                      </div>
                      <div className="p-6 grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold text-gray-500 mb-1">Conséquence</p>
                          <p className="text-gray-600">{item.consequence}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#1B4332] mb-1">Solution</p>
                          <p className="text-gray-600">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                      Optimisez vos Primes CEE
                    </h2>
                    <p className="text-white/80 mb-6">
                      Nos experts vous accompagnent pour maximiser vos primes CEE :
                      identification des opérations, constitution des dossiers, suivi
                      jusqu'au versement des primes.
                    </p>
                    <ul className="space-y-3">
                      {[
                        'Estimation gratuite de vos primes',
                        'Gestion complète des dossiers',
                        'Optimisation des montants',
                        'Suivi jusqu\'au versement',
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
                        Demander une Estimation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/expertises/financement-cee">
                      <Button size="lg" variant="outline" className="w-full border-white/50 text-white hover:bg-white/10">
                        Notre Expertise CEE
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
                description: 'Obligations et conformité pour les bâtiments tertiaires',
                href: '/ressources/guides/decret-tertiaire',
                icon: Building2,
              },
              {
                title: 'Décret BACS',
                description: 'GTB et financement CEE via la fiche BAT-TH-116',
                href: '/ressources/guides/decret-bacs',
                icon: Gauge,
              },
              {
                title: 'Plan d\'Actions Énergie',
                description: 'Élaborer une stratégie d\'économies d\'énergie',
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
