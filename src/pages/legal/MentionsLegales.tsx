import { motion } from 'framer-motion'
import { FileText, Building2, Server, Shield } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SEO } from '@/components/seo/SEO'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions Légales"
        description="Mentions légales du site consulting-energy.fr : informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et les conditions d'utilisation."
        canonical="/mentions-legales"
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
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Informations Légales</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Mentions Légales</h1>
            <p className="text-white/80">
              Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
              confiance dans l'économie numérique, nous vous informons des éléments suivants.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Éditeur */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Éditeur du Site</h2>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-6 space-y-3">
                <p><strong>Raison sociale :</strong> Consulting Energy</p>
                <p><strong>Forme juridique :</strong> SARL</p>
                <p><strong>Siège social :</strong> 3, Rue Raymond Panin, 88580 Saulcy-sur-Meurthe, France</p>
                <p><strong>Téléphone :</strong> 07 88 09 70 70</p>
                <p><strong>Email :</strong> contact@consulting-energy.fr</p>
                <p><strong>Site web :</strong> www.consulting-energy.fr</p>
                <p><strong>Directeur de la publication :</strong> Rasid DUYGU, Président</p>
              </div>
            </motion.div>

            {/* Hébergeur */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Hébergement</h2>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-6 space-y-3">
                <p><strong>Hébergeur :</strong> [Nom de l'hébergeur]</p>
                <p><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
                <p><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#1B4332]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Propriété Intellectuelle</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons,
                  logiciels, etc.) est la propriété exclusive de Consulting Energy ou de ses
                  partenaires et est protégé par les lois françaises et internationales relatives
                  à la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, transmission,
                  dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé
                  que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation
                  écrite préalable de Consulting Energy.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de son contenu, des informations qui
                  y sont divulguées, engagerait la responsabilité de l'utilisateur et constituerait
                  une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la
                  Propriété Intellectuelle.
                </p>
              </div>
            </motion.div>

            {/* Données personnelles */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Protection des Données Personnelles</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                  Informatique et Libertés, vous disposez de droits concernant vos données personnelles.
                </p>
                <p>
                  Pour en savoir plus sur la collecte et le traitement de vos données, consultez notre{' '}
                  <a href="/confidentialite" className="text-[#1B4332] hover:underline">
                    Politique de Confidentialité
                  </a>.
                </p>
                <p>
                  Pour toute demande relative à vos données personnelles, vous pouvez nous contacter à
                  l'adresse : contact@consulting-energy.fr
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
                <p>
                  Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et
                  réaliser des statistiques de visite. En poursuivant votre navigation sur ce site,
                  vous acceptez l'utilisation de cookies.
                </p>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté
                  lors de leur utilisation. Notez que la désactivation des cookies peut affecter
                  certaines fonctionnalités du site.
                </p>
              </div>
            </motion.div>

            {/* Responsabilité */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Limitation de Responsabilité</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site
                  est périodiquement mis à jour, mais peut toutefois contenir des inexactitudes, des
                  omissions ou des lacunes.
                </p>
                <p>
                  Consulting Energy ne pourra être tenue responsable des dommages directs et indirects
                  causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de
                  l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises,
                  soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
                <p>
                  Les liens hypertextes mis en place dans le cadre du présent site internet en direction
                  d'autres ressources présentes sur le réseau Internet ne sauraient engager la
                  responsabilité de Consulting Energy.
                </p>
              </div>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Droit Applicable</h2>
              <div className="prose prose-gray max-w-none">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige,
                  les tribunaux français seront seuls compétents.
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
