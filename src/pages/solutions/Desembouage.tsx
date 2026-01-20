import { motion } from 'framer-motion'
import {
  Droplets,
  Gauge,
  ThermometerSun,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Wrench,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const symptoms = [
  'Radiateurs froids en partie basse ou haute',
  'Bruits dans les canalisations (gargouillis)',
  'Surconsommation de chauffage inexpliquée',
  'Corrosion visible sur les équipements',
  'Pompes qui peinent ou grippent',
  'Eau de vidange noire ou chargée',
]

const benefits = [
  {
    icon: ThermometerSun,
    title: 'Performance restaurée',
    description: 'Récupération jusqu\'à 15% de puissance de chauffe perdue.',
  },
  {
    icon: TrendingDown,
    title: 'Économies d\'énergie',
    description: 'Réduction de 10 à 15% de la consommation de chauffage.',
  },
  {
    icon: Shield,
    title: 'Protection des équipements',
    description: 'Prolongation de la durée de vie de votre installation.',
  },
  {
    icon: Gauge,
    title: 'Confort amélioré',
    description: 'Montée en température plus rapide et homogène.',
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnostic',
    description: 'Analyse de l\'état du réseau et prélèvement d\'eau pour analyse.',
  },
  {
    step: '02',
    title: 'Désembouage',
    description: 'Injection de produit et circulation forcée pour décoller les boues.',
  },
  {
    step: '03',
    title: 'Rinçage',
    description: 'Évacuation des boues et rinçage complet du circuit.',
  },
  {
    step: '04',
    title: 'Traitement',
    description: 'Injection d\'inhibiteur de corrosion pour protection durable.',
  },
]

const stats = [
  { value: '10-15%', label: 'Économies sur le chauffage' },
  { value: '+15%', label: 'Puissance récupérée' },
  { value: '5-10 ans', label: 'Protection après traitement' },
  { value: '1-2 j', label: 'Durée d\'intervention' },
]

export function Desembouage() {
  return (
    <>
      <SEO
        title="Désembouage des Circuits de Chauffage"
        description="Nettoyage et traitement de vos circuits de chauffage. Récupérez jusqu'à 15% de performance et prolongez la durée de vie de vos installations."
        canonical="/solutions/desembouage"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Droplets className="w-4 h-4" />
                Désembouage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Désembouage des{' '}
                <span className="text-[#D4A84B]">circuits de chauffage</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Les boues qui s'accumulent dans vos circuits de chauffage réduisent
                leur efficacité. Le désembouage restaure les performances et prolonge
                la durée de vie de vos installations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander un Diagnostic
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="text-3xl font-bold text-[#D4A84B]">{stat.value}</div>
                    <p className="text-white/80 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Symptômes Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Diagnostic"
                title="Votre installation a-t-elle besoin d'un désembouage ?"
                align="left"
              />
              <p className="mt-4 text-[#636e72]">
                Plusieurs signes peuvent indiquer que vos circuits de chauffage sont
                embouées et nécessitent une intervention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#FEF3E7] border border-[#D4A84B]/30 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#D4A84B]" />
                <h3 className="font-bold text-[#2D3436]">Signes d'alerte</h3>
              </div>
              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#636e72]">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A84B] flex-shrink-0 mt-0.5" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Bénéfices Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Bénéfices"
            title="Les avantages du désembouage"
            description="Une intervention qui se rentabilise rapidement grâce aux économies générées."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 text-center">
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Notre Intervention"
            title="Le processus de désembouage"
            description="Une intervention professionnelle en 4 étapes pour un résultat optimal."
          />

          <div className="grid md:grid-cols-4 gap-8 mt-12">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-[#1B4332]/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{item.title}</h3>
                <p className="text-[#636e72] text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 border-t-2 border-dashed border-[#1B4332]/20" />
                )}
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
                Financement disponible via les{' '}
                <span className="text-[#D4A84B]">CEE</span>
              </h2>
              <p className="mt-4 text-white/80">
                Le désembouage est éligible aux Certificats d'Économies d'Énergie
                dans le cadre de la fiche BAR-TH-145 (résidentiel) ou BAT-TH-145 (tertiaire).
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Prime calculée selon le volume d\'eau traité',
                  'Traitement préventif inclus dans la prime',
                  'Dossier monté par nos équipes',
                  'Cumul possible avec d\'autres travaux',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A84B] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8"
            >
              <Wrench className="w-12 h-12 text-[#1B4332] mb-4" />
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Maintenance préventive
              </h3>
              <p className="text-[#636e72] mb-6">
                Nous recommandons un désembouage préventif tous les 5 à 10 ans pour
                maintenir les performances de votre installation et éviter les
                pannes coûteuses.
              </p>
              <Button href="/contact" variant="primary" size="lg" className="w-full group">
                Demander un Diagnostic
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Vos radiateurs chauffent mal ?"
        description="Nos experts diagnostiquent l'état de vos circuits et vous proposent la solution adaptée."
        primaryCta={{ label: 'Demander un Diagnostic', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default Desembouage
