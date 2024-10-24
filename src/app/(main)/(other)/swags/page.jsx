"use client";
import React from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";

const tiles = [
  {
    id: 1,
    heading: "Tile 1",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit",
  },
  {
    id: 2,
    heading: "Tile 2",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit",
  },
  {
    id: 3,
    heading: "Tile 3",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit",
  },
  {
    id: 4,
    heading: "Tile 4",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit",
  },
  {
    id: 5,
    heading: "Tile 5",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit",
  },
];

const Tile = ({ heading, description }) => {
  return (
    <motion.div
      className="bg-white shadow-2xl p-6 my-4 rounded-lg w-full text-center"
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
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
      <h2 className="text-3xl font-extrabold mb-2 text-emerald-500">{heading}</h2>
      <p className="text-xl font-bold text-blue-500">{description}</p>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen gap-10 bg-yellow-100 flex flex-col items-center p-6">
      <Toaster />
      <h1 className="text-5xl font-bold mb-8 text-purple-600">Earn Swags</h1>
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
