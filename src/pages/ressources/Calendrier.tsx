import { motion } from 'framer-motion'
import {
  Calendar,
  AlertTriangle,
  Clock,
  CheckCircle,
  ArrowRight,
  Bell,
  Building2,
  Zap,
  FileText,
  Info,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SEO } from '@/components/seo/SEO'

type DeadlineStatus = 'passed' | 'urgent' | 'upcoming' | 'future'

interface Deadline {
  id: string
  title: string
  date: string
  fullDate: string
  description: string
  regulation: string
  icon: typeof Calendar
  status: DeadlineStatus
  action: string
  link: string
}

const deadlines: Deadline[] = [
  {
    id: '1',
    title: 'GTB obligatoire (>290 kW)',
    date: '1er janvier 2025',
    fullDate: '2025-01-01',
    description: 'Les bâtiments tertiaires avec une puissance CVC supérieure à 290 kW doivent être équipés d\'une GTB de classe A ou B.',
    regulation: 'Décret BACS',
    icon: Zap,
    status: 'passed',
    action: 'Vérifier la conformité',
    link: '/obligations/decret-bacs',
  },
  {
    id: '2',
    title: 'Déclaration OPERAT 2025',
    date: '30 septembre 2026',
    fullDate: '2026-09-30',
    description: 'Date limite pour déclarer les consommations 2025 sur la plateforme OPERAT. Première année avec risque de sanctions.',
    regulation: 'Décret Tertiaire',
    icon: Building2,
    status: 'urgent',
    action: 'Préparer la déclaration',
    link: '/obligations/decret-tertiaire',
  },
  {
    id: '3',
    title: 'GTB obligatoire (>70 kW)',
    date: '1er janvier 2027',
    fullDate: '2027-01-01',
    description: 'Extension de l\'obligation GTB aux bâtiments avec une puissance CVC comprise entre 70 et 290 kW.',
    regulation: 'Décret BACS',
    icon: Zap,
    status: 'upcoming',
    action: 'Planifier l\'installation',
    link: '/obligations/decret-bacs',
  },
  {
    id: '4',
    title: 'Déclaration OPERAT 2026',
    date: '30 septembre 2027',
    fullDate: '2027-09-30',
    description: 'Déclaration des consommations 2026 sur OPERAT. Suivi de la trajectoire vers l\'objectif 2030.',
    regulation: 'Décret Tertiaire',
    icon: Building2,
    status: 'upcoming',
    action: 'Anticiper',
    link: '/obligations/decret-tertiaire',
  },
  {
    id: '5',
    title: 'Audit énergétique grandes entreprises',
    date: '5 décembre 2027',
    fullDate: '2027-12-05',
    description: 'Renouvellement obligatoire de l\'audit énergétique pour les grandes entreprises (tous les 4 ans).',
    regulation: 'Audit réglementaire',
    icon: FileText,
    status: 'upcoming',
    action: 'Planifier l\'audit',
    link: '/obligations/audit-energetique',
  },
  {
    id: '6',
    title: 'Objectif Décret Tertiaire -40%',
    date: '31 décembre 2030',
    fullDate: '2030-12-31',
    description: 'Première échéance majeure du Décret Tertiaire : réduction de 40% des consommations par rapport à l\'année de référence.',
    regulation: 'Décret Tertiaire',
    icon: Building2,
    status: 'future',
    action: 'Élaborer la stratégie',
    link: '/obligations/decret-tertiaire',
  },
  {
    id: '7',
    title: 'Fin période CEE 6',
    date: '31 décembre 2030',
    fullDate: '2030-12-31',
    description: 'Fin de la 6ème période des Certificats d\'Économies d\'Énergie. Dernière opportunité pour bénéficier des primes actuelles.',
    regulation: 'CEE',
    icon: Calendar,
    status: 'future',
    action: 'Profiter des CEE',
    link: '/expertises/financement-cee',
  },
  {
    id: '8',
    title: 'Objectif Décret Tertiaire -50%',
    date: '31 décembre 2040',
    fullDate: '2040-12-31',
    description: 'Deuxième échéance du Décret Tertiaire : réduction de 50% des consommations énergétiques.',
    regulation: 'Décret Tertiaire',
    icon: Building2,
    status: 'future',
    action: 'Vision long terme',
    link: '/obligations/decret-tertiaire',
  },
  {
    id: '9',
    title: 'Objectif Décret Tertiaire -60%',
    date: '31 décembre 2050',
    fullDate: '2050-12-31',
    description: 'Échéance finale du Décret Tertiaire : réduction de 60% vers la neutralité carbone du parc tertiaire.',
    regulation: 'Décret Tertiaire',
    icon: Building2,
    status: 'future',
    action: 'Stratégie globale',
    link: '/obligations/decret-tertiaire',
  },
]

const getStatusConfig = (status: DeadlineStatus) => {
  switch (status) {
    case 'passed':
      return {
        label: 'Échéance passée',
        bgColor: 'bg-gray-100',
        textColor: 'text-gray-600',
        borderColor: 'border-gray-200',
        iconColor: 'text-gray-400',
        badgeColor: 'bg-gray-500',
      }
    case 'urgent':
      return {
        label: 'Urgent',
        bgColor: 'bg-red-50',
        textColor: 'text-red-700',
        borderColor: 'border-red-200',
        iconColor: 'text-red-500',
        badgeColor: 'bg-red-500',
      }
    case 'upcoming':
      return {
        label: 'À venir',
        bgColor: 'bg-amber-50',
        textColor: 'text-amber-700',
        borderColor: 'border-amber-200',
        iconColor: 'text-amber-500',
        badgeColor: 'bg-amber-500',
      }
    case 'future':
      return {
        label: 'Long terme',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        borderColor: 'border-blue-200',
        iconColor: 'text-blue-500',
        badgeColor: 'bg-blue-500',
      }
  }
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Calendrier() {
  const urgentDeadlines = deadlines.filter(d => d.status === 'urgent' || d.status === 'upcoming')

  return (
    <>
      <SEO
        title="Calendrier Réglementaire Énergie 2026-2050"
        description="Toutes les échéances réglementaires énergie : Décret Tertiaire, BACS, CEE, audits. Calendrier complet avec dates clés et actions à anticiper."
        canonical="/ressources/calendrier"
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
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Calendrier Réglementaire</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Échéances Réglementaires 2026-2050
            </h1>
            <p className="text-xl text-white/80">
              Anticipez vos obligations énergétiques avec notre calendrier complet.
              Dates clés, réglementations concernées et actions à entreprendre.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Alert Banner */}
      {urgentDeadlines.length > 0 && (
        <section className="py-6 bg-red-50 border-b border-red-100">
          <Container>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-red-800">
                  {urgentDeadlines.length} échéance(s) à surveiller dans les 24 prochains mois
                </p>
                <p className="text-sm text-red-600">
                  Ne manquez pas les dates importantes pour votre conformité réglementaire.
                </p>
              </div>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white flex-shrink-0">
                <Bell className="w-4 h-4 mr-2" />
                Recevoir les alertes
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Timeline */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Chronologie des Obligations"
            subtitle="Visualisez toutes les échéances importantes pour votre entreprise"
          />

          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-6">
              {deadlines.map((deadline, index) => {
                const statusConfig = getStatusConfig(deadline.status)
                const IconComponent = deadline.icon

                return (
                  <motion.div
                    key={deadline.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`relative md:pl-20 ${deadline.status === 'passed' ? 'opacity-60' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-5 h-5 rounded-full ${statusConfig.badgeColor} border-4 border-white shadow hidden md:block`} />

                    <div className={`${statusConfig.bgColor} ${statusConfig.borderColor} border rounded-xl p-6 hover:shadow-md transition-shadow`}>
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* Icon and Date */}
                        <div className="flex items-center gap-4 lg:w-48 flex-shrink-0">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${statusConfig.bgColor}`}>
                            <IconComponent className={`w-6 h-6 ${statusConfig.iconColor}`} />
                          </div>
                          <div>
                            <div className={`text-sm font-bold ${statusConfig.textColor}`}>
                              {deadline.date}
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusConfig.badgeColor} text-white`}>
                              {statusConfig.label}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-[#52796F] uppercase tracking-wider">
                              {deadline.regulation}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                            {deadline.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {deadline.description}
                          </p>
                        </div>

                        {/* Action */}
                        <div className="lg:w-48 flex-shrink-0">
                          <Link to={deadline.link}>
                            <Button
                              size="sm"
                              variant={deadline.status === 'urgent' ? 'primary' : 'outline'}
                              className="w-full gap-2"
                            >
                              {deadline.action}
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Legend */}
      <section className="py-12 bg-[#F8F6F2]">
        <Container>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#2D3436] mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#52796F]" />
              Légende du calendrier
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { status: 'passed' as const, description: 'Date dépassée, vérifiez votre conformité' },
                { status: 'urgent' as const, description: 'Échéance dans moins de 12 mois' },
                { status: 'upcoming' as const, description: 'Échéance dans 1-3 ans' },
                { status: 'future' as const, description: 'Échéance à long terme (>3 ans)' },
              ].map((item) => {
                const config = getStatusConfig(item.status)
                return (
                  <div key={item.status} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full ${config.badgeColor} flex-shrink-0 mt-0.5`} />
                    <div>
                      <div className={`font-semibold text-sm ${config.textColor}`}>{config.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Regulations Summary */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Réglementations Concernées"
            subtitle="Comprendre les principales obligations énergétiques"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Décret Tertiaire',
                icon: Building2,
                description: 'Obligation de réduction des consommations pour les bâtiments tertiaires >1000m². Objectifs : -40% (2030), -50% (2040), -60% (2050).',
                link: '/obligations/decret-tertiaire',
              },
              {
                title: 'Décret BACS',
                icon: Zap,
                description: 'Installation obligatoire d\'une GTB (Gestion Technique du Bâtiment) de classe A ou B pour les bâtiments tertiaires selon leur puissance CVC.',
                link: '/obligations/decret-bacs',
              },
              {
                title: 'CEE',
                icon: Calendar,
                description: 'Certificats d\'Économies d\'Énergie : dispositif de financement des travaux de rénovation énergétique. Période 6 : 2026-2030.',
                link: '/expertises/financement-cee',
              },
            ].map((reg, index) => {
              const IconComponent = reg.icon
              return (
                <motion.div
                  key={reg.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F8F6F2] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1B4332] rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3">{reg.title}</h3>
                  <p className="text-gray-600 mb-4">{reg.description}</p>
                  <Link
                    to={reg.link}
                    className="inline-flex items-center gap-2 text-[#1B4332] font-semibold hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Download Calendar */}
      <section className="py-16 bg-[#1B4332]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Téléchargez le Calendrier Complet
              </h2>
              <p className="text-white/80 mb-6">
                Recevez notre calendrier réglementaire au format PDF avec toutes les
                échéances détaillées, les actions à entreprendre et les ressources utiles.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Toutes les échéances 2026-2050',
                  'Actions recommandées pour chaque date',
                  'Liens vers les textes officiels',
                  'Mise à jour trimestrielle gratuite',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-[#77C14A]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#1B4332] hover:bg-gray-100 gap-2">
                  <Calendar className="w-5 h-5" />
                  Télécharger le PDF
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  <Bell className="w-5 h-5" />
                  S'abonner aux alertes
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-7 gap-2 text-center text-white/80 text-sm">
                  {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                    <div key={i} className="font-semibold">{day}</div>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                        i === 29 ? 'bg-[#D4A84B] text-white font-bold' :
                        i === 15 ? 'bg-red-500 text-white font-bold' :
                        'hover:bg-white/10'
                      }`}
                    >
                      {((i % 31) + 1)}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-red-500" /> Urgent
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-[#D4A84B]" /> Important
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <Clock className="w-12 h-12 text-[#1B4332] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">
              Ne Laissez pas les Échéances vous Surprendre
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Nos experts vous accompagnent dans l'anticipation et la gestion de vos
              obligations réglementaires. Un audit gratuit pour évaluer votre situation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Évaluer ma Conformité
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
