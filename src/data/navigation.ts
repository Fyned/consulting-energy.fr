import {
  Building2,
  Gauge,
  ClipboardCheck,
  Calculator,
  FileCheck,
  Users,
  Building,
  Factory,
  Landmark,
  Home,
  Lightbulb,
  Wind,
  Sun,
  Thermometer,
  Layers,
  Fan,
  Droplets,
  type LucideIcon,
} from 'lucide-react'

export interface NavChild {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
  featured?: {
    title: string
    description: string
    cta: string
    ctaHref: string
  }
}

export const navigation: NavItem[] = [
  {
    label: 'Consulting Energy',
    href: '/consulting-energy',
    children: [
      {
        label: 'Qui Sommes-Nous',
        href: '/consulting-energy',
        description: 'Notre mission et notre expertise',
        icon: Building2,
      },
      {
        label: 'Notre Approche',
        href: '/consulting-energy#approche',
        description: 'Une méthodologie éprouvée',
        icon: ClipboardCheck,
      },
    ],
    featured: {
      title: 'Votre Partenaire Énergie',
      description: 'Réduisez durablement vos consommations et votre facture d\'électricité avec un accompagnement sur-mesure.',
      cta: 'Découvrir Consulting Energy',
      ctaHref: '/consulting-energy',
    },
  },
  {
    label: 'Nos Solutions',
    href: '/solutions',
    children: [
      {
        label: "Bureau d'Études",
        href: '/solutions/bureau-etudes',
        description: 'Études thermiques et audits énergétiques',
        icon: Calculator,
      },
      {
        label: 'ITE - Isolation Extérieure',
        href: '/solutions/ite',
        description: 'Isolation thermique par l\'extérieur',
        icon: Layers,
      },
      {
        label: 'ITI - Isolation Intérieure',
        href: '/solutions/iti',
        description: 'Isolation thermique par l\'intérieur',
        icon: Home,
      },
      {
        label: 'Système de Chauffage',
        href: '/solutions/chauffage',
        description: 'Installation et optimisation chauffage',
        icon: Thermometer,
      },
      {
        label: 'Éclairage LED',
        href: '/solutions/eclairage-led',
        description: 'Passage à l\'éclairage basse consommation',
        icon: Lightbulb,
      },
      {
        label: 'Désembouage',
        href: '/solutions/desembouage',
        description: 'Nettoyage des circuits de chauffage',
        icon: Droplets,
      },
      {
        label: 'Déstratificateur d\'Air',
        href: '/solutions/destratificateur',
        description: 'Homogénéisation thermique des locaux',
        icon: Fan,
      },
      {
        label: 'Récupérateur de Chaleur',
        href: '/solutions/recuperateur-chaleur',
        description: 'HP flottante et récupération d\'air',
        icon: Wind,
      },
      {
        label: 'Photovoltaïque',
        href: '/solutions/photovoltaique',
        description: 'Installation panneaux solaires',
        icon: Sun,
      },
      {
        label: 'VMC et Ventilation',
        href: '/solutions/vmc',
        description: 'Systèmes de ventilation performants',
        icon: Wind,
      },
      {
        label: 'Financement CEE',
        href: '/expertises/financement-cee',
        description: 'Optimisation de vos primes CEE',
        icon: FileCheck,
      },
    ],
    featured: {
      title: 'Solutions Complètes',
      description: 'De l\'étude à la réalisation, nous vous accompagnons sur tous vos projets de rénovation énergétique.',
      cta: 'Voir toutes nos solutions',
      ctaHref: '/solutions',
    },
  },
  {
    label: "Critères d'Éligibilité",
    href: '/obligations',
    children: [
      {
        label: 'Décret Tertiaire',
        href: '/obligations/decret-tertiaire',
        description: 'Bâtiments >1000m² : objectifs -40% en 2030',
        icon: Building2,
      },
      {
        label: 'Décret BACS',
        href: '/obligations/decret-bacs',
        description: 'GTB obligatoire pour systèmes >70kW',
        icon: Gauge,
      },
      {
        label: 'Audit Énergétique',
        href: '/obligations/audit-energetique',
        description: 'Diagnostic complet de performance',
        icon: ClipboardCheck,
      },
      {
        label: 'Accompagnement OPERAT',
        href: '/expertises/accompagnement-operat',
        description: 'Déclaration plateforme ADEME',
        icon: Users,
      },
    ],
    featured: {
      title: 'Êtes-vous concerné ?',
      description: 'Vérifiez vos obligations réglementaires et les échéances à respecter.',
      cta: 'Vérifier ma conformité',
      ctaHref: '/contact',
    },
  },
  {
    label: 'Secteurs',
    href: '/secteurs',
    children: [
      {
        label: 'Tertiaire',
        href: '/secteurs/tertiaire',
        description: 'Bureaux, commerces, hôtellerie',
        icon: Building,
      },
      {
        label: 'Industrie',
        href: '/secteurs/industrie',
        description: 'Sites industriels et manufacturiers',
        icon: Factory,
      },
      {
        label: 'Collectivités',
        href: '/secteurs/collectivites',
        description: 'Bâtiments publics et municipaux',
        icon: Landmark,
      },
      {
        label: 'Logement Collectif',
        href: '/secteurs/logement-collectif',
        description: 'Copropriétés et bailleurs sociaux',
        icon: Home,
      },
    ],
    featured: {
      title: 'Tous secteurs d\'activité',
      description: 'Une expertise adaptée à chaque typologie de bâtiment.',
      cta: 'Nous contacter',
      ctaHref: '/contact',
    },
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  solutions: [
    { label: "Bureau d'Études", href: '/solutions/bureau-etudes' },
    { label: 'ITE - Isolation Extérieure', href: '/solutions/ite' },
    { label: 'ITI - Isolation Intérieure', href: '/solutions/iti' },
    { label: 'Éclairage LED', href: '/solutions/eclairage-led' },
    { label: 'Déstratificateur d\'Air', href: '/solutions/destratificateur' },
    { label: 'Photovoltaïque', href: '/solutions/photovoltaique' },
  ],
  obligations: [
    { label: 'Décret Tertiaire', href: '/obligations/decret-tertiaire' },
    { label: 'Décret BACS', href: '/obligations/decret-bacs' },
    { label: 'Audit Énergétique', href: '/obligations/audit-energetique' },
    { label: 'Financement CEE', href: '/expertises/financement-cee' },
  ],
  secteurs: [
    { label: 'Tertiaire', href: '/secteurs/tertiaire' },
    { label: 'Industrie', href: '/secteurs/industrie' },
    { label: 'Collectivités', href: '/secteurs/collectivites' },
    { label: 'Logement Collectif', href: '/secteurs/logement-collectif' },
  ],
  legal: [
    { label: 'Mentions Légales', href: '/mentions-legales' },
    { label: 'Politique de Confidentialité', href: '/confidentialite' },
  ],
}
