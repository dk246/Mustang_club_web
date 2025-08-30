import React, { useState } from "react";

export default function Contact() {
  const [activeForm, setActiveForm] = useState("contact");

  return (
    <section className="py-10 md:py-16 px-2 md:px-6 w-full bg-indigo-200 animate-fadeInUp">
      <h2 className="text-2xl md:text-4xl font-serif font-bold text-center mb-6 md:mb-10 text-indigo-700 drop-shadow">
        {activeForm === "contact" ? "Contact Us" : "Join With Us"}
      </h2>
      <div className="max-w-md md:max-w-3xl mx-auto bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-900 rounded-2xl shadow-2xl p-6 md:p-10">
        <div className="flex justify-center mb-6 md:mb-8">
          <button
            className={`px-4 md:px-8 py-2 md:py-3 rounded-l-xl font-bold transition-colors ${
              activeForm === "contact"
                ? "bg-yellow-400 text-indigo-900 shadow"
                : "bg-indigo-500 text-yellow-100"
            }`}
            onClick={() => setActiveForm("contact")}
          >
            Contact Us
          </button>
          <button
            className={`px-4 md:px-8 py-2 md:py-3 rounded-r-xl font-bold transition-colors ${
              activeForm === "join"
                ? "bg-yellow-400 text-indigo-900 shadow"
                : "bg-indigo-500 text-yellow-100"
            }`}
            onClick={() => setActiveForm("join")}
          >
            Join With Us
          </button>
        </div>
        {activeForm === "contact" ? (
          <form className="flex flex-col space-y-4 md:space-y-6">
            <input
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              rows={4}
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              className="px-6 md:px-8 py-3 md:py-4 bg-yellow-400 text-indigo-900 font-bold rounded-xl shadow hover:bg-yellow-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        ) : (
          <form className="flex flex-col space-y-4 md:space-y-6">
            <input
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              type="text"
              placeholder="City"
            />
            <textarea
              className="rounded-xl p-3 md:p-4 bg-white text-indigo-900 placeholder-indigo-700"
              rows={3}
              placeholder="Why do you want to join us?"
            ></textarea>
            <button
              type="submit"
              className="px-6 md:px-8 py-3 md:py-4 bg-yellow-400 text-indigo-900 font-bold rounded-xl shadow hover:bg-yellow-500 transition-colors"
            >
              Request Membership
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
