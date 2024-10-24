"use client";

import { useFormContext } from "react-hook-form";

const QuizQuestion = ({ question }) => {
  const { register, watch } = useFormContext();

  // Watch the value of the current question's selected option
  const selectedAnswer = watch(`answer-${question?.id}`);

  return (
    <div>
      <div>
        <p className="text-black text-xl font-bold mb-6">
          {question?.question}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        {question?.options?.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              {...register(`answer-${question?.id}`)}
              type="radio"
              value={index}
              className=""
              id={`option-${question?.id}-${index}`}
              checked={selectedAnswer === index.toString()}
            />
            <label
              className="text-black text-base font"
              htmlFor={`option-${question?.id}-${index}`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
