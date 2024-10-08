"use client";
import { getCoinBalance } from "@/queries/coin";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FcRating } from "react-icons/fc";
import Link from "next/link";

const HomePage = () => {
  const { data: session } = useSession();

  const tiles = [
    {
      id: 1,
      title: "Organizers",
      description: "Description for Tile 1",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728310813/An_organizer_in_a_serious_official_theme_with_a_female_and_two_additional_people_aceros.jpg",
      route: "/organizers",
    },
    {
      id: 2,
      title: "Agenda",
      description: "Description for Tile 2",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728228627/A_serious_themed_agenda_image_l8bivk.jpg",
      route: "/agenda",
    },
    {
      id: 3,
      title: "Marketplace",
      description: "Description for Tile 3",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728228724/Marketplace_and_online_shop_with_a_modern_theme_ylxbr5.jpg",
      route: "/marketplace",
    },
    {
      id: 4,
      title: "Speakers",
      description: "Description for Tile 4",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728228811/Speakers_and_lectures_in_a_modern_theme_ycayam.jpg",
      route: "/speakers",
    },
    {
      id: 5,
      title: "Games",
      description: "Description for Tile 5",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728228891/online_and_virtual_games_in_modern_theme_tqpwxi.jpg",
      route: "/games",
    },
    {
      id: 6,
      title: "Sponsors",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728229138/sponsors_and_sponsorship_in_serious_official_theme_hybko8.jpg",
      route: "/sponsors",
    },
    {
      id: 7,
      title: "Profile",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728229221/user_profile_icons_in_a_serious_official_theme_neepb1.jpg",
      route: `/profile/${session?.user?.id}`,
    },
    {
      id: 8,
      title: "Contact Us",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728229300/Contact_Us_in_a_serious_official_theme_a5kqji.jpg",
      route: "/contact",
    },
  ];

  const {
    data: coins,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["coin-balance"],
    queryFn: getCoinBalance,
    staleTime: 2 * 60 * 1000,
  });

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col justify-center items-center p-8">
      <div className="mb-4 justify-center items-center text-center">
        {isSuccess && (
          <p className="bg-gradient-to-r from-gray-900 to-emerald-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 shadow-md transition duration-300 ease-in-out">
            <p className="flex items-center gap-1 text-2xl justify-center text-white">
              <span>Balance :</span>
              <span>{coins.data}</span>
              <FcRating className="text-2xl" />
            </p>
          </p>
        )}

        {/* Loading State */}
        {isLoading && (
          <p className="text-center text-gray-600 text-sm">
            <span className="loader mr-2"></span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-purple-300 shadow-4xl h-50 w-50 cursor-pointer rounded-lg p-4 sm:p-6 text-center hover:bg-purple-400 transition duration-300 group"
          >
            <Link href={tile.route}>
              <div className="w-full aspect-square overflow-hidden mb-1">
                <img
                  src={tile.imageUrl}
                  alt={tile.title}
                  className="object-cover w-full h-full rounded-md transition duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mb-[-10px] group-hover:text-blue-800">
                {tile.title}
              </h2>
            </Link>
          </div>
        ))}
        {(session?.user?.role === "admin" ||
          session?.user?.role === "sponsor") && (
          <div className="bg-purple-300 shadow-4xl h-50 w-50 cursor-pointer rounded-lg p-4 sm:p-6 text-center hover:bg-purple-400 transition duration-300 group">
            <Link href={"/scan"}>
              <div className="w-full aspect-square overflow-hidden mb-1">
                <img
                  src={
                    "https://res.cloudinary.com/dmbxx03vp/image/upload/v1728374392/WIT_rtsrnp.png"
                  }
                  alt="Scan QR"
                  className="object-cover w-full h-full rounded-md transition duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 mb-[-10px] group-hover:text-blue-800">
                Scan QR
              </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
