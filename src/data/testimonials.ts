export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  content: string
  rating: number
  sector: 'tertiaire' | 'industrie' | 'collectivite' | 'logement'
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Marie Dupont',
    role: 'Directrice Immobilier',
    company: 'Groupe Hôtelier Regional',
    content: 'Consulting Energy nous a accompagnés dans la mise en conformité Décret Tertiaire de nos 12 établissements. Leur expertise technique et leur connaissance des financements CEE nous ont permis de réduire significativement nos coûts énergétiques.',
    rating: 5,
    sector: 'tertiaire',
    avatar: '/images/testimonials/client-1.jpg',
  },
  {
    id: '2',
    author: 'Jean-Pierre Martin',
    role: 'Responsable Technique',
    company: 'Manufacture Vosgienne',
    content: 'L\'audit énergétique réalisé par Consulting Energy a identifié des économies potentielles que nous n\'avions pas envisagées. Le ROI sur nos investissements est au-delà de nos attentes.',
    rating: 5,
    sector: 'industrie',
    avatar: '/images/testimonials/client-2.jpg',
  },
  {
    id: '3',
    author: 'Sophie Laurent',
    role: 'Directrice Générale des Services',
    company: 'Communauté de Communes des Vosges',
    content: 'Une équipe réactive et professionnelle. Ils ont su adapter leur approche aux contraintes spécifiques de nos bâtiments publics et nous accompagner sur la plateforme OPERAT.',
    rating: 5,
    sector: 'collectivite',
    avatar: '/images/testimonials/client-3.jpg',
  },
  {
    id: '4',
    author: 'Philippe Moreau',
    role: 'Président du Conseil Syndical',
    company: 'Copropriété Les Terrasses',
    content: 'Grâce à leur accompagnement, notre copropriété a bénéficié d\'un financement CEE optimal pour la rénovation de notre chaufferie. Un vrai partenaire de confiance.',
    rating: 5,
    sector: 'logement',
    avatar: '/images/testimonials/client-1.jpg',
  },
  {
    id: '5',
    author: 'Catherine Blanc',
    role: 'Responsable RSE',
    company: 'Centre Commercial Grand Est',
    content: 'Consulting Energy maîtrise parfaitement les réglementations énergétiques. Leur accompagnement OPERAT nous a fait gagner un temps précieux et éviter des erreurs de déclaration.',
    rating: 5,
    sector: 'tertiaire',
    avatar: '/images/testimonials/client-2.jpg',
  },
]
