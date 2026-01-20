import { motion } from 'framer-motion'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

const partners = [
  {
    name: 'EDF',
    logo: '/images/partners/edf.svg',
    description: 'Fournisseur historique d\'énergie en France',
  },
]

export function PartnersSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <SectionHeading
          title="Notre Partenaire"
          subtitle="Nous travaillons avec les acteurs majeurs du secteur énergétique"
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center p-8 bg-[#F8F6F2] rounded-2xl hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="h-20 w-auto object-contain"
              />
              <p className="mt-4 text-sm text-gray-600 text-center max-w-xs">
                {partner.description}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default PartnersSection
