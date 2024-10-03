"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify components

export default function SloganSymphony() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    slogan1: "",
    slogan2: "",
  });
  let name, value;

  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, slogan1, slogan2 } = userData;
    if (name && email && slogan1 && slogan2) {
      try {
        const res = await fetch(
          "https://wit-dreamin-kolkata-2024-default-rtdb.asia-southeast1.firebasedatabase.app/aislogan.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              slogan1,
              slogan2,
            }),
          }
        );

        if (res.ok) {
          setUserData({
            name: "",
            email: "",
            slogan1: "",
            slogan2: "",
          });
          toast.success("Enquiry Submitted Successfully!", {
            position: "top-right", // Changed from toast.POSITION.TOP_RIGHT to string
            autoClose: 3000,
          });
        } else {
          // If the response is not ok, try to parse the error message
          const errorData = await res.json();
          const errorMessage = errorData.error || "Failed to submit Enquiry";
          toast.error(errorMessage, {
            position: "top-right", // Changed from toast.POSITION.TOP_RIGHT to string
            autoClose: 5000,
          });
        }
      } catch (error) {
        // Handle network or unexpected errors
        toast.error(`An error occurred: ${error.message}`, {
          position: "top-right", // Changed from toast.POSITION.TOP_RIGHT to string
          autoClose: 5000,
        });
      }
    } else {
      toast.warn("All Fields are Mandatory", {
        position: "top-right", // Changed from toast.POSITION.TOP_RIGHT to string
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-sky-400 to-blue-600 p-4 sm:p-6">
      {/* Toast Container */}
      <ToastContainer />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md sm:max-w-2xl bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 animate-fadeIn">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl py-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-400 to-violet-500">
            Slogan Symphony
          </h1>
          <p className="mt-2 text-base sm:text-lg capitalize font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-blue-600">
            Compose harmonious slogans with the power of AI
          </p>
        </div>

        {/* About Section */}
        <div className="text-center mb-6 gap-32">
          <hr />
          <p className="mt-4 font-extrabold text-gray-900 text-sm sm:text-base">
            Slogan Symphony is a creative game where players generate unique
            slogans about the "WIT Dreamin" with the help of AI. Hone your
            branding skills. Unleash your inner copywriter by crafting
            memorable, impactful slogans. Let AI boost your creativity and guide
            you to create slogans that resonate.
            <br />
          </p>
          <span className="text-red-500 capitalize underline pt-8">
            Keep in mind - if you use an email ID that is not registered with
            us, or if you submit more than one response, you will be directly
            disqualified from the game.
          </span>
        </div>

        {/* Form Section */}
        <form method="POST" id="form" className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-extrabold text-blue-800"
              id="name"
              name="name"
              value={userData.name}
              onChange={postUserData}
              type="text"
              placeholder="Enter registered name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 font-extrabold text-blue-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              id="email"
              name="email"
              value={userData.email}
              onChange={postUserData}
              type="email"
              placeholder="Enter registered email"
              required
            />
          </div>

          {/* Slogan Idea Fields */}
          <div>
            <label
              className="block text-gray-800 text-sm sm:text-md font-semibold mb-2"
              htmlFor="slogan1"
            >
              Your First Slogan
            </label>
            <textarea
              className="w-full px-4 py-2 resize-none font-extrabold text-blue-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              id="slogan1"
              name="slogan1"
              value={userData.slogan1}
              onChange={postUserData}
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
              className="w-full px-4 py-2 font-extrabold text-blue-800 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              id="slogan2"
              name="slogan2"
              value={userData.slogan2}
              onChange={postUserData}
              placeholder="Type your slogan here"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={submitData}
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
