import { motion } from 'framer-motion'
import {
  Building2,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Calendar,
  FileText,
  Clock,
  Info,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SEO } from '@/components/seo/SEO'

const tableOfContents = [
  { id: 'introduction', title: 'Introduction au Décret Tertiaire' },
  { id: 'qui-concerne', title: 'Qui est concerné ?' },
  { id: 'echeances', title: 'Les échéances clés' },
  { id: 'objectifs', title: 'Calcul des objectifs' },
  { id: 'operat', title: 'Déclaration OPERAT pas à pas' },
  { id: 'modulations', title: 'Les modulations possibles' },
  { id: 'sanctions', title: 'Sanctions et contrôles' },
]

const deadlines = [
  { year: '2030', reduction: '-40%', status: 'En cours' },
  { year: '2040', reduction: '-50%', status: 'À venir' },
  { year: '2050', reduction: '-60%', status: 'À venir' },
]

const operatSteps = [
  {
    step: 1,
    title: 'Création du compte',
    description: 'Créez votre compte sur la plateforme OPERAT de l\'ADEME avec votre SIRET.',
  },
  {
    step: 2,
    title: 'Rattachement des entités',
    description: 'Déclarez vos établissements et rattachez-les à votre structure.',
  },
  {
    step: 3,
    title: 'Saisie des bâtiments',
    description: 'Renseignez les caractéristiques de chaque bâtiment (surface, activité, année de référence).',
  },
  {
    step: 4,
    title: 'Déclaration des consommations',
    description: 'Saisissez vos consommations énergétiques annuelles par type d\'énergie.',
  },
  {
    step: 5,
    title: 'Vérification et validation',
    description: 'Contrôlez la cohérence des données et validez votre déclaration.',
  },
  {
    step: 6,
    title: 'Génération de l\'attestation',
    description: 'Téléchargez votre attestation annuelle de conformité.',
  },
]

const modulations = [
  {
    type: 'Technique',
    description: 'Contraintes architecturales, patrimoniales ou techniques empêchant certains travaux.',
    examples: ['Bâtiments classés monuments historiques', 'Contraintes structurelles', 'Impossibilité technique avérée'],
  },
  {
    type: 'Économique',
    description: 'Disproportion manifeste du coût des actions par rapport aux bénéfices attendus.',
    examples: ['ROI supérieur à 10 ans', 'Coût excessif vs économies', 'Précarité économique'],
  },
  {
    type: 'Patrimoine atypique',
    description: 'Bâtiments dont l\'usage ou les caractéristiques ne permettent pas d\'atteindre les objectifs standards.',
    examples: ['Data centers', 'Laboratoires', 'Process industriels spécifiques'],
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function GuideDecretTertiaire() {
  return (
    <>
      <SEO
        title="Guide Complet du Décret Tertiaire 2026-2050"
        description="Tout comprendre sur le Décret Tertiaire : obligations, échéances 2030-2050, calcul des objectifs, déclaration OPERAT et stratégies de conformité."
        canonical="/ressources/guides/decret-tertiaire"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <Container className="relative z-10">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link to="/ressources/guides" className="hover:text-white">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Décret Tertiaire</span>
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
              Guide Complet du Décret Tertiaire
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Tout ce que vous devez savoir sur le Décret Tertiaire : obligations légales,
              échéances, calcul des objectifs, déclaration OPERAT et stratégies de conformité
              pour votre entreprise.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Temps de lecture : 15 min
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
                  Introduction au Décret Tertiaire
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Le <strong>Décret Tertiaire</strong>, officiellement appelé "Dispositif Éco Énergie Tertiaire",
                    est issu de la loi ELAN de 2018 et du décret du 23 juillet 2019. Il impose une
                    <strong> réduction progressive des consommations énergétiques</strong> des bâtiments
                    à usage tertiaire en France.
                  </p>
                  <p>
                    Ce dispositif s'inscrit dans la stratégie nationale bas-carbone et vise à atteindre
                    la neutralité carbone du parc tertiaire français d'ici 2050. Il concerne des
                    millions de mètres carrés de bureaux, commerces, hôtels, établissements de santé
                    et autres bâtiments tertiaires.
                  </p>
                </div>

                <div className="mt-8 bg-[#1B4332]/5 border-l-4 border-[#1B4332] rounded-r-xl p-6">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-[#1B4332] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#2D3436] mb-2">Point clé</h4>
                      <p className="text-gray-600">
                        Le Décret Tertiaire s'applique aux bâtiments ou parties de bâtiments à usage
                        tertiaire dont la surface d'exploitation est supérieure ou égale à 1 000 m².
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Qui est concerné */}
              <motion.div
                id="qui-concerne"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Qui est concerné ?
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Le Décret Tertiaire concerne tous les <strong>propriétaires et preneurs à bail</strong>
                    de bâtiments ou parties de bâtiments à usage tertiaire dont la surface cumulée
                    est supérieure ou égale à 1 000 m².
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Bâtiments concernés
                    </h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Bureaux et administrations</li>
                      <li>• Commerces et centres commerciaux</li>
                      <li>• Hôtels et hébergements</li>
                      <li>• Établissements de santé</li>
                      <li>• Enseignement et formation</li>
                      <li>• Logistique et entrepôts</li>
                      <li>• Équipements sportifs</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6">
                    <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Exclusions
                    </h4>
                    <ul className="space-y-2 text-red-700">
                      <li>• Constructions provisoires (&lt;2 ans)</li>
                      <li>• Lieux de culte</li>
                      <li>• Bâtiments de défense nationale</li>
                      <li>• Bâtiments &lt;1000 m² non cumulables</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Échéances */}
              <motion.div
                id="echeances"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Les Échéances Clés
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Le Décret Tertiaire impose des <strong>objectifs de réduction progressifs</strong>
                    jusqu'en 2050, avec trois paliers intermédiaires.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {deadlines.map((deadline, index) => (
                    <div
                      key={deadline.year}
                      className={`rounded-xl p-6 text-center ${
                        index === 0 ? 'bg-[#1B4332] text-white' : 'bg-gray-100'
                      }`}
                    >
                      <div className={`text-4xl font-bold mb-2 ${index === 0 ? 'text-white' : 'text-[#1B4332]'}`}>
                        {deadline.reduction}
                      </div>
                      <div className={`text-xl font-semibold mb-2 ${index === 0 ? 'text-white/90' : 'text-[#2D3436]'}`}>
                        {deadline.year}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        index === 0 ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {deadline.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-800 mb-2">Prochaine échéance de déclaration</h4>
                      <p className="text-amber-700">
                        <strong>30 septembre 2026</strong> - Date limite pour déclarer les consommations
                        de l'année 2025 sur la plateforme OPERAT.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Calcul des objectifs */}
              <motion.div
                id="objectifs"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Calcul des Objectifs
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Deux méthodes sont possibles pour définir vos objectifs de réduction :
                    l'<strong>objectif relatif</strong> ou l'<strong>objectif en valeur absolue</strong>.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-[#1B4332] rounded-xl p-6">
                    <h4 className="font-bold text-[#1B4332] text-lg mb-4">Objectif Relatif</h4>
                    <p className="text-gray-600 mb-4">
                      Réduction par rapport à une année de référence choisie entre 2010 et 2019.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Exemple :</strong> Si votre consommation de référence est de 200 kWh/m²/an,
                        votre objectif 2030 sera de 120 kWh/m²/an (-40%).
                      </p>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-[#2D3436] text-lg mb-4">Objectif en Valeur Absolue</h4>
                    <p className="text-gray-600 mb-4">
                      Atteinte d'un seuil de consommation fixé par arrêté selon l'activité du bâtiment.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Exemple :</strong> Pour des bureaux, le seuil peut être fixé à
                        80 kWh/m²/an en énergie finale.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* OPERAT */}
              <motion.div
                id="operat"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Déclaration OPERAT Pas à Pas
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    <strong>OPERAT</strong> (Observatoire de la Performance Énergétique, de la Rénovation
                    et des Actions du Tertiaire) est la plateforme officielle de l'ADEME pour déclarer
                    vos consommations.
                  </p>
                </div>

                <div className="space-y-4">
                  {operatSteps.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 bg-[#F8F6F2] rounded-xl p-5"
                    >
                      <div className="w-10 h-10 bg-[#1B4332] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2D3436] mb-1">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Modulations */}
              <motion.div
                id="modulations"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Les Modulations Possibles
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Dans certains cas, il est possible de demander une <strong>modulation des objectifs</strong>
                    lorsque des contraintes spécifiques empêchent d'atteindre les seuils réglementaires.
                  </p>
                </div>

                <div className="space-y-6">
                  {modulations.map((mod) => (
                    <div key={mod.type} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-[#1B4332] text-lg mb-3">Modulation {mod.type}</h4>
                      <p className="text-gray-600 mb-4">{mod.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {mod.examples.map((example) => (
                          <span
                            key={example}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sanctions */}
              <motion.div
                id="sanctions"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold text-[#2D3436] mb-6">
                  Sanctions et Contrôles
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                  <p>
                    Le non-respect des obligations du Décret Tertiaire expose les assujettis à des
                    sanctions administratives et à une publication des manquements ("name and shame").
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Sanctions prévues
                  </h4>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Mise en demeure</strong> de respecter les obligations dans un délai de 3 à 6 mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Amende jusqu'à 7 500 €</strong> par bâtiment en cas de non-transmission des données</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Publication des manquements</strong> sur un site de l'État ("name and shame")</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                {/* CTA Card */}
                <div className="bg-[#1B4332] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Besoin d'un Accompagnement ?</h3>
                  <p className="text-white/80 mb-6">
                    Nos experts vous accompagnent dans votre mise en conformité Décret Tertiaire.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-white text-[#1B4332] hover:bg-gray-100">
                      Demander un Devis
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Related Pages */}
                <div className="bg-[#F8F6F2] rounded-xl p-6">
                  <h4 className="font-bold text-[#2D3436] mb-4">Pages Liées</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        to="/obligations/decret-tertiaire"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <Building2 className="w-4 h-4" />
                        Nos Services Décret Tertiaire
                      </Link>
                    </li>
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
                        to="/ressources/calendrier"
                        className="flex items-center gap-2 text-[#1B4332] hover:underline"
                      >
                        <Calendar className="w-4 h-4" />
                        Calendrier Réglementaire
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Stats */}
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h4 className="font-bold text-[#2D3436] mb-4">Chiffres Clés</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Bâtiments concernés</span>
                      <span className="font-bold text-[#1B4332]">~800 000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Surface totale</span>
                      <span className="font-bold text-[#1B4332]">~1 Md m²</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Objectif 2030</span>
                      <span className="font-bold text-[#1B4332]">-40%</span>
                    </div>
                  </div>
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
              Prêt à vous Mettre en Conformité ?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Ne laissez pas les échéances vous surprendre. Nos experts vous accompagnent
              de A à Z dans votre démarche de conformité au Décret Tertiaire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                  Évaluer ma Conformité
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
