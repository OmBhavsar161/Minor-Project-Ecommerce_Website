import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/delete_icon.svg";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="grid grid-cols-6 gap-4 font-semibold text-gray-700 border-b pb-4 border-gray-300">
        <p className="text-left pl-4">Products</p>
        <p className="text-left">Title</p>
        <p className="text-left ml-4">Price</p>
        <p className="text-left">Quantity</p>
        <p className="text-left">Total</p>
        <p className="text-left">Remove</p>
      </div>
      <hr className="my-4 border-gray-300" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="grid grid-cols-6 gap-4 items-center py-4 border-b border-gray-300">
              <img src={e.image} alt={e.name} className="w-24 object-cover rounded-md" />
              <p className="text-gray-800 font-medium">{e.name}</p>
              <p className="text-gray-800 font-medium ml-4">₹{formatPrice(e.new_price)}</p>
              <button className="ml-2 w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 font-medium text-lg ">{cartItems[e.id]}</button>
              <p className="text-gray-800 font-medium">₹{formatPrice(e.new_price * cartItems[e.id])}</p>
              <img
                src={remove_icon}
                alt="Remove"
                className="w-6 h-6 cursor-pointer hover:text-red-600 transition-colors ml-4"
                style={{ filter: "invert(26%) sepia(76%) saturate(7457%) hue-rotate(345deg) brightness(98%) contrast(101%)" }}
                onClick={() => removeFromCart(e.id)}
              />
            </div>
          );
        }
        return null;
      })}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">If you have a promo code, enter it here:</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition-colors">
              Submit
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Cart Totals</h1>
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>₹{formatPrice(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="flex justify-between text-gray-600">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
          </div>
          <div className="flex justify-between items-center mt-4 text-gray-800 font-semibold">
            <h3 className="text-lg">Total</h3>
            <h3 className="text-lg">₹{formatPrice(getTotalCartAmount())}</h3>
          </div>
          <button className="w-full bg-green-600 text-white uppercase py-3 px-4 mt-6 rounded-lg hover:bg-green-700 transition-colors">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
