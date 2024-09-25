"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ScanPage = () => {
  const [scanValue, setScanValue] = useState("");

  return (
    <div>
      <div className="px-4 mt-6">
        <Link href={"/home"}>
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
      </div>
      <div className="my-6 w-full max-w-2xl mx-auto">
        <Scanner onScan={(result) => setScanValue(result)} />
      </div>
      <div className="mt-6">
        <p>{scanValue}</p>
      </div>
    </div>
  );
};

export default ScanPage;
