"use client";

import { motion } from "framer-motion";
import StickyReservation from "./StickyReservation";

export default function Hero() {
  return (
    <section className="w-full bg-[#f8f8f5]">
      {/* Sticky Floating Buttons */}
      <StickyReservation />

      {/* ================= TOP HEADER ================= */}
      <div className="border-b bg-white">
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col md:flex-row
            justify-between items-center
            px-4 sm:px-6 md:px-8
            py-4
            gap-5
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 border rounded-full flex items-center justify-center font-serif">
              H
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest">
                HOTARUTEI
              </p>
              <p className="text-xs text-gray-500">
                Embrace 170 years of tradition
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="border px-4 py-2 text-sm w-full sm:w-auto hover:bg-black hover:text-white transition">
              Room Reservations ↗
            </button>

            <button className="border px-4 py-2 text-sm w-full sm:w-auto hover:bg-black hover:text-white transition">
              Meal Reservations ↗
            </button>

            {/* Menu Button */}
            <button className="text-sm tracking-widest w-full sm:w-auto border sm:border-0 py-2">
              MENU ☰
            </button>
          </div>
        </div>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        <div className="overflow-hidden border rounded-lg">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Image */}
            <img
              src="https://cpunud.com/utama.png"
              alt="Hero Resort"
              className="
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[480px]
                object-cover
              "
            />

            {/* Fog Overlay */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="border-t bg-[#f8f8f5]">
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col md:flex-row
            justify-between items-center
            px-4 sm:px-6 md:px-8
            py-4
            text-sm
            gap-4
          "
        >
          {/* Scroll */}
          <p className="flex items-center gap-2 text-xs sm:text-sm">
            ↓ <span className="text-gray-600">Scroll</span>
          </p>

          {/* Menu Scroll Horizontal */}
          <nav
            className="
              flex gap-6 uppercase text-gray-700 text-xs sm:text-sm
              overflow-x-auto whitespace-nowrap
              w-full md:w-auto
              justify-start md:justify-center
              scrollbar-hide
              pb-2
            "
          >
            <a href="#">Information</a>
            <a href="#">Overview</a>
            <a href="#">Restaurant</a>
            <a href="#">Stay</a>
            <a href="#">Access</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </nav>

          {/* Language */}
          <button className="flex items-center gap-2 text-xs sm:text-sm">
            Language ⌄
          </button>
        </div>
      </div>
    </section>
  );
}
