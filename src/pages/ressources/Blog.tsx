import { motion } from 'framer-motion'
import {
  BookOpen,
  Calendar,
  ArrowRight,
  Clock,
  Search,
  Filter,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SEO } from '@/components/seo/SEO'

const blogCategories = [
  { id: 'all', label: 'Tous les articles' },
  { id: 'decret-tertiaire', label: 'Décret Tertiaire' },
  { id: 'decret-bacs', label: 'Décret BACS' },
  { id: 'cee', label: 'CEE' },
  { id: 'reglementation', label: 'Réglementation' },
  { id: 'conseils', label: 'Conseils pratiques' },
]

const blogPosts = [
  {
    id: 1,
    title: 'Décret Tertiaire 2026 : ce qui change pour votre entreprise',
    excerpt: 'Le 30 septembre 2026 approche : découvrez les nouvelles obligations de déclaration sur OPERAT et les sanctions prévues en cas de non-conformité.',
    category: 'decret-tertiaire',
    date: '10 janvier 2026',
    readTime: '8 min',
    image: '/images/blog/decret-tertiaire-2026.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'GTB obligatoire : êtes-vous prêt pour janvier 2027 ?',
    excerpt: 'Les bâtiments avec une puissance CVC supérieure à 70 kW doivent être équipés d\'une GTB de classe A ou B. Voici comment vous préparer.',
    category: 'decret-bacs',
    date: '5 janvier 2026',
    readTime: '6 min',
    image: '/images/blog/gtb-2027.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'CEE 6ème période : les changements majeurs à connaître',
    excerpt: 'La nouvelle période CEE 2026-2030 apporte des évolutions importantes. Découvrez les nouvelles fiches d\'opérations et les niveaux de primes attendus.',
    category: 'cee',
    date: '28 décembre 2025',
    readTime: '10 min',
    image: '/images/blog/cee-periode-6.jpg',
    featured: true,
  },
  {
    id: 4,
    title: 'Comment réaliser un audit énergétique conforme en 2026',
    excerpt: 'Les exigences de l\'audit énergétique réglementaire évoluent. Méthodologie, livrables attendus et points de vigilance pour un audit réussi.',
    category: 'reglementation',
    date: '20 décembre 2025',
    readTime: '7 min',
    image: '/images/blog/audit-energetique.jpg',
    featured: false,
  },
  {
    id: 5,
    title: '5 actions rapides pour réduire la consommation de votre bâtiment',
    excerpt: 'Optimisation du chauffage, éclairage LED, gestion des équipements : des mesures simples pour des économies immédiates sans investissement lourd.',
    category: 'conseils',
    date: '15 décembre 2025',
    readTime: '5 min',
    image: '/images/blog/economies-energie.jpg',
    featured: false,
  },
  {
    id: 6,
    title: 'Modulations OPERAT : comment les calculer et les justifier',
    excerpt: 'Patrimoine atypique, contraintes techniques, précarité économique : maîtrisez les modulations pour adapter vos objectifs Décret Tertiaire.',
    category: 'decret-tertiaire',
    date: '10 décembre 2025',
    readTime: '9 min',
    image: '/images/blog/modulations-operat.jpg',
    featured: false,
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <SEO
        title="Blog Actualités Énergie et Réglementation"
        description="Suivez l'actualité de la performance énergétique : Décret Tertiaire, BACS, CEE, audits. Conseils pratiques et analyses réglementaires par nos experts."
        canonical="/ressources/blog"
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
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Blog & Actualités</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Expertise Énergétique et Actualités Réglementaires
            </h1>
            <p className="text-xl text-white/80">
              Décryptage des réglementations, conseils pratiques et retours d'expérience
              pour optimiser la performance énergétique de vos bâtiments.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4332]/20 focus:border-[#1B4332]"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {blogCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category.id === 'all'
                      ? 'bg-[#1B4332] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            title="Articles à la Une"
            subtitle="Les sujets essentiels de l'actualité énergétique"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#D4A84B] text-white text-xs font-semibold rounded-full uppercase">
                      À la une
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#1B4332]/10 text-[#1B4332] text-xs font-medium rounded-full mb-3">
                    {blogCategories.find(c => c.id === post.category)?.label}
                  </span>
                  <h3 className="text-xl font-bold text-[#2D3436] mb-3 group-hover:text-[#1B4332] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/ressources/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#1B4332] font-semibold hover:gap-3 transition-all"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Tous nos Articles"
            subtitle="Retrouvez l'ensemble de nos publications"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#1B4332]/20 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded mb-3">
                    {blogCategories.find(c => c.id === post.category)?.label}
                  </span>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2 group-hover:text-[#1B4332] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/ressources/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-[#1B4332] text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir plus d'articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[#1B4332]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Restez Informé
            </h2>
            <p className="text-white/80 mb-8">
              Recevez nos derniers articles et analyses réglementaires directement
              dans votre boîte mail. Pas de spam, uniquement du contenu pertinent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77C14A]"
              />
              <Button className="bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                S'abonner
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              En vous inscrivant, vous acceptez notre politique de confidentialité.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
