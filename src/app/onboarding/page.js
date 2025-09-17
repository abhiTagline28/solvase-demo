"use client";

import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import OnboardingStep1 from "../../components/onboarding/OnboardingStep1";
import OnboardingStep2 from "../../components/onboarding/OnboardingStep2";
import OnboardingStep3 from "../../components/onboarding/OnboardingStep3";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState({
    websiteUrl: "",
    goals: [],
    focus: [],
    experience: "",
    platformKey: "SE121313040033-than",
  });

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // Onboarding completed - redirect to dashboard or success page
      console.log("Onboarding completed:", onboardingData);
      // You can redirect to dashboard here
      // router.push('/dashboard');
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepData = (stepData) => {
    setOnboardingData((prev) => ({
      ...prev,
      ...stepData,
    }));
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 0:
        return "Connect Site";
      case 1:
        return "Tell us a bit about your goals";
      case 2:
        return "Your Platform Key";
      default:
        return "Onboarding";
    }
  };

  const getStepSubtitle = () => {
    switch (currentStep) {
      case 0:
        return "You can only add one website to your account";
      case 1:
        return "We need these information to configure your account.";
      case 2:
        return "Paste this key into your WordPress plugin to activate your account.";
      default:
        return "";
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <OnboardingStep1
            onNext={handleNextStep}
            onDataChange={handleStepData}
            initialData={onboardingData}
          />
        );
      case 1:
        return (
          <OnboardingStep2
            onNext={handleNextStep}
            onPrevious={handlePreviousStep}
            onDataChange={handleStepData}
            initialData={onboardingData}
          />
        );
      case 2:
        return (
          <OnboardingStep3
            onPrevious={handlePreviousStep}
            onDataChange={handleStepData}
            initialData={onboardingData}
          />
        );
      default:
        return (
          <OnboardingStep1
            onNext={handleNextStep}
            onDataChange={handleStepData}
            initialData={onboardingData}
          />
        );
    }
  };

  return (
    <AuthLayout
      title={getStepTitle()}
      subtitle={getStepSubtitle()}
      pageType="onboarding"
      showProgress={true}
      progressSteps={[1, 2, 3]}
      currentStep={currentStep}
    >
      {renderStepContent()}
    </AuthLayout>
  );
}
