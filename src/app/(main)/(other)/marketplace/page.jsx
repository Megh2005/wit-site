"use client";

import Product from "@/components/Product";
import { getAllProducts } from "@/queries/product";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Marketplace = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="w-full flex mt-6 justify-center">
        <LoaderCircle className="animate-spin text-teal-500 w-6 h-6" />
      </div>
    );
  }

  return (
    <div>
      <div className="mt-4 mb-2 gap-10 flex justify-center">
        {session?.user?.role === "admin" && (
          <Link href={"/add-product"}>
            <button className="text-white bg-gradient-to-r from-teal-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Add product
            </button>
          </Link>
        )}
        {(session?.user?.role === "admin" ||
          session?.user?.role === "store-volunteer") && (
          <Link href={"/marketplace/orders"}>
            <button className="text-white bg-gradient-to-r from-teal-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              My Orders
            </button>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-xl p-4">
        {products?.data.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Marketplace;
