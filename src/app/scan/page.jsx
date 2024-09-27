"use client";

import BackButton from "@/components/BackButton";
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
import { LoaderCircle } from "lucide-react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const ScanPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const params = useSearchParams();
  const uid = params.get("uid");
  const [transferring, setTransferring] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const scannerRef = useRef(null);

  const transferCoinsFromUserToUser = async () => {
    scannerRef.current.clear(); // Clear the scanner after a successful scan

    setTransferring(true);

    try {
      const res = await axios.post("/api/payment/transfer", {
        sender: session.user.id,
        receiver: uid,
        amount: 100,
      });

      if (res.data.status === "SUCCESS") {
        setSuccess(res.data.message || "Coins transferred successfully!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Error transferring coins");
      } else {
        setError("Something went wrong. Please try again");
      }
    } finally {
      setTransferring(false);
    }
  };

  const onSuccessHandler = useCallback(
    async (result) => {
      if (!session) return;

      if (session.user?.role === "attendee") {
        if (result === uid) {
          transferCoinsFromUserToUser();
        } else {
          toast.error("Invalid QR code");
          router.replace("/home");
        }
      } else if (session.user?.role === "sponsor") {
        // redirect to payment page
        router.replace(`/payment?to=${result}`);
      }
    },
    [session, uid]
  );

  const onErrorHandler = () => {
    console.log("Error scanning QR code");
  };

  useEffect(() => {
    if (status !== "authenticated") return;

    if (!scannerRef.current) {
      // Initialize scanner only if it doesn't already exist
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          color: "red",
          width: 250,
          height: 250,
        },
        rememberLastUsedCamera: true,
        fps: 10,
        videoConstraints: {
          facingMode: { exact: "environment" },
        },
      });

      scanner.render(success, error);
      scannerRef.current = scanner; // Store the scanner instance in useRef
    }

    function success(result) {
      onSuccessHandler(result);
    }

    function error(error) {
      onErrorHandler();
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear(); // Clear the scanner on component unmount
      }
    };
  }, [status]);

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

  if (transferring) {
    return (
      <div className="min-h-screen h-full flex flex-col overflow-hidden">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
        </div>
      </div>
    );
  }

  return (
    (!transferring || !success || !error) && (
      <div>
        <BackButton />
        <div className="my-6 w-full max-w-2xl mx-auto">
          <div id="reader"></div>
        </div>
      </div>
    )
  );
};

const ScanPageWrapper = () => {
  return (
    <SessionProvider>
      <Suspense>
        <ScanPage />
      </Suspense>
    </SessionProvider>
  );
};

export default ScanPageWrapper;
