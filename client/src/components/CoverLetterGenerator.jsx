"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { generateCoverLetter } from "@/actions/cover-letter";
import useFetch from "@/hooks/use-fetch";
import { coverLetterSchema } from "@/app/lib/schema";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

export default function CoverLetterGenerator() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(coverLetterSchema),
  });

  const {
    loading: generating,
    fn: generateLetterFn,
    data: generatedLetter,
  } = useFetch(generateCoverLetter);

  // Update content when letter is generated
  useEffect(() => {
    if (generatedLetter) {
      toast.success("Cover letter generated successfully!");
      router.push(`/user/cover-letter/${generatedLetter.id}`);
      reset();
    }
  }, [generatedLetter]);

  const onSubmit = async (data) => {
    try {
      await generateLetterFn(data);
    } catch (error) {
      toast.error(error.message || "Failed to generate cover letter");
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-customgreys-primarybg border-customgreys-secondarybg rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="font-semibold text-lg text-white-100">
            Job Details
          </CardTitle>
          <CardDescription className="text-sm text-customgreys-dirtyGrey font-medium">
            Provide information about the position you're applying for
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Form fields remain the same */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-md font-semibold">
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  className="text-customgreys-dirtyGrey font-medium text-sm border-customgreys-secondarybg  hover:bg-customgreys-darkerGrey"
                  placeholder="Enter company name"
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="text-sm text-red-500">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobTitle" className="text-md font-semibold">
                  Job Title
                </Label>
                <Input
                  id="jobTitle"
                  placeholder="Enter job title"
                  className="text-customgreys-dirtyGrey font-medium text-sm border-customgreys-secondarybg  hover:bg-customgreys-darkerGrey"
                  {...register("jobTitle")}
                />
                {errors.jobTitle && (
                  <p className="text-sm text-red-500">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobDescription" className="text-md font-semibold">
                Job Description
              </Label>
              <Textarea
                id="jobDescription"
                placeholder="Paste the job description here"
                className="h-32 text-customgreys-dirtyGrey font-medium text-sm border-customgreys-secondarybg hover:bg-customgreys-darkerGrey"
                {...register("jobDescription")}
              />
              {errors.jobDescription && (
                <p className="text-sm text-red-500">
                  {errors.jobDescription.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Button
                className=" bg-customgreys-secondarybg hover:bg-indigo-600 text-white-100 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                type="submit"
                disabled={generating}
              >
                {generating ? <>Generating...</> : "Generate Cover Letter"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
