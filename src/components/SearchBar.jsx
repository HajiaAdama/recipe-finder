import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white/80 backdrop-blur-md rounded-full shadow-md w-full max-w-md px-4 py-2"
    >
      <input
        type="text"
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow bg-transparent border-none focus:outline-none px-3 text-gray-700"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Search
      </button>
    </form>
  );
}