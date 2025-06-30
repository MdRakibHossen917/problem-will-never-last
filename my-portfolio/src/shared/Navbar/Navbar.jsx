import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router"; 
import myLogo from "../../assets/myLogo.png";
import { FiDownload, FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img
              className="w-12 h-12 md:w-14 md:h-14 transition-all duration-300 hover:scale-105"
              src={myLogo}
              alt="Website Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
              end
            >
              Home
            </NavLink>
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            <a
              href="/CV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2   bg-blue-600 text-white rounded-md"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "bg-gray-900 text-blue-400"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={closeMenu}
          >
            Contact
          </a>
          <a
            href="/MdRakibHossen_Resume.pdf"
            download="MdRakibHossen_Resume.pdf"
            className="block px-3 py-2 mt-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            onClick={closeMenu}
          >
            <FiDownload className="inline mr-2" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
