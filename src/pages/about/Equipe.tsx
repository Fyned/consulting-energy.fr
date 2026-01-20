import { motion } from 'framer-motion'
import {
  Users,
  Mail,
  Phone,
  Award,
  ArrowRight,
  Building2,
  GraduationCap,
  Briefcase,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SEO } from '@/components/seo/SEO'

const teamMembers = [
  {
    id: 1,
    name: 'Rasid DUYGU',
    role: 'Président',
    phone: '07 88 09 70 70',
    email: 'r.duygu@consulting-energy.fr',
    description: 'Fondateur de Consulting Energy, Rasid possède plus de 15 ans d\'expérience dans le domaine de l\'efficacité énergétique. Expert en CEE et réglementation, il pilote la stratégie de l\'entreprise.',
    expertise: ['Direction stratégique', 'CEE', 'Relations institutionnelles'],
    certifications: ['OPQIBI', 'Formation CEE'],
  },
  {
    id: 2,
    name: 'Ekrem KIZILDAG',
    role: 'Directeur Général',
    phone: '07 43 37 38 45',
    email: 'e.kizildag@consulting-energy.fr',
    description: 'En charge du développement commercial et de la gestion opérationnelle, Ekrem accompagne les clients dans la définition de leurs besoins et la mise en œuvre de leurs projets.',
    expertise: ['Développement commercial', 'Gestion de projets', 'Relation client'],
    certifications: ['Management', 'Efficacité énergétique'],
  },
]

const expertiseAreas = [
  {
    icon: Building2,
    title: 'Ingénierie Énergétique',
    description: 'Audits, simulations thermiques, études de faisabilité et optimisation des installations.',
  },
  {
    icon: GraduationCap,
    title: 'Réglementation',
    description: 'Décret Tertiaire, BACS, RT/RE, normes ISO : maîtrise complète du cadre réglementaire.',
  },
  {
    icon: Briefcase,
    title: 'Financement',
    description: 'Montage de dossiers CEE, subventions, aides régionales et optimisation financière.',
  },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Equipe() {
  return (
    <>
      <SEO
        title="Notre Équipe - Experts en Performance Énergétique"
        description="Rencontrez l'équipe de Consulting Energy : des experts certifiés en performance énergétique, CEE et réglementation au service de vos projets."
        canonical="/a-propos/equipe"
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
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Notre Équipe</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Des Experts Passionnés à votre Service
            </h1>
            <p className="text-xl text-white/80">
              Une équipe d'ingénieurs et de consultants certifiés, unis par la volonté
              d'accompagner nos clients vers l'excellence énergétique.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading
            title="Direction"
            subtitle="Les fondateurs et dirigeants de Consulting Energy"
          />

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F6F2] rounded-2xl overflow-hidden"
              >
                <div className="p-8">
                  {/* Avatar placeholder */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 bg-[#1B4332]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-10 h-10 text-[#1B4332]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D3436]">{member.name}</h3>
                      <p className="text-[#52796F] font-medium mb-3">{member.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="px-2 py-1 bg-[#D4A84B]/10 text-[#D4A84B] text-xs font-medium rounded"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{member.description}</p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#2D3436] mb-3">Domaines d'expertise :</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp) => (
                        <span
                          key={exp}
                          className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#1B4332]/10">
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-[#1B4332] hover:text-[#52796F] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="font-medium">{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-[#1B4332] hover:text-[#52796F] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="font-medium">{member.email}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <SectionHeading
            title="Nos Domaines d'Expertise"
            subtitle="Une équipe pluridisciplinaire pour répondre à tous vos besoins"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <motion.div
                  key={area.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-[#1B4332] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2D3436] mb-3">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-[#1B4332] rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Award className="w-12 h-12 text-[#77C14A] mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">
                  Certifications et Qualifications
                </h2>
                <p className="text-white/80 mb-6">
                  Notre équipe est formée et certifiée pour vous garantir un accompagnement
                  conforme aux plus hauts standards de qualité du secteur.
                </p>
                <ul className="space-y-3">
                  {[
                    'OPQIBI - Qualification bureau d\'études',
                    'RGE - Reconnu Garant de l\'Environnement',
                    'Formation continue réglementaire',
                    'Habilitations techniques spécifiques',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90">
                      <Award className="w-5 h-5 text-[#77C14A] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['OPQIBI', 'RGE', 'ISO 50001', 'NF EN'].map((cert) => (
                  <div
                    key={cert}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white font-bold">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-[#F8F6F2]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">
              Rejoignez Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Vous êtes passionné par la transition énergétique et souhaitez rejoindre
              une équipe dynamique ? Nous sommes toujours à la recherche de talents.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Postuler
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B4332]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Discutons de votre Projet
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Notre équipe est à votre disposition pour étudier votre situation
              et vous proposer un accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-[#1B4332] hover:bg-gray-100 gap-2">
                  Prendre Rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="tel:0788097070">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                  <Phone className="w-4 h-4" />
                  07 88 09 70 70
                </Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
