"use client";

import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case "/dashboard/platform-key":
        return "Platform Key";
      case "/dashboard/plan-billing":
        return "Plan & Billing";
      case "/dashboard/settings":
        return "Settings";
      case "/dashboard/support":
        return "Support";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Fixed Sidebar */}
      <div className="fixed left-0 top-0 h-screen z-10">
        <Sidebar />
      </div>

      {/* Main Content with left margin for sidebar */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                {getPageTitle()}
              </h1>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">H</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Zuhran Ahmad</p>
                    <p className="text-gray-500 text-xs">
                      zuhran.ahmad@gmail.com
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
