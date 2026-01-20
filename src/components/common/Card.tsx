import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-md overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

interface ServiceCardProps {
  title: string
  subtitle?: string
  description: string
  icon: LucideIcon
  href: string
  badge?: string
  badgeType?: 'urgent' | 'info'
}

export function ServiceCard({
  title,
  subtitle,
  description,
  icon: Icon,
  href,
  badge,
  badgeType = 'info',
}: ServiceCardProps) {
  return (
    <Link to={href} className="block group">
      <Card hover className="h-full border-l-4 border-l-[#1B4332] p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#F8F6F2] rounded-lg flex items-center justify-center group-hover:bg-[#1B4332] transition-colors">
            <Icon className="w-6 h-6 text-[#1B4332] group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-[#2D3436] group-hover:text-[#1B4332] transition-colors">
                  {title}
                </h3>
                {subtitle && (
                  <p className="text-sm font-medium text-[#52796F]">{subtitle}</p>
                )}
              </div>
              {badge && (
                <span
                  className={cn(
                    'flex-shrink-0 px-2 py-1 text-xs font-medium rounded-full',
                    badgeType === 'urgent'
                      ? 'bg-[#D4A84B] text-white'
                      : 'bg-[#F8F6F2] text-[#52796F]'
                  )}
                >
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-[#636e72]">{description}</p>
            <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#1B4332] group-hover:gap-2 transition-all">
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

interface SectorCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  image?: string
}

export function SectorCard({ title, description, icon: Icon, href, image }: SectorCardProps) {
  return (
    <Link to={href} className="block group">
      <Card hover className="h-full overflow-hidden">
        {image && (
          <div className="relative h-40 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Icon className="w-5 h-5 text-[#1B4332]" />
            </div>
          </div>
        )}
        <div className={cn("p-6", image ? "pt-4" : "text-center")}>
          {!image && (
            <div className="w-16 h-16 mx-auto bg-[#F8F6F2] rounded-full flex items-center justify-center group-hover:bg-[#1B4332] transition-colors">
              <Icon className="w-8 h-8 text-[#1B4332] group-hover:text-white transition-colors" />
            </div>
          )}
          <h3 className={cn(
            "text-lg font-semibold text-[#2D3436] group-hover:text-[#1B4332] transition-colors",
            !image && "mt-4"
          )}>
            {title}
          </h3>
          <p className="mt-2 text-sm text-[#636e72]">{description}</p>
          <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#1B4332]">
            Découvrir
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Card>
    </Link>
  )
}

export default Card
