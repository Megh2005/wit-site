"use client";

import { Html5QrcodeScanner } from "html5-qrcode";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ScanPage = () => {
  const [scanValue, setScanValue] = useState("");
  const scannerRef = useRef(null);

  useEffect(() => {
    if (!scannerRef.current) {
      // Initialize scanner only if it doesn't already exist
      const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          color: "red",
          width: 200,
          height: 200,
        },
        rememberLastUsedCamera: true,
        fps: 5,
      });

      scanner.render(success, error);
      scannerRef.current = scanner; // Store the scanner instance in useRef
    }

    function success(result) {
      scannerRef.current.clear(); // Clear the scanner after a successful scan
      setScanValue(result);
    }

    function error(error) {
      console.warn(error);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear(); // Clear the scanner on component unmount
      }
    };
  }, []);

  return (
    <div>
      <div className="px-4 mt-6">
        <Link href={"/home"}>
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
      </div>
      <div className="my-6 w-full max-w-2xl mx-auto">
        <div id="reader"> </div>
      </div>
      <div className="mt-6">
        <p>User id: {scanValue}</p>
      </div>
    </div>
  );
};

export default ScanPage;
