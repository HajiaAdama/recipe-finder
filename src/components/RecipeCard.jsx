import React from "react";

export default function RecipeCard({ recipe, onSelect }) {
  return (
    <div
      className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
      onClick={() => onSelect(recipe)}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600">{recipe.strCategory} · {recipe.strArea}</p>
      </div>
    </div>
  );
}