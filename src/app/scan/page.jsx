"use client";

import BackButton from "@/components/BackButton";
import useScanner from "@/hooks/useScanner";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const ScanPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const params = useSearchParams();
  const uid = params.get("uid");

  const onSuccessHandler = (result) => {
    if (session.user?.role === "attendee") {
      if (result === uid) {
        // pay coins
        toast.success("Paid 100 coins successfully");
      }
    } else if (session.user?.role === "sponsor") {
      // redirect to payment page
      router.replace(`/payment?to=${result}`);
    }
  };

  const onErrorHandler = () => {
    console.log("Error scanning QR code");
  };

  useScanner(onSuccessHandler, onErrorHandler);

  return (
    <div>
      <BackButton />
      <div className="my-6 w-full max-w-2xl mx-auto">
        <div id="reader"></div>
      </div>
    </div>
  );
};

const ScanPageWrapper = () => {
  return (
    <SessionProvider>
      <ScanPage />
    </SessionProvider>
  );
};

export default ScanPageWrapper;
