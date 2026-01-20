import { motion } from 'framer-motion'
import {
  Award,
  Building2,
  Factory,
  Building,
  Home,
  ArrowRight,
  MapPin,
  TrendingDown,
  Zap,
  Euro,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SEO } from '@/components/seo/SEO'

const stats = [
  { value: '500+', label: 'Projets réalisés' },
  { value: '200+', label: 'Clients accompagnés' },
  { value: '150M€', label: 'CEE valorisés' },
  { value: '35%', label: 'Économies moyennes' },
]

const projectCategories = [
  { id: 'all', label: 'Tous', icon: Building2 },
  { id: 'tertiaire', label: 'Tertiaire', icon: Building2 },
  { id: 'industrie', label: 'Industrie', icon: Factory },
  { id: 'collectivites', label: 'Collectivités', icon: Building },
  { id: 'logement', label: 'Logement', icon: Home },
]

const projects = [
  {
    id: 1,
    title: 'Centre Commercial Régional',
    category: 'tertiaire',
    location: 'Nancy (54)',
    surface: '45 000 m²',
    mission: 'Décret Tertiaire + GTB',
    results: [
      { label: 'Économies', value: '-38%' },
      { label: 'CEE obtenus', value: '2,5 M€' },
    ],
    description: 'Accompagnement complet Décret Tertiaire et installation GTB classe B pour un centre commercial de 120 boutiques.',
  },
  {
    id: 2,
    title: 'Site Industriel Automobile',
    category: 'industrie',
    location: 'Mulhouse (68)',
    surface: '85 000 m²',
    mission: 'Audit + Rénovation énergétique',
    results: [
      { label: 'Économies', value: '-42%' },
      { label: 'CEE obtenus', value: '4,2 M€' },
    ],
    description: 'Audit énergétique complet et pilotage des travaux de rénovation sur un site de production automobile.',
  },
  {
    id: 3,
    title: 'Groupe Scolaire Municipal',
    category: 'collectivites',
    location: 'Strasbourg (67)',
    surface: '12 000 m²',
    mission: 'Bureau d\'études + CEE',
    results: [
      { label: 'Économies', value: '-45%' },
      { label: 'CEE obtenus', value: '850 k€' },
    ],
    description: 'Rénovation énergétique globale de 3 écoles avec isolation, chauffage et ventilation.',
  },
  {
    id: 4,
    title: 'Résidence de 250 logements',
    category: 'logement',
    location: 'Metz (57)',
    surface: '18 000 m²',
    mission: 'Audit + Financement CEE',
    results: [
      { label: 'Économies', value: '-52%' },
      { label: 'CEE obtenus', value: '1,8 M€' },
    ],
    description: 'Rénovation complète d\'une copropriété : ITE, menuiseries, chauffage collectif et VMC.',
  },
  {
    id: 5,
    title: 'Parc d\'Activités Tertiaires',
    category: 'tertiaire',
    location: 'Reims (51)',
    surface: '28 000 m²',
    mission: 'OPERAT + Plan d\'actions',
    results: [
      { label: 'Économies', value: '-35%' },
      { label: 'CEE obtenus', value: '1,2 M€' },
    ],
    description: 'Déclaration OPERAT et élaboration du plan d\'actions pour 15 bâtiments de bureaux.',
  },
  {
    id: 6,
    title: 'Usine Agroalimentaire',
    category: 'industrie',
    location: 'Épinal (88)',
    surface: '35 000 m²',
    mission: 'Optimisation process + CEE',
    results: [
      { label: 'Économies', value: '-28%' },
      { label: 'CEE obtenus', value: '2,1 M€' },
    ],
    description: 'Optimisation des process thermiques et récupération de chaleur sur site de production.',
  },
]

const testimonials = [
  {
    quote: 'Un accompagnement professionnel de bout en bout. Consulting Energy nous a permis d\'atteindre nos objectifs Décret Tertiaire avec 2 ans d\'avance.',
    author: 'Directeur Technique',
    company: 'Groupe de distribution',
  },
  {
    quote: 'Grâce à leur expertise CEE, nous avons financé 70% de nos travaux de rénovation. Un vrai partenaire pour notre transition énergétique.',
    author: 'Responsable Patrimoine',
    company: 'Bailleur social Grand Est',
  },
  {
    quote: 'Réactivité, expertise et résultats. Consulting Energy a su s\'adapter à nos contraintes industrielles tout en maximisant nos économies.',
    author: 'Directeur Industriel',
    company: 'Groupe industriel',
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function References() {
  return (
    <>
      <SEO
        title="Nos Références - Projets Réalisés Grand Est"
        description="Découvrez nos références : +500 projets en performance énergétique, Décret Tertiaire, CEE et rénovation. Tertiaire, industrie, collectivités en Grand Est."
        canonical="/a-propos/references"
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
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Nos Références</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              500+ Projets de Performance Énergétique
            </h1>
            <p className="text-xl text-white/80">
              Découvrez quelques-unes de nos réalisations en accompagnement réglementaire,
              optimisation énergétique et financement CEE dans le Grand Est.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Category Filter */}
      <section className="py-8 bg-[#F8F6F2]">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {projectCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors ${
                    category.id === 'all'
                      ? 'bg-[#1B4332] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Project image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#1B4332]/10 to-[#52796F]/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === 'tertiaire' && <Building2 className="w-16 h-16 text-[#1B4332]/20" />}
                    {project.category === 'industrie' && <Factory className="w-16 h-16 text-[#1B4332]/20" />}
                    {project.category === 'collectivites' && <Building className="w-16 h-16 text-[#1B4332]/20" />}
                    {project.category === 'logement' && <Home className="w-16 h-16 text-[#1B4332]/20" />}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-[#1B4332] text-xs font-semibold rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D3436] mb-2">{project.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span>{project.surface}</span>
                  </div>

                  <div className="inline-block px-3 py-1 bg-[#1B4332]/10 text-[#1B4332] text-xs font-medium rounded-full mb-3">
                    {project.mission}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  {/* Results */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    {project.results.map((result) => (
                      <div key={result.label} className="flex-1 text-center">
                        <div className="text-xl font-bold text-[#1B4332]">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir plus de projets
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Key Results */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Résultats Clés"
            subtitle="Les performances moyennes obtenues pour nos clients"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: TrendingDown,
                value: '-35%',
                label: 'Économies d\'énergie',
                description: 'Réduction moyenne des consommations énergétiques après nos interventions.',
              },
              {
                icon: Euro,
                value: '1,5 M€',
                label: 'CEE moyen par projet',
                description: 'Valorisation moyenne des CEE sur nos projets de rénovation énergétique.',
              },
              {
                icon: Zap,
                value: '18 mois',
                label: 'ROI moyen',
                description: 'Retour sur investissement moyen grâce à l\'optimisation des financements.',
              },
            ].map((result, index) => {
              const IconComponent = result.icon
              return (
                <motion.div
                  key={result.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-[#F8F6F2] rounded-2xl p-8"
                >
                  <div className="w-16 h-16 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#1B4332] mb-2">{result.value}</div>
                  <div className="text-lg font-semibold text-[#2D3436] mb-2">{result.label}</div>
                  <p className="text-gray-600">{result.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#1B4332]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ils nous Font Confiance</h2>
            <p className="text-white/80">Témoignages de nos clients</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-white/90 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sectors CTA */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Votre Secteur d'Activité"
            subtitle="Découvrez notre expertise adaptée à votre domaine"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: 'Tertiaire', icon: Building2, link: '/secteurs/tertiaire', desc: 'Bureaux, commerces, hôtels' },
              { title: 'Industrie', icon: Factory, link: '/secteurs/industrie', desc: 'Sites de production' },
              { title: 'Collectivités', icon: Building, link: '/secteurs/collectivites', desc: 'Bâtiments publics' },
              { title: 'Logement', icon: Home, link: '/secteurs/logement-collectif', desc: 'Copropriétés, HLM' },
            ].map((sector, index) => {
              const IconComponent = sector.icon
              return (
                <motion.div
                  key={sector.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={sector.link}
                    className="block bg-[#F8F6F2] rounded-xl p-6 hover:shadow-lg hover:bg-white transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-[#1B4332] rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#2D3436] mb-1">{sector.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{sector.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[#1B4332] text-sm font-medium">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
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
            className="bg-[#1B4332] rounded-2xl p-8 lg:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Votre Projet sera notre Prochaine Référence
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Rejoignez nos clients satisfaits et bénéficiez d'un accompagnement
              expert pour votre performance énergétique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#1B4332] hover:bg-gray-100 gap-2">
                  Discuter de mon Projet
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/a-propos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
