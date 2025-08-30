import React from "react";
import { Link } from "react-router-dom";
import Car from "../assets/images/cars/img2.png";
import Cover from "../assets/images/other/img2.jpg";
import CoverMobile from "../assets/images/other/img22.jpg";
import Car3D from "../components/Car3D";
import EventCarousel from "../components/EventCarousel";
import Contact from "./Contact";
import GalleryCarousel from "../components/GalleryCarousel";

export default function Home() {
  return (
    <div className="pt-20 bg-violet-950 text-white min-h-screen">
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center px-4 md:px-6 py-8 md:py-20"
      >
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-serif  font-bold mb-8 md:mb-20 text-center animate-fadeInLeft">
            Welcome to Mustang Owners Club Sri Lanka
          </h1>
          <p className="text-base md:text-lg mb-6 md:mb-8 w-full md:w-4/5 animate-fadeInLeft delay-200 text-center mx-auto">
            Join the roar of legends! We’re a community of Mustang lovers united
            by power, style, and passion. Whether you own one or dream of it,
            you’re part of the herd.
          </p>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="px-8 md:px-10 py-3 md:py-4 bg-yellow-400 text-indigo-900 font-bold rounded shadow hover:bg-yellow-500 transition-colors animate-pulse text-sm"
            >
              Join US
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Car}
            alt="Mustang Car"
            className="rounded-xl animate-float w-full max-w-sm md:max-w-none"
          />
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat pt-6 pb-24 px-4 md:px-6 text-indigo-900 animate-fadeInUp"
        id="about"
        style={{ backgroundImage: `url(${Cover})` }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-center pt-10 md:pt-20">
            About Mustang Owners Club Sri Lanka
          </h2>
          <p className="text-sm md:text-lg text-center pb-60 md:pb-70 pt-6 md:pt-10">
            Founded in 2021, Mustang Owners Club Sri Lanka brings together
            passionate Mustang enthusiasts from across the island. Our mission
            is to unite Mustang owners through well-organized, responsible
            events that celebrate automotive passion and community spirit.
            Recognized globally, we’re committed to creating opportunities for
            members to connect, share, and celebrate the Mustang legacy.
          </p>
        </div>
      </section>

      <section
        id="gallery"
        className="py-12 md:py-22 px-2 md:px-6 w-full bg-indigo-200"
      >
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-center mb-2 text-indigo-900 drop-shadow">
          Community Gallery
        </h2>
        <GalleryCarousel />
      </section>

      <section
        id="threeD"
        className="w-full py-12 md:py-22 px-0 bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-400"
      >
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4 text-center text-white drop-shadow">
            See the Mustang in 3D!
          </h2>
          <p className="mb-5 md:mb-7 text-indigo-100 text-center text-base md:text-lg">
            Drag to spin the car. Check it out from every angle!
          </p>
          <Car3D url="/cars/ford4.glb" />
          <p className="mt-4 md:mt-6 text-indigo-200 text-center text-xs md:text-sm">
            (Tip: Rotate with your mouse or finger!)
          </p>
        </div>
      </section>

      <section id="events" className="py-10 md:py-20 px-0 w-full bg-indigo-200">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-5 text-indigo-900 drop-shadow">
          Previous Events
        </h2>
        <EventCarousel />
      </section>

      <section id="contact" className="py-3 px-2 md:px-6 w-full bg-indigo-200">
        <Contact />
      </section>

      <section
        id="sponsors"
        className="py-8 md:py-12 px-4 md:px-6 bg-indigo-200 animate-fadeInUp"
      >
        <h2 className="text-base md:text-xl font-serif font-bold text-center mb-6 text-indigo-900">
          Our Sponsors
        </h2>
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-10 gap-4 md:gap-0">
          <img
            src="/other/spons1.jpg"
            alt="Sponsor Logo 1"
            className="h-8 md:h-12"
          />
          <img
            src="/other/spons2.png"
            alt="Sponsor Logo 2"
            className="h-8 md:h-12"
          />
        </div>
      </section>
    </div>
  );
}
