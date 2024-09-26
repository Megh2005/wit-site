"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const speakers = [
  {
    id: 1,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Speaker 1",
    title: "Talk Title 1",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker1",
  },
  {
    id: 2,
    gradient: "bg-gradient-to-r from-pink-500 to-purple-500",
    speaker: "Speaker 2",
    title: "Talk Title 2",
    time: "11:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker2",
  },
  {
    id: 3,
    gradient: "bg-gradient-to-r from-green-400 to-blue-500",
    speaker: "Speaker 3",
    title: "Talk Title 3",
    time: "12:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker3",
  },
  {
    id: 4,
    gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    speaker: "Speaker 4",
    title: "Talk Title 4",
    time: "1:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker4",
  },
  {
    id: 5,
    gradient: "bg-gradient-to-r from-red-400 to-pink-400",
    speaker: "Speaker 5",
    title: "Talk Title 5",
    time: "2:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker5",
  },
  {
    id: 6,
    gradient: "bg-gradient-to-r from-indigo-400 to-blue-600",
    speaker: "Speaker 6",
    title: "Talk Title 6",
    time: "3:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker6",
  },
  {
    id: 7,
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    speaker: "Speaker 7",
    title: "Talk Title 7",
    time: "4:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker7",
  },
  {
    id: 8,
    gradient: "bg-gradient-to-r from-green-300 to-lime-400",
    speaker: "Speaker 8",
    title: "Talk Title 8",
    time: "5:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker8",
  },
  {
    id: 9,
    gradient: "bg-gradient-to-r from-red-500 to-yellow-500",
    speaker: "Speaker 9",
    title: "Talk Title 9",
    time: "6:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker9",
  },
  {
    id: 10,
    gradient: "bg-gradient-to-r from-teal-400 to-cyan-500",
    speaker: "Speaker 10",
    title: "Talk Title 10",
    time: "7:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker10",
  },
  {
    id: 11,
    gradient: "bg-gradient-to-r from-yellow-200 to-yellow-400",
    speaker: "Speaker 11",
    title: "Talk Title 11",
    time: "8:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker11",
  },
  {
    id: 12,
    gradient: "bg-gradient-to-r from-pink-600 to-red-600",
    speaker: "Speaker 12",
    title: "Talk Title 12",
    time: "9:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker12",
  },
  {
    id: 13,
    gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    speaker: "Speaker 13",
    title: "Talk Title 13",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker13",
  },
  {
    id: 14,
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
    speaker: "Speaker 14",
    title: "Talk Title 14",
    time: "11:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker14",
  },
  {
    id: 15,
    gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
    speaker: "Speaker 15",
    title: "Talk Title 15",
    time: "12:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker15",
  },
  {
    id: 16,
    gradient: "bg-gradient-to-r from-red-500 to-purple-500",
    speaker: "Speaker 16",
    title: "Talk Title 16",
    time: "1:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker16",
  },
  {
    id: 17,
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
    speaker: "Speaker 17",
    title: "Talk Title 17",
    time: "2:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker17",
  },
  {
    id: 18,
    gradient: "bg-gradient-to-r from-lime-400 to-green-500",
    speaker: "Speaker 18",
    title: "Talk Title 18",
    time: "3:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker18",
  },
  {
    id: 19,
    gradient: "bg-gradient-to-r from-teal-400 to-lime-400",
    speaker: "Speaker 19",
    title: "Talk Title 19",
    time: "4:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker19",
  },
  {
    id: 20,
    gradient: "bg-gradient-to-r from-yellow-400 to-green-400",
    speaker: "Speaker 20",
    title: "Talk Title 20",
    time: "5:00 PM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727320143/logo_prwbqk.png",
    linkedinUrl: "https://linkedin.com/in/speaker20",
  },
];


// Motion variants for arrival animation
const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SpeakerArriveAnimation = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text pt-[10vh] mb-8">
        Our Esteemed Speakers
      </h1>
      <div className="w-full flex items-center justify-center overflow-hidden px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
            >
              {/* Speaker Image */}
              <div className="h-56 w-56 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="text-xl lg:text-2xl sm:text-lg font-bold">
                  {speaker.speaker}
                </div>
                <div className="text-lg sm:text-sm">{speaker.title}</div>

                {/* LinkedIn Icon */}
                <a
                  href={speaker.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-white hover:text-gray-200"
                >
                  <FaLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SpeakerArriveAnimation;
