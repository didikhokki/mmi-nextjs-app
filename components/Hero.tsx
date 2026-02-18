"use client";

import { motion } from "framer-motion";
import StickyReservation from "./StickyReservation";

export default function Hero() {
  return (
    <section className="w-full bg-[#f8f8f5] relative isolate">
      {/* Sticky Floating Buttons */}
      <StickyReservation />

      {/* ================= HEADER FIX TOTAL ================= */}
      <header className="border-b bg-white relative z-[999]">
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col md:flex-row
            justify-between items-center
            px-4 sm:px-6 md:px-8
            py-4
            gap-6
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 border rounded-full flex items-center justify-center font-serif bg-white">
              H
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-black">
                HOTARUTEI
              </p>
              <p className="text-xs text-gray-500">
                Embrace 170 years of tradition
              </p>
            </div>
          </div>

          {/* Buttons FIX */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="border px-4 py-2 text-sm bg-white text-black font-medium shadow-sm hover:bg-black hover:text-white transition w-full sm:w-auto">
              Room Reservations ↗
            </button>

            <button className="border px-4 py-2 text-sm bg-white text-black font-medium shadow-sm hover:bg-black hover:text-white transition w-full sm:w-auto">
              Meal Reservations ↗
            </button>

            <button className="border px-4 py-2 text-sm bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition w-full sm:w-auto">
              MENU ☰
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO IMAGE ================= */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
        {/* IMPORTANT: overflow-hidden + isolate */}
        <div className="overflow-hidden border rounded-lg relative isolate">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
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

            {/* Fog Overlay ONLY inside image */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="
                absolute inset-0
                bg-gradient-to-r
                from-white via-white/40 to-transparent
                blur-xl
                pointer-events-none
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
