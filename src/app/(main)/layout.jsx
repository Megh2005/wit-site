"use client";

import { Footer } from "@/components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

import React from "react";

const queryClient = new QueryClient();

export default function MainLayout({ children }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
        {/* <Footer /> */}
      </QueryClientProvider>
    </div>
  );
}
