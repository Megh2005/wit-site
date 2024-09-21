import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-purple-200 rounded-sm">
        <div className="flex-1">
          <Link href="/home" className="btn btn-ghost text-xl">
            <img
              src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png"
              alt="logo"
              className="w-14"
            />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
