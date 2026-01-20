import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Linkedin } from 'lucide-react'
import { Container } from '@/components/common'
import { footerNavigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2D3436] text-[#F8F6F2]">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block">
                <img
                  src="/CONSULTING-ENERGY-LOGO.svg"
                  alt="Consulting Energy"
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Bureau d'études spécialisé en performance énergétique et accompagnement
                réglementaire pour les entreprises du Grand Est.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {/* Certifications placeholder */}
                <div className="px-3 py-1 bg-[#1B4332] rounded text-xs font-medium">
                  OPQIBI
                </div>
                <div className="px-3 py-1 bg-[#1B4332] rounded text-xs font-medium">
                  RGE
                </div>
              </div>
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}
            </div>

            {/* Obligations Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Vos Obligations
              </h3>
              <ul className="space-y-2">
                {footerNavigation.obligations.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-400 hover:text-[#D4A84B] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Nos Solutions
              </h3>
              <ul className="space-y-2">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-gray-400 hover:text-[#D4A84B] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${siteConfig.contact.address.street}, ${siteConfig.contact.address.postalCode} ${siteConfig.contact.address.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  {siteConfig.contact.hours}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} {siteConfig.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
