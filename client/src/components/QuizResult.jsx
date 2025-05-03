"use client";

import { Trophy, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function QuizResult({
  result,
  hideStartNew = false,
  onStartNew,
}) {
  if (!result) return null;

  return (
    <div className="mx-auto bg-customgreys-primarybg p-4 rounded-lg shadow-md ">
      <h1 className="flex items-center gap-2 text-4xl font-bold">
        <Trophy className="h-6 w-6 text-yellow-500 " />
        Quiz Results
      </h1>

      <CardContent className="space-y-6">
        {/* Score Overview */}
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold">{result.quizScore.toFixed(1)}%</h3>
          <Progress
            value={result.quizScore}
            className="w-full bg-customgreys-dirtyGrey"
          />
        </div>

        {/* Improvement Tip */}
        {result.improvementTip && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-semibold text-lg mb-2 text-yellow-500">
              Improvement Tip
            </p>
            <p className="text-muted-foreground text-md font-medium">
              {result.improvementTip}
            </p>
          </div>
        )}

        {/* Questions Review */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Question Review</h3>
          {result.questions.map((q, index) => (
            <div
              key={index}
              className="border border-customgreys-secondarybg border-opacity-60 rounded-lg p-4 space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-md">{q.question}</p>
                {q.isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                )}
              </div>
              <div className="text-sm font-ligt">
                <p className="font-semibold">Your answer: {q.userAnswer}</p>
                {!q.isCorrect && (
                  <p className="text-green-500 font-medium">
                    Correct answer: {q.answer}
                  </p>
                )}
              </div>
              <div className="text-sm bg-muted p-2 rounded">
                <p className="font-semibold text-md text-indigo-400 mb-1">
                  Explanation
                </p>
                <p className="font-medium text-sm">{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {!hideStartNew && (
        <CardFooter>
          <Button
            onClick={onStartNew}
            className="w-full bg-customgreys-secondarybg hover:bg-indigo-600 text-white-100 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Start New Quiz
          </Button>
        </CardFooter>
      )}
    </div>
  );
}
