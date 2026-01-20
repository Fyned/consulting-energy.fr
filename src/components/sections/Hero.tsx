import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle } from 'lucide-react'
import { Container, Button } from '@/components/common'

export function Hero() {
  return (
    <section className="relative bg-[#F8F6F2] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#1B4332]/5" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4A84B]/5" />
      </div>

      <Container className="relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-[#1B4332]/10 text-[#1B4332] text-sm font-medium rounded-full mb-6">
                Bureau d'études en performance énergétique
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3436] leading-tight">
                Conformité Énergétique et{' '}
                <span className="text-[#1B4332]">Financement CEE</span>{' '}
                pour votre Entreprise
              </h1>

              <p className="mt-6 text-lg md:text-xl text-[#636e72] leading-relaxed">
                Experts en Décret Tertiaire, BACS et optimisation CEE.
                Nous accompagnons les entreprises du Grand Est vers la performance énergétique.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="/contact" size="lg">
                  Évaluer ma Conformité
                </Button>
                <Button href="/expertises" variant="outline" size="lg">
                  Découvrir nos Services
                </Button>
              </div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-[#2D3436]/10"
              >
                <div className="flex items-center gap-2 text-sm text-[#636e72]">
                  <Shield className="w-5 h-5 text-[#1B4332]" />
                  <span>OPQIBI Certifié</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#636e72]">
                  <Award className="w-5 h-5 text-[#1B4332]" />
                  <span>15+ ans d'expertise</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#636e72]">
                  <CheckCircle className="w-5 h-5 text-[#1B4332]" />
                  <span>500+ projets</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Hero image */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/images/hero/hero-main.jpg"
                    alt="Expert en performance énergétique analysant des données"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent" />
                </div>

                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -right-4 top-1/4 bg-white rounded-xl shadow-lg p-4"
                >
                  <div className="text-3xl font-bold text-[#1B4332]">-40%</div>
                  <div className="text-sm text-[#636e72]">Objectif 2030</div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -left-4 bottom-1/4 bg-[#D4A84B] text-white rounded-xl shadow-lg p-4"
                >
                  <div className="text-sm font-medium">CEE 6ème Période</div>
                  <div className="text-xs opacity-80">2026-2030</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
