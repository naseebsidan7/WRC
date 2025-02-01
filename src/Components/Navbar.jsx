import React, { useContext, useState } from "react";
import { ThemeContext } from "../utils/ThemeContext";

import { Menu, X } from "lucide-react";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [activeLink, setActiveLink] = useState("#header");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#header" },
    { name: "Races", path: "#races" },
    { name: "Standings", path: "#standings" },
    { name: "News", path: "#news" },
    { name: "Contacts", path: "#contacts" },
  ];

  return (
    <nav className="flex justify-between font-inter items-center px-6 py-4 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md">
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="WRC Logo" className="h-[50px] w-[50px]" />
      </a>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-6 text-black dark:text-white bg-navbar-white dark:bg-navbar px-1 py-1 rounded-[15px] border border-[#1C1E21]">
        {navLinks.map(({ name, path }) => (
          <li
            key={name}
            onClick={() => setActiveLink(path)}
            className={`px-6 py-3 rounded-[13px] transition ${
              activeLink === path ? "bg-activeWhite text-black" : ""
            }`}
          >
            <a href={path}>{name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X size={32} className="text-black dark:text-white" />
        ) : (
          <Menu size={32} className="text-black dark:text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-white dark:bg-black flex flex-col items-center py-4 shadow-lg md:hidden">
          {navLinks.map(({ name, path }) => (
            <a
              key={name}
              href={path}
              onClick={() => {
                setActiveLink(path);
                setMenuOpen(false);
              }}
              className={`w-full text-center py-3 ${
                activeLink === path ? "bg-activeWhite text-black" : "text-black dark:text-white"
              }`}
            >
              {name}
            </a>
          ))}
        </div>
      )}

      {/* Theme Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
        <img src={darkMode ? Moon : Sun} alt="Theme Toggle" className="h-[45px] w-[45px]" />
      </button>
    </nav>
  );
};

export default Navbar;
