"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const elements = [
  { name: "Slogan Symphony", route: "/games/gameone" },
  { name: "Demo Jam", route: "/games/demo-jam" },
  { name: "Find Them All", route: "/games/find-user" },
  { name: "Treasure Hunt", route: "/games/treasure-hunt" },
  { name: "Quiz", route: "/games/quiz" },
];

const tileVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-5 bg-gray-100">
      <h1 className="bg-gradient-to-r text-center text-4xl font-extrabold py-6 from-orange-500 to-blue-700 bg-clip-text text-transparent">
        Games
      </h1>
      <motion.div
        className="grid grid-cols-1 gap-4 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {elements.map((el, index) => (
          <Link href={el.route} key={index}>
            <motion.div
              className="rounded-lg h-40 sm:h-28 w-full flex items-center justify-center text-white font-bold text-2xl cursor-pointer bg-gradient-to-r from-teal-500 via-teal-600 to-blue-700 shadow-lg"
              variants={tileVariants}
              whileHover={{ scale: 1.05 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
            >
              {el.name}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
