"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";

const Hunt1 = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const {
    data: huntData,
    isLoading: huntLoading,
    isError: huntError,
  } = useQuery({
    queryKey: ["hunt-1"],
    queryFn: async () => {
      const res = await axios.get("/api/games/treasure-hunt/hunt-1");
      return res.data;
    },
    staleTime: Infinity,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axios.post("/api/games/treasure-hunt/hunt-1", {
        huntId: huntData?.data.id,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hunt-1"] });
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
        <p className="text-center font-bold text-xl">Hunt has been closed</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden h-screen px-4 py-6 justify-center items-center">
      <h1 className="text-center underline font-bold text-xl">
        The Encrypted Map
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
          In the ancient city of Alzara, treasure hunters found a cryptic map
          with a message written in strange symbols. The map is said to lead to
          a lost treasure, but only those who can decode the symbols will find
          their way
        </p>
        <h2 className="text-xl font-bold text-center underline my-2">
          Question
        </h2>
        <p className="text-emerald-600 text-center font-semibold">
          You hold the key to riches untold. But first, unlock the map&apos;s hidden
          fold. A pattern of numbers guides the way, converting letters with
          ease today
        </p>
        <h2 className="text-xl font-bold text-center underline my-2">Clue</h2>
        <p className="text-fuchsia-500 text-center font-semibold">
          The sequence of numbers is 3, 1, 4, 1, 5. Use it as a shift cipher for
          the alphabet, starting from the first letter of the alphabet for the
          first shift
        </p>
      </div>
    </div>
  );
};

export default Hunt1;
