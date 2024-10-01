import React from "react";
import Image from "next/image";
import productImage from "../../public/assets/product-placeholder.png";
import { useMutation } from "@tanstack/react-query";
import { updateOrderStatus } from "@/queries/order";
import { LoaderCircle } from "lucide-react";

const OrderItem = ({ order, queryClient }) => {
  const { placedBy, product } = order;

  const { isPending, mutate } = useMutation({
    mutationFn: () => updateOrderStatus(order.id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      toast.error(error.response.data.message || "Error updating order status");
    },
  });

  return (
    <div className="flex gap-4 items-start shadow-xl px-4 py-2 rounded-md">
      <div className="w-20 h-16">
        <Image
          className="w-full h-full"
          src={product.image || productImage}
          alt="Product"
        />
      </div>
      <div className="w-full">
        <div>
          <h2 className="font-bold">{product.name}</h2>
        </div>
        <div className="text-gray-600">
          <p>
            Ordered by: <span className="font-bold">{placedBy.name}</span>
          </p>
          <p>
            Email: <span className="font-bold">{placedBy.email}</span>
          </p>
        </div>
        <div className="flex justify-end mt-4">
          {order.status === "deliver" ? (
            <button
              onClick={mutate}
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isPending ? (
                <LoaderCircle className="animate-spin text-white w-5 h-5" />
              ) : (
                <span className="text-md ">Deliver</span>
              )}
            </button>
          ) : (
            <span className="text-sm text-gray-600">Delivered</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
