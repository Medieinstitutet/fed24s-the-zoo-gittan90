import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#47240b] text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link
            to="/"
            className="transition-shadow duration-300 hover:shadow-[0_0_10px_4px_rgba(234,179,8,1)]"
          >
            Anna's Zoo
          </Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Hem
          </Link>
          <Link to="Overview" className="hover:text-gray-300">
            Våra djur
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
