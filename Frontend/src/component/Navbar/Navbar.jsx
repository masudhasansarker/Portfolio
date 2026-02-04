import React, { useState, useEffect } from 'react';
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 py-5 px-6 xl:px-0 ${
        scrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between md:items-center text-white  relative">
        <span className="text-2xl md:text-4xl font-bold tracking-wide">Portfolio</span>

        {/* Menu List */}
        <ul
          className={`${
            menu ? "block" : "hidden"
          } mx-24 py-2 mt-4 font-semibold md:mt-0 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <a href="/">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">
              Home
            </li>
          </a>
          <a href="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">
              About
            </li>
          </a>
          <a href="#Experience">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">
              Experience
            </li>
          </a>
          <a href="#Project">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">
              Project
            </li>
          </a>
          <a href="#Footer">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-green-400">
              Contact
            </li>
          </a>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-0 transition-all duration-300">
          {menu ? (
            <RiCloseLine size={20} onClick={() => setMenu(false)} />
          ) : (
            <RiMenu2Line size={20} onClick={() => setMenu(true)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
