import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
              <svg
                className="w-7 h-7 text-white"
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
              <h1 className="text-3xl font-bold text-gray-900">SOLVASE</h1>
              <p className="text-sm text-gray-500">AI-POWERED DATA ANALYTICS</p>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome to Solvase
          </h2>
          <p className="text-gray-600">
            We run the AI for you. No setup, no external API keys.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/signup"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            © Solvase 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
