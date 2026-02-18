"use client";

import { motion } from "framer-motion";
import StickyReservation from  "./StickyReservation";

export default function Hero() {
  return (
    <section className="w-full bg-[#f8f8f5]">
      {/* Sticky Floating Buttons */}
        <StickyReservation />
      {/* TOP HEADER */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
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
          <div className="flex gap-4 items-center">
            <button className="border px-5 py-2 text-sm hover:bg-black hover:text-white transition">
              Room Reservations ↗
            </button>
            <button className="border px-5 py-2 text-sm hover:bg-black hover:text-white transition">
              Meal Reservations ↗
            </button>

            <button className="ml-4 text-sm tracking-widest">
              MENU ☰
            </button>
          </div>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative max-w-7xl mx-auto px-8 py-6">
        <div className="overflow-hidden border">
          {/* Smoke Reveal Animation */}
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
              className="w-full h-[480px] object-cover"
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

      {/* BOTTOM NAV */}
      <div className="border-t bg-[#f8f8f5]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5 text-sm tracking-wide">
          {/* Scroll */}
          <p className="flex items-center gap-2">
            ↓ <span className="text-gray-600">Scroll</span>
          </p>

          {/* Menu */}
          <nav className="flex gap-8 uppercase text-gray-700">
            <a href="#">Information</a>
            <a href="#">Overview</a>
            <a href="#">Restaurant</a>
            <a href="#">Stay</a>
            <a href="#">Access</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </nav>

          {/* Language */}
          <button className="flex items-center gap-2">
            Language ⌄
          </button>
        </div>
      </div>
    </section>
  );
}
