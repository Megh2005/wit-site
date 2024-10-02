"use client";
import React from "react";

export default function SloganSymphony() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-sky-400 to-blue-600 p-4 sm:p-6">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md sm:max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 animate-fadeIn">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl py-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-400 to-violet-500">
            Slogan Symphony
          </h1>
          <p className="mt-2 text-base sm:text-lg capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-blue-600">
            Compose harmonious slogans with the power of AI!
          </p>
        </div>

        {/* About Section */}
        <div className="text-center mb-6">
          <hr />
          <p className="mt-4 font-extrabold text-gray-900 text-sm sm:text-base">
            Slogan Symphony is a creative game where players generate unique
            slogans with the help of AI. Hone your branding skills. Unleash your
            inner copywriter by crafting memorable, impactful slogans. Let AI
            boost your creativity and guide you to create slogans that resonate.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Slogan Idea Field */}
          <div>
            <label
              className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
              htmlFor="slogan1"
            >
              Your First Slogan
            </label>
            <textarea
              className="w-full px-4 py-2 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              id="slogan1"
              placeholder="Type your slogan here"
              rows="2"
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
              className="w-full px-4 py-2 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              id="slogan2"
              placeholder="Type your slogan here"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-sky-600 transition duration-300 transform hover:-translate-y-1"
            >
              Submit Slogan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
