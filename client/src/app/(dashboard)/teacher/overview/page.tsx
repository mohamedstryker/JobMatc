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
      <Overview insights={insights} />
    </div>
  );
}
