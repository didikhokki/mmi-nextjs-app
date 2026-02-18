"use client";

export default function BottomMenu() {
  return (
    <div className="w-full border-t border-black bg-white">
      <div
        className="
          max-w-7xl mx-auto
          flex items-center justify-between
          px-6 py-6
          text-sm
          font-serif
        "
      >
        {/* LEFT - Scroll */}
        <div className="flex items-center gap-3 text-black">
          <span className="text-lg">↓</span>
          <span>Scroll</span>
        </div>

        {/* CENTER - Navigation */}
        <nav
          className="
            flex gap-10
            text-black
            tracking-wide
            overflow-x-auto
            whitespace-nowrap
          "
        >
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

        {/* RIGHT - Language Dropdown */}
        <div className="relative group">
          <button
            className="
              flex items-center gap-2
              text-black
              border-b border-black
              pb-1
            "
          >
            Language <span className="text-lg">⌄</span>
          </button>

          {/* Dropdown */}
          <div
            className="
              absolute right-0 mt-2
              hidden group-hover:block
              bg-white border border-black
              text-sm
              w-32
              z-50
            "
          >
            <a
              href="#"
              className="block px-4 py-2 hover:bg-black hover:text-white"
            >
              English
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-black hover:text-white"
            >
              Japanese
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-black hover:text-white"
            >
              Indonesian
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
