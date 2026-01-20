import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { SEO } from '@/components/seo'
import { Container, Button } from '@/components/common'
import { siteConfig } from '@/data/siteConfig'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Le nom de l\'entreprise est requis'),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(50, 'Le message doit contenir au moins 50 caractères'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type ContactFormData = z.infer<typeof contactSchema>

const subjects = [
  { value: 'decret-tertiaire', label: 'Décret Tertiaire - Conformité' },
  { value: 'decret-bacs', label: 'Décret BACS - GTB' },
  { value: 'financement-cee', label: 'Financement CEE' },
  { value: 'audit-energetique', label: 'Audit Énergétique' },
  { value: 'maitrise-oeuvre', label: 'Maîtrise d\'Œuvre' },
  { value: 'autre', label: 'Autre demande' },
]

export function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading')

    try {
      const subjectLabel = subjects.find(s => s.value === data.subject)?.label || data.subject

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Non renseigné',
          company: data.company,
          subject: subjectLabel,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contactez Consulting Energy pour vos projets de performance énergétique. Nos experts vous répondent sous 24h."
        canonical="/contact"
      />

      <section className="py-16 md:py-24 bg-[#F8F6F2]">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D3436]">
              Contactez nos Experts
            </h1>
            <p className="mt-4 text-lg text-[#636e72] max-w-2xl mx-auto">
              Échangeons sur votre projet de performance énergétique
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
              >
                {submitStatus === 'success' ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                    <h3 className="mt-4 text-xl font-semibold text-[#2D3436]">
                      Message envoyé !
                    </h3>
                    <p className="mt-2 text-[#636e72]">
                      Merci pour votre message. Nous vous recontactons sous 24h.
                    </p>
                    <Button
                      onClick={() => setSubmitStatus('idle')}
                      variant="outline"
                      className="mt-6"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2D3436] mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] ${
                            errors.name ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="Jean Dupont"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2D3436] mb-2">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] ${
                            errors.email ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="jean@entreprise.fr"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#2D3436] mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register('phone')}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                          placeholder="06 12 34 56 78"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#2D3436] mb-2">
                          Entreprise *
                        </label>
                        <input
                          type="text"
                          id="company"
                          {...register('company')}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] ${
                            errors.company ? 'border-red-500' : 'border-gray-200'
                          }`}
                          placeholder="Nom de votre entreprise"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        {...register('subject')}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] ${
                          errors.subject ? 'border-red-500' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {subjects.map((subject) => (
                          <option key={subject.value} value={subject.value}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2D3436] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register('message')}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#1B4332] resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-200'
                        }`}
                        placeholder="Décrivez votre projet ou votre besoin..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Privacy */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        {...register('privacy')}
                        className="mt-1 w-4 h-4 text-[#1B4332] border-gray-300 rounded focus:ring-[#1B4332]"
                      />
                      <label htmlFor="privacy" className="text-sm text-[#636e72]">
                        J'accepte la{' '}
                        <a href="/confidentialite" className="text-[#1B4332] hover:underline">
                          politique de confidentialité
                        </a>{' '}
                        et le traitement de mes données *
                      </label>
                    </div>
                    {errors.privacy && (
                      <p className="text-sm text-red-500">{errors.privacy.message}</p>
                    )}

                    {/* Error message */}
                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg">
                        <AlertCircle className="w-5 h-5" />
                        <span>Une erreur est survenue. Veuillez réessayer.</span>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={submitStatus === 'loading'}
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer ma Demande
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl font-semibold text-[#2D3436] mb-6">
                    Nos Coordonnées
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-[#636e72] hover:text-[#1B4332] transition-colors"
                      >
                        <MapPin className="w-5 h-5 mt-0.5 text-[#1B4332]" />
                        <span>
                          {siteConfig.contact.address.street}
                          <br />
                          {siteConfig.contact.address.postalCode} {siteConfig.contact.address.city}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-[#636e72] hover:text-[#1B4332] transition-colors"
                      >
                        <Phone className="w-5 h-5 text-[#1B4332]" />
                        {siteConfig.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3 text-[#636e72] hover:text-[#1B4332] transition-colors"
                      >
                        <Mail className="w-5 h-5 text-[#1B4332]" />
                        {siteConfig.contact.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-[#636e72]">
                      <Clock className="w-5 h-5 text-[#1B4332]" />
                      {siteConfig.contact.hours}
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-[#2D3436] mb-2">
                    Délai de réponse
                  </h3>
                  <p className="text-sm text-[#636e72]">
                    Nous nous engageons à vous répondre sous 24h ouvrées.
                  </p>
                </div>

                <div className="bg-[#1B4332] rounded-xl p-6 text-white">
                  <h3 className="font-semibold mb-2">Bureau d'études indépendant</h3>
                  <p className="text-sm text-white/80">
                    OPQIBI Certifié - Expertise technique et conseil impartial pour vos projets de performance énergétique.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
