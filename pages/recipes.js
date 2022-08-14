// Recipes page - displays full recipe taken from results page

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { StarIcon, ArrowUpIcon } from "@chakra-ui/icons";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import RecipeView from "../components/RecipeView";

function Recipes() {
  const router = useRouter();
  const mealIndex = router.query.mealId;
  const [favouritesExist, setFavouritesExist] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [index, setIndex] = useState(newIndex);
  const [meal, setMeal] = useState({});

  function getCurrentFavourite() {
    if (
      !localStorage.getItem("favourites") ||
      localStorage.getItem("favourites") === []
    ) {
      setFavouritesExist(false);
    } else {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      const currentMealIndex = storedFavourites.findIndex(
        (meal) => meal.id === mealIndex
      );
      setFavouritesExist(true);
      return storedFavourites[currentMealIndex];
    }
  }

  useEffect(() => {
    const currentMeal = getCurrentFavourite();
    setMeal(currentMeal);
  }, []);

  if (favouritesExist === false) {
    return "error";
  }
  if (favouritesExist === true) {
    return (
      <main className="flex flex-col justify-around items-center w-screen" aria-label="Search results">
        <Head>
          <title>{`Recipe: ${meal.name}`}</title>
        </Head>
        <section className="absolute top-[12vh] left-[2vh]">
          <BackButton
            extraText={"to Favourites"}
            buttonSize="sm"
            ariaLabel="back button"
          />
        </section>
        <section className="flex flex-col w-[80vw] items-center space-y-2 mt-[8vh] max-w-lg">
          <h1 className="font-nunito font-bold text-2xl text-dark-color text-center">
            You are making:
          </h1>
          <h1 className="font-permanent-marker text-center text-2xl text-primary-color">
            {meal.name}
          </h1>
          <img
            src={meal.image}
            alt={meal.name}
            className="w-[100%] max-h-[50vh] object-cover rounded"
          ></img>
        </section>
        <RecipeView
          ingredients={meal.ingredients}
          measures={meal.measures}
          instructions={meal.instructions}
        />
        <section className="flex flex-col w-[80vw] items-center space-y-2 my-[2vh] max-w-lg">
          <MainButton
            ariaLabel="return to top"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            buttonSize="sm"
            buttonText={"Return to Top"}
            colorMode="light"
          />
        </section>
      </main>
    );
  }
}

export default Recipes;
