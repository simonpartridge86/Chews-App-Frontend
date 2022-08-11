// Favourites page - displays list of favourites page

import React from "react";
import RecipeCard from "../components/RecipeCard";
import meals from "../libs/recipeData";

export default function Favourites() {
  return (
    <div className="h-screen">
      {meals.map(function (meal) {
        return <RecipeCard key={meal.id} meal={meal} />;
      })}
    </div>
  );
}
