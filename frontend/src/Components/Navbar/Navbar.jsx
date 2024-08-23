import React, { useState, useEffect, useRef } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import smartwatch from "../Assets/smartwatchimg.png";
import headphone from "../Assets/headphonesimg.png";
import tws from "../Assets/tws.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for the menu element

  // Toggle main menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSubmenuOpen(false); // Close submenu when toggling main menu
  };

  // Toggle submenu visibility
  const toggleSubmenu = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsSubmenuOpen((prev) => !prev);
  };

  // Close menu if clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-gray-500">
      <div className="navbar-start" ref={menuRef}>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu} // Toggle the menu on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <li>
              <button>Home</button>
            </li>
            <li>
              <button onClick={toggleSubmenu}>Products</button>
              {isSubmenuOpen && (
                <ul className="p-2 w-48 bg-white">
                  <li>
                    <button>Smart Watch</button>
                  </li>
                  <li>
                    <button>Headphones</button>
                  </li>
                  <li>
                    <button>TWS</button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button>New Launches</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4 lg:gap-10 pl-4">
          <img
            src={logo}
            alt="Logo"
            className="hidden md:block w-10 md:w-24 lg:w-16"
          />
          <Link to="/"><p className="text-2xl lg:text-4xl font-sriracha text-white cursor-pointer">Voice</p></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 space-x-6 text-white text-lg">
        <Link to="/">
          <li>
          
            <button>
              Home
            </button>
            
          </li>
          </Link>
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2 w-72 bg-white text-black ring-2 ring-blue-400">
                <li>
                  <Link to="/smartwatch">
                    <button className="flex items-center gap-10 py-4">
                      <img
                        src={smartwatch}
                        alt="Smart Watch"
                        className="w-16"
                      />
                      Smart Watch
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/headphones">
                    <button className="flex items-center gap-10 py-4">
                      <img src={headphone} alt="Headphones" className="w-16" />
                      Headphones
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/tws">
                    <button className="flex items-center gap-10 py-4">
                      <img src={tws} alt="TWS" className="w-16" />
                      TWS
                    </button>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/newlaunches"><button>New Launches</button></Link>
          </li>
          <li>
            <button>Support</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4 lg:space-x-8 pr-6">
        <Link to="/login">
          <button className="bg-slate-200 lg:px-4 lg:py-2 px-4 py-1 rounded-2xl lg:active:bg-slate-300 lg:active:text-black active:bg-gray-700 active:text-white lg:hover:ring-4 lg:hover:ring-blue-600 transition-all ease-linear">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <button className="p-2 hover:bg-gray-600 hover:bg-opacity-30 rounded-lg transition-all ease-out delay-50">
            <div className="relative ">
              <img
                src={cart_icon} 
                alt="Cart Icon"
                className="pr-2 w-8 lg:w-10 filter grayscale invert"
              />
              <div className="absolute top-0 right-0 flex w-4 h-4 lg:w-6 lg:h-6 justify-center items-center bg-red-600 text-white lg:-mt-2 lg:-mr-2 -mt-1 -mr-1 rounded-full">
                0
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Products</li>
        <li>New Launches</li>
        <li>Support</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div> */
}
