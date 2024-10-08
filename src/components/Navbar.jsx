"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-6 py-4 bg-gray-800 flex justify-center items-center">
      <div>
        <Link href="/home">
          <Image
            src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png"
            width={100}
            height={100}
            priority={true}
            quality={100}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover cursor-pointer"
          />
        </Link>
      </div>
      
    </div>
  );
};

export default Navbar;
