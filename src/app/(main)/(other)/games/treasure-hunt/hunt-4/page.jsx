"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";

const Hunt4 = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  const {
    data: huntData,
    isLoading: huntLoading,
    isError: huntError,
  } = useQuery({
    queryKey: ["hunt-4"],
    queryFn: async () => {
      const res = await axios.get("/api/games/treasure-hunt/hunt-4");
      return res.data;
    },
    staleTime: Infinity,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axios.post("/api/games/treasure-hunt/hunt-4", {
        huntId: huntData?.data.id,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hunt-4"] });
      queryClient.invalidateQueries({ queryKey: ["treasure-hunt"] });
    },
    onError: (error) => {},
  });

  if (huntLoading) {
    return (
      <div className="flex justify-center mt-6">
        <LoaderCircle className="animate-spin text-teal-500 w-6 h-6 " />
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
        The Clock Tower
      </h1>
      <p className="text-center text-lg font-extrabold my-4">
        Assigned Volunteer:{" "}
        <span className="font-bold">{huntData?.data.volunteer.name}</span>
      </p>
      <div className="flex justify-center">
        {huntData?.data.volunteer.id === session?.user.id && (
          <div className="flex flex-col items-center">
            <button
              disabled={isPending}
              onClick={mutate}
              className="text-white bg-gradient-to-r from-teal-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isPending ? (
                <LoaderCircle className="animate-spin text-white w-6 h-6" />
              ) : (
                "Close Hunt"
              )}
            </button>
            <p className="text-center text-lg font-extrabold my-4">
              Answer: <span className="font-bold">{huntData?.data.answer}</span>
            </p>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-xl text-center underline font-bold my-2">
          Background
        </h2>
        <p className="text-blue-700 text-center font-semibold">
          In the town of Rivenmoor, an old clock tower was said to hide the key
          to an ancient mystery. Inside, a note was found on the face of the
          clock, with a set of strange, mixed-up letters. The town elders say
          the clue lies within the workings of time itself.
        </p>
        <h2 className="text-xl font-bold text-center underline my-2">
          Question
        </h2>
        <p className="text-emerald-600 text-center font-semibold">
          Time ticks, but words do not rhyme. Arrange the letters according to
          time. Start at midnight, and go around. The correct order will soon be
          found.
        </p>
        <h2 className="text-xl font-bold text-center underline my-2">Clue</h2>
        <p className="text-fuchsia-500 text-center font-semibold">
          The scrambled letters are:{" "}
          <span className="italic text-red-600">KLOCCOTWERTI</span>
          <br /> Arrange them as if the hands of a clock guided their order.
        </p>
      </div>
    </div>
  );
};

export default Hunt4;
