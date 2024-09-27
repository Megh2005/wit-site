"use client";

import { payCoins } from "@/actions/payCoins";
import BackButton from "@/components/BackButton";
import axios, { isAxiosError } from "axios";
import { LoaderCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const PaymentPage = () => {
  const params = useSearchParams();
  const sendTo = params.get("to");

  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [transferring, setTransferring] = useState(false);

  const transferCoinsFromSponsorToUser = async () => {
    // Add your payment logic here
    if (!amount) return;
    setTransferring(true);

    const res = await payCoins(session.user.id, result, parseInt(amount));

    if (res.status === "SUCCESS") {
      setSuccess(res.message || "Coins transferred successfully!");
    } else {
      setError(res.message || "Error transferring coins");
    }

    setTransferring(false);
  };

  useEffect(() => {
    if (!sendTo) return;

    setLoading(true);

    async function getReceiverDetails() {
      try {
        const res = await axios.get(`/api/payment/details?sendTo=${sendTo}`);
        if (res.data?.success) {
          setReceiver(res.data?.data);
        }
      } catch (error) {
        if (isAxiosError(error)) {
          setError(
            error.response?.data?.message || "Error getting receiver details"
          );
        } else {
          setError("Something went wrong. Please try again");
        }
      } finally {
        setLoading(false);
      }
    }

    getReceiverDetails();
  }, [sendTo]);

  if (loading)
    return (
      <div className="min-h-screen h-full flex flex-col overflow-hidden">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <LoaderCircle className="animate-spin text-purple-400 w-6 h-6 mr-2" />
          <div>
            <p className="text-black">Getting receiver details</p>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen h-full flex flex-col overflow-hidden">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <div>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );

  if (success) {
    return (
      <div className="min-h-screen h-full flex flex-col overflow-hidden">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <div>
            <p className="text-green-500">{success}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <BackButton />
      <div className="flex-grow flex justify-center items-center">
        <div className="mx-4 w-full max-w-xl bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg rounded-lg p-8">
          {/* Receiver's Name */}
          <h2 className="text-2xl text-white font-bold mb-6">
            Paying to <span>{receiver?.name}</span>
          </h2>
          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2">
              Enter amount to transfer
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Amount in coins"
            />
          </div>
          {/* Pay Button */}
          <button
            disabled={transferring}
            onClick={transferCoinsFromSponsorToUser}
            className="w-full bg-yellow-300 text-purple-700 font-bold py-3 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            {transferring ? (
              <LoaderCircle className="animate-spin text-purple-700 w-6 h-6" />
            ) : (
              "Pay"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentPageWrapper = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex flex-col">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <LoaderCircle className="animate-spin text-purple-500 w-6 h-6 mr-2" />
          <div>
            <p className="text-black">Loading...</p>
          </div>
        </div>
      </div>
    }
  >
    <PaymentPage />
  </Suspense>
);

export default PaymentPageWrapper;
