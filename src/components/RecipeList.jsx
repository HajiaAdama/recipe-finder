// src/components/RecipeList.jsx
import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ meals }) {
  if (!meals) return <div className="text-sky-200">No results found.</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {meals.map(m => <RecipeCard key={m.idMeal} meal={m} />)}
    </div>
  );
}