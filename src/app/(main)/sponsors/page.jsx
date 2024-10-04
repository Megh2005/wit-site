"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Sponsor data with logos
const sponsors = [
  {
    id: 1,
    name: "Sponsor A",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum nequ, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nu pretium gravida.",
  },
  {
    id: 2,
    name: "Sponsor B",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 3,
    name: "Sponsor C",
    tier: "Bronze",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 4,
    name: "Sponsor D",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 5,
    name: "Sponsor E",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 6,
    name: "Sponsor F",
    tier: "Bronze",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 7,
    name: "Sponsor G",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 8,
    name: "Sponsor H",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 9,
    name: "Sponsor I",
    tier: "Bronze",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 10,
    name: "Sponsor J",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 11,
    name: "Sponsor K",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 12,
    name: "Sponsor L",
    tier: "Bronze",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 13,
    name: "Sponsor M",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 14,
    name: "Sponsor N",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 15,
    name: "Sponsor O",
    tier: "Bronze",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 16,
    name: "Sponsor P",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 17,
    name: "Sponsor Q",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 18,
    name: "Sponsor R",
    tier: "Bronze",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 19,
    name: "Sponsor S",
    tier: "Gold",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
  {
    id: 20,
    name: "Sponsor T",
    tier: "Silver",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726842359/logo2_wlg6sy.png",
  },
];

// Define gradients and text colors for each tier
const tierStyles = {
  Gold: {
    gradient: "bg-gradient-to-r from-yellow-500 to-yellow-700",
    textColor: "text-gray-100",
  },
  Silver: {
    gradient: "bg-gradient-to-r from-gray-700 to-gray-500",
    textColor: "text-gray-200",
  },
  Bronze: {
    gradient: "bg-gradient-to-r from-red-700 to-red-500",
    textColor: "text-red-100",
  },
};

// Function to get the tier rank
const getTierRank = (tier) => {
  switch (tier) {
    case "Gold":
      return 1;
    case "Silver":
      return 2;
    case "Bronze":
      return 3;
    default:
      return 4; // Fallback for unexpected values
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }, // Exit animation
};

const Sponsors = () => {
  // Sort sponsors by tier
  const sortedSponsors = sponsors.sort(
    (a, b) => getTierRank(a.tier) - getTierRank(b.tier)
  );

  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    const description = sortedSponsors[index].description;
    setDescription(description);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      {showModal && (
        <div>
          <dialog
            id="description-modal"
            className="flex flex-col z-50 fixed text-center justify-evenly font-mono font-bold bg-white shadow-xl w-full mx-auto max-w-xs h-1/2 rounded-md p-4"
          >
            <div className="flex-1">
              <p>{description}</p>
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={closeModal}>Close</button>
            </div>
          </dialog>
        </div>
      )}
      <motion.div
        className="max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Sponsors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer lg:grid-cols-4 gap-6">
          {sortedSponsors.map((sponsor, index) => (
            <motion.div
              onClick={() => openModal(index)}
              key={sponsor.id}
              className={`rounded-lg shadow-md p-6 text-center ${
                tierStyles[sponsor.tier].gradient
              } transition-transform duration-300 transform hover:scale-105`}
              variants={item}
              exit={{ opacity: 0, transition: { duration: 0.2 } }} // Exit transition
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                className="w-24 h-24 mb-4 mx-auto"
              />
              <h2
                className={`text-2xl font-bold ${
                  tierStyles[sponsor.tier].textColor
                } mb-2`}
              >
                {sponsor.name}
              </h2>
              <p className={`font-bold ${tierStyles[sponsor.tier].textColor}`}>
                Tier: {sponsor.tier}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
