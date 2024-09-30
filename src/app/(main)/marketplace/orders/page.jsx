"use client";

import OrderItem from "@/components/OrderItem";
import { getAllOrders } from "@/queries/order";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";

const Orders = () => {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrders,
    staleTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="w-full flex mt-6 justify-center">
        <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-4 md:mx-6 my-4">
        <h1 className="text-xl font-bold">Orders</h1>
        <div className="mt-4 border border-gray-500 rounded-full w-full overflow-hidden">
          <input
            className="h-full py-2 px-4 outline-none"
            type="text"
            placeholder="Search orders.."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl p-4">
        {orders?.data.map((order) => {
          return <OrderItem key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
