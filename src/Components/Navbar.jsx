import Link from 'next/link';
import React from 'react'

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
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Leo"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar