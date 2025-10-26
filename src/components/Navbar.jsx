import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 right-4 bg-white/70 backdrop-blur-md shadow-lg rounded-full px-6 py-3 z-50">
      <button
        className="md:hidden text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <ul
        className={`${
          open ? "block" : "hidden"
        } md:flex gap-6 text-gray-800 font-medium items-center`}
      >
        <li className="hover:text-orange-600 transition">Home</li>
        <li className="hover:text-orange-600 transition">Favorites</li>
        <li className="hover:text-orange-600 transition">About</li>
      </ul>
    </nav>
  );
}