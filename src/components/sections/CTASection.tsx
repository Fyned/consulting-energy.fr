import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container, Button } from '@/components/common'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

export function CTASection({
  title = "Besoin d'accompagnement pour votre conformité énergétique ?",
  description = "Nos experts sont à votre disposition pour évaluer vos besoins et vous proposer des solutions adaptées.",
  primaryCta = { label: "Demander un Devis Gratuit", href: "/contact" },
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1B4332] to-[#52796F]">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              href={primaryCta.href}
              variant="secondary"
              size="lg"
              className="group"
            >
              {primaryCta.label}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1B4332]"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default CTASection
