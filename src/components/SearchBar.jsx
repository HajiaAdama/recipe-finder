// src/components/SearchBar.jsx
import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(q); }}>
      <div className="flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search recipes (e.g. Arrabiata)"
          className="flex-1 p-2 rounded-lg bg-white/5 text-white placeholder-sky-200 outline-none"
          aria-label="Search recipes"
        />
        <button className="px-4 py-2 bg-sky-500 rounded-lg text-white">Search</button>
      </div>
    </form>
  );
}