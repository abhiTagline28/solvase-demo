"use client";

import Link from "next/link";
import { useState } from "react";

export default function PlatformKey() {
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [showRegenerateModal, setShowRegenerateModal] = useState(false);

  const platformKey = "SE12131304003/fncy-thdsn";
  const connectedSite = "www.cocacola.com";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(platformKey);
    // You could add a toast notification here
  };

  const handleRegenerateKey = () => {
    // Handle key regeneration logic here
    setShowRegenerateModal(false);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/dashboard"
              className="text-blue-600 hover:text-blue-800"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <span className="text-gray-500">Platform Key</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Key</h1>
        <p className="text-gray-600">
          Paste this key into your WordPress plugin to activate your account.
        </p>
      </div>

      {/* Your Platform Key Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Your Platform Key
        </h2>

        <div className="bg-blue-900 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsKeyVisible(!isKeyVisible)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {isKeyVisible ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                )}
              </button>
              <span className="text-white font-mono text-lg">
                {isKeyVisible ? platformKey : "••••••••••••••••••••••••"}
              </span>
            </div>
            <button
              onClick={handleCopyKey}
              className="px-4 py-2 bg-white bg-opacity-20 text-white text-sm font-medium rounded-lg hover:bg-opacity-30 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p>
            You're key is already connected to{" "}
            <Link
              href={`https://${connectedSite}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {connectedSite}
            </Link>
          </p>
        </div>
      </div>

      {/* Regenerate Key Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Regenerate Key?
        </h2>
        <p className="text-gray-600 mb-4">
          This will deactivate your current key immediately. You'll need to
          update any plugins using it.
        </p>
        <button
          onClick={() => setShowRegenerateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Regenerate
        </button>
      </div>

      {/* Regenerate Confirmation Modal */}
      {showRegenerateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Regenerate Platform Key
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to regenerate your platform key? This will
              immediately deactivate your current key and you'll need to update
              it in your WordPress plugin.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowRegenerateModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRegenerateKey}
                className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Regenerate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
