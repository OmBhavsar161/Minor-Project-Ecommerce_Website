import React from "react";
import { Link, useLocation } from "react-router-dom";
import add_product_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col pt-[30px] gap-[20px] w-[250px] w-max-[250px]  bg-gray-100 font-sriracha">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div
          className={`flex items-center justify-center my-2 mx-[20px] py-[10px] px-[10px] ring-2 gap-[20px] hover:bg-white hover:ring-2 hover:ring-blue-800 ${
            location.pathname === "/addproduct" ? "bg-white ring-2 ring-blue-800" : ""
          }`}
        >
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div
          className={`flex items-center justify-center my-2 mx-[20px] py-[10px] px-[10px] ring-2 gap-[20px] hover:bg-white hover:ring-2 hover:ring-blue-800 ${
            location.pathname === "/listproduct" ? "bg-white ring-2 ring-blue-800" : ""
          }`}
        >
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
