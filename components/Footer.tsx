"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#6b6e6a] py-14 px-4 md:px-10">
      {/* Outer Border */}
      <div className="border border-white p-6 md:p-10">
        {/* Inner Border */}
        <div className="border border-white/60 p-6 md:p-14">

          {/* Grid Responsive */}
          <div
            className="
              grid grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-12
              text-white text-sm
            "
          >
            {/* ================= LEFT INFO ================= */}
            <div className="space-y-8 text-center md:text-left">
              {/* Address */}
              <div className="leading-relaxed font-medium">
                <p>380-0401</p>
                <p>Nagano, Shimotakai district,</p>
                <p>Yamanouchi, Hirao 1398-1</p>
              </div>

              {/* Tel */}
              <div className="leading-relaxed font-medium">
                <p>Tel. &nbsp; 0269-38-0741</p>
                <p className="text-xs mt-2">(09:00–18:00)</p>
              </div>

              {/* Social */}
              <div className="flex justify-center md:justify-start gap-6 text-xs font-semibold flex-wrap">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
                <a href="#" className="hover:underline flex items-center gap-1">
                  Weather ☁
                </a>
              </div>
            </div>

            {/* ================= CENTER MENU ================= */}
            <div className="flex flex-col items-center text-center">
              {/* Reservation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center">
                <button className="border border-white bg-white text-black px-5 py-3 text-xs font-semibold w-full sm:w-auto hover:bg-gray-200 transition">
                  Room Reservations ↗
                </button>

                <button className="border border-white bg-white text-black px-5 py-3 text-xs font-semibold w-full sm:w-auto hover:bg-gray-200 transition">
                  Meal Reservations ↗
                </button>
              </div>

              {/* Main Nav */}
              <nav className="flex flex-wrap justify-center gap-5 text-xs font-semibold tracking-wide">
                <a href="#" className="hover:underline">
                  Information
                </a>
                <a href="#" className="hover:underline">
                  Overview
                </a>
                <a href="#" className="hover:underline">
                  Restaurant
                </a>
                <a href="#" className="hover:underline">
                  Stay
                </a>
                <a href="#" className="hover:underline">
                  Access
                </a>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </nav>

              {/* Divider */}
              <div className="w-full border-t border-white/40 my-8"></div>

              {/* Bottom Links */}
              <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold">
                <a href="#" className="hover:underline">
                  Hiring Information ↗
                </a>
                <a href="#" className="hover:underline">
                  Company Profile ↗
                </a>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Accommodation Policy
                </a>
              </div>
            </div>

            {/* ================= RIGHT LANGUAGE ================= */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-8">
              {/* Language */}
              <button className="flex items-center gap-2 border-b border-white pb-1 hover:opacity-80 text-xs font-semibold">
                Language <span className="text-lg">⌄</span>
              </button>

              {/* Copyright */}
              <div className="text-xs opacity-80">
                © Hotarutei
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
