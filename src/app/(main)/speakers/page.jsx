"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const speakers = [
  {
    id: 1,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Sangeeta Sinha",
    designation: "AVP, Barclays",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306945/speakers/Sangeeta_Sinha_ppsryr.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sangeeta-sinha-64bb171a",
    twitterUrl: "https://x.com/Sangeet05242788",
  },
  {
    id: 2,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Priya Shaw",
    designation: "Senior Specialist, LTIMindtree",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306945/speakers/Priya_Shaw_bwfsdc.jpg",
    linkedinUrl: "https://www.linkedin.com/in/priya-shaw/",
    twitterUrl: "https://twitter.com/priyashaw260/",
  },
  {
    id: 3,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Amit Malik",
    designation: "Cloud Content Portfolio Lead-AI, Salesforce",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Amit_Malik_te9yno.png",
    linkedinUrl: "https://www.linkedin.com/in/amitmalikus",
    twitterUrl: "https://x.com/amitmalikus",
  },
  {
    id: 4,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Lakhan Meghani",
    designation: "Sr. Salesforce Developer, CUBE84",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Lakhan_Meghani_obnl4l.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lakhan-meghani-003639167/",
    twitterUrl: "https://x.com/Lakhan_sfdc",
  },
  {
    id: 5,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Santanu Boral",
    designation: "Sr. Director - Software Engineering, Concentrix Catalyst",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Santanu_Boral_wtca6v.png",
    linkedinUrl: "https://www.linkedin.com/in/santanuboral/",
    twitterUrl: "https://x.com/santanuboral",
  },
  {
    id: 6,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Paresh Kumar Lalchandani",
    designation: "Senior Salesforce Business System Analyst, Arcserve",
    time: "10:00 AM",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728306944/speakers/Paresh_Kumar_zbtoev.jpg",
    linkedinUrl: "https://www.linkedin.com/in/pareshlalchandani/",
    twitterUrl: "https://x.com/Paresh_Kumar",
  },
];

const keynote = [
  {
    id: 1,
    gradient: "bg-gradient-to-r from-blue-500 to-teal-400",
    speaker: "Arundhati Bhattacharya",
    designation: "Chairperson & CEO, Salesforce India",
    time: "10:00 AM",
    imageUrl: "https://www.witdreamin.com/arundhati.png",
    linkedinUrl: "https://www.linkedin.com/in/arundhati-bhattacharya-salesforce/",
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
        Keynote Speaker
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
          {keynote.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full h-auto flex flex-col items-center justify-center bg-gradient-to-tl from-amber-500 via-purple-500 to-purple-700 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
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
              className="w-full h-auto flex flex-col items-center justify-center bg-gradient-to-r from-gray-600 to-black text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 duration-300"
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
