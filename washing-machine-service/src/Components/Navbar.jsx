import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import {  NavLink } from 'react-router';

const links = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/category">Services</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
  </>
);

           
const Navbar = () => {
  
    
    return (
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <p className="  text-xl">
            <img
              className="lg:w-25 lg:h-22 w-25 h-20     "
              src="https://i.ibb.co.com/4n52QJnP/Chat-GPT-Image-May-11-2025-02-30-08-PM.png"
              alt=""
            />
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        
        <div className="navbar-end">
          <a
            href="https://wa.me/8801814732849"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-green-500 text-white rounded-3xl"
          >
            <FaWhatsapp size={20} />
            Contact
          </a>
        </div>
      </div>
    );
};

export default Navbar;