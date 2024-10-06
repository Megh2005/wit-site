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
    logo: "https://www2.deloitte.com/content/dam/assets/logos/deloitte.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel finibus est, ac pellentesque leo. Proin convallis, leo sed auctor elementum, nunc ipsum elementum neque, nec finibus quam nibh hendrerit nibh. Sed varius lectus at turpis aliquam, vel rutrum sapien posuere. In mattis et magna ut tempor. Duis nec massa nec nu pretium gravida.",
  },
  {
    id: 2,
    name: "Cognizant",
    tier: "Gold",
    logo: "https://www.witdreamin.com/Cognizant.png",
  },
  {
    id: 3,
    name: "Cloud Fulcrum",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1727465196841-0ebf9253-eed2-44c0-bb86-eb2dc8f23796.png",
  },
  {
    id: 4,
    name: "360 SMS",
    tier: "Silver",
    logo: "https://360smsapp.com/wp-content/uploads/2022/01/logo_b046c853129b1637fa48a6e91c6a7b17_1x.webp",
  },
  {
    id: 5,
    name: "360 SMS",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1726416420491-074a6654-4a7b-4b9e-8436-1b5b8213f152.png",
  },
  {
    id: 6,
    name: "SmartInternz",
    tier: "Silver",
    logo: "https://witblogpic.s3.amazonaws.com/1727465140282-9c85e3cb-3c4e-4012-9646-68768600808e.png",
  },
  {
    id: 7,
    name: "Trailblazex",
    tier: "Bronze",
    logo: "https://www.witdreamin.com/tbx.png",
  },
  {
    id: 8,
    name: "BrinkView",
    tier: "Bronze",
    logo: "https://brinkview.com/wp-content/uploads/2024/01/BV-Logo-1024x483.png",
  },
  // New sponsors
  {
    id: 9,
    name: "PCS Global",
    tier: "NextGen",
    logo: "https://www.witdreamin.com/PCSglobal.png",
    description:
      "NextGen Innovators is leading the way in technological advancements with cutting-edge solutions.",
  },
  {
    id: 10,
    name: "Perigeon",
    tier: "NextGen",
    logo: "https://witblogpic.s3.amazonaws.com/1727465254366-2ea7f7b2-7bd0-4ec0-8077-4c4d35324d01.jpeg",
    description:
      "WiFiConnect ensures seamless and reliable internet connectivity for all your needs.",
  },
  {
    id: 12,
    name: "Copado",
    tier: "Wifi",
    logo: "https://www.witdreamin.com/copado.png",
    description:
      "Copado enhances your Salesforce development lifecycle with seamless CI/CD solutions.",
  },
  {
    id: 13,
    name: "Cyntexa",
    tier: "Pre-Dinner",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUq2lofwjYFAyLCBp1AO9ekt2MEpCoAXXDw&s",
    description:
      "Cyntexa offers innovative IT solutions tailored to your business needs.",
  },
  // Example sponsors for new tiers (Optional)
  {
    id: 14,
    name: "Community Connect",
    tier: "Community Partners",
    logo: "https://www.example.com/community-connect.png",
    description:
      "Community Connect fosters collaboration and growth within the local tech community.",
  },
  {
    id: 15,
    name: "After Party Inc.",
    tier: "After Party",
    logo: "https://www.example.com/after-party.png",
    description:
      "After Party Inc. ensures a memorable end to your events with exceptional services.",
  },
];

// Define gradients and text colors for each tier
const tierStyles = {
  Platinum: {
    gradient: "bg-gradient-to-r from-emerald-700 to-blue-500",
    textColor: "text-gray-100",
  },
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
  NextGen: {
    gradient: "bg-gradient-to-b from-gray-300 to-purple-800",
    textColor: "text-white",
  },
  Wifi: {
    gradient: "bg-gradient-to-r from-teal-500 to-blue-400",
    textColor: "text-gray-100",
  },
  "Pre-Dinner": {
    gradient: "bg-gradient-to-r from-pink-500 to-red-500",
    textColor: "text-white",
  },
  "Community Partners": {
    gradient: "bg-gradient-to-r from-indigo-500 to-teal-400",
    textColor: "text-white",
  },
  "After Party": {
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
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
    case "Pre-Dinner":
      return 7;
    case "Community Partners":
      return 8;
    case "After Party":
      return 9;
    default:
      return 10; // For any undefined tiers
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              className="bg-white rounded-lg shadow-xl w-11/12 max-w-md p-6"
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
          "Silver",
          "Bronze",
          "Wifi",
          "NextGen",
          "Pre-Dinner",
          "Community Partners",
          "After Party",
        ].map((tier) => (
          <div key={tier} className="mb-10">
            <h2 className="text-3xl font-extrabold underline text-center text-gray-800 mb-6">
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
                  <h3
                    className={`${
                      tierStyles[sponsor.tier]?.textColor
                    } text-2xl font-bold mb-2`}
                  >
                    {sponsor.name}
                  </h3>
                  <p
                    className={`${
                      tierStyles[sponsor.tier]?.textColor
                    } font-semibold`}
                  >
                    Tier: {sponsor.tier}
                  </p>
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
