"use client";

import OrderItem from "@/components/OrderItem";
import { getAllOrders } from "@/queries/order";
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "use-debounce";

const Orders = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 350);

  const queryClient = useQueryClient();

  const {
    data: orders,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["orders", { debouncedQuery }],
    queryFn: ({ pageParam }) =>
      getAllOrders({
        pageParam,
        query: debouncedQuery,
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage?.data?.lastDoc) {
        return lastPage.data.lastDoc;
      }
      return undefined;
    },
    staleTime: 10 * 60 * 1000,
  });

  return (
    <div>
      <div className="mx-4 md:mx-6 my-4">
        <h1 className="text-xl font-bold">Orders</h1>
        <div className="mt-4 border border-gray-500 rounded-full w-full overflow-hidden">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-full py-2 px-4 outline-none"
            type="text"
            placeholder="Search orders by email.."
          />
        </div>
      </div>
      {isLoading ? (
        <div className="w-full flex mt-6 justify-center">
          <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl p-4">
            {orders?.pages.map((group) => {
              return group.data.data.map((order) => (
                <OrderItem
                  key={order.id}
                  order={order}
                  queryClient={queryClient}
                />
              ));
            })}
          </div>
          {isFetchingNextPage && (
            <div className="my-4">
              <div className="flex justify-center">
                <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
              </div>
            </div>
          )}
          <div className="flex justify-center mb-6">
            {hasNextPage && (
              <button
                onClick={fetchNextPage}
                className="p-2 bg-black text-white"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
