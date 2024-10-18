"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sponsor data with logos
const sponsors = [
  // ... existing sponsors and new sponsors
  {
    id: 1,
    name: "Deloitte",
    tier: "Platinum",
    logo: "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728391070/Deloitte-Logo_drssm6.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 2,
    name: "Cognizant",
    tier: "Gold",
    logo: "https://www.witdreamin.com/Cognizant.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 3,
    name: "Cloud Fulcrum",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1727465196841-0ebf9253-eed2-44c0-bb86-eb2dc8f23796.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 4,
    name: "360 SMS",
    tier: "Silver",
    logo: "https://360smsapp.com/wp-content/uploads/2022/01/logo_b046c853129b1637fa48a6e91c6a7b17_1x.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 5,
    name: "360 SMS",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1726416420491-074a6654-4a7b-4b9e-8436-1b5b8213f152.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 6,
    name: "SmartInternz",
    tier: "Learning Partner",
    logo: "https://witblogpic.s3.amazonaws.com/1727465140282-9c85e3cb-3c4e-4012-9646-68768600808e.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 7,
    name: "Trailblazex",
    tier: "Bronze",
    logo: "https://www.witdreamin.com/tbx.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 8,
    name: "BrinkView",
    tier: "Bronze",
    logo: "https://brinkview.com/wp-content/uploads/2024/01/BV-Logo-1024x483.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 9,
    name: "PCS Global",
    tier: "NextGen",
    logo: "https://www.witdreamin.com/PCSglobal.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 10,
    name: "Perigeon",
    tier: "NextGen",
    logo: "https://witblogpic.s3.amazonaws.com/1727465254366-2ea7f7b2-7bd0-4ec0-8077-4c4d35324d01.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 12,
    name: "Copado",
    tier: "Wifi",
    logo: "https://www.witdreamin.com/copado.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 13,
    name: "Cyntexa",
    tier: "Photography",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUq2lofwjYFAyLCBp1AO9ekt2MEpCoAXXDw&s",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 14,
    name: "Community Connect",
    tier: "Community Partners",
    logo: "https://placehold.co/1600x900.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 15,
    name: "After Party Inc.",
    tier: "After Party",
    logo: "https://placehold.co/1600x900.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 16,
    name: "Creatique Technologies",
    tier: "NextGen",
    logo: "https://creatiquetech.com/wp-content/uploads/2023/05/final-logo.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
  {
    id: 17,
    name: "Creatique Technologies",
    tier: "NextGen",
    logo: "https://agilecloudconsulting.com/wp-content/uploads/2024/03/Horizontal-Logo-Blue-1-1-768x244.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nunc pretium gravida. Donec vel ex varius, fermentum risus ut, aliquam purus. Nulla lobortis sapien erat, in molestie odio pretium id.",
  },
];

// Define gradients and text colors for each tier
const tierStyles = {
  Platinum: {
    gradient: "bg-transperant",
    textColor: "text-gray-100",
  },
  Gold: {
    gradient: "bg-transperant",
    textColor: "text-gray-100",
  },
  Silver: {
    gradient: "bg-transperant",
    textColor: "text-gray-200",
  },
  Bronze: {
    gradient: "bg-transperant",
    textColor: "text-red-100",
  },
  NextGen: {
    gradient: "bg-transperant",
    textColor: "text-white",
  },
  Wifi: {
    gradient: "bg-transperant",
    textColor: "text-gray-100",
  },
  "Photography": {
    gradient: "bg-transperant",
    textColor: "text-white",
  },
  "Community Partners": {
    gradient: "bg-transperant",
    textColor: "text-white",
  },
  "After Party": {
    gradient: "bg-transperant",
    textColor: "text-gray-800",
  },
  "Learning Partner": {
    gradient: "bg-transperant",
    textColor: "text-gray-800",
  },
};

// Function to get the tier rank based on the desired hierarchy
const getTierRank = (tier) => {
  switch (tier) {
    case "Platinum":
      return 1;
    case "Gold":
      return 2;
    case "Silver":
      return 3;
    case "Bronze":
      return 4;
    case "Wifi":
      return 5;
    case "NextGen":
      return 6;
    case "Photography":
      return 7;
    case "Community Partners":
      return 8;
    case "After Party":
      return 9;
    case "Learning Partner":
      return 2.5;
    default:
      return 11; // For any undefined tiers
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
  // Sort sponsors by tier rank
  const sortedSponsors = [...sponsors].sort(
    (a, b) => getTierRank(a.tier) - getTierRank(b.tier)
  );

  // Group sponsors by tier
  const groupedSponsors = sortedSponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = (sponsor) => {
    setDescription(sponsor.description || "No description available.");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-5">
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              className="bg-white outline-blue-700 border-blue-700 border-6 rounded-lg shadow-6xl w-11/12 max-w-md p-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <p className="text-center">{description}</p>
              </div>
              <div className="flex justify-center">
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        className="max-w-7xl w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {[
          "Platinum",
          "Gold",
          "Learning Partner",
          "Silver",
          "Bronze",
          "Wifi",
          "NextGen",
          "Photography",
          "Community Partners",
          "After Party",
        ].map((tier) => (
          <div key={tier} className="mb-10">
            <h2 className="text-3xl font-extrabold underline text-center text-emerald-600 mb-6">
              {tier}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              {groupedSponsors[tier]?.map((sponsor) => (
                <motion.div
                  onClick={() => openModal(sponsor)}
                  key={sponsor.id}
                  className={`${
                    tierStyles[sponsor.tier]?.gradient
                  } rounded-lg shadow-2xl p-6 text-center cursor-pointer transition-transform duration-300 transform hover:scale-105 flex flex-col items-center`}
                  variants={item}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }} // Exit transition
                >
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="w-[80vw] h-24 mb-4 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sponsors;
