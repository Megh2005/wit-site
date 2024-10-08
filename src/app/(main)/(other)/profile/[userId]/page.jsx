"use client";

import { useSession } from "next-auth/react";
import { QRCodeSVG } from "qrcode.react";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center min-h-[80vh] sm:min-h-[60vh]">
      <div className="mx-4 w-full max-w-xl bg-gradient-to-r from-violet-600 to-cyan-600 shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start">
        {/* Profile Section */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl font-bold mb-4 border-b border-yellow-300 text-yellow-300 inline-block">
            Profile
          </h2>
          <p className="text-lg">
            <span className="font-bold">Name:</span> {session?.user.name}
          </p>
          <p className="text-lg">
            <span className="font-bold">Email:</span> {session?.user.email}
          </p>
          <p className="text-lg">
            <span className="font-bold">Role:</span> {session?.user.role}
          </p>
        </div>

        {/* QR Code Section */}
        <div className="md:ml-6 mt-6 md:mt-0">
          <QRCodeSVG
            size={200}
            level="L"
            className="rounded-lg w-full object-cover"
            value={session?.user.id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
