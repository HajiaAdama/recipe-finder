import React from "react";
import { useParams, Link } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";

export default function Details(){
  const { id } = useParams();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-sky-300 mb-4 inline-block">← Back</Link>
      <RecipeDetails id={id} />
    </div>
  );
}