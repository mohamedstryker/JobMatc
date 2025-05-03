import { redirect } from "next/navigation";
import { industries } from "@/data/industries";
import OnboardingForm from "./onboarding-form";
import { getUserOnboardingStatus } from "@/actions/user";

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/user/overview");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
