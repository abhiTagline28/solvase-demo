"use client";

import { useState, useEffect } from "react";

export default function OnboardingStep3({
  onPrevious,
  onDataChange,
  initialData,
}) {
  const [platformKey, setPlatformKey] = useState(
    initialData?.platformKey || "SE121313040033-than"
  );

  useEffect(() => {
    if (initialData?.platformKey) {
      setPlatformKey(initialData.platformKey);
    }
  }, [initialData]);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(platformKey);
    console.log("Platform key copied to clipboard");
    // You could add a toast notification here
  };

  const handleRegenerateKey = () => {
    // Generate a new random key
    const newKey =
      "SE" +
      Math.random().toString(36).substr(2, 15) +
      "-" +
      Math.random().toString(36).substr(2, 4);
    setPlatformKey(newKey);
    console.log("Platform key regenerated:", newKey);

    // Notify parent component of data changes
    if (onDataChange) {
      onDataChange({ platformKey: newKey });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Onboarding step 3 completed with key:", platformKey);

    // Final step - onboarding completed
    // You can redirect to dashboard or show success message
    alert("Onboarding completed! Welcome to Solvase!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Platform Key Section */}
      <div>
        <label
          htmlFor="platformKey"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Platform Key
        </label>
        <div className="flex space-x-2">
          <input
            id="platformKey"
            type="text"
            value={platformKey}
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900"
          />
          <button
            type="button"
            onClick={handleCopyKey}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleRegenerateKey}
            className="px-4 py-2 border border-blue-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Regenerate
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Paste this key into your WordPress plugin to activate your account.
        </p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Complete Setup
        </button>
      </div>
    </form>
  );
}
