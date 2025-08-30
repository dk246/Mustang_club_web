import React from "react";

// You can use Heroicons, FontAwesome, or SVGs directly. Here are SVGs for simplicity:
const icons = {
  facebook: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
      <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h13V20h-4v-5h4v-3.4C16 8.6 18.4 7 21.5 7c1.6 0 3.3.1 3.7.2v4.3h-2.1c-1.6 0-2.1.8-2.1 2v2.5h4.2l-.6 5h-3.6v12h7c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" />
    </svg>
  ),
  instagram: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 7.7A8.3 8.3 0 1 0 24.3 16 8.3 8.3 0 0 0 16 7.7zm0 13.8A5.5 5.5 0 1 1 21.5 16 5.5 5.5 0 0 1 16 21.5zm8.5-14.6a2 2 0 1 1-2-2A2 2 0 0 1 24.5 6.9zM32 9.4v13.2a9.4 9.4 0 0 1-9.4 9.4H9.4A9.4 9.4 0 0 1 0 22.6V9.4A9.4 9.4 0 0 1 9.4 0h13.2A9.4 9.4 0 0 1 32 9.4zm-3.2 0a6.2 6.2 0 0 0-6.2-6.2H9.4A6.2 6.2 0 0 0 3.2 9.4v13.2a6.2 6.2 0 0 0 6.2 6.2h13.2a6.2 6.2 0 0 0 6.2-6.2z" />
    </svg>
  ),
  tiktok: (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor">
      <path d="M22 4.2V0h-4.1v22.7c0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7c.4 0 .7 0 1.1.1v-4.1c-.4 0-.7-.1-1.1-.1-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9V9.3c1.2.7 2.5 1.1 3.9 1.1V6.3c-1.4 0-2.7-.4-3.9-1.1z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-indigo-900 py-8 px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-0 text-white mt-12 animate-fadeInUp">
      <div className="flex flex-col items-center md:items-start md:w-1/3">
        <span className="text-lg font-semibold mb-2">Follow Us</span>
        <div className="flex space-x-8">
          <a
            href="https://www.facebook.com/share/1EDBczmw9T/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Facebook"
          >
            {icons.facebook}
          </a>
          <a
            href="https://www.instagram.com/mustang_owners_club_sl?igsh=bmxwYXphaW1vamtj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Instagram"
          >
            {icons.instagram}
          </a>
          <a
            href="https://www.tiktok.com/@mustangownersclubsl?_t=ZS-8z8daxiQ0Wu&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors"
            aria-label="TikTok"
          >
            {icons.tiktok}
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:w-1/3">
        <span className="text-lg font-semibold mb-2">Contact Us</span>
        <div className="text-center text-sm md:text-base">
          <div className="mb-1">
            Email:{" "}
            <a
              href="mailto:info@mustangclubsl.lk"
              className="text-yellow-400 hover:underline"
            >
              info@mustangclubsl.lk
            </a>
          </div>
          <div className="mb-1">
            Phone:{" "}
            <a
              href="tel:+94711234567"
              className="text-yellow-400 hover:underline"
            >
              +94 71 123 4567
            </a>
          </div>
          <div>
            Address: <span className="text-yellow-400">Colombo, Sri Lanka</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:w-1/3">
        <span className="text-lg font-semibold mb-2">
          Mustang Owners Club SL
        </span>
        <div className="text-xs md:text-base text-center text-indigo-200">
          &copy; {new Date().getFullYear()} Mustang Owners Club Sri Lanka. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
