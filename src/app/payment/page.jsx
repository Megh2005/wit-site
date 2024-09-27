"use client";

import BackButton from "@/components/BackButton";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { SessionProvider, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";

const PaymentPage = () => {
  const params = useSearchParams();
  const { data: session } = useSession(authOptions);
  const sendTo = params.get("to");

  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [transferring, setTransferring] = useState(false);

  const transferCoinsFromSponsorToUser = async () => {
    // Add your payment logic here
    if (!amount || !session) return;
    setTransferring(true);

    try {
      const res = await axios.post("/api/payment/transfer", {
        sender: session.user.id,
        receiver: sendTo,
        amount: 100,
      });

      if (res.data.status === "SUCCESS") {
        setSuccess(res.data.message || "Coins transferred successfully!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Error transferring coins");
      } else {
        setError(error);
      }
      console.log(error);
    } finally {
      setTransferring(false);
    }
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
        if (axios.isAxiosError(error)) {
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
            <p className="text-black">Fetching Receiver Details</p>
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
            <p className="text-red-600">{error.toString()}</p>
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
            <p className="text-green-500">{success.toString()}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <BackButton />
      <div className="flex-grow flex justify-center items-center">
        <div className="mx-4 w-full max-w-xl bg-gradient-to-b from-purple-600 to-cyan-400 shadow-lg rounded-lg p-8">
          {/* Receiver's Name */}
          <h2 className="text-2xl text-white font-bold mb-6">
            Transfering to <span>{receiver?.name}</span>
          </h2>
          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2">
              Enter Coin To Transfer
            </label>
            <input
              type="number"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              placeholder="Amount in Coins"
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
              "Transfer Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const PaymentPageWrapper = () => (
  <SessionProvider>
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
  </SessionProvider>
);

export default PaymentPageWrapper;
