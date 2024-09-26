"use client";

import BackButton from "@/components/BackButton";
import useScanner from "@/hooks/useScanner";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useCallback, useState } from "react";

const ScanPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
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

  useScanner(onSuccessHandler, onErrorHandler);

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
