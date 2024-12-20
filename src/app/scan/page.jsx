"use client";

import BackButton from "@/components/BackButton";
import PaymentFailure from "@/components/Failure";
import PaymentSuccess from "@/components/Success";
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
  const [success, setSuccess] = useState(false);

  const scannerRef = useRef(null);

  const transferCoinsFromUserToUser = async () => {
    scannerRef.current.clear(); // Clear the scanner after a successful scan

    setTransferring(true);

    try {
      const res = await axios.post("/api/payment/user", {
        sender: session.user.id,
        receiver: uid,
      });

      if (res.data.status === "SUCCESS") {
        setSuccess(true);
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
  const transferCoinsFromVolunteerToUser = async (uid) => {
    scannerRef.current.clear(); // Clear the scanner after a successful scan

    setTransferring(true);

    try {
      const res = await axios.post("/api/games/treasure-hunt/payment", {
        receiver: uid,
      });

      if (res.data.status === "SUCCESS") {
        setSuccess(true);
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
          setError("Invalid QR code");
        }
      } else if (session.user?.role === "sponsor") {
        // redirect to payment page
        router.replace(`/payment?to=${result}`);
      } else if (session.user?.role === "volunteer") {
        transferCoinsFromVolunteerToUser(result);
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
        fps: 30,
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

  if (error) return <PaymentFailure message={error} />;

  if (success) {
    return <PaymentSuccess />;
  }

  if (transferring) {
    return (
      <div className="min-h-screen h-full flex flex-col overflow-hidden">
        <BackButton />
        <div className="flex-grow flex justify-center items-center">
          <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
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
