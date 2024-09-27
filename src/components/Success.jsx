"use client";
import React from "react";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-4">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2l4 -4m0 -6a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-4 capitalize">
            Payment Successful
          </p>
          <div className="flex justify-center">
            <Link href="/home" passHref>
              <h1 className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
                Go to Dashboard
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
