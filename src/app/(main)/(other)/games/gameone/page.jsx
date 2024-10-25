"use client";
import Submitted from "@/components/Submitted";
import { getGameStatus, submitAiGameResponse } from "@/queries/game";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { FcRating } from "react-icons/fc";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify"; // Import Toastify components

export default function SloganSymphony() {
  const [slogans, setSlogans] = useState({
    slogan1: "",
    slogan2: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { isPending, mutate } = useMutation({
    mutationFn: () => submitAiGameResponse(slogans),
    onSuccess: () => {
      //queryClient.invalidateQueries({ queryKey: ["gameone-status"] });
      setSubmitted(true);
    },
    onError: (error) => {
      toast.error("Error submitting response");
    },
  });

  const submitSlogan = async (e) => {
    e.preventDefault();

    if (!slogans.slogan1 || !slogans.slogan2) {
      toast.error("Please fill in all the fields.");
    } else {
      mutate();
    }
  };

  const {
    data: status,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["gameone-status"],
    queryFn: () => getGameStatus("gameone"),
    staleTime: Infinity,
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-sky-400 to-blue-600 p-4 sm:p-6">
      {submitted && <Submitted />}
      <>
        {/* Toast Container */}
        <ToastContainer />
        {isLoading && (
          <div className="flex justify-center mt-6">
            <LoaderCircle className="animate-spin text-white w-6 h-6" />
          </div>
        )}
        {isSuccess && status.status === 400 && (
          <div>
            <p className="text-xl capitalize sm:text-4xl text-center text-white font-medium">
              You have already Submitted your response
            </p>
          </div>
        )}
        {/* Content Container */}
        {isSuccess && !submitted && status.status === 200 && (
          <div className="relative z-10 w-full max-w-md sm:max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 animate-fadeIn">
            {/* Header Section */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl py-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-400 to-teal-500">
                Slogan Symphony
              </h1>
              <p className="mt-2 text-base sm:text-lg capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-blue-600">
                Compose harmonious slogans with the power of AI
              </p>
              <div className="text-red-500 flex font-semibold py-2 items-center justify-center text-center">
                500 Coins{" "}
                <FcRating className="w-7 h-7" />
              </div>
            </div>

            {/* About Section */}
            <div className="text-center mb-6 gap-32">
              <hr />
              <p className="mt-4 font-extrabold text-gray-900 text-sm sm:text-base">
                Slogan Symphony is a creative game where players generate unique
                slogans about the &quot;WIT Dreamin&quot; with the help of AI.
                Hone your branding skills. Unleash your inner copywriter by
                crafting memorable, impactful slogans. Let AI boost your
                creativity and guide you to create slogans that resonate.
                <br />
              </p>
            </div>

            {/* Form Section */}
            <form id="form" className="space-y-4">
              {/* Slogan Idea Fields */}
              <div>
                <label
                  className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
                  htmlFor="slogan1"
                >
                  Your First Slogan
                </label>
                <textarea
                  className="w-full px-4 py-2 resize-none font-semibold text-blue-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                  id="slogan1"
                  name="slogan1"
                  value={slogans.slogan1}
                  onChange={(e) =>
                    setSlogans({ ...slogans, slogan1: e.target.value })
                  }
                  placeholder="Type your slogan here"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <label
                  className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
                  htmlFor="slogan2"
                >
                  Your Second Slogan
                </label>
                <textarea
                  className="w-full px-4 py-2 font-semibold text-blue-800 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                  id="slogan2"
                  name="slogan2"
                  value={slogans.slogan2}
                  onChange={(e) =>
                    setSlogans({ ...slogans, slogan2: e.target.value })
                  }
                  placeholder="Type your slogan here"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  disabled={isPending}
                  onClick={(e) => submitSlogan(e)}
                  type="submit"
                  className="flex items-center justify-center w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-sky-600 transition duration-300 transform hover:-translate-y-1"
                >
                  {isPending && (
                    <LoaderCircle className="animate-spin text-white w-6 h-6 mr-2" />
                  )}
                  Submit Slogans
                </button>
              </div>
            </form>
            <p className="text-red-500 italic font-semibold py-8 text-center">
              *The winner will be declared at 5 pm
            </p>
          </div>
        )}
      </>
    </div>
  );
}
