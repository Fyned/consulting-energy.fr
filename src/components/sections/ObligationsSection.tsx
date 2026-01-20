import { motion } from 'framer-motion'
import { Container, SectionHeading, ServiceCard } from '@/components/common'
import { obligations } from '@/data/services'

export function ObligationsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Vos Obligations Réglementaires"
          subtitle="Êtes-vous concerné par ces échéances ?"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {obligations.map((obligation, index) => (
            <motion.div
              key={obligation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={obligation.title}
                subtitle={obligation.subtitle}
                description={obligation.description}
                icon={obligation.icon}
                href={obligation.href}
                badge={obligation.badge}
                badgeType={obligation.badgeType}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ObligationsSection
