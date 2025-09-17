"use client";

import { useState, useEffect } from "react";

export default function OnboardingStep1({ onNext, onDataChange, initialData }) {
  const [formData, setFormData] = useState({
    websiteUrl: initialData?.websiteUrl || "",
  });

  useEffect(() => {
    if (initialData?.websiteUrl) {
      setFormData({ websiteUrl: initialData.websiteUrl });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);

    // Notify parent component of data changes
    if (onDataChange) {
      onDataChange(newData);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Onboarding step 1 submitted:", formData);

    // Validate the URL
    if (!formData.websiteUrl) {
      alert("Please enter a website URL");
      return;
    }

    // Proceed to next step
    if (onNext) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Website URL field */}
      <div>
        <label
          htmlFor="websiteUrl"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Website URL
        </label>
        <input
          id="websiteUrl"
          name="websiteUrl"
          type="url"
          required
          value={formData.websiteUrl}
          onChange={handleInputChange}
          placeholder="Paste your website url..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Continue button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Continue
      </button>
    </form>
  );
}
