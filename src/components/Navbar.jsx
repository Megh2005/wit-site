"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-6 py-4 bg-gray-800 flex justify-between items-center">
      <div>
        <Link href="/home">
          <Image
            src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png"
            width={80}
            height={80}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-white font-semibold bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
