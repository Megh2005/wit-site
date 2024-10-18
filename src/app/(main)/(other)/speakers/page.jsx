"use client";
import {
  getEsteemedSpeakers,
  getKeynoteSpeakers,
  getPanelSpeakers,
} from "@/queries/speaker";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// Motion variants for arrival animation
const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const SpeakerArriveAnimation = () => {
  const { data: keynoteSpeakers, isLoading: isKeynoteSpeakerLoading } =
    useQuery({
      queryKey: ["keynote-speakers"],
      queryFn: getKeynoteSpeakers,
      staleTime: Infinity,
    });

  const { data: panelSpeakers, isLoading: isPanelSpeakerLoading } = useQuery({
    queryKey: ["panel-speakers"],
    queryFn: getPanelSpeakers,
    staleTime: Infinity,
  });

  const { data: esteemedSpeakers, isLoading: isEsteemedSpeakerLoading } =
    useQuery({
      queryKey: ["esteemed-speakers"],
      queryFn: getEsteemedSpeakers,
      staleTime: Infinity,
    });

  return (
    <>
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-500 text-transparent bg-clip-text pt-[10vh] mb-8">
        Keynote Speaker
      </h1>
      {isKeynoteSpeakerLoading && (
        <div className="w-full flex mt-6 justify-center">
          <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
        </div>
      )}
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
          {keynoteSpeakers?.data.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              className="w-full h-auto flex flex-col items-center justify-center bg-gradient-to-tl from-amber-500 via-teal-500 to-teal-700 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
            >
              {/* Speaker Image */}
              <div className="h-56 w-56 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.speaker}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <div className="text-xl lg:text-2xl sm:text-lg font-extrabold">
                  {speaker.speaker}
                </div>
                <div className="text-lg text-center font-bold sm:text-sm">
                  {speaker.designation}
                </div>

                {/* LinkedIn Icon */}
                <div className="flex gap-6">
                  <a
                    href={speaker.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white hover:text-gray-200"
                  >
                    <img
                      src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1728307847/linkedin_hapjeo.svg"
                      className="w-10 bg-white h-10 lg:w-8 lg:h-8"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-500 text-transparent bg-clip-text pt-[10vh] mb-8">
        Our Panel Speakers
      </h1>
      {isPanelSpeakerLoading && (
        <div className="w-full flex mt-6 justify-center">
          <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
        </div>
      )}
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
          {panelSpeakers?.data.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              className="w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-gray-600 to-black text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
            >
              {/* Speaker Image */}
              <div className="h-56 w-56 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.speaker}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="text-xl lg:text-2xl sm:text-lg font-bold">
                  {speaker.speaker}
                </div>
                <div className="text-lg text-center sm:text-sm">
                  {speaker.designation}
                </div>

                {/* LinkedIn Icon */}
                <div className="flex gap-6">
                  <a
                    href={speaker.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white hover:text-gray-200"
                  >
                    <img
                      src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1728307847/linkedin_hapjeo.svg"
                      className="w-6 bg-white h-6 lg:w-8 lg:h-8"
                    />
                  </a>
                  <a
                    href={speaker.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white hover:text-gray-200"
                  >
                    <FaTwitter
                      fill="#00ACEE"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <h1 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-teal-400 via-teal-500 to-yellow-500 text-transparent bg-clip-text pt-[10vh] mb-8">
        Our Esteemed Speakers
      </h1>
      {isEsteemedSpeakerLoading && (
        <div className="w-full flex mt-6 justify-center">
          <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
        </div>
      )}
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
          {esteemedSpeakers?.data.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              className="w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-green-600 to-slate-900 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
            >
              {/* Speaker Image */}
              <div className="h-56 w-56 sm:h-48 sm:w-48 lg:h-64 lg:w-64 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={speaker.imageUrl}
                  alt={speaker.speaker}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col items-center justify-center mt-4">
                <div className="text-xl lg:text-2xl sm:text-lg font-bold">
                  {speaker.speaker}
                </div>
                <div className="text-lg text-center sm:text-sm">
                  {speaker.designation}
                </div>

                {/* LinkedIn Icon */}
                <div className="flex gap-6">
                  <a
                    href={speaker.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white hover:text-gray-200"
                  >
                    <img
                      src="https://res.cloudinary.com/dmbxx03vp/image/upload/v1728307847/linkedin_hapjeo.svg"
                      className="w-6 bg-white h-6 lg:w-8 lg:h-8"
                    />
                  </a>
                  <a
                    href={speaker.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-white hover:text-gray-200"
                  >
                    <FaTwitter
                      fill="#00ACEE"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SpeakerArriveAnimation;
