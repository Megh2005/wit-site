"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";

const Hunt3 = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const {
    data: huntData,
    isLoading: huntLoading,
    isError: huntError,
  } = useQuery({
    queryKey: ["hunt-3"],
    queryFn: async () => {
      const res = await axios.get("/api/games/treasure-hunt/hunt-3");
      return res.data;
    },
    staleTime: Infinity,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axios.post("/api/games/treasure-hunt/hunt-3", {
        huntId: huntData?.data.id,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hunt-3"] });
      queryClient.invalidateQueries({ queryKey: ["treasure-hunt"] });
    },
    onError: (error) => {},
  });

  if (huntLoading) {
    return (
      <div className="flex justify-center mt-6">
        <LoaderCircle className="animate-spin text-black w-6 h-6 " />
      </div>
    );
  }

  if (huntError) {
    return (
      <div className="flex justify-center mt-6">
        <p className="text-red-500">Error loading hunt</p>
      </div>
    );
  }

  if (huntData?.data.status === "closed") {
    return (
      <div className="px-4 py-6">
        <p className="text-center capitalize font-bold text-xl">
          Hunt has been closed
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden h-screen px-4 py-6 justify-center items-center">
      <h1 className="text-center underline font-bold text-xl">
        The Secret Recipe
      </h1>
      <p className="text-center text-lg font-extrabold my-4">
        Assigned Volunteer:{" "}
        <span className="font-bold">{huntData?.data.volunteer.name}</span>
      </p>
      <div className="flex justify-center">
        {huntData?.data.volunteer.id === session?.user.id && (
          <div className="">
            <button
              disabled={isPending}
              onClick={mutate}
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isPending ? (
                <LoaderCircle className="animate-spin text-white w-6 h-6" />
              ) : (
                "Close Hunt"
              )}
            </button>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl text-center underline font-bold my-2">
          Background
        </h2>
        <p className="text-blue-700 text-center font-semibold">
          A famous chef left behind a secret recipe encoded in a strange set of
          ingredients. It is said that the recipe would unlock a vault full of
          culinary secrets, but only if the code is cracked
        </p>
        <h2 className="text-xl font-bold text-center underline my-2">
          Question
        </h2>
        <p className="text-emerald-600 text-center font-semibold">
          Five ingredients, five numbers too. But what they spell is hidden
          from view. Convert them right, from taste to sight, and soon you will
          see the code in flight
        </p>
        <h2 className="text-xl font-bold text-center underline my-2">Clue</h2>
        <p className="text-fuchsia-500 text-center font-semibold">
          The ingredients are: Salt-19, Pepper-16, Olive Oil-9, Vinegar-22,
          Garlic-5. Use the numbers to find letters in the alphabet
        </p>
      </div>
    </div>
  );
};

export default Hunt3;
