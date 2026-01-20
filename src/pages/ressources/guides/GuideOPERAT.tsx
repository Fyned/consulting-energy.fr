import { motion } from 'framer-motion'
import {
  FileText,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Calendar,
  User,
  Building2,
  BarChart3,
  Clock,
  Info,
  ChevronRight,
  Monitor,
  Download,
  Shield,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SEO } from '@/components/seo/SEO'

const tableOfContents = [
  { id: 'introduction', title: 'Qu\'est-ce qu\'OPERAT ?' },
  { id: 'compte', title: 'Création du compte' },
  { id: 'entites', title: 'Rattachement des entités' },
  { id: 'batiments', title: 'Saisie des bâtiments' },
  { id: 'consommations', title: 'Déclaration des consommations' },
  { id: 'attestation', title: 'Génération de l\'attestation' },
  { id: 'erreurs', title: 'Erreurs fréquentes' },
]

const accountSteps = [
  {
    step: 1,
    title: 'Accéder à la plateforme',
    description: 'Rendez-vous sur operat.ademe.fr et cliquez sur "Créer un compte".',
    icon: Monitor,
  },
  {
    step: 2,
    title: 'Renseigner vos informations',
    description: 'Saisissez votre email professionnel, nom, prénom et créez un mot de passe sécurisé.',
    icon: User,
  },
  {
    step: 3,
    title: 'Valider votre email',
    description: 'Cliquez sur le lien de confirmation reçu dans votre boîte mail.',
    icon: CheckCircle,
  },
  {
    step: 4,
    title: 'Compléter votre profil',
    description: 'Ajoutez vos informations professionnelles et le SIRET de votre organisation.',
    icon: FileText,
  },
]

const entityTypes = [
  {
    type: 'Propriétaire',
    description: 'Vous êtes propriétaire du bâtiment et responsable de sa déclaration.',
    responsibilities: ['Déclaration des données', 'Suivi des objectifs', 'Plan d\'actions'],
  },
  {
    type: 'Preneur à bail',
    description: 'Vous occupez le bâtiment en tant que locataire.',
    responsibilities: ['Transmission des consommations', 'Actions sur les usages', 'Coordination avec le propriétaire'],
  },
  {
    type: 'Mandataire',
    description: 'Vous agissez pour le compte d\'un propriétaire ou preneur.',
    responsibilities: ['Gestion déléguée', 'Déclaration sur mandat', 'Reporting'],
  },
]

const buildingData = [
  { category: 'Identification', fields: ['Adresse complète', 'Références cadastrales', 'Année de construction', 'Type de propriété'] },
  { category: 'Caractéristiques', fields: ['Surface utile brute', 'Nombre de niveaux', 'Type de chauffage', 'Type de climatisation'] },
  { category: 'Activités', fields: ['Catégorie d\'activité', 'Sous-catégorie', 'Intensité d\'usage', 'Horaires d\'occupation'] },
  { category: 'Année de référence', fields: ['Année choisie (2010-2019)', 'Consommation de référence', 'Justificatifs'] },
]

const consumptionTypes = [
  { type: 'Électricité', unit: 'kWh', sources: ['Factures fournisseur', 'Relevés compteur', 'Données gestionnaire réseau'] },
  { type: 'Gaz naturel', unit: 'kWh PCS', sources: ['Factures GRDF/fournisseur', 'Relevés compteur'] },
  { type: 'Fioul domestique', unit: 'litres ou kWh', sources: ['Factures livraison', 'Relevés de cuve'] },
  { type: 'Réseau de chaleur/froid', unit: 'kWh', sources: ['Factures gestionnaire réseau', 'Relevés sous-station'] },
  { type: 'Autres énergies', unit: 'variable', sources: ['Bois, GPL, charbon...'] },
]

const commonErrors = [
  {
    error: 'Surface incorrecte',
    description: 'La surface déclarée ne correspond pas à la surface utile brute réelle.',
    solution: 'Vérifiez vos plans et mesurez la surface utile brute (SUB) selon la définition OPERAT.',
  },
  {
    error: 'Année de référence mal choisie',
    description: 'L\'année choisie n\'est pas représentative de l\'activité normale du bâtiment.',
    solution: 'Choisissez une année entre 2010 et 2019 avec une occupation et activité normales.',
  },
  {
    error: 'Consommations incomplètes',
    description: 'Certaines énergies ou usages ne sont pas déclarés.',
    solution: 'Recensez toutes les sources d\'énergie et incluez les espaces communs.',
  },
  {
    error: 'Oubli des annexes',
    description: 'Parkings, locaux techniques ou archives non déclarés.',
    solution: 'Intégrez tous les espaces liés à l\'activité tertiaire, même annexes.',
  },
  {
    error: 'Mauvaise catégorie d\'activité',
    description: 'L\'activité déclarée ne correspond pas à l\'usage réel.',
    solution: 'Référez-vous à la nomenclature OPERAT pour choisir la bonne catégorie.',
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function GuideOPERAT() {
  return (
    <>
      <SEO
        title="OPERAT Mode d'Emploi Complet - Guide Pas à Pas"
        description="Guide pas à pas pour déclarer sur OPERAT : création de compte, rattachement des entités, saisie des bâtiments, déclaration des consommations et attestation."
        canonical="/ressources/guides/operat"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/ressources/guides" className="hover:text-white">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">OPERAT</span>
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
                Tutoriel
              </span>
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                Pas à Pas
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              OPERAT : Mode d'Emploi Complet
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Guide détaillé pour naviguer sur la plateforme OPERAT de l'ADEME : de la création
              de compte à la génération de votre attestation de conformité Décret Tertiaire.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Temps de lecture : 20 min
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
                  Qu'est-ce qu'OPERAT ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    <strong>OPERAT</strong> (Observatoire de la Performance Énergétique, de la Rénovation
                    et des Actions du Tertiaire) est la plateforme numérique officielle gérée par l'ADEME
                    pour la mise en œuvre du Décret Tertiaire.
                  </p>
                  <p>
                    C'est sur cette plateforme que les propriétaires et preneurs à bail de bâtiments
                    tertiaires de plus de 1000 m² doivent déclarer leurs consommations énergétiques
                    et suivre leur trajectoire vers les objectifs de réduction.
                  </p>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  {[
                    { icon: Building2, label: 'Déclaration bâtiments', desc: 'Recensement du patrimoine' },
                    { icon: BarChart3, label: 'Suivi consommations', desc: 'Historique énergétique' },
                    { icon: Shield, label: 'Attestation conformité', desc: 'Justificatif officiel' },
                  ].map((item) => {
                    const IconComponent = item.icon
                    return (
                      <div key={item.label} className="bg-[#F8F6F2] rounded-xl p-4 text-center">
                        <IconComponent className="w-8 h-8 text-[#1B4332] mx-auto mb-2" />
                        <h4 className="font-semibold text-[#2D3436]">{item.label}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Création du compte */}
              <motion.div
                id="compte"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Création du Compte Utilisateur
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    La première étape consiste à créer votre compte sur la plateforme OPERAT.
                    Suivez ces étapes pour vous inscrire :
                  </p>
                </div>

                <div className="space-y-4">
                  {accountSteps.map((step) => {
                    const IconComponent = step.icon
                    return (
                      <div key={step.step} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
                        <div className="w-12 h-12 bg-[#1B4332] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-[#2D3436]">{step.title}</h4>
                            <IconComponent className="w-4 h-4 text-[#52796F]" />
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Conseil</h4>
                      <p className="text-blue-700">
                        Utilisez une adresse email professionnelle pérenne. En cas de changement
                        de collaborateur, le transfert du compte sera plus simple.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Rattachement des entités */}
              <motion.div
                id="entites"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Rattachement des Entités
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Après la création de votre compte, vous devez rattacher votre profil à une ou
                    plusieurs entités (entreprises, collectivités, etc.) selon votre rôle.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {entityTypes.map((entity) => (
                    <div key={entity.type} className="bg-[#F8F6F2] rounded-xl p-5">
                      <h4 className="font-bold text-[#1B4332] text-lg mb-2">{entity.type}</h4>
                      <p className="text-gray-600 text-sm mb-4">{entity.description}</p>
                      <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">Responsabilités</h5>
                      <ul className="space-y-1">
                        {entity.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-3 h-3 text-[#77C14A]" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Saisie des bâtiments */}
              <motion.div
                id="batiments"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Saisie des Bâtiments
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Pour chaque bâtiment ou partie de bâtiment assujetti, vous devez renseigner
                    un ensemble d'informations. Préparez les documents suivants avant de commencer.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {buildingData.map((cat) => (
                    <div key={cat.category} className="bg-white border border-gray-200 rounded-xl p-5">
                      <h4 className="font-bold text-[#1B4332] mb-3">{cat.category}</h4>
                      <ul className="space-y-2">
                        {cat.fields.map((field) => (
                          <li key={field} className="flex items-center gap-2 text-gray-700">
                            <span className="w-2 h-2 bg-[#1B4332] rounded-full" />
                            {field}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Déclaration des consommations */}
              <motion.div
                id="consommations"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Déclaration des Consommations
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Chaque année, vous devez déclarer les consommations énergétiques de vos bâtiments.
                    Voici les types d'énergie à renseigner :
                  </p>
                </div>

                <div className="space-y-4">
                  {consumptionTypes.map((conso) => (
                    <div key={conso.type} className="bg-[#F8F6F2] rounded-xl p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-[#2D3436]">{conso.type}</h4>
                        <span className="px-3 py-1 bg-[#1B4332]/10 text-[#1B4332] text-xs font-medium rounded-full">
                          Unité : {conso.unit}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {conso.sources.map((source) => (
                          <span key={source} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full">
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-800 mb-2">Important</h4>
                      <p className="text-amber-700">
                        Conservez tous les justificatifs (factures, relevés) pendant 10 ans minimum.
                        L'administration peut demander leur production en cas de contrôle.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Génération de l'attestation */}
              <motion.div
                id="attestation"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Génération de l'Attestation
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Une fois vos consommations saisies et validées, OPERAT génère automatiquement
                    une attestation annuelle qui récapitule votre situation par rapport aux objectifs.
                  </p>
                </div>

                <div className="bg-[#1B4332] rounded-2xl p-8 text-white">
                  <div className="flex items-start gap-4 mb-6">
                    <Download className="w-8 h-8 text-[#D4A84B] flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">L'attestation contient :</h4>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Identification du bâtiment',
                      'Consommation de référence',
                      'Consommation de l\'année déclarée',
                      'Objectif de réduction applicable',
                      'Écart par rapport à l\'objectif',
                      'Statut de conformité',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-[#77C14A]" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Erreurs fréquentes */}
              <motion.div
                id="erreurs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Erreurs Fréquentes à Éviter
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Voici les erreurs les plus courantes rencontrées lors des déclarations OPERAT
                    et comment les éviter :
                  </p>
                </div>

                <div className="space-y-4">
                  {commonErrors.map((err) => (
                    <div key={err.error} className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-red-800 mb-1">{err.error}</h4>
                          <p className="text-red-700 text-sm mb-3">{err.description}</p>
                          <div className="bg-white rounded-lg p-3">
                            <span className="text-xs font-semibold text-green-700 uppercase">Solution : </span>
                            <span className="text-sm text-gray-700">{err.solution}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <div className="bg-[#1B4332] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Besoin d'Aide OPERAT ?</h3>
                  <p className="text-white/80 mb-6">
                    Nos experts vous accompagnent dans vos déclarations OPERAT et le suivi de votre conformité.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-[#1B4332] hover:bg-gray-100">
                      Demander un Accompagnement
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Quick Link */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Accès Direct
                  </h4>
                  <a
                    href="https://operat.ademe.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-700 hover:underline"
                  >
                    Plateforme OPERAT
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Related Pages */}
                <div className="bg-[#F8F6F2] rounded-xl p-6">
                  <h4 className="font-bold text-[#2D3436] mb-4">Pages Liées</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        to="/expertises/accompagnement-operat"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <FileText className="w-4 h-4" />
                        Accompagnement OPERAT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/obligations/decret-tertiaire"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <Building2 className="w-4 h-4" />
                        Décret Tertiaire
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ressources/guides/decret-tertiaire"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <FileText className="w-4 h-4" />
                        Guide Décret Tertiaire
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
              Simplifiez vos Déclarations OPERAT
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Gagnez du temps et évitez les erreurs avec notre accompagnement expert.
              Nous gérons vos déclarations OPERAT de A à Z.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                  Demander un Devis
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
