import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import smartwatch from "../Assets/smartwatchimg.png";
import headphone from "../Assets/headphonesimg.png";
import tws from "../Assets/tws.png";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { getTotalCartItems } = useContext(ShopContext);

  // Toggle main menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsSubmenuOpen(false); // Close submenu when toggling the main menu
  };

  // Toggle submenu visibility
  const toggleSubmenu = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsSubmenuOpen((prev) => !prev);
  };

  // Close menu and submenu if clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsSubmenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to determine if a menu item is active
  const isActive = (path) => {
    return location.pathname === path ? "border-b-2" : "text-white";
  };

  // Handle product link click and close submenu
  const handleProductClick = (path) => {
    navigate(path);
    setIsSubmenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar bg-gray-500" ref={menuRef}>
      <div className="navbar-start">
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
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <button className={isActive("/")}>Home</button>
                </Link>
              </li>
              <li>
                <button onClick={toggleSubmenu}>Products</button>
                {isSubmenuOpen && (
                  <ul className="p-2 w-48 bg-white absolute left-0 top-full z-50 shadow-lg rounded-xl">
                    <li>
                      <button onClick={() => handleProductClick("/smartwatch")}>
                        Smart Watch
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleProductClick("/headphones")}>
                        Headphones
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleProductClick("/tws")}>
                        TWS
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/newlaunches" onClick={() => setIsMenuOpen(false)}>
                  <button className={isActive("/newlaunches")}>
                    New Launches
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={() => setIsMenuOpen(false)}>
                  <button className={isActive("/support")}>Support</button>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="flex justify-center items-center gap-4 lg:gap-10 pl-4">
          <img
            src={logo}
            alt="Logo"
            className="hidden md:block w-10 md:w-24 lg:w-16"
          />
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <p className="text-2xl lg:text-4xl font-sriracha text-white cursor-pointer">
              Voice
            </p>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Desktop Menu */}
        <ul className=" menu-horizontal px-1 space-x-20 text-white text-lg">
          <li>
            <Link to="/">
              <button className={isActive("/")}>Home</button>
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsSubmenuOpen(true)}
            onMouseLeave={() => setIsSubmenuOpen(false)}
            className="relative"
          >
            <button className={isActive("/products")}>Products</button>
            {isSubmenuOpen && (
              <ul className="menu p-2 w-80 bg-white text-black ring-2 ring-blue-400 absolute left-0 top-full z-50 shadow-lg rounded-xl text-xl">
                <li>
                  <button onClick={() => handleProductClick("/smartwatch")}>
                    <div className="flex items-center gap-10 py-4">
                      <img src={smartwatch} alt="Smart Watch" className="w-16" />
                      Smart Watch
                    </div>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleProductClick("/headphones")}>
                    <div className="flex items-center gap-10 py-4">
                      <img src={headphone} alt="Headphones" className="w-16" />
                      Headphones
                    </div>
                  </button>
                </li>
                <li>
                  <button onClick={() => handleProductClick("/tws")}>
                    <div className="flex items-center gap-10 py-4">
                      <img src={tws} alt="TWS" className="w-16" />
                      TWS
                    </div>
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/newlaunches">
              <button className={isActive("/newlaunches")}>New Launches</button>
            </Link>
          </li>
          <li>
            <Link to="/support">
              <button className={isActive("/support")}>Support</button>
            </Link>
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
            <div className="relative">
              <img
                src={cart_icon}
                alt="Cart Icon"
                className="pr-2 w-8 lg:w-10 filter grayscale invert"
              />
              <div className="absolute top-0 right-0 flex w-4 h-4 lg:w-6 lg:h-6 justify-center items-center bg-red-600 text-white lg:-mt-2 lg:-mr-2 -mt-1 -mr-1 rounded-full">
                {getTotalCartItems()}
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
