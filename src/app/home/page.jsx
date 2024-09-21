"use client";

import Navbar from "@/Components/Navbar";
import Link from "next/link";

const HomePage = () => {
  const tiles = [
    {
      id: 1,
      title: "Rooms",
      description: "Description for Tile 1",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/6_v5lzgu.jpg",
      route: "/room",
    },
    {
      id: 2,
      title: "Agenda",
      description: "Description for Tile 2",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/4_xnuxcr.jpg",
      route: "/agenda",
    },
    {
      id: 3,
      title: "Marketplace",
      description: "Description for Tile 3",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726887645/5_wmlxav.jpg",
      route: "marketplace",
    },
    {
      id: 4,
      title: "Speakers",
      description: "Description for Tile 4",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/1_cqp6nt.jpg",
      route: "/speakers",
    },
    {
      id: 5,
      title: "Games",
      description: "Description for Tile 5",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/3_fczaji.jpg",
      route: "/games",
    },
    {
      id: 6,
      title: "Sponsors",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726852104/2_ffl42v.jpg",
      route: "/sponsors",
    },
    {
      id: 7,
      title: "Profile",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726887543/7_bqkbro.png",
      route: "/profile",
    },
    {
      id: 7,
      title: "Contact Us",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1726888499/8_yhis3a.jpg",
      route: "/contact",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-purple-50 flex justify-center items-center p-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-purple-300 shadow-4xl cursor-pointer rounded-lg p-4 sm:p-6 text-center hover:bg-purple-400 transition duration-300 group"
            >
              <Link href={tile.route}>
                <img
                  src={tile.imageUrl}
                  alt={tile.title}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-contain rounded-md mb-4 transition duration-300"
                />
                <h2 className="text-2xl sm:text-4xl font-bold text-pink-600 mb-2 group-hover:text-yellow-300">
                  {tile.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
