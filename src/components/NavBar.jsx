import React, { useState } from "react";
import logo from "../assets/images/other/logo.png";

const navItems = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Gallery", to: "#gallery" },
  { name: "3D Car", to: "#threeD" },
  { name: "Events", to: "#events" },
  { name: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e, to) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-900 text-white px-3 md:px-6 py-1 md:py-2 flex justify-between items-center shadow-lg fixed w-full z-50 h-14 md:h-auto">
      <div className="flex items-center space-x-2">
        {/* Logo is smaller on mobile */}
        <img
          src={logo}
          alt="Mustang Club Logo"
          className="h-8 w-12 md:h-14 md:w-20 mr-2 md:mr-4"
        />
        <span className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-indigo-900">
          Mustang Club SL
        </span>
      </div>
      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.to}
              className="hover:text-cyan-400 transition-colors duration-200"
              onClick={(e) => handleNavClick(e, item.to)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center px-2 py-1 rounded text-indigo-900 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-indigo-900 text-white flex flex-col shadow-lg md:hidden z-50">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.to}
                className="block px-4 py-3 border-b border-indigo-800 hover:bg-indigo-700 hover:text-yellow-400 transition-colors text-base"
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
