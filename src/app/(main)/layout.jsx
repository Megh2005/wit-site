"use client";

import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import {Planets} from 'react-preloaders';

import React from "react";

const queryClient = new QueryClient();

export default function MainLayout({ children }) {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
      <Planets />
    </div>
  );
}
