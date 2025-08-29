import React from "react";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 py-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-32 text-white mt-12 animate-fadeInUp">
      <span className="text-lg font-semibold">Follow Us</span>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-yellow-400 transition-colors text-lg">
          Facebook
        </a>
        <a href="#" className="hover:text-yellow-400 transition-colors text-lg">
          Instagram
        </a>
        <a href="#" className="hover:text-yellow-400 transition-colors text-lg">
          Twitter
        </a>
      </div>
      <span className="text-lg font-semibold">Contact Us</span>
    </footer>
  );
}
