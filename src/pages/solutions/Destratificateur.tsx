import { motion } from 'framer-motion'
import {
  Fan,
  ThermometerSun,
  TrendingDown,
  Building2,
  ArrowRight,
  CheckCircle2,
  Ruler,
  Clock,
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

const benefits = [
  {
    icon: TrendingDown,
    title: 'Jusqu\'à 30% d\'économies',
    description: 'Réduction significative de la consommation de chauffage en récupérant la chaleur stratifiée.',
  },
  {
    icon: ThermometerSun,
    title: 'Confort homogène',
    description: 'Plus de différence de température entre le sol et le plafond, confort optimal pour les occupants.',
  },
  {
    icon: Clock,
    title: 'ROI rapide',
    description: 'Retour sur investissement en 1 à 3 ans selon le volume et la hauteur du bâtiment.',
  },
  {
    icon: Zap,
    title: 'Faible consommation',
    description: 'Les déstratificateurs consomment très peu d\'électricité pour des gains importants.',
  },
]

const applications = [
  {
    title: 'Entrepôts logistiques',
    description: 'Grands volumes avec hauteur importante, idéal pour la déstratification.',
    height: '> 8 m',
    savings: '25-35%',
  },
  {
    title: 'Halls industriels',
    description: 'Ateliers de production avec besoins de chauffage continus.',
    height: '> 6 m',
    savings: '20-30%',
  },
  {
    title: 'Gymnases et salles de sport',
    description: 'Grands volumes avec occupation intermittente.',
    height: '> 7 m',
    savings: '20-25%',
  },
  {
    title: 'Supermarchés',
    description: 'Surfaces commerciales avec hauteur sous plafond importante.',
    height: '> 5 m',
    savings: '15-25%',
  },
  {
    title: 'Églises et lieux de culte',
    description: 'Patrimoine avec contraintes esthétiques, modèles discrets disponibles.',
    height: '> 10 m',
    savings: '25-40%',
  },
  {
    title: 'Serres et pépinières',
    description: 'Maintien d\'une température homogène pour les cultures.',
    height: '> 4 m',
    savings: '20-30%',
  },
]

const howItWorks = [
  {
    title: 'Le problème : la stratification',
    description: 'L\'air chaud, plus léger, monte naturellement au plafond. Dans un bâtiment de 10 m de haut, il peut y avoir 10°C d\'écart entre le sol et le plafond.',
  },
  {
    title: 'La solution : le brassage',
    description: 'Le déstratificateur fait redescendre l\'air chaud du plafond vers le sol, homogénéisant la température dans tout le volume.',
  },
  {
    title: 'Le résultat : économies et confort',
    description: 'La température de consigne peut être réduite de 2 à 3°C tout en maintenant le même confort, générant des économies importantes.',
  },
]

const stats = [
  { value: '25-35%', label: 'Économies moyennes' },
  { value: '1-3 ans', label: 'Retour sur investissement' },
  { value: '-3°C', label: 'Réduction consigne possible' },
  { value: '50%', label: 'Financement CEE' },
]

export function Destratificateur() {
  return (
    <>
      <SEO
        title="Déstratificateur d'Air | Économies de Chauffage Grands Volumes"
        description="Installez des déstratificateurs d'air pour réduire jusqu'à 30% vos dépenses de chauffage dans vos grands volumes. Solution éligible CEE."
        canonical="/solutions/destratificateur"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#1B4332] via-[#2D5A45] to-[#52796F] overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A84B]/20 text-[#D4A84B] rounded-full text-sm font-medium mb-6">
                <Fan className="w-4 h-4" />
                Déstratificateur d'Air
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Homogénéisez la température de vos{' '}
                <span className="text-[#D4A84B]">grands volumes</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                Les déstratificateurs d'air récupèrent la chaleur accumulée sous le
                plafond pour la redistribuer au niveau des occupants. Une solution
                simple pour des économies importantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" variant="secondary" size="lg" className="group">
                  Demander une Étude
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

      {/* Comment ça marche Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Principe"
            title="Comment fonctionne la déstratification ?"
            description="Un principe simple pour des résultats concrets."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Avantages Section */}
      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            subtitle="Avantages"
            title="Pourquoi installer des déstratificateurs ?"
            description="Une solution à fort impact avec un investissement maîtrisé."
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
                  <div className="w-14 h-14 bg-[#D4A84B]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-[#D4A84B]" />
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

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeading
            subtitle="Applications"
            title="Pour quels bâtiments ?"
            description="Les déstratificateurs sont particulièrement efficaces dans les grands volumes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">
                    {app.title}
                  </h3>
                  <p className="text-[#636e72] text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>
                  <div className="flex justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-[#636e72]" />
                      <span className="text-sm text-[#636e72]">Hauteur {app.height}</span>
                    </div>
                    <span className="px-3 py-1 bg-[#1B4332] text-white text-sm font-medium rounded-full">
                      -{app.savings}
                    </span>
                  </div>
                </Card>
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
                Éligible aux{' '}
                <span className="text-[#D4A84B]">Certificats d'Économies d'Énergie</span>
              </h2>
              <p className="mt-4 text-white/80">
                L'installation de déstratificateurs est éligible aux CEE via la fiche
                BAT-TH-142. La prime dépend du volume traité et de la zone climatique.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Fiche BAT-TH-142 : Déstratificateur d\'air',
                  'Prime calculée par m³ de volume traité',
                  'Cumul possible avec d\'autres travaux CEE',
                  'Montage du dossier inclus dans notre prestation',
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
              <Building2 className="w-12 h-12 text-[#1B4332] mb-4" />
              <h3 className="text-xl font-bold text-[#2D3436] mb-4">
                Exemple de projet
              </h3>
              <div className="space-y-4 text-[#636e72]">
                <div className="flex justify-between py-2 border-b">
                  <span>Volume</span>
                  <span className="font-medium text-[#2D3436]">15 000 m³</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Hauteur</span>
                  <span className="font-medium text-[#2D3436]">10 m</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Économies annuelles</span>
                  <span className="font-medium text-[#1B4332]">12 000 €/an</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Prime CEE estimée</span>
                  <span className="font-medium text-[#D4A84B]">8 000 €</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>ROI estimé</span>
                  <span className="font-medium text-[#1B4332]">18 mois</span>
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
        title="Vous chauffez des grands volumes ?"
        description="Découvrez les économies réalisables grâce à la déstratification de l'air."
        primaryCta={{ label: 'Demander une Étude Gratuite', href: '/contact' }}
        secondaryCta={{ label: 'Voir toutes nos solutions', href: '/solutions' }}
      />
    </>
  )
}

export default Destratificateur
