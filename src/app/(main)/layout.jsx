"use client";

import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
