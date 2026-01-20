import { motion } from 'framer-motion'
import { Container, SectionHeading, SectorCard } from '@/components/common'
import { sectors } from '@/data/services'

export function SectorsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Secteurs d'Activité"
          subtitle="Une expertise adaptée à chaque domaine"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SectorCard
                title={sector.title}
                description={sector.description}
                icon={sector.icon}
                href={sector.href}
                image={sector.image}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SectorsSection
