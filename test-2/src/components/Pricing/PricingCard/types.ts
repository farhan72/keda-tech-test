interface IPlanFeature {
  name: string;
  included: boolean;
}

export interface IPricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: IPlanFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "primary" | "outline";
}

export interface IPricingCardProps {
  plan: IPricingPlan;
  isAnnual: boolean;
}
