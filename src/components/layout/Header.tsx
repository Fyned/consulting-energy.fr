import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/common'
import { navigation, type NavItem, type NavChild } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/utils/cn'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white',
          activeDropdown && 'shadow-lg'
        )}
      >
        {/* Main Header Bar */}
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <nav
            className={cn(
              'flex items-center justify-between gap-4 transition-all duration-300',
              isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-[72px]'
            )}
          >
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 relative z-10">
              <img
                src="/CONSULTING-ENERGY-LOGO.svg"
                alt="Consulting Energy"
                className={cn(
                  'w-auto transition-all duration-300',
                  isScrolled ? 'h-7 lg:h-8' : 'h-8 lg:h-9'
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              {navigation.map((item) => (
                <NavItemDesktop
                  key={item.label}
                  item={item}
                  isActive={activeDropdown === item.label}
                  isScrolled={isScrolled}
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>

            {/* Desktop CTA Group */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-[#2D3436] hover:text-[#77C14A] transition-colors group"
              >
                <div className={cn(
                  "rounded-full bg-[#77C14A]/10 flex items-center justify-center group-hover:bg-[#77C14A] transition-all duration-300",
                  isScrolled ? "w-7 h-7" : "w-8 h-8"
                )}>
                  <Phone className={cn(
                    "text-[#77C14A] group-hover:text-white transition-colors",
                    isScrolled ? "w-3 h-3" : "w-3.5 h-3.5"
                  )} />
                </div>
                <span className={cn(
                  "font-semibold hidden xl:block whitespace-nowrap transition-all duration-300",
                  isScrolled ? "text-xs" : "text-sm"
                )}>
                  {siteConfig.contact.phone}
                </span>
              </a>
              <Button
                href="/contact"
                size="sm"
                className={cn(
                  "bg-[#77C14A] hover:bg-[#5fa336] text-white shadow-sm shadow-[#77C14A]/20 whitespace-nowrap transition-all duration-300 font-semibold",
                  isScrolled ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"
                )}
              >
                Devis Gratuit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#2D3436] hover:text-[#77C14A] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Desktop Mega Menu */}
        <AnimatePresence>
          {activeDropdown && (
            <MegaMenu
              item={navigation.find((n) => n.label === activeDropdown)!}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              onClose={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className={cn('transition-all duration-300', isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-[72px]')} />
    </>
  )
}

interface NavItemDesktopProps {
  item: NavItem
  isActive: boolean
  isScrolled: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function NavItemDesktop({ item, isActive, isScrolled, onMouseEnter, onMouseLeave }: NavItemDesktopProps) {
  const location = useLocation()
  const isCurrentPath = location.pathname.startsWith(item.href)

  if (!item.children) {
    return (
      <Link
        to={item.href}
        className={cn(
          'relative font-medium transition-all duration-300 whitespace-nowrap',
          isScrolled ? 'px-2.5 py-1.5 text-[12px]' : 'px-3 py-2 text-[13px]',
          isCurrentPath
            ? 'text-[#77C14A]'
            : 'text-[#2D3436] hover:text-[#77C14A]'
        )}
      >
        {item.label}
        {isCurrentPath && (
          <motion.div
            layoutId="nav-indicator"
            className={cn(
              "absolute bottom-0 h-[2px] bg-[#77C14A] rounded-full",
              isScrolled ? "left-2.5 right-2.5" : "left-3 right-3"
            )}
          />
        )}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={cn(
          'flex items-center gap-0.5 font-medium transition-all duration-300 whitespace-nowrap',
          isScrolled ? 'px-2.5 py-1.5 text-[12px]' : 'px-3 py-2 text-[13px]',
          isActive || isCurrentPath
            ? 'text-[#77C14A]'
            : 'text-[#2D3436] hover:text-[#77C14A]'
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'transition-transform duration-200',
            isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5',
            isActive && 'rotate-180'
          )}
        />
      </button>
      {(isActive || isCurrentPath) && (
        <motion.div
          layoutId="nav-indicator"
          className={cn(
            "absolute bottom-0 h-[2px] bg-[#77C14A] rounded-full",
            isScrolled ? "left-2.5 right-2.5" : "left-3 right-3"
          )}
        />
      )}
    </div>
  )
}

interface MegaMenuProps {
  item: NavItem
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function MegaMenu({ item, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  if (!item.children) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Links Column */}
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-2">
              {item.children.map((child) => (
                <MegaMenuItem key={child.href} item={child} />
              ))}
            </div>
          </div>

          {/* Featured Card */}
          {item.featured && (
            <div className="col-span-5">
              <div className="h-full bg-gradient-to-br from-[#77C14A]/5 to-[#F8F6F2] rounded-xl p-5 border border-[#77C14A]/10">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#2D3436] mb-1.5">
                      {item.featured.title}
                    </h4>
                    <p className="text-sm text-[#636e72] leading-relaxed">
                      {item.featured.description}
                    </p>
                  </div>
                  <Link
                    to={item.featured.ctaHref}
                    className="inline-flex items-center gap-2 mt-3 text-[#77C14A] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {item.featured.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function MegaMenuItem({ item }: { item: NavChild }) {
  const Icon = item.icon

  return (
    <Link
      to={item.href}
      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-[#77C14A]/5 transition-colors"
    >
      {Icon && (
        <div className="w-10 h-10 rounded-lg bg-[#77C14A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#77C14A] transition-colors">
          <Icon className="w-5 h-5 text-[#77C14A] group-hover:text-white transition-colors" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-[#2D3436] group-hover:text-[#77C14A] transition-colors">
          {item.label}
        </div>
        {item.description && (
          <div className="text-xs text-[#636e72] mt-0.5 line-clamp-1">
            {item.description}
          </div>
        )}
      </div>
    </Link>
  )
}

interface MobileMenuProps {
  onClose: () => void
}

function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
    >
      <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
        <div className="px-6 py-4 space-y-1">
          {navigation.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isExpanded={expandedItem === item.label}
              onToggle={() =>
                setExpandedItem(expandedItem === item.label ? null : item.label)
              }
              onClose={onClose}
            />
          ))}
        </div>

        {/* Mobile CTA Section */}
        <div className="px-6 py-4 border-t border-gray-100 space-y-3">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-3 p-3 rounded-xl bg-[#F8F6F2]"
          >
            <div className="w-10 h-10 rounded-full bg-[#77C14A]/20 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#77C14A]" />
            </div>
            <div>
              <div className="text-xs text-[#636e72]">Appelez-nous</div>
              <div className="font-semibold text-[#2D3436]">
                {siteConfig.contact.phone}
              </div>
            </div>
          </a>
          <Button href="/contact" className="w-full bg-[#77C14A] hover:bg-[#5fa336]" onClick={onClose}>
            Devis Gratuit
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

interface MobileNavItemProps {
  item: NavItem
  isExpanded: boolean
  onToggle: () => void
  onClose: () => void
}

function MobileNavItem({ item, isExpanded, onToggle, onClose }: MobileNavItemProps) {
  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onClose}
        className="block py-3 px-2 text-[#2D3436] font-semibold hover:text-[#77C14A] transition-colors"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 px-2 text-[#2D3436] font-semibold hover:text-[#77C14A] transition-colors"
      >
        {item.label}
        <ChevronDown
          className={cn(
            'w-5 h-5 transition-transform duration-200',
            isExpanded && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">
              {item.children.map((child) => {
                const Icon = child.icon
                return (
                  <Link
                    key={child.href}
                    to={child.href}
                    onClick={onClose}
                    className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-[#F8F6F2] transition-colors"
                  >
                    {Icon && (
                      <div className="w-8 h-8 rounded-lg bg-[#77C14A]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#77C14A]" />
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium text-[#2D3436]">
                        {child.label}
                      </div>
                      {child.description && (
                        <div className="text-xs text-[#636e72]">
                          {child.description}
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
