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
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
