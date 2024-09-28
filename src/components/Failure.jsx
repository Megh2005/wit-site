"use client";
import Link from "next/link";
import React from "react";

const PaymentFailure = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-4">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Failed
          </h2>
          <p className="text-gray-600 mb-4">
            Transfer Failure
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/payment"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Retry Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
