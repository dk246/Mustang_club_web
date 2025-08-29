import React from "react";
import logo from "../assets/images/other/logo.png";

const navItems = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Gallery", to: "#gallery" },
  { name: "Events", to: "#events" },
  { name: "Sponsors", to: "#sponsors" },
  { name: "Contact", to: "#contact" }, // Now scrolls to in-page contact section
];

export default function Navbar() {
  // Smooth scroll handler
  const handleNavClick = (e, to) => {
    if (to.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-indigo-900 text-white px-6 py-2 flex justify-between items-center shadow-lg fixed w-full z-50">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Mustang Club Logo" className="h-14 w-20 mr-4" />
        <span className="text-4xl font-serif font-bold tracking-wide text-indigo-900">
          Mustang Club SL
        </span>
      </div>
      <ul className="flex space-x-8 text-lg">
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
    </nav>
  );
}
