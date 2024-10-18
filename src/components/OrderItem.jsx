import React from "react";
import Image from "next/image";
import productImage from "../../public/assets/product-placeholder.png";
import { useMutation } from "@tanstack/react-query";
import { updateOrderStatus } from "@/queries/order";
import { LoaderCircle } from "lucide-react";
import { CldImage } from "next-cloudinary";

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
        <CldImage
          width="80"
          height="64"
          src={product.image}
          sizes="100vw"
          alt="Product image"
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
              className="text-white bg-gradient-to-r from-teal-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isPending ? (
                <LoaderCircle className="animate-spin text-white w-5 h-5" />
              ) : (
                <span className="text-md ">Deliver</span>
              )}
            </button>
          ) : (
            <span className="z-10 inline-flex items-center justify-center w-[20vw] sm:w-[6vw] cursor-not-allowed px-3 py-1 text-sm font-bold text-white transition-all duration-200 bg-gray-500 border-2 border-transparent rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Delivered
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
