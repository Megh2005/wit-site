"use client";
import { getCoinBalance } from "@/queries/coin";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { FcRating } from "react-icons/fc";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";

const HomePage = () => {
  const { data: session } = useSession();
  const isSponsor = session?.user?.role === "sponsor";

  const tiles = [
    {
      id: 1,
      title: "Organizers",
      description: "Description for Tile 1",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714390/icons/ORGANIZER_xyfagv.png",
      route: "/organizers",
      visibleToSponsor: true,
    },
    {
      id: 2,
      title: "Agenda",
      description: "Description for Tile 2",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714390/icons/AGENDA_i1rgtm.png",
      route: "/agenda",
      visibleToSponsor: true,
    },
    // {
    //   id: 3,
    //   title: "Marketplace",
    //   description: "Description for Tile 3",
    //   imageUrl:
    //     "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714986/icons/marketplace_17225443_pntvmx.png",
    //   route: "/marketplace",
    //   visibleToSponsor: false,
    // },
    {
      id: 4,
      title: "Speakers",
      description: "Description for Tile 4",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714389/icons/SPEAKER_fcip4x.png",
      route: "/speakers",
      visibleToSponsor: true,
    },
    {
      id: 8,
      title: "Swag Corner",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729715171/icons/SWAG_agnylg.png",
      route: "/swags",
      visibleToSponsor: false,
    },
    {
      id: 10,
      title: "Notice",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729870486/icons/pinned_4631148_lctlqu.png",
      route: "/notice",
      visibleToSponsor: true,
    },
    // {
    //   id: 5,
    //   title: "Games",
    //   description: "Description for Tile 5",
    //   imageUrl:
    //     "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714389/icons/GAME_drqi91.png",
    //   route: "/games",
    //   visibleToSponsor: false,
    // },
    {
      id: 6,
      title: "Sponsors",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714389/icons/SPONS_gktc9a.png",
      route: "/sponsors",
      visibleToSponsor: true,
    },
    {
      id: 7,
      title: "Profile",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714389/icons/PROFILE_pmxo1h.png",
      route: `/profile/${session?.user?.id}`,
      visibleToSponsor: true,
    },
    {
      id: 9,
      title: "Contact Us",
      description: "Description for Tile 6",
      imageUrl:
        "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729714389/icons/CONTACT_q4ukcd.png",
      route: "/contact",
      visibleToSponsor: true,
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
    staleTime: 10 * 60 * 1000,
  });

  if (!session?.user) {
    return (
      <div>
        <div className="min-h-screen bg-teal-50 flex justify-center items-center">
          <LoaderCircle className="w-8 h-8 animate-spin text-teal-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-teal-50 flex flex-col justify-center items-center">
      <div
        className="w-full h-[20vh] sm:h-[35vh] bg-cover bg-center shadow-lg mb-4"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dmbxx03vp/image/upload/v1728375736/wit-1_kdwa2w.jpg')`,
        }}
      ></div>

      <div className="px-2 justify-between gap-2 flex items-center text-center">
        <div className="bg-gradient-to-r from-gray-900 to-emerald-600 focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 shadow-md transition duration-300 ease-in-out">
          <div className="flex items-center text-base line-clamp-1 sm:text-xl gap-1 justify-center text-white">
            {isLoading ? (
              <LoaderCircle className="w-5 h-5 animate-spin text-white" />
            ) : (
              isSuccess && (
                <div className="flex items-center gap-2">
                  <span>Balance: {coins.data}</span>
                  <FcRating className="w-6 h-6" />
                </div>
              )
            )}
            {isError && (
              <div>
                <span>Error</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-gradient-to-r from-gray-900 to-emerald-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg px-5 py-2.5 text-center mb-2 shadow-md transition duration-300 ease-in-out text-white text-base sm:text-xl"
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="px-8 py-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {session?.user &&
          tiles
            .filter((tile) => (isSponsor ? tile.visibleToSponsor : true))
            .map((tile) => (
              <div
                key={tile.id}
                className="bg-gradient-to-tr from-stone-300 to-green-300 shadow-4xl h-50 w-50 cursor-pointer rounded-lg p-4 sm:p-6 text-center transition duration-300 group flex flex-col items-center justify-center"
              >
                <Link href={tile.route}>
                  <div className="w-full aspect-square flex items-center justify-center overflow-hidden mb-1">
                    <img
                      src={tile.imageUrl}
                      alt={tile.title}
                      className="object-cover w-[5rem] h-[5rem] rounded-md transition duration-300"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-700 mt-2">
                    {tile.title}
                  </h2>
                </Link>
              </div>
            ))}
        {(session?.user?.role === "admin" ||
          session?.user?.role === "sponsor" ||
          session?.user?.role === "volunteer") && (
          <div className="bg-gradient-to-tr from-stone-300 to-green-300 shadow-4xl h-50 w-50 cursor-pointer rounded-lg p-4 sm:p-6 text-center transition duration-300 group flex flex-col items-center justify-center">
            <Link href={"/scan"}>
              <div className="w-full aspect-square flex items-center justify-center overflow-hidden mb-1">
                <img
                  src={
                    "https://res.cloudinary.com/dmbxx03vp/image/upload/v1729716068/icons/QR_aetpil.png"
                  }
                  alt="Scan QR"
                  className="object-cover w-[5rem] h-[5rem] rounded-md transition duration-300"
                />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-700 mt-2">
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
