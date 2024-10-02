"use client";

import BackButton from "@/components/BackButton";

const AddProduct = () => {
  const addProduct = (e) => {
    e.preventDefault();
    console.log("Submit");
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
              className="rounded-md w-full px-4 py-2 border-black border"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div>
            <input
              className="rounded-md w-full px-4 py-2 border-black border"
              type="number"
              placeholder="Product Price"
            />
          </div>
          <div>
            <input
              className="rounded-md w-full px-4 py-2 border-black border"
              type="file"
              accept="image/*"
            />
          </div>
          <div>
            <button
              onClick={(e) => addProduct(e)}
              className="w-full text-white bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
