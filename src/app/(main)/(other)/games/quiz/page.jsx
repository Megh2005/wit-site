"use client";

import QuizQuestion from "@/components/QuizQuestion";
import { getQuiz, submitQuiz } from "@/queries/game";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const QuizPage = () => {
  const activeQuiz = "quiz-1";
  const queryClient = useQueryClient();

  const {
    data: quizData,
    isLoading: isQuizLoading,
    isRefetching: isQuizRefetching,
    isError: isQuizError,
  } = useQuery({
    queryKey: ["quiz"],
    queryFn: () => getQuiz(activeQuiz),
    staleTime: Infinity,
    enabled: !!activeQuiz,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => submitQuiz(activeQuiz, submissionData),
    onSuccess: () => {
      queryClient.invalidateQueries(["quiz"]);
      toast.success("Quiz submitted", {
        duration: 3000,
        position: "top-center",
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message || "Error submitting quiz", {
        duration: 3000,
        position: "top-center",
      });
    },
  });

  const [quiz, setQuiz] = useState([]);
  const [submissionData, setSubmissionData] = useState({});

  useEffect(() => {
    if (quizData?.data.quiz) {
      setQuiz(quizData.data.quiz.questions);
    }
  }, [quizData]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz?.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const form = useForm({});
  //const queryClient = useQueryClient();

  const onSubmit = async (data) => {
    let correct_answers = 0;
    let incorrect_answers = 0;
    let unanswered = 0;

    Object.entries(data).map(([key, value], index) => {
      if (value === quiz[index]?.correctAnswer.toString()) {
        correct_answers++;
      } else if (
        value !== null &&
        value !== quiz[index]?.correctAnswer.toString()
      ) {
        incorrect_answers++;
      } else {
        unanswered++;
      }
    });

    setSubmissionData({
      correct_answers,
      incorrect_answers,
      unanswered,
    });

    mutate();
  };

  if (!activeQuiz || activeQuiz === "") {
    return (
      <div className="px-4 min-h-[60vh] flex items-center justify-center">
        <p className="text-center text-balance text-black text-xl font-bold">
          No Active Quiz. Come back later
        </p>
      </div>
    );
  }

  if (isQuizLoading || isQuizRefetching) {
    return (
      <div className="px-4 mt-6 flex justify-center">
        <LoaderCircle className="w-6 h-6 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (quizData?.data.submitted) {
    return (
      <div className="px-4 min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-center text-balance text-black text-xl font-bold">
          {quizData?.message}
        </p>
        <div className="mt-6 shadow-xl p-6 rounded-md border border-gray-300">
          <h2 className="text-center font-bold text-2xl mb-2 text-teal-500">
            Result
          </h2>
          <div className="flex flex-col space-y-2">
            <div className="text-xl flex items-center w-full">
              <h2 className="font-bold">Correct Answers: </h2>
              <span className="ml-2 text-green-600">
                {quizData?.data.result.correct_answers}
              </span>
            </div>
            <div className="text-xl flex items-center w-full">
              <h2 className="font-bold">Incorrect Answers: </h2>
              <span className="ml-2 text-red-600">
                {quizData?.data.result.incorrect_answers}
              </span>
            </div>
            <div className="text-xl flex items-center w-full">
              <h2 className="font-bold">Not Answered: </h2>
              <span className="ml-2 text-gray-600">
                {quizData?.data.result.unanswered}
              </span>
            </div>
          </div>
          <div className="mt-4 font-bold text-white text-xl flex items-center w-full bg-teal-500 rounded-md px-4 py-2">
            <h2 className="">Coins Earned:</h2>
            <span className="ml-2">200</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    !quizData?.data.submitted && (
      <div className="min-h-screen px-4 py-6">
        <h1 className="text-center text-xl font-bold text-blue-500">Quiz</h1>
        <div>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between mt-4 md:mt-6">
              <div>
                <button
                  type="button"
                  className="bg-blue-600 disabled:bg-opacity-0 disabled:border-none bg-opacity-10 border border-blue-600 rounded-full overflow-hidden p-1 hover:bg-opacity-20"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                >
                  <ArrowLeft className="text-blue-500 w-5 h-5" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-blue-600 disabled:bg-opacity-0 disabled:border-none bg-opacity-10 border border-blue-600 rounded-full overflow-hidden p-1 hover:bg-opacity-20"
                  onClick={handleNextQuestion}
                  disabled={currentQuestionIndex >= quiz?.length - 1}
                >
                  <ArrowRight className="text-blue-500 w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="mt-4 shadow-xl p-4 rounded-md border border-gray-200">
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-4">
                    <QuizQuestion question={quiz[currentQuestionIndex]} />
                  </div>

                  {currentQuestionIndex === quiz?.length - 1 && (
                    <button
                      className="mt-6 flex items-center justify-center w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-sky-600 transition duration-300 transform hover:-translate-y-1"
                      type="submit"
                    >
                      {isPending ? (
                        <LoaderCircle className="animate-spin text-white w-6 h-6" />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  )}
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default QuizPage;
