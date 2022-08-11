// Favourites page - displays list of favourites page

import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Favourites() {
  const [favouritesExist, setFavouritesExist] = useState(false);
  const [mealArray, setMealArray] = useState([]);

  function getFavourites() {
    if (
      !localStorage.getItem("favourites") ||
      localStorage.getItem("favourites") === []
    ) {
      setFavouritesExist(false);
    } else {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      setFavouritesExist(true);
      return storedFavourites;
    }
  }

  useEffect(() => {
    const storedFavourites = getFavourites();
    setMealArray(storedFavourites);
  }, []);

  if (favouritesExist === false) {
    return "something";
  }
  if (favouritesExist === true) {
    return (
      <div className="h-screen">
        {mealArray.map(function (meal) {
          return <RecipeCard key={meal.id} meal={meal} />;
        })}
      </div>
    );
  }
}

/*
PLAN:
- Hook up favourites from local storage with favourites page ✅ and recipes page ✅ 
- Extract all meals from local storage ✅ 
- OR on recipes extract meal from local storage by ID ✅ 

  function handleFavouritesClick() {
    if (isFavourite === false) {
      if (!localStorage.getItem("favourites")) {
        localStorage.setItem("favourites", JSON.stringify([meal]));
        setIsFavourite(true);
        return;
      } else {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
        const newFavourites = [...storedFavourites, meal];
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
        setIsFavourite(true);
        return;
      }
    }
    if (isFavourite === true) {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      const index = storedFavourites
        .map((object) => object.id)
        .indexOf(meal.id);
      console.log(index);
      const newFavourites = [
        ...storedFavourites.slice(0, index),
        ...storedFavourites.slice(index + 1),
      ];
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setIsFavourite(false);
      return;
    }
  }

*/
