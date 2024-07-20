import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import leftLogo from "/Vector.svg";
import rightLogo from "/Ailogo.svg";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuItems = ["About Us", "Resources", "Pricing Plans", "User Reviews"];

  const handleToggleMenu = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  return (
    <header className="w-full p-8 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={leftLogo} alt="left logo" />
          <img src={rightLogo} alt="right logo" />
        </div>
        <button className="lg:hidden text-black text-2xl" onClick={handleToggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden lg:flex justify-center items-center">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="block lg:inline">
                  {item.includes("Resources") ? (
                    <select className="bg-transparent">
                      <option>{item}</option>
                    </select>
                  ) : (
                    item
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex items-center">
          <button className="mr-4 px-5 py-2 bg-[#F9FAFA] rounded-full text-gray-600 border border-[#919495] hover:text-gray-800">
            Login In
          </button>
          <button className="bg-green-600 text-white px-5 py-2 rounded-full">
            Register
          </button>
        </div>
      </div>
      {menuVisible && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col items-center">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#" className="block text-center">
                    {item.includes("Resources") ? (
                      <select className="bg-transparent">
                        <option>{item}</option>
                      </select>
                    ) : (
                      item
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center mt-4">
              <button className="mb-2 px-5 py-2 bg-[#F9FAFA] rounded-full text-gray-600 border border-[#919495] hover:text-gray-800">
                Login In
              </button>
              <button className="bg-green-600 text-white px-5 py-2 rounded-full">
                Register
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
