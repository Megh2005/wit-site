import { CircleAlert } from "lucide-react";
import Link from "next/link";
import React from "react";

const PaymentFailure = ({ message }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-4">
        <div className="text-center">
          <div className="flex justify-center">
            <CircleAlert className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Failed!
          </h2>
          <p className="text-gray-600 mb-4 capitalize">{message}</p>
          <div className="flex justify-center">
            <Link href="/home" passHref>
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
