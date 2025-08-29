import React from "react";

export default function Contact() {
  return (
    <div className="pt-24 px-6 pb-16 bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 min-h-screen text-white animate-fadeInUp">
      <h1 className="text-4xl font-serif font-bold mb-8">Contact Us</h1>
      <div className="max-w-xl mx-auto bg-indigo-800 rounded-xl shadow-lg p-8">
        <form className="flex flex-col space-y-6">
          <input
            className="rounded p-3 bg-white text-indigo-900 placeholder-indigo-700"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="rounded p-3 bg-white text-indigo-900 placeholder-indigo-700"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="rounded p-3 bg-white text-indigo-900 placeholder-indigo-700"
            rows={4}
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-indigo-900 font-bold rounded shadow hover:bg-yellow-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-10 flex justify-center space-x-8">
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
    </div>
  );
}
