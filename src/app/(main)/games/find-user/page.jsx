"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbQrcode } from "react-icons/tb";

const users = [
  { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
  { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
  { id: 3, name: "Carol Williams", email: "carol.williams@example.com" },
  { id: 4, name: "David Brown", email: "david.brown@example.com" },
  { id: 5, name: "Eva Davis", email: "eva.davis@example.com" },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -60 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 10,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const User = () => {
  return (
    <div className="sm:min-h-[80vh] min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Heading */}
      <h1 className="text-4xl underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 mb-8">
        Find Out Them
      </h1>

      {/* Tiles */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {users.map((user) => (
          <motion.div
            key={user.id}
            className="bg-gradient-to-r text-center from-blue-500 to-teal-500 text-white rounded-lg p-6 shadow-2xl flex flex-col items-center"
            variants={tileVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <h2 className="text-xl cursor-default font-bold mb-2">{user.name}</h2>
            <p className="text-xl cursor-default">{user.email}</p>
            
            {/* QR Code Icon */}
            <div className="mt-4 w-12 h-12 flex justify-center items-center border-2 border-white rounded">
              <TbQrcode className="text-4xl cursor-pointer text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default User;
