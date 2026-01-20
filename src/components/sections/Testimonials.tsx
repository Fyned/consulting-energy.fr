import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, Building, Factory, Landmark, Home } from 'lucide-react'
import { Container, SectionHeading } from '@/components/common'
import { testimonials, type Testimonial } from '@/data/testimonials'

const sectorIcons = {
  tertiaire: Building,
  industrie: Factory,
  collectivite: Landmark,
  logement: Home,
}

const sectorLabels = {
  tertiaire: 'Tertiaire',
  industrie: 'Industrie',
  collectivite: 'Collectivité',
  logement: 'Logement',
}

function TestimonialCard({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) {
  const SectorIcon = sectorIcons[testimonial.sector]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-6 ${
        isActive ? 'ring-2 ring-[#1B4332]/20' : ''
      }`}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-10 h-10 bg-[#D4A84B] rounded-full flex items-center justify-center">
          <Quote className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Sector badge */}
      <div className="absolute top-6 right-6">
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#1B4332]/10 rounded-full">
          <SectorIcon className="w-4 h-4 text-[#1B4332]" />
          <span className="text-xs font-medium text-[#1B4332]">
            {sectorLabels[testimonial.sector]}
          </span>
        </div>
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mt-4 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#D4A84B] text-[#D4A84B]" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-lg md:text-xl text-[#2D3436] leading-relaxed mb-8 min-h-[120px]">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-gradient-to-br from-[#1B4332] to-[#52796F] rounded-full flex items-center justify-center text-white font-bold text-lg">
            {testimonial.author.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <div>
          <div className="font-semibold text-[#2D3436]">{testimonial.author}</div>
          <div className="text-sm text-[#636e72]">
            {testimonial.role} • {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 md:py-24 bg-[#F8F6F2]">
      <Container>
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          description="Découvrez les retours d'expérience de nos clients dans différents secteurs d'activité."
          centered
        />

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main carousel */}
          <div className="relative">
            <div className="max-w-3xl mx-auto px-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <TestimonialCard
                    testimonial={testimonials[currentIndex]}
                    isActive={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#1B4332] w-8'
                    : 'bg-[#1B4332]/20 hover:bg-[#1B4332]/40'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '98%', label: 'Taux de satisfaction' },
            { value: '200+', label: 'Clients accompagnés' },
            { value: '100%', label: 'Recommandent nos services' },
            { value: '4.9/5', label: 'Note moyenne' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-xl shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#1B4332]">
                {stat.value}
              </div>
              <div className="text-sm text-[#636e72] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default Testimonials
