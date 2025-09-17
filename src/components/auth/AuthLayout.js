"use client";

import Image from "next/image";

export default function AuthLayout({
  children,
  title,
  subtitle,
  pageType = "auth", // "auth", "onboarding", "dashboard", etc.
  showProgress = false,
  progressSteps = [],
  currentStep = 0,
  showLogo = true,
  showFooter = true,
  customHeader = null,
  customRightContent = null,
}) {
  const getPageHeader = () => {
    if (customHeader) return customHeader;

    switch (pageType) {
      case "onboarding":
        return "Onboarding";
      case "signup":
        return "Create your account";
      case "forgot-password":
        return "Forgot password";
      case "reset-password":
        return "Reset password";
      case "login":
      default:
        return "Sign in";
    }
  };

  const renderProgressBar = () => {
    if (!showProgress || !progressSteps.length) return null;

    return (
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          {progressSteps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${
                index <= currentStep ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Step {currentStep + 1} of {progressSteps.length}
        </p>
      </div>
    );
  };

  const renderRightContent = () => {
    if (customRightContent) return customRightContent;

    return (
      <Image
        src="/image.png"
        alt="Solvase Promotional Section"
        width={400}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Section - Content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 xl:px-20 bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:w-96 relative z-10">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-400 mb-4">
              {getPageHeader()}
            </h2>

            {/* Logo */}
            {showLogo && (
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      SOLVASE
                    </h1>
                    <p className="text-xs text-gray-500">AI-POWERED INSIGHTS</p>
                  </div>
                </div>
              </div>
            )}

            {/* Progress Bar */}
            {renderProgressBar()}

            {/* Title and Subtitle */}
            {(title || subtitle) && (
              <div className="mb-8">
                {title && (
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {title}
                  </h2>
                )}
                {subtitle && <p className="text-gray-600">{subtitle}</p>}
              </div>
            )}
          </div>

          {/* Main Content */}
          {children}

          {/* Footer */}
          {showFooter && (
            <div className="mt-8">
              <p className="text-sm text-gray-500 text-center">
                © Solvase 2025. All rights reserved.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Promotional */}
      <div className="hidden lg:flex lg:w-1/3 lg:flex-col lg:justify-center lg:items-center">
        {renderRightContent()}
      </div>
    </div>
  );
}
