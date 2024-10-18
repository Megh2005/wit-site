"use client";

import { getTreasureHunts } from "@/queries/game";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const TreasureHuntPage = () => {
  const {
    data: games,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["treasure-hunt"],
    queryFn: getTreasureHunts,
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="w-full flex mt-6 justify-center">
        <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex mt-6 justify-center">
        <p className="text-red-500">Something went wrong</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      {games?.data?.map((game, index) => (
        <Link key={index} href={game.route}>
          <div
            className="bg-white shadow-2xl p-8 px-[-4vw] mb-4 rounded-lg flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 border-4 border-blue-700"
            style={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
            }}
          >
            <h2 className="text-3xl text-emerald-600 font-bold mb-2 text-center">
              {game.name}
            </h2>
            <div className="flex text-sm justify-between px-[-2rem] font-semibold gap-6">
              <p className="text-gray-700 capitalize text-lg">
                Status: {game.status}
              </p>
              <p className="text-gray-700 text-lg">
                Target Coins: {game.targetCoins}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TreasureHuntPage;
