import React, { Suspense } from "react";
import Loading from "@/components/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5 md:ml-12">
        <h1 className="text-6xl font-bold gradient-title ">
          Industry Insights
        </h1>
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
