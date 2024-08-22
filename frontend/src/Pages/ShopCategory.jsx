import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import allProductData from "../Components/Assets/all_product.js"; // Renamed to avoid conflict

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Ensure this is correctly provided in ShopContext
  return (
    <div className="">
      <div className="flex my-4 mx-[170px] justify-between items-center">
  <p>
    <span className="font-semibold">Showing 1-12</span> out of 36 product
  </p>
  <div className="flex items-center py-3 px-4 rounded-full ring-2 ring-gray-600 hover:bg-gray-200">
    <span>sort by</span>
    <img src={dropdown_icon} alt="dropdown" className="ml-2" />
  </div>
</div>

      <div className="my-10 mx-20 grid grid-cols-4 gap-y-20 ">
        {all_product?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center my-[150px] mx-auto w-[233px] h-[69px] rounded-full bg-slate-200 text-zinc-800 font-medium hover:text-black hover:bg-slate-300">Explore More</div>
    </div>
  );
};

export default ShopCategory;
