import React from 'react';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  // Function to format prices with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 shadow-lg rounded-lg">
      {/* Left Section: Image Gallery */}
      <div className="flex flex-col lg:flex-row items-center gap-16 w-full lg:w-2/3">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-2">
          <img src={product.image} alt="Product Thumbnail 1" className="w-full h-20 object-cover border border-gray-300 rounded-md hover:opacity-85" />
          <img src={product.image} alt="Product Thumbnail 2" className="w-full h-20 object-cover border border-gray-300 rounded-md hover:opacity-85" />
          <img src={product.image} alt="Product Thumbnail 3" className="w-full h-20 object-cover border border-gray-300 rounded-md hover:opacity-85" />
          <img src={product.image} alt="Product Thumbnail 4" className="w-full h-20 object-cover border border-gray-300 rounded-md hover:opacity-85" />
        </div>
        {/* Main Image */}
        <div className="flex justify-center">
          <img src={product.image} alt="Product Main" className="w-[500px] object-cover border border-gray-300 rounded-md" />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex flex-col gap-4 w-full lg:w-2/3">
        {/* Product Name */}
        <h1 className="text-3xl font-semibold">{product.name}</h1>

        {/* Star Rating */}
        <div className="flex items-center gap-1">
          <img src={star_icon} alt="Star 1" className="w-6 h-6" />
          <img src={star_icon} alt="Star 2" className="w-6 h-6" />
          <img src={star_icon} alt="Star 3" className="w-6 h-6" />
          <img src={star_icon} alt="Star 4" className="w-6 h-6" />
          <img src={star_dull_icon} alt="Dull Star" className="w-6 h-6" />
          <p className="text-sm text-gray-600">(122)</p>
        </div>

        {/* Price */}
        <div className="flex gap-2 items-center">
          <span className="text-xl line-through text-gray-500">₹{formatPrice(product.old_price)}</span>
          <span className="text-2xl font-bold text-red-600">₹{formatPrice(product.new_price)}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700">demo Description</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mt-10">
          <button className="bg-gray-300 text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 pb-1">-</button>
          <span className="text-xl">1</span>
          <button className="bg-gray-300 text-gray-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400 pb-1">+</button>
        </div>

        {/* Add to Cart Button */}
        <button className="bg-black text-white p-2 rounded-lg mt-10 hover:bg-gray-800 transition-colors w-80">ADD TO CART</button>

        {/* Category and Tags */}
        <p className="text-gray-600 mt-4">
          <span className="font-semibold">Category:</span> TWS
          <span className="ml-4 font-semibold">Tags:</span> Featured, Stylist
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
