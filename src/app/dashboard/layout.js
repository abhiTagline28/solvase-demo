import DashboardLayout from "@/components/dashboard/DashboardLayout";

export const metadata = {
  title: "Dashboard - Solvase",
  description:
    "Manage your Solvase AI account and monitor your SEO performance.",
};

export default function Layout({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
