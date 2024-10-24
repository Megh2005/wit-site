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
      <div className="my-4 mx-4 md:mx-6">
        <h1 className="text-xl font-bold">Orders</h1>
        <div className="mt-4 rounded-full border border-gray-500 w-full overflow-hidden">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-full py-3 px-4 capitalize outline-none border-none"
            type="text"
            placeholder="Search orders by email.."
          />
        </div>
      </div>
      {isLoading ? (
        <div className="w-full flex mt-6 justify-center">
          <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl p-4">
            {orders?.pages.map((group) => {
              return group?.data?.data?.map((order) => (
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
                <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
              </div>
            </div>
          )}
          <div className="flex justify-center mb-6">
            {hasNextPage && (
              <button
                onClick={fetchNextPage}
                className="text-white bg-gradient-to-r from-gray-800 via-gray-600 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
