import React, { useState, useEffect, useRef } from "react";

export default function GalleryCarousel() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Fetch image list from JSON
  useEffect(() => {
    fetch("/gallery/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data.map((img) => `/gallery/${img}`)));
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (images.length === 0) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, images]);

  if (images.length === 0) {
    return (
      <div className="text-center text-indigo-900">Loading gallery...</div>
    );
  }

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div className="w-full max-w-6xl mx-auto bg-indigo-200 rounded-xl p-4 relative overflow-hidden">
      <div className="flex items-center justify-center h-[480px]">
        <button
          className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 bg-indigo-400 hover:bg-indigo-600 text-white rounded-full p-3 z-10 transition"
          onClick={() =>
            setCurrent((current - 1 + images.length) % images.length)
          }
          aria-label="Previous"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 9l-7 7 7 7" />
          </svg>
        </button>
        <img
          src={images[current]}
          alt={`Gallery ${current + 1}`}
          className="rounded-xl object-cover w-[920px] h-[480px] transition-all duration-700 shadow-xl/60 shadow-black"
        />
        <button
          className="absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2 bg-indigo-400 hover:bg-indigo-600 text-white rounded-full p-3 z-10 transition"
          onClick={() => setCurrent((current + 1) % images.length)}
          aria-label="Next"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M13 9l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 ${
              current === idx
                ? "bg-yellow-300 border-yellow-400 scale-125"
                : "bg-indigo-300 border-indigo-400"
            } transition-all`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
