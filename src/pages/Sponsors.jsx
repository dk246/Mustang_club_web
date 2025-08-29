import React from "react";

const sponsors = [
  { name: "TV6", img: "https://via.placeholder.com/120x40?text=TV6" },
  { name: "Mall", img: "https://via.placeholder.com/120x40?text=Mall" },
  {
    name: "Sponsor 3",
    img: "https://via.placeholder.com/120x40?text=Sponsor+3",
  },
];

export default function Sponsors() {
  return (
    <div className="pt-24 px-6 pb-16 bg-white min-h-screen animate-fadeInUp">
      <h1 className="text-4xl font-serif font-bold text-indigo-900 mb-8 text-center">
        Our Sponsors
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-12">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center animate-fadeInUp"
          >
            <img src={sponsor.img} alt={sponsor.name} className="h-16 mb-2" />
            <span className="text-lg font-semibold text-indigo-800">
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
