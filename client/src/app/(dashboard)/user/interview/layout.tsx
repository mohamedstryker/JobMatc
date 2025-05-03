import Loading from "@/components/Loading";
import React, { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
