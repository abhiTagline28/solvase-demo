"use client";

import { useState } from "react";
import Image from "next/image";
import PricingCard from "../../components/subscription/PricingCard";
import { subscriptionPlans } from "../../data/subscriptionPlans";

export default function SubscriptionPage() {
  const [selectedPlanId, setSelectedPlanId] = useState("starter-tier-1");

  const handlePlanSelect = (plan) => {
    setSelectedPlanId(plan.id);
    console.log("Selected plan:", plan);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Image
                src="/image-logo.png"
                alt="Solvase AI Logo"
                width={200}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subscriptionPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelect={handlePlanSelect}
              isSelected={selectedPlanId === plan.id}
            />
          ))}
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © Solvase 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
