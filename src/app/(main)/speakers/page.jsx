"use client";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const speakers = [
  {
    name: "Speaker 1",
    title: "Keynote Speaker",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker1",
  },
  {
    name: "Speaker 2",
    title: "Guest Speaker",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker2",
  },
  {
    name: "Speaker 3",
    title: "Panelist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker3",
  },
  {
    name: "Speaker 4",
    title: "Motivational Speaker",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker4",
  },
  {
    name: "Speaker 5",
    title: "Tech Leader",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker5",
  },
  {
    name: "Speaker 6",
    title: "Entrepreneur",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker6",
  },
  {
    name: "Speaker 7",
    title: "Blockchain Expert",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker7",
  },
  {
    name: "Speaker 8",
    title: "AI Specialist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker8",
  },
  {
    name: "Speaker 9",
    title: "Innovation Strategist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker9",
  },
  {
    name: "Speaker 10",
    title: "Data Scientist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker10",
  },
  {
    name: "Speaker 11",
    title: "Product Manager",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker11",
  },
  {
    name: "Speaker 12",
    title: "Marketing Guru",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker12",
  },
  {
    name: "Speaker 13",
    title: "Design Expert",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker13",
  },
  {
    name: "Speaker 14",
    title: "Business Analyst",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker14",
  },
  {
    name: "Speaker 15",
    title: "Cybersecurity Specialist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker15",
  },
  {
    name: "Speaker 16",
    title: "Cloud Architect",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker16",
  },
  {
    name: "Speaker 17",
    title: "DevOps Engineer",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker17",
  },
  {
    name: "Speaker 18",
    title: "Tech Evangelist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker18",
  },
  {
    name: "Speaker 19",
    title: "Software Architect",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker19",
  },
  {
    name: "Speaker 20",
    title: "AI Researcher",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker20",
  },
  {
    name: "Speaker 21",
    title: "Machine Learning Engineer",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker21",
  },
  {
    name: "Speaker 22",
    title: "Growth Hacker",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker22",
  },
  {
    name: "Speaker 23",
    title: "E-commerce Specialist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker23",
  },
  {
    name: "Speaker 24",
    title: "Fintech Innovator",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker24",
  },
  {
    name: "Speaker 25",
    title: "UX/UI Designer",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker25",
  },
  {
    name: "Speaker 26",
    title: "Startup Founder",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker26",
  },
  {
    name: "Speaker 27",
    title: "Digital Marketer",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker27",
  },
  {
    name: "Speaker 28",
    title: "Growth Strategist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker28",
  },
  {
    name: "Speaker 29",
    title: "SaaS Founder",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker29",
  },
  {
    name: "Speaker 30",
    title: "Venture Capitalist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker30",
  },
  {
    name: "Speaker 31",
    title: "Angel Investor",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker31",
  },
  {
    name: "Speaker 32",
    title: "Innovation Consultant",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker32",
  },
  {
    name: "Speaker 33",
    title: "Creative Director",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker33",
  },
  {
    name: "Speaker 34",
    title: "Brand Strategist",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker34",
  },
  {
    name: "Speaker 35",
    title: "Content Creator",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker35",
  },
  {
    name: "Speaker 36",
    title: "Legal Advisor",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker36",
  },
  {
    name: "Speaker 37",
    title: "Customer Success Manager",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker37",
  },
  {
    name: "Speaker 38",
    title: "Operations Manager",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker38",
  },
  {
    name: "Speaker 39",
    title: "Chief Technology Officer",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker39",
  },
  {
    name: "Speaker 40",
    title: "Corporate Trainer",
    imageUrl:
      "https://res.cloudinary.com/dmbxx03vp/image/upload/v1727231909/photo_glhd7q.png",
    linkedinUrl: "https://linkedin.com/in/speaker40",
  },
];


// Motion variants for arrival animation
const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
              transition: { staggerChildren: 0.2 },
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
                  {speaker.name}
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
