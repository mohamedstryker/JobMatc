import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterGenerator from "@/components/CoverLetterGenerator";

export default function NewCoverLetterPage() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">
        <Link href="/user/cover-letter">
          <Button className="gap-2 pl-0 bg-customgreys-primarybg hover:bg-indigo-600 text-white-100 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <div className="pb-6">
          <h1 className="text-6xl font-bold gradient-title my-3">
            Create Cover Letter
          </h1>
          <p className="text-sm font-medium text-customgreys-dirtyGrey">
            Generate a tailored cover letter for your job application
          </p>
        </div>
      </div>

      <CoverLetterGenerator />
    </div>
  );
}
