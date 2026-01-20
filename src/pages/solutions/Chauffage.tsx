import { motion } from 'framer-motion'
import {
  Thermometer,
  Flame,
  Wind,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Settings,
  Zap,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const systems = [
  {
    icon: Wind,
    title: 'Pompes à Chaleur',
    description: 'PAC air/air, air/eau ou géothermique pour un chauffage performant et économique.',
    benefits: ['COP jusqu\'à 4', 'Éligible CEE', 'Climatisation réversible'],
    savings: 'Jusqu\'à 70% d\'économies',
  },
  {
    icon: Flame,
    title: 'Chaudières Haute Performance',
    description: 'Chaudières gaz à condensation ou biomasse pour une efficacité maximale.',
    benefits: ['Rendement >100%', 'Faibles émissions', 'Fiabilité'],
    savings: 'Jusqu\'à 30% d\'économies',
  },
  {
    icon: Gauge,
    title: 'Régulation Intelligente',
    description: 'Systèmes de régulation et GTB pour optimiser le fonctionnement de vos installations.',
    benefits: ['Programmation horaire', 'Détection présence', 'Pilotage à distance'],
    savings: 'Jusqu\'à 25% d\'économies',
  },
  {
    icon: Settings,
    title: 'Équilibrage des Réseaux',
    description: 'Optimisation de la distribution hydraulique pour un confort homogène.',
    benefits: ['Confort amélioré', 'Économies d\'énergie', 'Réduction des plaintes'],
    savings: 'Jusqu\'à 15% d\'économies',
  },
]

const services = [
  {
    title: 'Audit de votre installation',
    description: 'Diagnostic complet de vos systèmes de chauffage existants.',
  },
  {
    title: 'Dimensionnement',
    description: 'Calcul des besoins et choix des équipements adaptés.',
  },
  {
    title: 'Installation',
    description: 'Mise en œuvre par des installateurs RGE qualifiés.',
  },
  {
    title: 'Mise en service',
    description: 'Réglages, formation et accompagnement à la prise en main.',
  },
  {
    title: 'Financement CEE',
    description: 'Montage complet de vos dossiers d\'aides.',
  },
  {
    title: 'Suivi de performance',
    description: 'Mesure des économies réalisées post-travaux.',
  },
]

const fiches = [
  { code: 'BAT-TH-102', label: 'Chaudière collective haute performance' },
  { code: 'BAT-TH-113', label: 'Pompe à chaleur de type air/eau' },
  { code: 'BAT-TH-127', label: 'Raccordement réseau de chaleur EnR' },
  { code: 'BAT-TH-116', label: 'Système de GTB (Décret BACS)' },
]

export function Chauffage() {
  return (
    <>
      <SEO
        title="Système de Chauffage | Installation et Optimisation"
        description="Installation et optimisation de systèmes de chauffage performants : pompes à chaleur, chaudières haute performance, régulation intelligente. Financement CEE."
        canonical="/solutions/chauffage"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Thermometer className="w-4 h-4" />
                Systèmes de Chauffage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Optimisez votre{' '}
                <span className="text-[#D4A84B]">système de chauffage</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                De l'installation de pompes à chaleur à l'optimisation de vos
                chaudières, nous vous accompagnons pour réduire vos consommations
                de chauffage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander un Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">Le saviez-vous ?</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-[#D4A84B]">50%</div>
                  <p className="text-white/80 mt-1">Part du chauffage dans la consommation énergétique d'un bâtiment tertiaire</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4A84B]">70%</div>
                  <p className="text-white/80 mt-1">D'économies possibles avec une pompe à chaleur performante</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Nos Solutions"
            title="Des systèmes de chauffage adaptés à vos besoins"
            description="Nous proposons une gamme complète de solutions pour optimiser votre chauffage."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <system.icon className="w-7 h-7 text-[#1B4332]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-[#2D3436]">
                          {system.title}
                        </h3>
                        <span className="px-3 py-1 bg-[#D4A84B]/10 text-[#D4A84B] text-xs font-medium rounded-full">
                          {system.savings}
                        </span>
                      </div>
                      <p className="text-[#636e72] text-sm leading-relaxed mt-2 mb-4">
                        {system.description}
                      </p>
                      <ul className="space-y-2">
                        {system.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2 text-sm text-[#636e72]">
                            <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Notre Accompagnement"
            title="Un service complet de A à Z"
            description="De l'audit à la mise en service, nous gérons l'ensemble de votre projet."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[#2D3436]">{service.title}</h3>
                  <p className="text-sm text-[#636e72] mt-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Financement Section */}
      <section className="py-16 md:py-24 bg-[#1B4332]">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Financez vos travaux avec les{' '}
                <span className="text-[#D4A84B]">CEE</span>
              </h2>
              <p className="mt-4 text-white/80">
                Les systèmes de chauffage performants sont éligibles aux Certificats
                d'Économies d'Énergie. Voici les principales fiches applicables :
              </p>
              <div className="mt-6 space-y-3">
                {fiches.map((fiche, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <span className="px-2 py-1 bg-[#D4A84B] text-xs font-mono rounded">
                      {fiche.code}
                    </span>
                    <span className="text-white/90">{fiche.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <Zap className="w-12 h-12 text-[#D4A84B] mb-4" />
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Décret BACS : êtes-vous concerné ?
              </h3>
              <p className="text-[#636e72] mb-6">
                Si votre système de chauffage dépasse 70 kW, vous êtes soumis au
                Décret BACS et devez installer une GTB d'ici 2027.
              </p>
              <Button href="/obligations/decret-bacs" variant="primary" size="lg" className="w-full group">
                En savoir plus sur le Décret BACS
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Optimisez votre système de chauffage"
        description="Nos experts analysent votre installation et vous proposent les solutions les plus adaptées."
        primaryCta={{ label: 'Demander un Audit Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default Chauffage
