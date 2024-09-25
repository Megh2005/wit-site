"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const page = () => {
  return (
    <div>
      <div className="px-4 mt-6">
        <Link href={"/home"}>
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
      </div>
      <div className="my-6 w-full max-w-2xl mx-auto">
        <Scanner onScan={(result) => toast.success(result)} />
      </div>
    </div>
  );
};

export default page;
