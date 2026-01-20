import { motion } from 'framer-motion'
import {
  Lightbulb,
  TrendingDown,
  Clock,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Sun,
  Zap,
  Eye,
} from 'lucide-react'
import { Container, Button, Card, SectionHeading } from '@/components/common'
import { SEO } from '@/components/seo'
import { CTASection } from '@/components/sections'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const advantages = [
  {
    icon: TrendingDown,
    title: 'Économies immédiates',
    description: 'Réduction de 50 à 80% de votre consommation d\'éclairage dès la mise en service.',
  },
  {
    icon: Clock,
    title: 'Durée de vie x10',
    description: 'Les LED durent jusqu\'à 50 000 heures contre 5 000 heures pour les tubes fluorescents.',
  },
  {
    icon: Eye,
    title: 'Qualité lumineuse',
    description: 'Meilleur rendu des couleurs, pas de scintillement, confort visuel optimal.',
  },
  {
    icon: Leaf,
    title: 'Impact environnemental',
    description: 'Pas de mercure, moins de déchets, empreinte carbone réduite.',
  },
  {
    icon: Sun,
    title: 'Allumage instantané',
    description: 'Pleine puissance dès l\'allumage, idéal avec détecteurs de présence.',
  },
  {
    icon: Zap,
    title: 'Maintenance réduite',
    description: 'Moins de remplacements, coûts de maintenance divisés par 5.',
  },
]

const applications = [
  {
    title: 'Bureaux et Open-Spaces',
    description: 'Dalles LED encastrées, luminaires suspendus, éclairage de tâche.',
    savings: '60-70%',
    duration: '50 000h',
  },
  {
    title: 'Entrepôts et Logistique',
    description: 'Highbays LED, éclairage linéaire, détection de présence par zone.',
    savings: '70-80%',
    duration: '80 000h',
  },
  {
    title: 'Commerces et Showrooms',
    description: 'Spots orientables, rubans LED, éclairage d\'accentuation.',
    savings: '50-60%',
    duration: '40 000h',
  },
  {
    title: 'Parkings et Extérieurs',
    description: 'Projecteurs LED, bornes, candélabres avec gradation.',
    savings: '60-75%',
    duration: '60 000h',
  },
]

const process = [
  { step: '01', title: 'Audit d\'éclairage', description: 'Recensement des points lumineux et mesure des niveaux d\'éclairement.' },
  { step: '02', title: 'Étude photométrique', description: 'Simulation pour garantir les niveaux réglementaires.' },
  { step: '03', title: 'Chiffrage et CEE', description: 'Devis détaillé avec montage du dossier de financement.' },
  { step: '04', title: 'Installation', description: 'Mise en œuvre par nos équipes qualifiées.' },
]

const stats = [
  { value: '50-80%', label: 'Économies sur l\'éclairage' },
  { value: '50 000h', label: 'Durée de vie moyenne' },
  { value: '2-3 ans', label: 'Retour sur investissement' },
  { value: '70%', label: 'Financement CEE possible' },
]

export function EclairageLED() {
  return (
    <>
      <SEO
        title="Éclairage LED Professionnel | Économies d'Énergie"
        description="Passage à l'éclairage LED pour vos bâtiments professionnels. Réduisez jusqu'à 80% vos dépenses d'éclairage. Financement CEE disponible."
        canonical="/solutions/eclairage-led"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4" />
                Éclairage LED
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Passez à l'éclairage{' '}
                <span className="text-[#D4A84B]">LED professionnel</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                L'éclairage représente 15 à 30% de la consommation électrique d'un
                bâtiment tertiaire. Le passage au LED permet des économies immédiates
                et durables.
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

      {/* Avantages Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Avantages"
            title="Pourquoi passer à l'éclairage LED ?"
            description="Des bénéfices immédiats et durables pour votre bâtiment."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="w-12 h-12 bg-[#D4A84B]/10 rounded-xl flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-[#D4A84B]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Applications"
            title="Solutions adaptées à chaque usage"
            description="Des luminaires LED conçus pour chaque type d'espace professionnel."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#2D3436]">
                      {app.title}
                    </h3>
                    <span className="px-3 py-1 bg-[#1B4332] text-white text-sm font-medium rounded-full">
                      -{app.savings}
                    </span>
                  </div>
                  <p className="text-[#636e72] leading-relaxed mb-4">
                    {app.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#636e72]">
                    <Clock className="w-4 h-4" />
                    Durée de vie : {app.duration}
                  </div>
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
            subtitle="Notre Processus"
            title="Un projet clé en main"
            description="De l'audit à l'installation, nous gérons l'ensemble de votre projet LED."
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
                <div className="text-5xl font-bold text-[#D4A84B]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{item.title}</h3>
                <p className="text-[#636e72] text-sm">{item.description}</p>
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
                Jusqu'à <span className="text-[#D4A84B]">70%</span> de vos travaux financés
              </h2>
              <p className="mt-4 text-white/80">
                Le remplacement de vos luminaires par des LED est éligible aux
                Certificats d'Économies d'Énergie (CEE). La prime dépend de la
                puissance des équipements remplacés.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Fiche BAT-EQ-127 : Luminaire LED',
                  'Bonus pour tubes fluorescents remplacés',
                  'Cumul possible avec d\'autres aides',
                  'Dossier monté par nos équipes',
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
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Exemple de projet
              </h3>
              <div className="space-y-4 text-[#636e72]">
                <div className="flex justify-between py-2 border-b">
                  <span>Surface</span>
                  <span className="font-medium text-[#2D3436]">2 000 m²</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Points lumineux</span>
                  <span className="font-medium text-[#2D3436]">150 luminaires</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Économies annuelles</span>
                  <span className="font-medium text-[#1B4332]">8 500 €/an</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Prime CEE estimée</span>
                  <span className="font-medium text-[#D4A84B]">12 000 €</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>ROI estimé</span>
                  <span className="font-medium text-[#1B4332]">2 ans</span>
                </div>
              </div>
              <Button href="/contact" variant="primary" size="lg" className="w-full mt-6 group">
                Estimer mon projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Prêt à passer à l'éclairage LED ?"
        description="Obtenez gratuitement une estimation des économies réalisables pour votre bâtiment."
        primaryCta={{ label: 'Demander un Audit Gratuit', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default EclairageLED
