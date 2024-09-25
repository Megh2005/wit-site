"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

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
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setScanValue(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
      </div>
      <div className="mt-6">
        <p>User id: {scanValue}</p>
      </div>
    </div>
  );
};

export default ScanPage;
