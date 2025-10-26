import axios from "axios";

const API_URL = import.meta.env.VITE_MEALDB_API;

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}${query}`);
    return response.data.meals || [];
  } catch (error) {
    console.error("API fetch error:", error);
    throw new Error("Failed to fetch recipes");
  }
};