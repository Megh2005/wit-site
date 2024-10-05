"use client";

import BackButton from "@/components/BackButton";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: null,
    quantity: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const addProduct = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.image) return;

    setSubmitting(true);

    const formData = new FormData();
    formData.set("name", product.name);
    formData.set("price", product.price);
    formData.set("quantity", product.quantity);
    formData.set("image", product.image);

    try {
      const res = await axios.post("/api/product/add", formData);

      if (res.data.success) {
        toast.success("Product added successfully");
        setProduct({
          name: "",
          price: "",
          image: null,
          quantity: "",
        });
      }
    } catch (error) {
      toast.error("Failed to add product");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <BackButton />
      <div className="mt-6 flex justify-center min-h-[80vh] items-center px-4">
        <form className="flex flex-col gap-6 border border-gray-400 p-4 rounded-md shadow-xl">
          <div>
            <h1 className="text-center text-xl">Add a new product</h1>
          </div>
          <div>
            <input
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div>
            <input
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="number"
              placeholder="Product Price"
            />
          </div>
          <div>
            <input
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="number"
              placeholder="Quantity"
            />
          </div>
          <div>
            <input
              onChange={(e) =>
                setProduct({ ...product, image: e.target.files[0] })
              }
              className="rounded-md w-full px-4 py-2 border-black border"
              type="file"
              accept="image/*"
            />
          </div>
          <div>
            <button
              disabled={submitting}
              onClick={(e) => addProduct(e)}
              className="flex justify-center w-full text-white bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {submitting ? (
                <LoaderCircle className="animate-spin text-white w-6 h-6 mr-2" />
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
