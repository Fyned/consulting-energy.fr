import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  eyebrow?: string
  children?: ReactNode
  align?: 'left' | 'center'
  centered?: boolean
  dark?: boolean
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  description,
  eyebrow,
  children,
  align = 'left',
  centered = false,
  dark = false,
  className,
}: SectionHeadingProps) {
  const isCenter = centered || align === 'center'
  const descText = description || subtitle

  return (
    <div
      className={cn(
        'mb-12',
        isCenter && 'text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-wider mb-3',
            dark ? 'text-[#D4A84B]' : 'text-[#1B4332]'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold',
          dark ? 'text-white' : 'text-[#2D3436]'
        )}
      >
        {title}
      </h2>
      {descText && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            dark ? 'text-gray-300' : 'text-[#636e72]',
            isCenter && 'max-w-2xl mx-auto'
          )}
        >
          {descText}
        </p>
      )}
      {children}
    </div>
  )
}

export default SectionHeading
