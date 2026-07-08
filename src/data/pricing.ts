export interface PricingPlan {
  id: 'starter' | 'professional' | 'enterprise'
  icon: 'Rocket' | 'Sparkles' | 'LayoutDashboard'
  featureCount: number
  popular?: boolean
}

export const pricingPlans: PricingPlan[] = [
  { id: 'starter', icon: 'Rocket', featureCount: 5 },
  { id: 'professional', icon: 'Sparkles', featureCount: 8, popular: true },
  { id: 'enterprise', icon: 'LayoutDashboard', featureCount: 8 },
]
