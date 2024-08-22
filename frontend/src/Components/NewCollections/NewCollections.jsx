import React from 'react';
import new_collection from "../Assets/new_collections";
import Item from '../Item/Item';

const NewCollections = () => {
  return (

     
    <div className="flex flex-col items-center gap-[10px] mb-[100px] ml-4 mt-4 ">
      <h1 className="text-4xl font-semibold font-sriracha bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[250px] h-[6px] rounded-full bg-gradient-to-r from-cyan-500 to-lime-500 shadow-lg pb-1" />      
      
     
         <div className="mt-16 grid grid-cols-4 gap-16 gap-y-28 ">{new_collection.map((item, i) => {
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

export default NewCollections;
