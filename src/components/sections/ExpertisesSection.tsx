import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, SectionHeading } from '@/components/common'
import { expertises } from '@/data/services'

export function ExpertisesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F6F2]">
      <Container>
        <SectionHeading
          title="Nos Expertises"
          subtitle="Des solutions complètes pour votre transition énergétique"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={expertise.href}
                className="block group h-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#F8F6F2] rounded-lg flex items-center justify-center group-hover:bg-[#1B4332] transition-colors">
                  <expertise.icon className="w-7 h-7 text-[#1B4332] group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#2D3436] group-hover:text-[#1B4332] transition-colors">
                  {expertise.title}
                </h3>
                <p className="mt-2 text-sm text-[#636e72]">
                  {expertise.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#1B4332]">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ExpertisesSection
