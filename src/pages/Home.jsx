// src/pages/Home.jsx
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeDetails from "../components/RecipeDetails";
import { searchRecipes } from "../services/RecipeApi";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch recipes from API
  const fetchRecipes = async (query) => {
    setLoading(true);
    setError("");
    try {
      const results = await searchRecipes(query);
      if (results && results.length > 0) {
        setRecipes(results);
      } else {
        setRecipes([]);
        setError("No recipes found. Try another dish!");
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4 min-h-screen text-center">
      {/* Search Section */}
      <SearchBar onSearch={fetchRecipes} />

      {/* Loading and Error Messages */}
      {loading && <p className="mt-6 text-orange-600">Loading recipes...</p>}
      {error && <p className="mt-6 text-red-500">{error}</p>}

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 w-full max-w-7xl">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onSelect={setSelected}
          />
        ))}
      </div>

      {/* Recipe Details Modal */}
      {selected && (
        <RecipeDetails
          recipe={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}