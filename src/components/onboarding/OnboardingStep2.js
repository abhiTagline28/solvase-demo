"use client";

import { useState, useEffect } from "react";

export default function OnboardingStep2({
  onNext,
  onPrevious,
  onDataChange,
  initialData,
}) {
  const [formData, setFormData] = useState({
    goals: initialData?.goals || [],
    focus: initialData?.focus || [],
    experience: initialData?.experience || "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        goals: initialData.goals || [],
        focus: initialData.focus || [],
        experience: initialData.experience || "",
      });
    }
  }, [initialData]);

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const newData = {
      ...formData,
      [name]: checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value),
    };
    setFormData(newData);

    // Notify parent component of data changes
    if (onDataChange) {
      onDataChange(newData);
    }
  };

  const handleRadioChange = (e) => {
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
    console.log("Onboarding step 2 submitted:", formData);

    // Validate that at least one goal is selected
    if (formData.goals.length === 0) {
      alert("Please select at least one goal");
      return;
    }

    // Validate that at least one focus is selected
    if (formData.focus.length === 0) {
      alert("Please select at least one focus area");
      return;
    }

    // Validate that experience is selected
    if (!formData.experience) {
      alert("Please select your experience level");
      return;
    }

    // Proceed to next step
    if (onNext) {
      onNext();
    }
  };

  const goalOptions = [
    "Rank higher",
    "Create more content",
    "Analyze competitors",
    "Improve technical SEO",
  ];

  const focusOptions = [
    "Blog posts",
    "Product pages",
    "Landing pages",
    "Informational pages",
  ];

  const experienceOptions = ["Beginner", "Intermediate", "Advanced"];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Goals Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Goal</h3>
        <div className="space-y-3">
          {goalOptions.map((goal) => (
            <label key={goal} className="flex items-center">
              <input
                type="checkbox"
                name="goals"
                value={goal}
                checked={formData.goals.includes(goal)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Focus Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Focus</h3>
        <div className="space-y-3">
          {focusOptions.map((focus) => (
            <label key={focus} className="flex items-center">
              <input
                type="checkbox"
                name="focus"
                value={focus}
                checked={formData.focus.includes(focus)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">{focus}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Experience</h3>
        <div className="space-y-3">
          {experienceOptions.map((experience) => (
            <label key={experience} className="flex items-center">
              <input
                type="radio"
                name="experience"
                value={experience}
                checked={formData.experience === experience}
                onChange={handleRadioChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-3 text-sm text-gray-700">{experience}</span>
            </label>
          ))}
        </div>
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
          Continue
        </button>
      </div>
    </form>
  );
}
