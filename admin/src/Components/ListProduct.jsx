import React, { useEffect, useState } from "react";
import delete_icon from '../assets/delete_icon.svg'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id })
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      if (result.success) {
        console.log("Product removed successfully");
        // Optionally, refetch products or update the state
        await fetchInfo(); // Assuming fetchInfo is defined elsewhere
      } else {
        console.error("Failed to remove product");
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };
  

  return (
    <div className="list-product max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">All Products List</h1>
      <p className="text-lg font-semibold mb-4">Total items available: {allproducts.length}</p>
      <div className="listproduct-format-main grid grid-cols-6 gap-4 py-2 bg-gray-100 text-gray-700 font-semibold">
        <p>Product Image</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p className="ml-16">Remove</p>
      </div>
      <div className="listproduct-allproducts">
        {allproducts.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No products available</p>
        ) : (
          allproducts.map((product, index) => (
            <div key={index} className="listproduct-formatemain grid grid-cols-6 gap-4 py-4 border-b border-gray-200 hover:bg-gray-50">
              <div className="flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md mr-16"/>
              </div>
              <p className="text-gray-900 flex items-center">{product.name}</p>
              <p className="text-gray-600 flex items-center ">₹{product.old_price}</p>
              <p className="text-gray-900 font-semibold flex items-center ">₹{product.new_price}</p>
              <p className="text-gray-500 capitalize flex items-center ">{product.category}</p>
              <button onClick={() => removeProduct(product.id)}  className="flex items-center justify-center p-2 hover:bg-red-100 rounded-full">
                <img src={delete_icon} alt="Delete" className="w-6 h-6"/>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListProduct;
