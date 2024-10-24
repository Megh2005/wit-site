"use client";
import React from "react";
import Link from "next/link"; // Import Next.js Link
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const organizers = [
  {
    id: 1,
    name: "Khyati Mehta",
    post: "Co-founder & Organiser of WIT Dreamin'",
    designation:
      "Sr. Salesforce Developer | Salesforce Marketing Champion | Trailblazer Community Forum Ambassasor | Featured on Salesforce Blog | Speaker | Trailhead Mentor | Hosts Podcast in India | Led Initiatives in India | Traveller | Classical Dancer",
    imageUri:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728367617/speakers/khyati_oy240f.png",
    twitterUri: "https://x.com/khyatu07",
    linkedinUri: "https://www.linkedin.com/in/khyati-mehta-25505b130/",
  },
  {
    id: 2,
    name: "Neetu Bansal",
    post: "Co-founder & Organiser of WIT Dreamin'",
    designation:
      "Technical Architect | Salesforce MVP | Salesforce Trailblazer | Jaipur Women in Technology Leader | Adventurer | Traveller",
    imageUri:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728367887/speakers/neetu_wzc1zf.png",
    twitterUri: "https://x.com/NeetuBansal5",
    linkedinUri: "https://www.linkedin.com/in/neetubansal5/",
  },
];

const OrganizersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8 overflow-x-hidden">
      {/* Gradient Heading with Larger Font */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-center mb-12 pb-6 bg-gradient-to-r from-teal-500 via-pink-500 to-red-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Organisers
      </motion.h1>

      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {organizers.map((organizer) => (
          <OrganizerCard key={organizer.id} organizer={organizer} />
        ))}
      </motion.div>
    </div>
  );
};

const OrganizerCard = ({ organizer }) => {
  return (
    <motion.div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full box-border">
      <div className="p-6 flex flex-col items-center w-full">
        <img
          src={organizer.imageUri}
          alt={organizer.name}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mb-4"
        />
        <h2 className="text-xl sm:text-2xl font-extrabold">{organizer.name}</h2>
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          {organizer.post}
        </h2>
        <p className="text-base text-center sm:text-lg text-gray-600">
          {organizer.designation}
        </p>
        <div className="flex space-x-8 mt-6">
          {/* Social icons that open the links */}
          <button
            onClick={() => window.open(organizer.twitterUri, "_blank")}
            className="text-blue-500"
          >
            <FaTwitter size={28} />
          </button>
          <button
            onClick={() => window.open(organizer.linkedinUri, "_blank")}
            className="text-blue-700"
          >
            <FaLinkedin size={28} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrganizersPage;
