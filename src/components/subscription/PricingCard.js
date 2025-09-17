"use client";

export default function PricingCard({ plan, onSelect, isSelected = false }) {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(plan);
    }
  };

  const cardClasses = `
    relative p-8 rounded-lg border transition-all duration-300 hover:shadow-lg cursor-pointer
    ${
      isSelected
        ? "bg-gradient-to-br from-blue-900 to-purple-900 border-blue-900 text-white shadow-lg"
        : "bg-white border-gray-200 text-gray-900 hover:border-gray-300 hover:shadow-md"
    }
  `;

  const buttonClasses = `
    w-full py-3 px-6 rounded-md font-medium transition-all duration-200
    ${
      isSelected
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50"
    }
  `;

  return (
    <div className={cardClasses} onClick={handleSelect}>
      {/* Plan Header */}
      <div className="text-center mb-8">
        <h3
          className={`text-xl font-bold mb-2 ${
            isSelected ? "text-white" : "text-gray-900"
          }`}
        >
          {plan.name}
        </h3>
        <div className="mb-6">
          <span
            className={`text-3xl font-bold ${
              isSelected ? "text-white" : "text-gray-900"
            }`}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className={`text-lg ${
                isSelected ? "text-white opacity-75" : "text-gray-500"
              }`}
            >
              /{plan.period}
            </span>
          )}
        </div>
      </div>

      {/* Select Button */}
      <button onClick={handleSelect} className={`${buttonClasses} mb-8`}>
        {plan.buttonText}
      </button>

      {/* Features List */}
      <div className="space-y-3">
        <h4
          className={`text-sm font-medium mb-4 ${
            isSelected ? "text-white" : "text-gray-900"
          }`}
        >
          Features included:
        </h4>
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mr-3 mt-0.5">
              <svg
                className="w-4 h-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span
              className={`text-sm leading-relaxed ${
                isSelected ? "text-white" : "text-gray-700"
              }`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
