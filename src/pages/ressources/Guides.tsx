import { motion } from 'framer-motion'
import {
  FileText,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Building2,
  Zap,
  Calculator,
  ClipboardCheck,
  Shield,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SEO } from '@/components/seo/SEO'

const guides = [
  {
    id: 'decret-tertiaire-complet',
    title: 'Guide Complet du Décret Tertiaire',
    description: 'Tout comprendre sur le Décret Tertiaire : obligations, échéances, calculs, déclaration OPERAT et stratégies de conformité.',
    icon: Building2,
    pages: 45,
    category: 'Réglementation',
    popular: true,
    href: '/ressources/guides/decret-tertiaire',
    contents: [
      'Qui est concerné ?',
      'Les échéances clés',
      'Calcul des objectifs',
      'Déclaration OPERAT pas à pas',
      'Modulations possibles',
      'Sanctions et contrôles',
    ],
  },
  {
    id: 'gtb-bacs-guide',
    title: 'Décret BACS : Guide de Mise en Conformité',
    description: 'Comprendre les exigences GTB, choisir le bon système et financer votre installation via les CEE.',
    icon: Zap,
    pages: 32,
    category: 'Réglementation',
    popular: true,
    href: '/ressources/guides/decret-bacs',
    contents: [
      'Obligations par puissance CVC',
      'Classes GTB (A, B, C, D)',
      'Fonctionnalités requises',
      'Financement CEE (BAT-TH-116)',
      'Calendrier d\'installation',
      'Retours d\'expérience',
    ],
  },
  {
    id: 'cee-entreprises',
    title: 'Les CEE pour les Entreprises',
    description: 'Maximiser vos primes CEE : éligibilité, montants, processus de demande et fiches d\'opérations clés.',
    icon: Calculator,
    pages: 28,
    category: 'Financement',
    popular: false,
    href: '/ressources/guides/cee-entreprises',
    contents: [
      'Fonctionnement du dispositif CEE',
      'Opérations éligibles tertiaire',
      'Opérations éligibles industrie',
      'Estimation des primes',
      'Processus de demande',
      'Pièges à éviter',
    ],
  },
  {
    id: 'audit-energetique-checklist',
    title: 'Checklist Audit Énergétique',
    description: 'Préparez votre audit énergétique réglementaire : documents à fournir, points de contrôle et livrables attendus.',
    icon: ClipboardCheck,
    pages: 18,
    category: 'Méthodologie',
    popular: false,
    href: '/ressources/guides/audit-checklist',
    contents: [
      'Documents à rassembler',
      'Données de consommation',
      'Plans et surfaces',
      'Équipements techniques',
      'Contenu du rapport',
      'Suites à donner',
    ],
  },
  {
    id: 'plan-actions-energie',
    title: 'Élaborer son Plan d\'Actions Énergie',
    description: 'Méthodologie pour construire un plan d\'actions efficace : priorisation, ROI, planification et suivi.',
    icon: Shield,
    pages: 24,
    category: 'Méthodologie',
    popular: false,
    href: '/ressources/guides/plan-actions',
    contents: [
      'Diagnostic initial',
      'Identification des gisements',
      'Analyse coût/bénéfice',
      'Priorisation des actions',
      'Planning de mise en œuvre',
      'Indicateurs de suivi',
    ],
  },
  {
    id: 'operat-mode-emploi',
    title: 'OPERAT : Mode d\'Emploi Complet',
    description: 'Guide pas à pas pour déclarer sur la plateforme OPERAT : création de compte, saisie des données, attestation.',
    icon: BookOpen,
    pages: 36,
    category: 'Tutoriel',
    popular: true,
    href: '/ressources/guides/operat',
    contents: [
      'Création du compte utilisateur',
      'Rattachement des entités',
      'Saisie des bâtiments',
      'Déclaration des consommations',
      'Génération de l\'attestation',
      'Erreurs fréquentes',
    ],
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Guides() {
  const popularGuides = guides.filter(g => g.popular)
  const otherGuides = guides.filter(g => !g.popular)

  return (
    <>
      <SEO
        title="Guides Pratiques - Ressources Gratuites"
        description="Téléchargez nos guides gratuits : Décret Tertiaire, BACS, CEE, audits énergétiques. Ressources pratiques pour piloter votre conformité énergétique."
        canonical="/ressources/guides"
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
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Guides Pratiques</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ressources Gratuites pour votre Performance Énergétique
            </h1>
            <p className="text-xl text-white/80">
              Guides complets, checklists et tutoriels pour maîtriser les obligations
              réglementaires et optimiser vos projets de rénovation énergétique.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '6', label: 'Guides disponibles' },
              { value: '180+', label: 'Pages de contenu' },
              { value: '100%', label: 'Gratuit' },
              { value: '2026', label: 'Mis à jour' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-[#1B4332]">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Popular Guides */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            title="Guides les Plus Téléchargés"
            subtitle="Les ressources essentielles pour votre conformité énergétique"
          />

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {popularGuides.map((guide, index) => {
              const IconComponent = guide.icon
              return (
                <motion.div
                  key={guide.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1B4332] transition-colors">
                        <IconComponent className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors" />
                      </div>
                      <span className="px-3 py-1 bg-[#D4A84B]/10 text-[#D4A84B] text-xs font-semibold rounded-full">
                        Populaire
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#52796F] uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#2D3436] mt-2 mb-3 group-hover:text-[#1B4332] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {guide.description}
                    </p>
                  </div>

                  <div className="p-6 bg-gray-50">
                    <h4 className="text-sm font-semibold text-[#2D3436] mb-3">Contenu :</h4>
                    <ul className="space-y-2">
                      {guide.contents.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#77C14A] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                      {guide.contents.length > 4 && (
                        <li className="text-sm text-gray-500 italic pl-6">
                          + {guide.contents.length - 4} autres chapitres
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="p-6 flex justify-end">
                    <Link to={guide.href}>
                      <Button size="sm" variant="outline" className="gap-2">
                        Consulter le guide
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Other Guides */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Tous nos Guides"
            subtitle="Explorez l'ensemble de nos ressources documentaires"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {otherGuides.map((guide, index) => {
              const IconComponent = guide.icon
              return (
                <motion.div
                  key={guide.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#1B4332]/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1B4332] transition-colors">
                    <IconComponent className="w-6 h-6 text-[#1B4332] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-[#52796F] uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#2D3436] mt-1 mb-2 group-hover:text-[#1B4332] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {guide.description}
                    </p>
                    <div className="flex justify-end">
                      <Link to={guide.href} className="flex items-center gap-1 text-[#1B4332] text-sm font-semibold hover:gap-2 transition-all">
                        Consulter
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Request Custom Guide */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#2D3436] mb-4">
                  Besoin d'un Guide Personnalisé ?
                </h2>
                <p className="text-gray-600 mb-6">
                  Nous réalisons des guides sur-mesure adaptés à votre secteur d'activité,
                  vos contraintes spécifiques et vos objectifs de performance énergétique.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Guide spécifique à votre type de bâtiment',
                    'Analyse réglementaire personnalisée',
                    'Recommandations adaptées à votre contexte',
                    'Format digital ou imprimable',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#77C14A]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    Demander un Guide
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-64 h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332] to-[#52796F] rounded-xl transform rotate-3" />
                  <div className="absolute inset-0 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6">
                    <FileText className="w-16 h-16 text-[#1B4332] mb-4" />
                    <div className="text-center">
                      <p className="font-bold text-[#2D3436]">Votre Guide</p>
                      <p className="text-sm text-gray-500">Personnalisé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
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
              Besoin d'un Accompagnement Expert ?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Nos guides vous donnent les bases. Pour une mise en œuvre réussie,
              nos consultants vous accompagnent à chaque étape de votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                  Demander un Devis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/expertises/bureau-etudes">
                <Button size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                  Découvrir nos Expertises
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
