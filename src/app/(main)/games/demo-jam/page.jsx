import React from "react";

const GameTwo = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
        Demo Jam
      </h1>

      <div
        className="strawpoll-embed w-full h-full max-w-lg flex flex-col"
        id="strawpoll_7rnzVxjwlnO"
        style={{
          height: "708px",
          maxWidth: "640px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <iframe
          title="StrawPoll Embed"
          id="strawpoll_iframe_7rnzVxjwlnO"
          src="https://strawpoll.com/embed/7rnzVxjwlnO"
          className="w-full h-full border-none"
          style={{
            position: "static",
            visibility: "visible",
            display: "block",
            width: "100%",
            flexGrow: 1,
          }}
          allowFullScreen
          allowTransparency
        >
          Loading...
        </iframe>
        <script
          async
          src="https://cdn.strawpoll.com/dist/widgets.js"
        ></script>
      </div>
    </div>
  );
};

export default GameTwo;




// "use client";
// import { motion } from "framer-motion";
// const AnimatedText = () => {
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 5,
//       },
//     },
//   };
//   return (
//     <div className="w-full h-screen bg-black flex items-center justify-center">
//       <motion.h1
//         className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r my-[-10vh] from-green-400 to-blue-500 text-transparent bg-clip-text text-center px-4"
//         initial="hidden"
//         animate="visible"
//         variants={textVariants}
//       >
//         Demo Jam Will Start From 17:00
//       </motion.h1>
//     </div>
//   );
// };
// export default AnimatedText;





