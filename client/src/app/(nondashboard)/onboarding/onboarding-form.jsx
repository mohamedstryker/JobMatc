"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/use-fetch";
import { onboardingSchema } from "@/app/lib/schema";
import { updateUser } from "@/actions/user";

const OnboardingForm = ({ industries }) => {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const {
    loading: updateLoading,
    fn: updateUserFn,
    data: updateResult,
  } = useFetch(updateUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = async (values) => {
    try {
      const formattedIndustry = `${values.industry}-${values.subIndustry
        .toLowerCase()
        .replace(/ /g, "-")}`;

      await updateUserFn({
        ...values,
        industry: formattedIndustry,
      });
    } catch (error) {
      console.error("Onboarding error:", error);
    }
  };

  useEffect(() => {
    if (updateResult?.success && !updateLoading) {
      toast.success("Profile completed successfully!");
      router.push("/user/overview");
      router.refresh();
    }
  }, [updateResult, updateLoading]);

  const watchIndustry = watch("industry");

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-lg mt-10 mx-2 border-none bg-customgreys-secondarybg rounded-lg shadow-md sm:mx-4 sm:mt-6 sm:max-w-md">
        <CardHeader>
          <CardTitle className="gradient-title text-4xl sm:text-3xl">
            Complete Your Profile
          </CardTitle>
          <CardDescription className="text-customgreys-dirtyGrey font-medium sm:text-sm">
            Select your industry to get personalized career insights and
            recommendations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 sm:space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="industry" className=" font-bold sm:text-sm">
                Industry
              </Label>
              <Select
                onValueChange={(value) => {
                  setValue("industry", value);
                  setSelectedIndustry(
                    industries.find((ind) => ind.id === value)
                  );
                  setValue("subIndustry", "");
                }}
              >
                <SelectTrigger
                  id="industry"
                  className="w-full border-customgreys-darkerGrey hover:bg-customgreys-darkerGrey hover:border-customgreys-dirtyGrey"
                >
                  <SelectValue
                    className="text-customgreys-dirtyGrey font-light"
                    placeholder="Select an industry"
                  />
                </SelectTrigger>
                <SelectContent className="w-full max-w-lg m-auto border-none bg-customgreys-primarybg rounded-lg shadow-md ">
                  <SelectGroup>
                    <SelectLabel>Industries</SelectLabel>
                    {industries.map((ind) => (
                      <SelectItem
                        className="focus:outline-none focus:ring-1 focus:ring-customgreys-dirtyGrey"
                        key={ind.id}
                        value={ind.id}
                      >
                        {ind.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.industry && (
                <p className="text-sm text-red-500">
                  {errors.industry.message}
                </p>
              )}
            </div>

            {watchIndustry && (
              <div className="space-y-2">
                <Label
                  htmlFor="subIndustry"
                  className="text-base font-bold sm:text-sm"
                >
                  Specialization
                </Label>
                <Select
                  onValueChange={(value) => setValue("subIndustry", value)}
                >
                  <SelectTrigger
                    id="subIndustry"
                    className="w-full border-customgreys-darkerGrey text-customgreys-dirtyGrey font-medium hover:bg-customgreys-darkerGrey hover:border-customgreys-dirtyGrey"
                  >
                    <SelectValue placeholder="Select your specialization" />
                  </SelectTrigger>
                  <SelectContent className="w-full max-w-lg m-auto border-none bg-customgreys-primarybg rounded-lg shadow-md">
                    <SelectGroup>
                      <SelectLabel>Specializations</SelectLabel>
                      {selectedIndustry?.subIndustries.map((sub) => (
                        <SelectItem
                          className="focus:outline-none focus:ring-1 focus:ring-customgreys-dirtyGrey"
                          key={sub}
                          value={sub}
                        >
                          {sub}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.subIndustry && (
                  <p className="text-sm text-red-500">
                    {errors.subIndustry.message}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label
                htmlFor="experience"
                className="text-white-50 font-bold sm:text-sm"
              >
                Years of Experience
              </Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                placeholder="Enter years of experience"
                className="w-full border-customgreys-darkerGrey text-customgreys-dirtyGrey font-medium hover:bg-customgreys-darkerGrey hover:border-customgreys-dirtyGrey"
                {...register("experience")}
              />
              {errors.experience && (
                <p className="text-sm text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills" className=" font-bold sm:text-sm">
                Skills
              </Label>
              <Input
                id="skills"
                placeholder="e.g., Python, JavaScript, Project Management"
                className="w-full border-customgreys-darkerGrey text-customgreys-dirtyGrey font-medium hover:bg-customgreys-darkerGrey hover:border-customgreys-dirtyGrey"
                {...register("skills")}
              />
              <p className="text-sm text-customgreys-dirtyGrey font-medium">
                Separate multiple skills with commas
              </p>
              {errors.skills && (
                <p className="text-sm text-red-500">{errors.skills.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio" className="text-base font-bold sm:text-sm">
                Professional Bio
              </Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your professional background..."
                className="h-32 border-customgreys-darkerGrey w-full text-customgreys-dirtyGrey font-medium hover:bg-customgreys-darkerGrey hover:border-customgreys-dirtyGrey"
                {...register("bio")}
              />
              {errors.bio && (
                <p className="text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-customgreys-primarybg hover:bg-indigo-600 text-white-100 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-00 ease-in-out"
              disabled={updateLoading}
            >
              {updateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Complete Profile"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnboardingForm;
