import React from "react";

export default function About() {
  return (
    <div className="pt-24 px-6 pb-16 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white min-h-screen animate-fadeInUp">
      <h1 className="text-4xl font-serif font-bold mb-6">About Mustang Club</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4">
          Mustang Owners Club Sri Lanka was founded in 2021 by passionate
          Mustang enthusiasts. We started as a small WhatsApp group and have
          grown into a recognized club with global admiration.
        </p>
        <p className="text-lg mb-4">
          Our mission is to unite Mustang owners through exclusive events,
          community drives, and responsible celebrations of automotive
          greatness. We are recognized by international associations and
          committed to growing the Mustang legacy.
        </p>
        <img
          src="https://via.placeholder.com/600x160?text=About+Us+Photo"
          alt="About Us"
          className="rounded-xl shadow-lg my-6 animate-fadeInUp"
        />
      </div>
    </div>
  );
}
