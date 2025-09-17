export const subscriptionPlans = [
  {
    id: "starter-tier-1",
    name: "Solvase AI Starter",
    tier: null,
    price: "€3,620",
    period: "year",
    originalPrice: null,
    discount: null,
    isPopular: false,
    isHighlighted: false,
    buttonText: "Select",
    buttonStyle: "outline",
    features: [
      {
        text: "€1,980 one-time onboarding fee",
        included: true,
      },
      {
        text: "Up to 50 seed keywords for content creation",
        included: true,
      },
      {
        text: "10 new SEO-optimised pages per month",
        included: true,
      },
      {
        text: "30+ languages supported for multilingual content",
        included: true,
      },
      {
        text: "Automated publishing directly in WordPress",
        included: true,
      },
      {
        text: "Track up to 3 competitors",
        included: true,
      },
      {
        text: "Monthly SEO audit for max. 100 pages",
        included: true,
      },
      {
        text: "Dedicated Customer Success Manager",
        included: true,
      },
      {
        text: "Full technical setup and configuration",
        included: true,
      },
      {
        text: "2 strategic check-in calls per year",
        included: true,
      },
    ],
  },
  {
    id: "starter-tier-2",
    name: "Solvase AI Starter",
    tier: null,
    price: "€5,820",
    period: "year",
    originalPrice: null,
    discount: null,
    isPopular: false,
    isHighlighted: false,
    buttonText: "Select",
    buttonStyle: "outline",
    features: [
      {
        text: "€2,950 one-time onboarding fee",
        included: true,
      },
      {
        text: "Up to 100 seed keywords for content creation",
        included: true,
      },
      {
        text: "20 new SEO-optimised pages per month",
        included: true,
      },
      {
        text: "30+ languages supported for multilingual content",
        included: true,
      },
      {
        text: "Automated publishing directly in WordPress",
        included: true,
      },
      {
        text: "Track up to 10 competitors",
        included: true,
      },
      {
        text: "Monthly SEO audit for max. 500 pages",
        included: true,
      },
      {
        text: "Dedicated Customer Success Manager",
        included: true,
      },
      {
        text: "Full technical setup and configuration",
        included: true,
      },
      {
        text: "4 strategic check-in calls per year",
        included: true,
      },
    ],
  },
  {
    id: "professional",
    name: "Solvase AI Professional",
    tier: null,
    price: "€9,120",
    period: "year",
    originalPrice: null,
    discount: null,
    isPopular: true,
    isHighlighted: true,
    buttonText: "Select",
    buttonStyle: "solid",
    features: [
      {
        text: "€4,350 one-time onboarding fee",
        included: true,
      },
      {
        text: "Up to 500 seed keywords for content creation",
        included: true,
      },
      {
        text: "40 new SEO-optimised pages per month",
        included: true,
      },
      {
        text: "30+ languages supported for multilingual content",
        included: true,
      },
      {
        text: "Automated publishing directly in WordPress",
        included: true,
      },
      {
        text: "Track up to 20 competitors",
        included: true,
      },
      {
        text: "Monthly SEO audit for max. 1000 pages",
        included: true,
      },
      {
        text: "Dedicated Customer Success Manager",
        included: true,
      },
      {
        text: "Full technical setup and configuration",
        included: true,
      },
      {
        text: "20 strategic check-in calls per year",
        included: true,
      },
    ],
  },
  {
    id: "enterprise",
    name: "Solvase AI Enterprise",
    tier: null,
    price: "Custom pricing",
    period: null,
    originalPrice: null,
    discount: null,
    isPopular: false,
    isHighlighted: false,
    buttonText: "Select",
    buttonStyle: "outline",
    features: [
      {
        text: "One-time onboarding fee",
        included: true,
      },
      {
        text: "Priority access to AI production resources",
        included: true,
      },
      {
        text: "Unlimited page creation and optimisation",
        included: true,
      },
      {
        text: "Dedicated SEO strategist with monthly workshops",
        included: true,
      },
      {
        text: "Bespoke content formats and workflows",
        included: true,
      },
      {
        text: "Custom-built reporting dashboards",
        included: true,
      },
      {
        text: "In-depth SEO and AI training sessions for your team",
        included: true,
      },
      {
        text: "Live onboarding and personal rollout support",
        included: true,
      },
      {
        text: "Competitor tracking across multiple regions",
        included: true,
      },
      {
        text: "Pre-configured best-practice prompt libraries for scale",
        included: true,
      },
    ],
  },
];

// Helper functions for data manipulation
export const getPlanById = (id) => {
  return subscriptionPlans.find((plan) => plan.id === id);
};

export const getPopularPlan = () => {
  return subscriptionPlans.find((plan) => plan.isPopular);
};

export const getHighlightedPlan = () => {
  return subscriptionPlans.find((plan) => plan.isHighlighted);
};

export const getPlansByTier = (tier) => {
  return subscriptionPlans.filter((plan) => plan.tier === tier);
};

// Future API integration helpers
export const formatPlanForAPI = (plan) => {
  return {
    id: plan.id,
    name: plan.name,
    tier: plan.tier,
    price: plan.price,
    period: plan.period,
    features: plan.features.map((feature) => ({
      text: feature.text,
      included: feature.included,
    })),
    metadata: {
      isPopular: plan.isPopular,
      isHighlighted: plan.isHighlighted,
      buttonText: plan.buttonText,
      buttonStyle: plan.buttonStyle,
    },
  };
};

export const parsePlanFromAPI = (apiData) => {
  return {
    id: apiData.id,
    name: apiData.name,
    tier: apiData.tier,
    price: apiData.price,
    period: apiData.period,
    originalPrice: apiData.originalPrice || null,
    discount: apiData.discount || null,
    isPopular: apiData.metadata?.isPopular || false,
    isHighlighted: apiData.metadata?.isHighlighted || false,
    buttonText: apiData.metadata?.buttonText || "Select",
    buttonStyle: apiData.metadata?.buttonStyle || "outline",
    features: apiData.features.map((feature) => ({
      text: feature.text,
      included: feature.included,
    })),
  };
};
