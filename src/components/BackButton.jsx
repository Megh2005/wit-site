"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="px-4 mt-6">
      <ArrowLeft onClick={() => router.back()} className="w-6 h-6 text-black" />
    </div>
  );
};

export default BackButton;
