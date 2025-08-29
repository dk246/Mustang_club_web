import React from "react";

export default function Gallery() {
  return (
    <div className="pt-24 px-6 pb-16 bg-white min-h-screen animate-fadeInUp">
      <h1 className="text-4xl font-serif font-bold text-indigo-900 mb-8 text-center">
        Community Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <img
            key={i}
            src={`https://via.placeholder.com/240x160?text=Gallery+${i}`}
            alt={`Gallery ${i}`}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
