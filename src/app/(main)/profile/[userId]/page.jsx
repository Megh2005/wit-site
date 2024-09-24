"use client";

import { useSession } from "next-auth/react";
import { QRCodeSVG } from "qrcode.react";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="sm:h-[60vh] min-h-screen flex items-center justify-center bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:p-[10rem] max-w-4xl">
          {/* Profile Info Tile */}
          <div className="p-6 bg-gradient-to-r sm:py-4 from-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4 text-center underline text-yellow-200">
              Profile
            </h2>
            <p className="text-lg font-extrabold">
              Name: <span className="font-semibold">{session?.user.name}</span>
            </p>
            <p className="text-lg font-extrabold">
              Email:{" "}
              <span className="font-semibold">{session?.user.email}</span>
            </p>
            <p className="text-lg font-extrabold">
              Mobile: <span className="font-semibold">9988776655</span>
            </p>
            <p className="text-lg font-extrabold">
              Role: <span className="font-semibold">{session?.user.role}</span>
            </p>
          </div>

          {/* Image Tile */}
          <div className="p-6 bg-gradient-to-r from-sky-500 to-black rounded-lg shadow-lg">
            {/* <img
            src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1726903171/qrcode_126920079_39b2166ce5f3fd24f42ef9b2b4c78fbf_oilguy.png"
            alt="Profile"
            className="rounded-lg w-full object-cover"
          /> */}
            <QRCodeSVG
              size={300}
              className="rounded-lg w-full object-cover"
              value="https://github.com/Megh2005"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
