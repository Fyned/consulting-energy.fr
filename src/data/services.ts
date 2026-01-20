import { Building2, Gauge, ClipboardCheck, Calculator, HardHat, FileCheck, Building, Factory, Landmark, Home } from 'lucide-react'

export interface Obligation {
  id: string
  title: string
  subtitle: string
  description: string
  icon: typeof Building2
  href: string
  badge?: string
  badgeType?: 'urgent' | 'info'
}

export const obligations: Obligation[] = [
  {
    id: 'decret-tertiaire',
    title: 'Décret Tertiaire',
    subtitle: '-40% en 2030',
    description: 'Bâtiments tertiaires >1000m² : réduisez votre consommation énergétique selon les objectifs réglementaires.',
    icon: Building2,
    href: '/obligations/decret-tertiaire',
    badge: 'Échéance OPERAT: Sept 2026',
    badgeType: 'urgent',
  },
  {
    id: 'decret-bacs',
    title: 'Décret BACS',
    subtitle: 'GTB Obligatoire',
    description: 'Installation de systèmes d\'automatisation pour bâtiments >70kW. Optimisez votre gestion technique.',
    icon: Gauge,
    href: '/obligations/decret-bacs',
    badge: 'Échéance: Janv 2027',
    badgeType: 'urgent',
  },
  {
    id: 'audit-energetique',
    title: 'Audit Énergétique',
    subtitle: 'Obligatoire',
    description: 'Diagnostic complet pour identifier les gisements d\'économies d\'énergie de votre bâtiment.',
    icon: ClipboardCheck,
    href: '/obligations/audit-energetique',
  },
]

export interface Expertise {
  id: string
  title: string
  description: string
  icon: typeof Building2
  href: string
}

export const expertises: Expertise[] = [
  {
    id: 'bureau-etudes',
    title: 'Bureau d\'Études',
    description: 'Études thermiques, simulations, certifications OPQIBI',
    icon: Calculator,
    href: '/expertises/bureau-etudes',
  },
  {
    id: 'maitrise-oeuvre',
    title: 'Maîtrise d\'Œuvre',
    description: 'Pilotage de projets de rénovation énergétique',
    icon: HardHat,
    href: '/expertises/maitrise-oeuvre',
  },
  {
    id: 'financement-cee',
    title: 'Financement CEE',
    description: 'Optimisation des primes certificats d\'économies d\'énergie',
    icon: FileCheck,
    href: '/expertises/financement-cee',
  },
  {
    id: 'accompagnement-operat',
    title: 'Accompagnement OPERAT',
    description: 'Déclaration et suivi sur la plateforme ADEME',
    icon: ClipboardCheck,
    href: '/expertises/accompagnement-operat',
  },
]

export interface Sector {
  id: string
  title: string
  description: string
  icon: typeof Building2
  href: string
  image?: string
}

export const sectors: Sector[] = [
  {
    id: 'tertiaire',
    title: 'Tertiaire',
    description: 'Bureaux, commerces, hôtellerie, santé',
    icon: Building,
    href: '/secteurs/tertiaire',
    image: '/images/sectors/tertiaire.jpg',
  },
  {
    id: 'industrie',
    title: 'Industrie',
    description: 'Sites industriels et manufacturiers',
    icon: Factory,
    href: '/secteurs/industrie',
    image: '/images/sectors/industrie.jpg',
  },
  {
    id: 'collectivites',
    title: 'Collectivités',
    description: 'Bâtiments publics et équipements municipaux',
    icon: Landmark,
    href: '/secteurs/collectivites',
    image: '/images/sectors/collectivites.jpg',
  },
  {
    id: 'logement-collectif',
    title: 'Logement Collectif',
    description: 'Copropriétés et bailleurs sociaux',
    icon: Home,
    href: '/secteurs/logement-collectif',
    image: '/images/sectors/logement.jpg',
  },
]

export const stats = [
  { value: '15+', label: 'Années d\'expertise' },
  { value: '500+', label: 'Projets réalisés' },
  { value: '200+', label: 'Clients accompagnés' },
  { value: '98%', label: 'Taux de satisfaction' },
]
