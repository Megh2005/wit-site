"use client";

import BackButton from "@/components/BackButton";
import { Html5QrcodeScanner } from "html5-qrcode";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";

const ScanPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const params = useSearchParams();
  const uid = params.get("uid");
  const [msg, setMsg] = useState("");

  const onSuccessHandler = useCallback(
    (result) => {
      if (!session) return;

      setMsg(result);
      if (session.user?.role === "attendee") {
        if (result === uid) {
          // pay coins
          setMsg("Paid 100 coins successfully");
        } else {
          setMsg("Invalid QR code");
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

  const scannerRef = useRef(null);

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
      scannerRef.current.clear(); // Clear the scanner after a successful scan
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
        <p>{msg}</p>
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
