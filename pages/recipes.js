// Recipes page - displays full recipe taken from results page

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import RecipeView from "../components/RecipeView";

export default function Recipes() {
  const [favouritesExist, setFavouritesExist] = useState(false);
  const [meal, setMeal] = useState({});
  const { user, error, isLoading } = useUser();

  const router = useRouter();
  const mealIndex = router.query.mealId;

  // getCurrentFavourites retrieves favourites from local storage (if exists)
  function getCurrentFavourites() {
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

  // useEffect runs getCurrentFavourites on page load
  useEffect(() => {
    const currentMeal = getCurrentFavourites();
    setMeal(currentMeal);
  }, []);
  if (isLoading) return <LoadingScreen />;

  // conditional returns based on login status and whether favourites exist
  if (favouritesExist === false || !user) {
    router.push({
      pathname: "/",
    });
  }

  if (favouritesExist === true && user) {
    return (
      <main
        className="flex flex-col justify-around items-center w-screen"
        aria-label="Search results"
      >
        <Head>
          <title>{`Recipe: ${meal.name}`}</title>
        </Head>
        <section className="absolute top-[12vh] left-[2vh]">
          <BackButton />
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
