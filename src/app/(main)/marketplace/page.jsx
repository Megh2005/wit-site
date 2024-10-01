"use client";

import Product from "@/components/Product";
import { getAllProducts } from "@/queries/product";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import React from "react";

const Marketplace = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="w-full flex mt-6 justify-center">
        <LoaderCircle className="animate-spin text-purple-500 w-6 h-6" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl p-4">
      {products?.data.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            queryClient={queryClient}
          />
        );
      })}
    </div>
  );
};

export default Marketplace;
