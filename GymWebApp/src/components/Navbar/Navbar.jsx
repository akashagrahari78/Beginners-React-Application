import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="w-full flex items-center justify-between px-6 py-2">
        {/* Left: Phone */}
        <div className="flex items-center space-x-4">
          <FaPhoneAlt color="orange" size={24} />
          <span>+91 123456789</span>
        </div>

        {/* Center: Logo */}
        <div>
          <img src={logo} alt="Fitness Logo" className="h-20" />
        </div>

        {/* Right: Links  */}
        <div className="flex items-center gap-8">
          <ul className="flex space-x-6 text-sm">
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>JOIN</li>
          </ul>
          <MdDarkMode size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
