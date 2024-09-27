"use client";

import { payCoins } from "@/actions/payCoins";
import BackButton from "@/components/BackButton";
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

  const onSuccessHandler = useCallback(
    async (result) => {
      if (!session) return;

      if (session.user?.role === "attendee") {
        if (result === uid) {
          // pay coins
          scannerRef.current.clear(); // Clear the scanner after a successful scan

          setTransferring(true);

          const res = await payCoins(session.user.id, result, 100);

          if (res.status === "SUCCESS") {
            setSuccess(res.message || "Coins transferred successfully!");
          } else {
            setError(res.message || "Error transferring coins");
            toast.error(res.message);
          }

          setTransferring(false);
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

  return (
    <div>
      <BackButton />
      <div className="my-6 w-full max-w-2xl mx-auto">
        <div id="reader"></div>
      </div>
      <div>
        {transferring && (
          <div className="flex justify-center">
            <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
          </div>
        )}
        {success && (
          <div className="mt-10">
            <p className="text-center text-green-500 font-bold text-xl">
              {success}
            </p>
          </div>
        )}
        {error && (
          <div className="mt-10">
            <p className="text-center text-red-600 font-bold text-xl">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
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
