import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/common/Container'
import { Button } from '@/components/common/Button'
import { SEO } from '@/components/seo/SEO'

// Blog articles data with full content
const blogArticles: Record<string, {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  categoryLabel: string
  date: string
  readTime: string
  image: string
  author: string
  authorRole: string
  content: {
    intro: string
    sections: {
      title: string
      content: string
      list?: string[]
      highlight?: { type: 'info' | 'warning' | 'tip'; text: string }
    }[]
    conclusion: string
  }
  relatedArticles: number[]
  seoKeywords: string[]
}> = {
  '1': {
    id: 1,
    slug: 'decret-tertiaire-2026-changements',
    title: 'Décret Tertiaire 2026 : ce qui change pour votre entreprise',
    excerpt: 'Le 30 septembre 2026 approche : découvrez les nouvelles obligations de déclaration sur OPERAT et les sanctions prévues en cas de non-conformité.',
    category: 'decret-tertiaire',
    categoryLabel: 'Décret Tertiaire',
    date: '10 janvier 2026',
    readTime: '8 min',
    image: '/images/blog/decret-tertiaire-2026.jpg',
    author: 'Rasid DUYGU',
    authorRole: 'Expert Performance Énergétique',
    content: {
      intro: "L'échéance du 30 septembre 2026 marque un tournant majeur pour les entreprises assujetties au Décret Tertiaire. Cette date correspond à la première déclaration obligatoire des consommations de l'année 2025 sur la plateforme OPERAT, avec des implications significatives pour les propriétaires et exploitants de bâtiments tertiaires de plus de 1000 m².",
      sections: [
        {
          title: "Les nouvelles obligations de déclaration OPERAT",
          content: "À partir de 2026, chaque assujetti devra avoir déclaré sur OPERAT non seulement ses consommations énergétiques, mais également avoir défini sa stratégie d'atteinte des objectifs. La plateforme OPERAT, gérée par l'ADEME, centralise désormais l'ensemble des données du parc tertiaire français.",
          list: [
            "Déclaration des consommations énergétiques 2025 avant le 30 septembre 2026",
            "Renseignement des données patrimoniales (surface, activité, année de référence)",
            "Définition de l'objectif choisi : -40% en valeur relative ou objectif en valeur absolue",
            "Identification des actions d'amélioration prévues dans le plan de travaux"
          ],
          highlight: {
            type: 'warning',
            text: "Attention : Les données non déclarées ou incomplètes exposent à des sanctions pouvant atteindre 7 500 € par bâtiment et par an."
          }
        },
        {
          title: "Les objectifs de réduction à atteindre",
          content: "Le Décret Tertiaire impose des objectifs progressifs de réduction des consommations énergétiques. L'année 2030 constitue la première échéance intermédiaire avec un objectif de -40% par rapport à une année de référence choisie entre 2010 et 2019.",
          list: [
            "2030 : Réduction de 40% des consommations",
            "2040 : Réduction de 50% des consommations",
            "2050 : Réduction de 60% des consommations"
          ],
          highlight: {
            type: 'info',
            text: "L'alternative en valeur absolue (Cabs) permet aux bâtiments déjà performants d'atteindre un seuil fixe de consommation par m² selon leur activité."
          }
        },
        {
          title: "Les sanctions en cas de non-conformité",
          content: "Le dispositif de sanctions s'est considérablement renforcé depuis 2024. Au-delà des amendes financières, la publication des entreprises non-conformes sur un site gouvernemental représente un risque réputationnel majeur (principe du Name & Shame).",
          list: [
            "Amende de 1 500 € pour les personnes physiques",
            "Amende de 7 500 € pour les personnes morales",
            "Publication de l'identité des contrevenants sur un site officiel",
            "Sanctions cumulables pour chaque bâtiment non conforme"
          ]
        },
        {
          title: "Comment se préparer efficacement",
          content: "La mise en conformité nécessite une approche structurée combinant audit de l'existant, définition d'une stratégie adaptée et mise en œuvre d'actions concrètes. Un accompagnement par un bureau d'études spécialisé permet d'optimiser cette démarche.",
          list: [
            "Réaliser un audit énergétique de vos bâtiments",
            "Identifier les gisements d'économies et les prioriser",
            "Élaborer un plan d'actions pluriannuel chiffré",
            "Mettre en place un suivi des consommations via une GTB",
            "Mobiliser les financements disponibles (CEE, aides régionales)"
          ],
          highlight: {
            type: 'tip',
            text: "Notre équipe peut vous accompagner dans l'ensemble de ces démarches, de l'audit initial à la déclaration OPERAT."
          }
        }
      ],
      conclusion: "Le Décret Tertiaire représente à la fois une contrainte réglementaire et une opportunité de réduire significativement vos charges énergétiques. En anticipant les échéances et en structurant votre démarche, vous transformez cette obligation en levier de performance pour votre patrimoine immobilier."
    },
    relatedArticles: [2, 6],
    seoKeywords: ['décret tertiaire 2026', 'OPERAT', 'performance énergétique', 'réduction consommation', 'bâtiment tertiaire']
  },
  '2': {
    id: 2,
    slug: 'gtb-obligatoire-janvier-2027',
    title: 'GTB obligatoire : êtes-vous prêt pour janvier 2027 ?',
    excerpt: "Les bâtiments avec une puissance CVC supérieure à 70 kW doivent être équipés d'une GTB de classe A ou B. Voici comment vous préparer.",
    category: 'decret-bacs',
    categoryLabel: 'Décret BACS',
    date: '5 janvier 2026',
    readTime: '6 min',
    image: '/images/blog/gtb-2027.jpg',
    author: 'Ekrem KIZILDAG',
    authorRole: 'Directeur Technique',
    content: {
      intro: "Le Décret BACS (Building Automation and Control Systems) impose l'installation de systèmes de Gestion Technique du Bâtiment (GTB) pour les bâtiments tertiaires et résidentiels. Après l'échéance du 1er janvier 2025 pour les bâtiments de plus de 290 kW, la prochaine date clé concerne les bâtiments de plus de 70 kW au 1er janvier 2027.",
      sections: [
        {
          title: "Qui est concerné par l'échéance 2027 ?",
          content: "L'obligation de GTB s'étend progressivement à un parc immobilier de plus en plus large. En 2027, tous les bâtiments non résidentiels disposant de systèmes de chauffage, ventilation ou climatisation d'une puissance supérieure à 70 kW seront concernés.",
          list: [
            "Bâtiments tertiaires (bureaux, commerces, hôtels, établissements de santé)",
            "Bâtiments résidentiels collectifs avec chauffage collectif > 70 kW",
            "Bâtiments neufs et existants sans distinction",
            "Cumul des puissances CVC pour atteindre le seuil de 70 kW"
          ],
          highlight: {
            type: 'warning',
            text: "Attention : Le seuil de 70 kW s'applique à la somme des puissances de chauffage, climatisation et ventilation du bâtiment."
          }
        },
        {
          title: "Les exigences de classe A et B",
          content: "Le Décret BACS impose une GTB de classe A ou B selon la norme NF EN ISO 52120-1:2022. Ces classes définissent les fonctionnalités minimales que doit assurer le système de gestion technique.",
          list: [
            "Classe A : Niveau de performance énergétique élevé avec optimisation avancée",
            "Classe B : Niveau standard avec régulation et programmation automatisées",
            "Classe C et D : Non conformes aux exigences du Décret BACS",
            "Audit préalable pour évaluer la classe actuelle de votre installation"
          ]
        },
        {
          title: "Les fonctionnalités obligatoires",
          content: "Une GTB conforme doit assurer un ensemble de fonctions permettant l'optimisation des consommations énergétiques et le suivi en temps réel des équipements techniques.",
          list: [
            "Régulation automatique du chauffage et de la climatisation",
            "Programmation horaire et calendaire des équipements",
            "Détection et signalisation des dysfonctionnements",
            "Suivi continu des consommations énergétiques",
            "Communication et interopérabilité des systèmes"
          ],
          highlight: {
            type: 'info',
            text: "La fiche CEE BAT-TH-116 permet de financer jusqu'à 70% de l'installation d'une GTB conforme."
          }
        },
        {
          title: "Comment se mettre en conformité",
          content: "La mise en conformité avec le Décret BACS nécessite une approche en plusieurs étapes, de l'audit initial à la réception des travaux. Un accompagnement par un bureau d'études spécialisé optimise le dimensionnement et le financement du projet.",
          list: [
            "Audit technique pour évaluer l'existant et les besoins",
            "Étude de dimensionnement de la GTB adaptée",
            "Consultation des entreprises et analyse des offres",
            "Montage du dossier de financement CEE",
            "Supervision des travaux et réception conforme"
          ],
          highlight: {
            type: 'tip',
            text: "Consulting Energy vous accompagne de A à Z dans votre mise en conformité BACS, avec optimisation du financement CEE."
          }
        }
      ],
      conclusion: "Le Décret BACS représente un investissement significatif mais largement amortissable grâce aux économies d'énergie générées (15 à 30% en moyenne) et aux aides financières disponibles. N'attendez pas l'échéance de 2027 pour lancer votre projet."
    },
    relatedArticles: [1, 4],
    seoKeywords: ['décret BACS', 'GTB', 'gestion technique bâtiment', 'automatisation', '70 kW', '2027']
  },
  '3': {
    id: 3,
    slug: 'cee-6eme-periode-changements',
    title: 'CEE 6ème période : les changements majeurs à connaître',
    excerpt: "La nouvelle période CEE 2026-2030 apporte des évolutions importantes. Découvrez les nouvelles fiches d'opérations et les niveaux de primes attendus.",
    category: 'cee',
    categoryLabel: 'CEE',
    date: '28 décembre 2025',
    readTime: '10 min',
    image: '/images/blog/cee-periode-6.jpg',
    author: 'Rasid DUYGU',
    authorRole: 'Expert Performance Énergétique',
    content: {
      intro: "La 6ème période des Certificats d'Économies d'Énergie (2026-2030) s'annonce comme la plus ambitieuse depuis la création du dispositif. Avec un objectif annuel d'environ 1 050 TWhc et un budget estimé à 8 milliards d'euros par an, cette période offre des opportunités majeures de financement pour les projets de rénovation énergétique.",
      sections: [
        {
          title: "Les objectifs renforcés de la 6ème période",
          content: "Le gouvernement a significativement relevé les obligations des fournisseurs d'énergie pour accélérer la transition énergétique du parc bâti français. Cette ambition se traduit par des volumes d'économies d'énergie sans précédent.",
          list: [
            "Objectif annuel : environ 1 050 TWhc cumac par an",
            "Durée de la période : 5 ans (2026-2030)",
            "Budget total estimé : 40 milliards d'euros sur la période",
            "Part précarité énergétique maintenue à environ 33%"
          ],
          highlight: {
            type: 'info',
            text: "La 6ème période représente une augmentation de 25% par rapport à la 5ème période, offrant davantage de financements pour vos projets."
          }
        },
        {
          title: "Les nouvelles fiches d'opérations standardisées",
          content: "Plusieurs nouvelles fiches font leur apparition tandis que d'autres sont révisées pour s'adapter aux évolutions technologiques et réglementaires. Ces fiches définissent les conditions d'éligibilité et les volumes de CEE attribués.",
          list: [
            "BAT-TH-116 : GTB pour les bâtiments tertiaires (révisée)",
            "Nouvelles fiches pour les pompes à chaleur haute température",
            "Renforcement des exigences sur l'isolation thermique",
            "Fiches spécifiques pour les bâtiments industriels",
            "Intégration des critères de la RE2020 dans les exigences"
          ]
        },
        {
          title: "L'évolution des valorisations",
          content: "Les montants de primes CEE évoluent en fonction de plusieurs facteurs : tension sur le marché, objectifs de la période et priorités gouvernementales. Une veille attentive permet d'optimiser le timing de ses projets.",
          list: [
            "Valorisation accrue pour les opérations en précarité énergétique",
            "Bonification pour les projets combinant plusieurs actions",
            "Prime coup de pouce maintenue pour certaines opérations",
            "Indexation possible sur les cours du marché des CEE"
          ],
          highlight: {
            type: 'tip',
            text: "Pour maximiser vos primes, privilégiez les projets globaux combinant isolation, chauffage et pilotage intelligent."
          }
        },
        {
          title: "Comment optimiser vos projets CEE",
          content: "La réussite d'un projet CEE repose sur une préparation rigoureuse en amont des travaux. Le montage du dossier doit respecter un calendrier précis et des exigences documentaires strictes.",
          list: [
            "Identifier les opérations éligibles avant signature des devis",
            "Choisir des installateurs RGE avec références vérifiables",
            "Constituer le dossier complet avant démarrage des travaux",
            "Respecter les délais de transmission post-travaux",
            "Conserver tous les justificatifs pendant 6 ans minimum"
          ],
          highlight: {
            type: 'warning',
            text: "Un dossier CEE non conforme peut entraîner le rejet de la demande et la perte du financement. Faites-vous accompagner !"
          }
        }
      ],
      conclusion: "La 6ème période CEE constitue une opportunité exceptionnelle de financer vos projets de rénovation énergétique. Avec des objectifs renforcés et des budgets en hausse, c'est le moment idéal pour lancer vos travaux d'amélioration de la performance énergétique."
    },
    relatedArticles: [1, 5],
    seoKeywords: ['CEE 6ème période', 'certificats économies énergie', 'primes CEE 2026', 'financement rénovation', 'travaux énergétiques']
  },
  '4': {
    id: 4,
    slug: 'audit-energetique-conforme-2026',
    title: 'Comment réaliser un audit énergétique conforme en 2026',
    excerpt: "Les exigences de l'audit énergétique réglementaire évoluent. Méthodologie, livrables attendus et points de vigilance pour un audit réussi.",
    category: 'reglementation',
    categoryLabel: 'Réglementation',
    date: '20 décembre 2025',
    readTime: '7 min',
    image: '/images/blog/audit-energetique.jpg',
    author: 'Ekrem KIZILDAG',
    authorRole: 'Directeur Technique',
    content: {
      intro: "L'audit énergétique constitue la pierre angulaire de toute démarche d'amélioration de la performance énergétique. Qu'il soit réglementaire (grandes entreprises, copropriétés) ou volontaire, il doit respecter une méthodologie rigoureuse pour déboucher sur des préconisations pertinentes et finançables.",
      sections: [
        {
          title: "Les obligations d'audit énergétique en 2026",
          content: "Plusieurs dispositifs réglementaires imposent la réalisation d'audits énergétiques. Le périmètre concerné s'élargit progressivement pour couvrir un nombre croissant de bâtiments et d'entreprises.",
          list: [
            "Grandes entreprises : audit tous les 4 ans (directive EED)",
            "Copropriétés : audit ou DPE collectif selon la taille",
            "Vente de logements F et G : audit énergétique obligatoire",
            "Décret Tertiaire : audit recommandé pour définir la stratégie"
          ],
          highlight: {
            type: 'info',
            text: "L'audit réglementaire doit être réalisé par un auditeur qualifié et respecter la méthodologie de la norme NF EN 16247."
          }
        },
        {
          title: "La méthodologie d'audit conforme",
          content: "Un audit énergétique de qualité suit une méthodologie structurée en plusieurs phases, de la collecte des données à la restitution des résultats. Chaque étape contribue à la fiabilité des conclusions.",
          list: [
            "Phase 1 : Collecte documentaire et analyse des factures",
            "Phase 2 : Visite technique et relevés sur site",
            "Phase 3 : Modélisation thermique du bâtiment",
            "Phase 4 : Identification des gisements d'économies",
            "Phase 5 : Chiffrage et priorisation des actions"
          ]
        },
        {
          title: "Les livrables attendus",
          content: "Le rapport d'audit doit contenir un ensemble d'informations permettant au maître d'ouvrage de prendre des décisions éclairées sur les travaux à engager et leur financement.",
          list: [
            "Bilan énergétique détaillé par poste de consommation",
            "Analyse des écarts entre théorique et réel",
            "Scénarios de travaux avec temps de retour",
            "Plan d'actions chiffré et priorisé",
            "Synthèse des aides financières mobilisables"
          ],
          highlight: {
            type: 'tip',
            text: "Exigez un rapport incluant le potentiel de financement CEE pour chaque action recommandée."
          }
        },
        {
          title: "Choisir le bon auditeur",
          content: "La qualité de l'audit dépend largement de la compétence de l'auditeur. Plusieurs critères permettent de sélectionner un prestataire fiable et expérimenté.",
          list: [
            "Qualification OPQIBI ou équivalent reconnue",
            "Références vérifiables dans votre secteur d'activité",
            "Méthodologie conforme NF EN 16247",
            "Capacité d'accompagnement post-audit (CEE, travaux)",
            "Indépendance vis-à-vis des fournisseurs d'équipements"
          ],
          highlight: {
            type: 'warning',
            text: "Méfiez-vous des audits gratuits financés par des obligés CEE : leur indépendance peut être compromise."
          }
        }
      ],
      conclusion: "Un audit énergétique de qualité constitue un investissement rentable : il permet d'identifier les actions les plus pertinentes, d'optimiser les financements et d'éviter les erreurs coûteuses. Choisissez un auditeur qualifié et indépendant pour maximiser la valeur de cette démarche."
    },
    relatedArticles: [1, 5],
    seoKeywords: ['audit énergétique', 'NF EN 16247', 'diagnostic performance', 'OPQIBI', 'rénovation énergétique']
  },
  '5': {
    id: 5,
    slug: 'actions-rapides-reduire-consommation',
    title: '5 actions rapides pour réduire la consommation de votre bâtiment',
    excerpt: "Optimisation du chauffage, éclairage LED, gestion des équipements : des mesures simples pour des économies immédiates sans investissement lourd.",
    category: 'conseils',
    categoryLabel: 'Conseils pratiques',
    date: '15 décembre 2025',
    readTime: '5 min',
    image: '/images/blog/economies-energie.jpg',
    author: 'Rasid DUYGU',
    authorRole: 'Expert Performance Énergétique',
    content: {
      intro: "Avant d'engager des travaux lourds de rénovation, de nombreuses actions à faible coût permettent de réduire significativement les consommations énergétiques. Ces quick wins génèrent des économies immédiates et améliorent le confort des occupants.",
      sections: [
        {
          title: "1. Optimiser les températures de consigne",
          content: "Le chauffage représente souvent le premier poste de consommation. Un ajustement fin des températures de consigne peut générer des économies substantielles sans impact sur le confort.",
          list: [
            "Bureaux : 19°C en occupation, 16°C en inoccupation",
            "Réduire d'1°C = 7% d'économies de chauffage",
            "Programmer les plages horaires selon l'occupation réelle",
            "Éviter le chauffage des locaux techniques non occupés"
          ],
          highlight: {
            type: 'tip',
            text: "Installez des thermostats programmables connectés pour un pilotage précis et à distance."
          }
        },
        {
          title: "2. Passer à l'éclairage LED",
          content: "Le remplacement des éclairages anciens (tubes fluorescents, halogènes) par des LED représente l'un des meilleurs retours sur investissement en matière d'efficacité énergétique.",
          list: [
            "Économie de 50 à 80% sur le poste éclairage",
            "Durée de vie 5 à 10 fois supérieure",
            "Temps de retour inférieur à 2 ans généralement",
            "Éligible aux primes CEE (fiche BAT-EQ-127)"
          ]
        },
        {
          title: "3. Traquer les consommations cachées",
          content: "De nombreux équipements consomment de l'énergie en permanence, même lorsqu'ils ne sont pas utilisés. Identifier et réduire ces consommations fantômes peut représenter 10 à 15% d'économies.",
          list: [
            "Éteindre les équipements bureautiques la nuit et le week-end",
            "Installer des multiprises avec interrupteur",
            "Déconnecter les chargeurs non utilisés",
            "Programmer l'extinction automatique des écrans"
          ],
          highlight: {
            type: 'info',
            text: "Un ordinateur en veille consomme encore 20 à 40% de sa puissance nominale."
          }
        },
        {
          title: "4. Améliorer l'étanchéité à l'air",
          content: "Les infiltrations d'air représentent une source majeure de déperditions thermiques, facilement réductibles par des interventions simples et peu coûteuses.",
          list: [
            "Calfeutrer les fenêtres avec des joints adhésifs",
            "Installer des bas de porte sur les accès extérieurs",
            "Vérifier et réparer les joints des portes d'entrée",
            "Fermer les trappes d'accès aux combles"
          ]
        },
        {
          title: "5. Sensibiliser les occupants",
          content: "Le comportement des utilisateurs influence significativement les consommations. Une campagne de sensibilisation bien menée peut générer 10 à 20% d'économies durables.",
          list: [
            "Afficher les éco-gestes près des interrupteurs",
            "Communiquer sur les résultats obtenus",
            "Désigner des référents énergie par service",
            "Organiser des challenges inter-équipes"
          ],
          highlight: {
            type: 'tip',
            text: "Les économies comportementales ne coûtent rien et peuvent représenter jusqu'à 20% de réduction."
          }
        }
      ],
      conclusion: "Ces actions rapides constituent un excellent point de départ pour votre démarche d'efficacité énergétique. Elles permettent de générer des économies immédiates tout en préparant le terrain pour des travaux plus ambitieux."
    },
    relatedArticles: [3, 4],
    seoKeywords: ['économies énergie', 'réduction consommation', 'éco-gestes', 'LED', 'chauffage']
  },
  '6': {
    id: 6,
    slug: 'modulations-operat-calcul-justification',
    title: 'Modulations OPERAT : comment les calculer et les justifier',
    excerpt: "Patrimoine atypique, contraintes techniques, précarité économique : maîtrisez les modulations pour adapter vos objectifs Décret Tertiaire.",
    category: 'decret-tertiaire',
    categoryLabel: 'Décret Tertiaire',
    date: '10 décembre 2025',
    readTime: '9 min',
    image: '/images/blog/modulations-operat.jpg',
    author: 'Ekrem KIZILDAG',
    authorRole: 'Directeur Technique',
    content: {
      intro: "Le Décret Tertiaire prévoit des mécanismes de modulation permettant d'adapter les objectifs de réduction aux contraintes spécifiques de certains bâtiments. Bien utilisées, ces modulations permettent de définir des trajectoires réalistes tout en restant conformes à la réglementation.",
      sections: [
        {
          title: "Les différents types de modulation",
          content: "Trois catégories de modulation sont prévues par le Décret Tertiaire, chacune répondant à des situations spécifiques documentées et justifiées.",
          list: [
            "Modulation technique : contraintes architecturales ou techniques",
            "Modulation économique : risque de précarité énergétique",
            "Modulation patrimoniale : bâtiments historiques ou remarquables"
          ],
          highlight: {
            type: 'warning',
            text: "Les modulations ne sont pas automatiques : elles doivent être demandées et justifiées sur OPERAT."
          }
        },
        {
          title: "La modulation pour contraintes techniques",
          content: "Cette modulation s'applique lorsque l'atteinte des objectifs se heurte à des impossibilités techniques avérées, liées aux caractéristiques intrinsèques du bâtiment.",
          list: [
            "Contraintes architecturales limitant l'isolation par l'extérieur",
            "Impossibilité d'installer certains équipements (PAC, solaire)",
            "Réseaux énergétiques insuffisants pour les besoins",
            "Contraintes d'usage spécifiques (data centers, process)"
          ]
        },
        {
          title: "La modulation pour précarité économique",
          content: "Les assujettis confrontés à des difficultés économiques peuvent solliciter un ajustement de leurs objectifs pour éviter une mise en péril de leur activité.",
          list: [
            "Temps de retour des investissements supérieur à 10 ans",
            "Situation financière dégradée documentée",
            "Coût des travaux disproportionné par rapport au budget",
            "Absence de financement malgré les démarches"
          ],
          highlight: {
            type: 'info',
            text: "La modulation économique doit être justifiée par des études technico-économiques détaillées."
          }
        },
        {
          title: "Comment constituer le dossier de modulation",
          content: "La demande de modulation doit être solidement documentée pour être acceptée. Un dossier bien préparé augmente significativement les chances d'obtention.",
          list: [
            "Études techniques démontrant les contraintes",
            "Chiffrages détaillés des travaux impossibles",
            "Analyse des alternatives envisagées et écartées",
            "Plan d'actions alternatif proposé",
            "Engagements de l'assujetti sur les actions réalisables"
          ],
          highlight: {
            type: 'tip',
            text: "Faites appel à un bureau d'études pour constituer un dossier de modulation solide et recevable."
          }
        }
      ],
      conclusion: "Les modulations constituent un outil précieux pour adapter le Décret Tertiaire aux réalités du terrain. Bien documentées et justifiées, elles permettent de définir une trajectoire ambitieuse mais réaliste pour votre patrimoine."
    },
    relatedArticles: [1, 4],
    seoKeywords: ['modulations OPERAT', 'décret tertiaire', 'contraintes techniques', 'précarité énergétique', 'objectifs réduction']
  }
}

// Get related articles data
function getRelatedArticles(ids: number[]) {
  return ids.map(id => blogArticles[id.toString()]).filter(Boolean)
}

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>()

  if (!id || !blogArticles[id]) {
    return <Navigate to="/ressources/blog" replace />
  }

  const article = blogArticles[id]
  const relatedArticles = getRelatedArticles(article.relatedArticles)

  const shareUrl = `https://consulting-energy.fr/ressources/blog/${id}`
  const shareText = encodeURIComponent(article.title)

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/ressources/blog/${id}`}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-12 lg:py-20">
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
        <Container className="relative z-10">
          <Link
            to="/ressources/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-[#D4A84B] text-white text-sm font-semibold rounded-full">
                {article.categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime} de lecture
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-white/80 mb-8">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4A84B] to-[#C49A3D] rounded-full flex items-center justify-center text-white font-bold">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold">{article.author}</div>
                <div className="text-white/60 text-sm">{article.authorRole}</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="text-xl text-[#2D3436] leading-relaxed">
                {article.content.intro}
              </p>
            </motion.div>

            {/* Sections */}
            {article.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
                  {section.title}
                </h2>
                <p className="text-[#2D3436] leading-relaxed mb-4">
                  {section.content}
                </p>

                {section.list && (
                  <ul className="space-y-2 mb-4">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                        <span className="text-[#2D3436]">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <div className={`p-4 rounded-lg flex items-start gap-3 ${
                    section.highlight.type === 'warning'
                      ? 'bg-amber-50 border border-amber-200'
                      : section.highlight.type === 'tip'
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-blue-50 border border-blue-200'
                  }`}>
                    {section.highlight.type === 'warning' ? (
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    ) : section.highlight.type === 'tip' ? (
                      <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${
                      section.highlight.type === 'warning'
                        ? 'text-amber-800'
                        : section.highlight.type === 'tip'
                        ? 'text-green-800'
                        : 'text-blue-800'
                    }`}>
                      {section.highlight.text}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F6F2] rounded-2xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#1B4332] mb-4">
                En résumé
              </h2>
              <p className="text-[#2D3436] leading-relaxed">
                {article.content.conclusion}
              </p>
            </motion.div>

            {/* Share */}
            <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-t border-b border-gray-200 mb-12">
              <div className="flex items-center gap-2 text-[#636e72]">
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Partager cet article</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Partager sur LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Partager sur Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Partager sur Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1B4332] rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Besoin d'un accompagnement personnalisé ?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour vous accompagner dans vos projets
                de performance énergétique et vos démarches réglementaires.
              </p>
              <Link to="/contact">
                <Button className="bg-[#D4A84B] hover:bg-[#C49A3D] text-white">
                  Contactez nos experts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#F8F6F2]">
          <Container>
            <h2 className="text-2xl font-bold text-[#2D3436] mb-8 text-center">
              Articles similaires
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  to={`/ressources/blog/${related.id}`}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <span className="inline-block px-2 py-1 bg-[#1B4332]/10 text-[#1B4332] text-xs font-medium rounded mb-3">
                    {related.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-[#2D3436] group-hover:text-[#1B4332] transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="text-[#636e72] text-sm line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
