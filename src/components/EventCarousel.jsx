import React, { useRef } from "react";

const events = [
  {
    image: "/other/img3.JPG",
    title: "Arcade Independence Square Meetup",
    desc: "The first Mustang meetup in 2021 at Arcade Independence Square, Colombo.",
  },
  {
    image: "/other/img4.JPG",
    title: "Beach Cruise 2022",
    desc: "Mustang owners cruising the south coast beaches.",
  },
  {
    image: "/other/img2.JPG",
    title: "Hill Country Ride",
    desc: "Taking Mustangs to the central highlands.",
  },
];

export default function EventCarousel() {
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide every 3.5 seconds
  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-900 rounded-2xl shadow-2xl p-10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-4/7 flex-shrink-0 flex items-center justify-center">
          <img
            src={events[current].image}
            alt={events[current].title}
            className="rounded-xl shadow-2xl object-cover w-[680px] h-[420px] transition-all duration-500 border-5 border-indigo-900"
          />
        </div>
        <div className="w-full md:w-3/7 px-0 md:px-14 py-7 md:py-0">
          <h3 className="font-serif font-bold text-4xl text-yellow-200 mb-4 drop-shadow">
            {events[current].title}
          </h3>
          <p className="text-indigo-100 text-xl">{events[current].desc}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-7">
        {events.map((_, idx) => (
          <button
            key={idx}
            className={`w-5 h-5 rounded-full border-2 ${
              current === idx
                ? "bg-yellow-400 border-yellow-500 scale-125"
                : "bg-indigo-300 border-indigo-400"
            } transition-all`}
            style={{ outline: "none", border: "none" }}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to event ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
