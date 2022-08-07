// Favourites page - displays list of favourites page

import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favourites() {
  return (
    <div className="h-screen">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}
