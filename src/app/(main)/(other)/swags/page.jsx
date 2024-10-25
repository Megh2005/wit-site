"use client";
import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast, Flip } from "react-toastify";

const tiles = [
  {
    id: 1,
    heading: "Lucky Draw Prizes",
    description:
      "Stand a chance to win an iPad in our lucky draw! Other amazing prizes include Speakers and exclusive WITDreamin’ Swags.",
  },
  {
    id: 2,
    heading: "Agentforce Workshop Swags",
    description:
      "Complete the Agentforce Workshop and earn exclusive WITDreamin’ swag. Post about the event on LinkedIn and Twitter to win a certification voucher!",
  },
  {
    id: 3,
    heading: "How to Participate",
    description:
      "Attend any session at WITDreamin'24 to enter the lucky draw and win exciting prizes. Join the Agentforce Workshop and unlock a chance to win a swag coupon.",
  },
];

const Tile = ({ heading, description }) => {
  return (
    <motion.div
      className="bg-white shadow-2xl p-6 my-4 rounded-lg w-full text-center"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h2 className="text-3xl font-extrabold mb-2 text-emerald-500">
        {heading}
      </h2>
      <p className="text-xl font-bold text-blue-500">{description}</p>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen gap-10 bg-yellow-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center text-purple-600">Exciting Rewards Await At WITDreamin&apos; 24!
</h1>
      <div className="w-full gap-10 max-w-4xl">
        {tiles.map((tile) => (
          <Tile
            key={tile.id}
            heading={tile.heading}
            description={tile.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
