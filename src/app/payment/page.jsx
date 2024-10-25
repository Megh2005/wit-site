"use client";

import BackButton from "@/components/BackButton";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { SessionProvider, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import PaymentSuccess from "@/components/Success";
import PaymentFailure from "@/components/Failure";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { transferFromSponsorToUser } from "@/queries/coin";
import toast from "react-hot-toast";

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

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation({
    mutationFn: () =>
      transferFromSponsorToUser({
        sender: session.user.id,
        receiver: sendTo,
        amount: parseInt(amount),
      }),
    onSuccess: () => {
      // Invalidate and refetch
      setTransferring(false);
      setSuccess("Coins transferred successfully!");
    },
    onError: (error) => {
      setError(error.response?.data?.message || "Error transferring coins");
    },
  });

  const transferCoinsFromSponsorToUser = async () => {
    // Add your payment logic here
    if (!amount || !session) return;

    if (parseInt(amount) > 500) {
      toast.error("Cannot transfer more than 500 coins");
      return;
    }

    setTransferring(true);
    mutate();
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
          <LoaderCircle className="animate-spin text-teal-400 w-6 h-6 mr-2" />
          <div>
            <p className="text-black">Getting Receiver Details</p>
          </div>
        </div>
      </div>
    );

  if (error) return <PaymentFailure message={error.toString()} />;

  if (success) {
    return <PaymentSuccess />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <BackButton />
      <div className="flex-grow flex justify-center items-center">
        <div className="mx-4 w-full max-w-xl bg-gradient-to-b from-teal-600 to-cyan-400 shadow-lg rounded-lg p-8">
          {/* Receiver's Name */}
          <h2 className="text-2xl text-white font-bold mb-6">
            Transfering to <span>{receiver?.name}</span>
          </h2>
          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-white text-lg font-semibold mb-2">
              Enter Amount To Transfer
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
            className="flex justify-center w-full bg-yellow-300 text-teal-700 font-bold py-3 rounded-md hover:bg-yellow-400 transition duration-300"
          >
            {transferring ? (
              <LoaderCircle className="animate-spin text-teal-700 w-6 h-6" />
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
            <LoaderCircle className="animate-spin text-teal-500 w-6 h-6 mr-2" />
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
