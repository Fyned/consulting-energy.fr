import { motion } from 'framer-motion'
import {
  Building2,
  Target,
  Users,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  Leaf,
  Handshake,
  Shield,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SEO } from '@/components/seo/SEO'

const milestones = [
  { year: '2010', title: 'Création', description: 'Fondation de Consulting Energy dans les Vosges' },
  { year: '2014', title: 'Certification', description: 'Obtention de la certification OPQIBI' },
  { year: '2018', title: 'Expansion', description: 'Développement de l\'activité CEE' },
  { year: '2020', title: 'Décret Tertiaire', description: 'Spécialisation accompagnement réglementaire' },
  { year: '2024', title: '500 projets', description: 'Cap des 500 projets accompagnés' },
  { year: '2026', title: 'Aujourd\'hui', description: 'Leader régional Grand Est' },
]

const values = [
  {
    icon: Shield,
    title: 'Expertise',
    description: 'Plus de 15 ans d\'expérience en performance énergétique. Nos ingénieurs certifiés maîtrisent toutes les réglementations en vigueur.',
  },
  {
    icon: Handshake,
    title: 'Proximité',
    description: 'Basés dans les Vosges, nous accompagnons nos clients de la région Grand Est avec réactivité et disponibilité.',
  },
  {
    icon: Target,
    title: 'Résultats',
    description: 'Notre objectif : votre conformité et vos économies. 98% de nos clients atteignent leurs objectifs énergétiques.',
  },
  {
    icon: Leaf,
    title: 'Engagement',
    description: 'Convaincus que la transition énergétique est une opportunité, nous accompagnons nos clients vers un avenir durable.',
  },
]

const stats = [
  { value: '15+', label: 'Années d\'expérience' },
  { value: '500+', label: 'Projets réalisés' },
  { value: '200+', label: 'Clients accompagnés' },
  { value: '98%', label: 'Taux de satisfaction' },
]

const certifications = [
  { name: 'OPQIBI', description: 'Qualification bureau d\'études' },
  { name: 'RGE', description: 'Reconnu Garant de l\'Environnement' },
  { name: 'NF EN ISO', description: 'Normes internationales' },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function APropos() {
  return (
    <>
      <SEO
        title="À Propos - Bureau d'Études Performance Énergétique"
        description="Découvrez Consulting Energy : bureau d'études en performance énergétique depuis 2010. Experts CEE, Décret Tertiaire et rénovation énergétique en Grand Est."
        canonical="/a-propos"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[#77C14A] mb-4">
                <Building2 className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">À Propos</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Votre Partenaire en Performance Énergétique
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Depuis 2010, Consulting Energy accompagne les entreprises et collectivités
                du Grand Est dans leur transition énergétique. Bureau d'études certifié,
                nous combinons expertise technique et financement CEE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#1B4332] hover:bg-gray-100">
                    Nous Contacter
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/a-propos/equipe">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Notre Équipe
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/70 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mobile Stats */}
      <section className="py-8 bg-white border-b border-gray-100 lg:hidden">
        <Container>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#1B4332]">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-[#2D3436] mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Consulting Energy a pour mission d'accompagner les entreprises et
                collectivités dans leur conformité réglementaire et leur performance
                énergétique, en rendant accessible le financement des travaux de
                rénovation via les Certificats d'Économies d'Énergie.
              </p>
              <p className="text-gray-600 mb-8">
                Nous croyons que la transition énergétique est une opportunité économique
                pour nos clients. Notre approche combine rigueur technique, connaissance
                réglementaire et optimisation financière pour maximiser le retour sur
                investissement de chaque projet.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[#1B4332]">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Grand Est, France</span>
                </div>
                <div className="flex items-center gap-2 text-[#1B4332]">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Depuis 2010</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-[#F8F6F2] rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">Nos Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-4 bg-white rounded-xl p-4">
                    <div className="w-12 h-12 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#1B4332]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#2D3436]">{cert.name}</div>
                      <div className="text-sm text-gray-600">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            title="Nos Valeurs"
            subtitle="Les principes qui guident notre accompagnement au quotidien"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#1B4332]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-[#1B4332]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Notre Histoire"
            subtitle="15 années d'expertise au service de la performance énergétique"
          />

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1B4332]/20 hidden lg:block" />

            <div className="space-y-8 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative lg:flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-[#F8F6F2] rounded-xl p-6 inline-block">
                      <div className="text-2xl font-bold text-[#1B4332] mb-1">{milestone.year}</div>
                      <div className="font-semibold text-[#2D3436] mb-2">{milestone.title}</div>
                      <div className="text-gray-600 text-sm">{milestone.description}</div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1B4332] rounded-full border-4 border-white shadow hidden lg:block" />

                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-[#1B4332]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Nos Domaines d'Expertise</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Une offre complète pour répondre à tous vos besoins en performance énergétique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Décret Tertiaire', desc: 'Conformité et déclaration OPERAT', link: '/obligations/decret-tertiaire' },
              { title: 'Décret BACS', desc: 'GTB et automatisation', link: '/obligations/decret-bacs' },
              { title: 'Financement CEE', desc: 'Optimisation des primes', link: '/expertises/financement-cee' },
              { title: 'Bureau d\'Études', desc: 'Audits et études techniques', link: '/expertises/bureau-etudes' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[#77C14A] text-sm font-medium">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
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
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm text-center"
          >
            <Users className="w-12 h-12 text-[#1B4332] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">
              Rencontrez Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Des experts passionnés et certifiés, dédiés à la réussite de vos projets
              de performance énergétique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/a-propos/equipe">
                <Button size="lg" className="gap-2">
                  Découvrir l'Équipe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
