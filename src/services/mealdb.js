// src/services/mealdb.js
export async function searchMeals(query) {
  if (!query) return { meals: null };
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json(); // { meals: [...] } or { meals: null }
}

export async function lookupMealById(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json(); // { meals: [ {...} ] }
}