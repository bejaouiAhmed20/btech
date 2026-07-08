import { memo } from 'react'
import type { LucideProps } from 'lucide-react'
import {
  BadgeCheck,
  ClipboardList,
  Code2,
  Cpu,
  FlaskConical,
  Gem,
  Globe,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
  Wallet,
  Zap,
  Coffee,
} from 'lucide-react'

const iconRegistry = {
  BadgeCheck,
  ClipboardList,
  Code2,
  Cpu,
  FlaskConical,
  Gem,
  Globe,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  TrendingUp,
  UtensilsCrossed,
  Wallet,
  Zap,
  Coffee,
} as const

export type IconName = keyof typeof iconRegistry

interface IconProps extends LucideProps {
  name: IconName
}

function IconBase({ name, ...props }: IconProps) {
  const LucideIcon = iconRegistry[name]
  if (!LucideIcon) return null
  return <LucideIcon {...props} />
}

export const Icon = memo(IconBase)
