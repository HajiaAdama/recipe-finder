
import React from "react";

export default function RecipeDetails({ recipe, onClose }) {
  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key, index) => ({
      ingredient: recipe[key],
      measure: recipe[`strMeasure${index + 1}`],
    }));

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh] relative p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded"
        >
          ✕
        </button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-orange-600 mb-2">
          {recipe.strMeal}
        </h2>
        <p className="text-gray-500 mb-3">
          {recipe.strCategory} • {recipe.strArea}
        </p>

        <h3 className="font-semibold mt-4 mb-2">🧂 Ingredients</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {ingredients.map((item, i) => (
            <li key={i}>
              {item.ingredient} – {item.measure}
            </li>
          ))}
        </ul>

        <h3 className="font-semibold mt-4 mb-2">👨‍🍳 Instructions</h3>
        <p className="text-sm leading-relaxed text-gray-700">
          {recipe.strInstructions}
        </p>

        {recipe.strYoutube && (
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src={recipe.strYoutube.replace("watch?v=", "embed/")}
              title="Recipe Video"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}