import React from "react";

const events = [
  {
    title: "First Mustang Meetup 2021",
    desc: "Held at Arcade Independence Square, Colombo.",
    img: "https://via.placeholder.com/300x180?text=Event+1",
  },
  {
    title: "Highway Drive",
    desc: "A thrilling drive with fellow Mustang owners.",
    img: "https://via.placeholder.com/300x180?text=Event+2",
  },
  {
    title: "Annual Club Gala",
    desc: "Celebrating the Mustang legacy.",
    img: "https://via.placeholder.com/300x180?text=Event+3",
  },
];

export default function Events() {
  return (
    <div className="pt-24 px-6 pb-16 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 min-h-screen text-white animate-fadeInUp">
      <h1 className="text-4xl font-serif font-bold mb-8 text-center">
        Events & Meetups
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-xl bg-indigo-800 p-6 hover:scale-105 transition-transform duration-300 animate-fadeInUp"
          >
            <img
              src={event.img}
              alt={event.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-base">{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
