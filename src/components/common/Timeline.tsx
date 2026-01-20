import { motion } from 'framer-motion'
import { CheckCircle, Circle } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface TimelineStep {
  id: string
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  status?: 'completed' | 'current' | 'upcoming'
}

interface TimelineProps {
  steps: TimelineStep[]
  variant?: 'vertical' | 'horizontal'
  className?: string
}

export function Timeline({ steps, variant = 'vertical', className }: TimelineProps) {
  if (variant === 'horizontal') {
    return (
      <div className={cn('relative', className)}>
        {/* Horizontal line */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />
        <div
          className="hidden md:block absolute top-8 left-0 h-0.5 bg-gradient-to-r from-[#1B4332] to-[#D4A84B]"
          style={{
            width: `${
              ((steps.filter((s) => s.status === 'completed').length + 0.5) / steps.length) * 100
            }%`,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const StepIcon = step.icon
            const isCompleted = step.status === 'completed'
            const isCurrent = step.status === 'current'

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step indicator */}
                <div
                  className={cn(
                    'relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all',
                    isCompleted && 'bg-[#1B4332] text-white',
                    isCurrent && 'bg-[#D4A84B] text-white ring-4 ring-[#D4A84B]/30',
                    !isCompleted && !isCurrent && 'bg-gray-100 text-gray-400'
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : StepIcon ? (
                    <StepIcon className="w-8 h-8" />
                  ) : (
                    <span className="text-xl font-bold">{index + 1}</span>
                  )}
                </div>

                {/* Content */}
                <h4
                  className={cn(
                    'font-semibold text-lg mb-2',
                    isCompleted || isCurrent ? 'text-[#2D3436]' : 'text-gray-500'
                  )}
                >
                  {step.title}
                </h4>
                <p className="text-sm text-[#636e72] leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  // Vertical variant
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

      <div className="space-y-8">
        {steps.map((step, index) => {
          const StepIcon = step.icon
          const isCompleted = step.status === 'completed'
          const isCurrent = step.status === 'current'

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6"
            >
              {/* Step indicator */}
              <div
                className={cn(
                  'relative z-10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all',
                  isCompleted && 'bg-[#1B4332] text-white',
                  isCurrent && 'bg-[#D4A84B] text-white ring-4 ring-[#D4A84B]/30',
                  !isCompleted && !isCurrent && 'bg-white border-2 border-gray-200 text-gray-400'
                )}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : StepIcon ? (
                  <StepIcon className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div
                  className={cn(
                    'bg-white rounded-xl p-6 shadow-sm border transition-all',
                    isCurrent ? 'border-[#D4A84B] shadow-md' : 'border-gray-100'
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-[#1B4332] bg-[#1B4332]/10 px-2 py-0.5 rounded">
                      Étape {index + 1}
                    </span>
                    {isCurrent && (
                      <span className="text-xs font-medium text-[#D4A84B] bg-[#D4A84B]/10 px-2 py-0.5 rounded">
                        En cours
                      </span>
                    )}
                  </div>
                  <h4
                    className={cn(
                      'font-semibold text-lg mb-2',
                      isCompleted || isCurrent ? 'text-[#2D3436]' : 'text-gray-500'
                    )}
                  >
                    {step.title}
                  </h4>
                  <p className="text-[#636e72] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Timeline
