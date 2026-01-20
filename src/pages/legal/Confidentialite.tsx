import { motion } from 'framer-motion'
import { Shield, Database, Lock, Eye, UserCheck, Mail } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SEO } from '@/components/seo/SEO'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Confidentialite() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité - RGPD"
        description="Politique de confidentialité de Consulting Energy : collecte, traitement et protection de vos données personnelles conformément au RGPD."
        canonical="/confidentialite"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4332] to-[#2D5A45] text-white py-16">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-[#77C14A] mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">RGPD</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="text-white/80">
              Consulting Energy s'engage à protéger la vie privée des utilisateurs de son site.
              Cette politique explique comment nous collectons, utilisons et protégeons vos données.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Introduction</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  La présente politique de confidentialité a pour but d'informer les utilisateurs du site
                  www.consulting-energy.fr sur la manière dont leurs données personnelles sont collectées
                  et traitées par Consulting Energy.
                </p>
                <p>
                  Consulting Energy s'engage à respecter le Règlement Général sur la Protection des
                  Données (RGPD - Règlement UE 2016/679) et la loi Informatique et Libertés du 6 janvier
                  1978 modifiée.
                </p>
              </div>
            </motion.div>

            {/* Responsable du traitement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Responsable du Traitement</h2>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-6 space-y-3">
                <p><strong>Responsable :</strong> Consulting Energy</p>
                <p><strong>Adresse :</strong> 3, Rue Raymond Panin, 88580 Saulcy-sur-Meurthe, France</p>
                <p><strong>Email :</strong> contact@consulting-energy.fr</p>
                <p><strong>Téléphone :</strong> 07 88 09 70 70</p>
              </div>
            </motion.div>

            {/* Données collectées */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Données Collectées</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p>Nous collectons les données suivantes :</p>
                <h3 className="text-lg font-semibold text-[#2D3436] mt-6 mb-3">Données d'identification</h3>
                <ul>
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l'entreprise</li>
                  <li>Fonction professionnelle</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#2D3436] mt-6 mb-3">Données de connexion</h3>
                <ul>
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées</li>
                  <li>Date et heure de connexion</li>
                </ul>
              </div>
            </motion.div>

            {/* Finalités */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Finalités du Traitement</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p>Vos données sont collectées pour les finalités suivantes :</p>
                <ul>
                  <li><strong>Réponse aux demandes de contact :</strong> traitement de vos demandes d'information, devis ou accompagnement</li>
                  <li><strong>Newsletter :</strong> envoi d'informations sur nos services et actualités (avec votre consentement)</li>
                  <li><strong>Amélioration du site :</strong> analyse de l'utilisation du site pour améliorer nos services</li>
                  <li><strong>Obligations légales :</strong> respect de nos obligations légales et réglementaires</li>
                </ul>

                <h3 className="text-lg font-semibold text-[#2D3436] mt-6 mb-3">Base légale</h3>
                <p>Le traitement de vos données repose sur :</p>
                <ul>
                  <li>Votre consentement (formulaire de contact, newsletter)</li>
                  <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                  <li>Notre intérêt légitime (amélioration des services, sécurité)</li>
                  <li>Le respect d'obligations légales</li>
                </ul>
              </div>
            </motion.div>

            {/* Conservation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Durée de Conservation</h2>
              <div className="prose prose-gray max-w-none">
                <p>Vos données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
                <ul>
                  <li><strong>Données clients :</strong> durée de la relation commerciale + 3 ans</li>
                  <li><strong>Données prospects :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Données de connexion :</strong> 13 mois maximum</li>
                  <li><strong>Newsletter :</strong> jusqu'à désinscription</li>
                </ul>
              </div>
            </motion.div>

            {/* Sécurité */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Sécurité des Données</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p>
                  Consulting Energy met en œuvre des mesures techniques et organisationnelles appropriées
                  pour assurer la sécurité et la confidentialité de vos données :
                </p>
                <ul>
                  <li>Chiffrement des communications (HTTPS)</li>
                  <li>Accès restreint aux données (authentification)</li>
                  <li>Sauvegarde régulière des données</li>
                  <li>Mise à jour des systèmes de sécurité</li>
                </ul>
              </div>
            </motion.div>

            {/* Droits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Vos Droits</h2>
              <div className="prose prose-gray max-w-none">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul>
                  <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
                  <li><strong>Droit de rectification :</strong> demander la correction de données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans certains cas</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement antérieur</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Exercer vos Droits</h2>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-6">
                <p className="mb-4">
                  Pour exercer vos droits ou pour toute question relative à la protection de vos données,
                  vous pouvez nous contacter :
                </p>
                <ul className="space-y-2">
                  <li><strong>Par email :</strong> contact@consulting-energy.fr</li>
                  <li><strong>Par courrier :</strong> Consulting Energy - 3, Rue Raymond Panin, 88580 Saulcy-sur-Meurthe</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL
                  (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Cookies</h2>
              <div className="prose prose-gray max-w-none">
                <p>Notre site utilise des cookies pour :</p>
                <ul>
                  <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques :</strong> mesure d'audience et amélioration du site</li>
                </ul>
                <p>
                  Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de
                  votre navigateur. La désactivation de certains cookies peut affecter le fonctionnement
                  du site.
                </p>
              </div>
            </motion.div>

            {/* Mise à jour */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Mise à Jour de la Politique</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Cette politique de confidentialité peut être mise à jour périodiquement. En cas de
                  modification substantielle, nous vous en informerons par email ou via une notification
                  sur notre site.
                </p>
                <p className="text-sm text-gray-500 mt-8">
                  Dernière mise à jour : Janvier 2026
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}
