"use client";

import BackButton from "@/components/BackButton";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

const ScanPage = () => {
  const scannerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
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
      router.replace(`/payment?to=${result}`);
    }

    function error(error) {
      console.log(error);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear(); // Clear the scanner on component unmount
      }
    };
  }, []);

  return (
    <div>
      <BackButton />
      <div className="my-6 w-full max-w-2xl mx-auto">
        <div id="reader"></div>
      </div>
    </div>
  );
};

export default ScanPage;
