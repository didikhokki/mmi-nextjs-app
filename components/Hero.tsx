"use client";

import { motion } from "framer-motion";
import StickyReservation from "./StickyReservation";

export default function Hero() {
  return (
    <section className="w-full bg-[#f8f8f5]">
      <StickyReservation />

      {/* ================= TOP HEADER FIX ================= */}
      <div className="border-b bg-white">
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col md:flex-row
            justify-between
            px-4 sm:px-6 md:px-8
            py-4
            gap-6
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
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

          {/* Buttons FIX */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-3
              w-full md:w-auto
              justify-center md:justify-end
            "
          >
            <button className="border px-4 py-2 text-sm w-full sm:w-auto hover:bg-black hover:text-white transition">
              Room Reservations ↗
            </button>

            <button className="border px-4 py-2 text-sm w-full sm:w-auto hover:bg-black hover:text-white transition">
              Meal Reservations ↗
            </button>

            <button className="border px-4 py-2 text-sm w-full sm:w-auto hover:bg-gray-100 transition">
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
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="relative"
          >
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

            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
