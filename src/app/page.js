"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const handleLoginPage = () => {
    router.push("/login");
  };
  const handleContactPage = () => {
    router.push("/contact");
  };
  const handleRegisterPage = () => {
    router.push("/register");
  };
  const handleHomePage = () => {
    router.push("/home");
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dmbxx03vp/image/upload/v1726831165/bg_b_x4nfmk.png)`, // Set the background image
        backgroundSize: "cover", // Ensure the image covers the entire screen
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
      }}
    >
      <div className="relative uppercase bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8">
          Welcome To WIT Dreamin 2024 <br />
          <span className="text-pink-600  font-extrabold text-6xl space-y-9">
            কলকাতা
          </span>
        </h1>
        {/* Add justify-center to center buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={handleLoginPage}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-purple-500 transition duration-300 w-full md:w-auto"
          >
            Get Started
          </button>
          <button
            onClick={handleContactPage}
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-pink-500 transition duration-300 w-full md:w-auto"
          >
            Quick Contact
          </button>
          <button
            onClick={handleRegisterPage}
            className="bg-red-500 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-4 focus:ring-pink-500 transition duration-300 w-full md:w-auto"
          >
            Register User
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
