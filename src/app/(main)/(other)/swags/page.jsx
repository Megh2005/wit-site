"use client";
import React from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

const tiles = [
  {
    id: 1,
    heading: "Tile 1",
    description: "This is the description for Tile 1",
  },
  {
    id: 2,
    heading: "Tile 2",
    description: "This is the description for Tile 2",
  },
  {
    id: 3,
    heading: "Tile 3",
    description: "This is the description for Tile 3",
  },
  {
    id: 4,
    heading: "Tile 4",
    description: "This is the description for Tile 4",
  },
  {
    id: 5,
    heading: "Tile 5",
    description: "This is the description for Tile 5",
  },
];

const Tile = ({ heading, description }) => {
  return (
    <motion.div
      className="bg-white shadow-lg p-6 my-4 rounded-lg w-full text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onClick={() =>
        toast.success(`Complete the ${heading} & Win Swags`, {
          icon: "🎁",
          style: {
            color: "#4815bf",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          },
        })
      }
    >
      <h2 className="text-3xl font-semibold mb-2 text-blue-500">{heading}</h2>
      <p className="text-xl text-pink-500">{description}</p>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center p-6">
      <Toaster />
      <h1 className="text-5xl font-bold mb-8 text-purple-600">
        Earn Swags
      </h1>
      <div className="w-full max-w-4xl">
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
