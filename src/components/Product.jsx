"use client";
import Image from "next/image";
import React, { useState } from "react";
import productImage from "../../public/assets/product-placeholder.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductRedeemStatus, redeemProduct } from "@/queries/product";
import { LoaderCircle } from "lucide-react";
import { FcRating } from "react-icons/fc";
import toast from "react-hot-toast";

const Product = ({ product, queryClient }) => {
  const productId = product.id;

  const { isPending, mutate } = useMutation({
    mutationFn: () => redeemProduct(product.id),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({
        queryKey: ["redeemStatus", { productId }],
      });
    },
    onError: (error) => {
      toast.error(error.response.data.message || "Error redeeming product");
    },
  });

  const {
    data: redeemStatus,
    isLoading: isRedeemStatusLoading,
    isError,
  } = useQuery({
    queryKey: ["redeemStatus", { productId }],
    queryFn: () => getProductRedeemStatus(productId),
    staleTime: 10 * 60 * 1000,
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
          <h2>{product.name}</h2>
        </div>
        <div>
          <p className="flex items-center gap-1 ">
            <FcRating />
            {product.price}
          </p>
        </div>
        {!isError && (
          <div className="flex justify-end">
            {isRedeemStatusLoading ? (
              <LoaderCircle className="animate-spin text-purple-500 w-5 h-5" />
            ) : redeemStatus.data ? (
              <div className="px-5 py-2.5 text-center me-2 mb-2 text-sm cursor-not-allowed rounded-md bg-gradient-to-r from-slate-700 via-gray-600 to-gray-800 font-bold text-white">
                Redeemed
              </div>
            ) : parseInt(product.quantity) > 0 ? (
              <button
                disabled={isPending}
                onClick={() => mutate()}
                className="text-white bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {isPending ? (
                  <LoaderCircle className="animate-spin text-white w-5 h-5" />
                ) : (
                  <span className="text-md ">Redeem</span>
                )}
              </button>
            ) : (
              <div className="px-5 py-2.5 text-center me-2 mb-2 text-sm cursor-not-allowed rounded-md bg-gray-400 font-bold text-white">
                Out of Stock
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
