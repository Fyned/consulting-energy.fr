export const siteConfig = {
  name: 'Consulting Energy',
  slogan: 'Les certificats d\'économies d\'énergie',
  description: 'Bureau d\'études en performance énergétique. Experts en Décret Tertiaire, BACS et financement CEE dans le Grand Est.',
  url: 'https://www.consulting-energy.fr',

  contact: {
    phone: '03 73 98 21 79',
    email: 'contact@consulting-energy.fr',
    address: {
      street: '3, Rue Raymond Panin',
      postalCode: '88580',
      city: 'Saulcy-sur-Meurthe',
      region: 'Grand Est',
      country: 'France',
    },
    hours: 'Lundi - Vendredi: 9h00 - 18h00',
  },

  team: [
    {
      name: 'Rasid DUYGU',
      role: 'Président',
      phone: '07 88 09 70 70',
    },
    {
      name: 'Ekrem KIZILDAG',
      role: 'Directeur Général',
      phone: '07 43 37 38 45',
    },
  ],

  social: {
    linkedin: '', // LinkedIn sayfası mevcut değil
  },

  seo: {
    defaultTitle: 'Consulting Energy | Performance Énergétique Grand Est',
    titleTemplate: '%s | Consulting Energy',
    locale: 'fr_FR',
  },
}

export type SiteConfig = typeof siteConfig
