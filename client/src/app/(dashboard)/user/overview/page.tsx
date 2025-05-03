import { getIndustryInsights } from "@/actions/overview";
import { getUserOnboardingStatus } from "@/actions/user";
import Overview from "@/components/Overview";
import { redirect } from "next/navigation";

export default async function OverviewPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mb-5 ">
        <h1 className="text-6xl font-bold gradient-title ">
          Industry Insights
        </h1>
      </div>
      <Overview insights={insights} />
    </div>
  );
}
