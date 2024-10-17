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
    <div className="px-4 py-6">
      <h1 className="text-center font-bold text-xl">Hunt 1</h1>
      <p className="text-center text-lg my-4">
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
        <h2 className="text-xl font-bold my-2">Story</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero unde
          expedita dolorum laborum cumque aspernatur alias, doloribus voluptatem
          perferendis! Atque enim molestias molestiae officia nulla ea aperiam
          consequatur, sunt aut velit pariatur nam ipsa animi tenetur
          perferendis culpa libero itaque amet, fugit nesciunt quasi! Numquam
          tempore animi atque totam omnis?
        </p>
        <h2 className="text-xl font-bold my-2">Question</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, at?
        </p>
      </div>
    </div>
  );
};

export default Hunt1;
