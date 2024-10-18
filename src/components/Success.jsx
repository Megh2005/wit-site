"use client";
import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-4">
        <div className="text-center">
          <div className="flex justify-center">
            <Check className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-4 capitalize">
            Coins transferred successfully
          </p>
          <div className="flex justify-center">
            <Link href="/home" passHref>
              <button className="text-white bg-gradient-to-r from-teal-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
