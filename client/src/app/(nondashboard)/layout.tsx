import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <Suspense fallback={<Loading />}>
        <main className="nondashboard-layout__main">{children}</main>
      </Suspense>
      <Footer />
    </div>
  );
}
