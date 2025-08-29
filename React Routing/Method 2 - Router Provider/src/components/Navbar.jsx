import React from "react";
//import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { NavLink,useNavigate } from "react-router-dom"; //we can use active navber using NavLink it's important.

const Navbar = () => {
  const navigate= useNavigate();
  return (
    <nav className="bg-gray-800 shadow-lg">

      {/* for active navbar effect. */}
      <style jsx>{`
        .active {
          color: #64e9f8;
          background: rgba(0, 0, 0, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
      `}</style>

      <div className="container mx-auto px-6 py-3 flex justify-between">
        <span className="font-semibold text-2xl text-white">
          Navbar
        </span>

        <div className="hidden md:flex !items-center">
          <ul className="flex !items-center">
            <li className="mr-6">
              <NavLink
                to="/"
                className="text-xl text-white hover:text-gray-300"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/about"
                className="text-xl text-white hover:text-gray-300"
              >
                About
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/contact"
                className="text-xl text-white hover:text-gray-300"
              >
                Contact
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/product"
                className="text-xl text-white hover:text-gray-300"
              >
                Product
              </NavLink>
            </li>
          </ul>

            {/* <button onClick={()=> navigate('/Navigate')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"></button> //general navigation using logic */}
          <button onClick={()=> navigate('/Navigate', {replace:true})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
