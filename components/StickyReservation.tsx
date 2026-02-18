"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyReservation() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showSticky && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="fixed top-6 right-8 z-[999] flex gap-3"
        >
          {/* Room Button */}
          <button
            className="
              border border-black
              bg-white
              text-black
              px-5 py-2
              text-sm
              shadow-md
              hover:bg-black hover:text-white
              transition
            "
          >
            Room Reservations ↗
          </button>

          {/* Meal Button */}
          <button
            className="
              border border-black
              bg-white
              text-black
              px-5 py-2
              text-sm
              shadow-md
              hover:bg-black hover:text-white
              transition
            "
          >
            Meal Reservations ↗
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
