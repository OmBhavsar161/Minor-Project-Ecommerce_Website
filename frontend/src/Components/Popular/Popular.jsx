import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] ml-4 mt-4">
      <h1 className="text-4xl font-semibold font-sriracha bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
        OUR POPULAR PRODUCTS
      </h1>

      <hr className="w-[300px] h-[6px] rounded-full bg-gradient-to-r from-cyan-500 to-lime-500 shadow-lg" />
      <div className="mt-20 flex gap-16">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
