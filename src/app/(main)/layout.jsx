import Navbar from "@/components/Navbar";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
