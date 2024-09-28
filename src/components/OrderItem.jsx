import React from "react";
import Image from "next/image";
import productImage from "../../public/assets/product-placeholder.png";

const OrderItem = ({ order }) => {
  const { placedBy, product } = order;

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
        <div className="flex justify-end mt-2">
          {order.status === "deliver" ? (
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Deliver
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
