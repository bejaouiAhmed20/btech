import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-primary-600/15 bg-primary-50 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-primary-700 dark:border-accent-400/20 dark:bg-white/5 dark:text-accent-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
