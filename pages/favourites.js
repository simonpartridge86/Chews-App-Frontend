// Favourites page - displays list of favourites page

import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { useUser } from "@auth0/nextjs-auth0";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";

export default function Favourites() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [favouritesExist, setFavouritesExist] = useState(false);
  const [mealArray, setMealArray] = useState([]);

  function getFavourites() {
    if (!localStorage.getItem("favourites")) {
      setFavouritesExist(false);
    } else if (JSON.parse(localStorage.getItem("favourites")).length === 0) {
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

  if (!user) {
    return (
      <main
        aria-label="Your favourite dishes"
        className="flex flex-col h-[80vh] w-screen justify-center items-center"
      >
        <section className="text-center w-[80vw] space-y-4">
          <h1 className="font-permanent-marker text-primary-color text-2xl w-[80vw]">
            Login to View Favourites
          </h1>
          <MainButton
            borderWidthRecipe={"0px"}
            buttonWidth="75%"
            buttonSize="md"
            buttonText="Login / Signup"
            colorMode="dark"
            onClick={() => {
              router.push({
                pathname: "/api/auth/login",
              });
            }}
          />
        </section>
      </main>
    );
  }
  if (favouritesExist === false) {
    return (
      <main className="flex flex-col h-[80vh] w-screen justify-center items-center">
        <section className="text-center w-[80vw] space-y-4">
          <h1 className="font-permanent-marker text-primary-color text-2xl w-[80vw]">
            No Favourites Added
          </h1>
          <MainButton
            borderWidthRecipe={"0px"}
            buttonWidth="75%"
            buttonSize="md"
            buttonText="Return to Home"
            colorMode="dark"
            onClick={() => {
              router.push({
                pathname: "/home",
              });
            }}
          />
        </section>
      </main>
    );
  }
  if (favouritesExist === true) {
    return (
      <main className="flex flex-col min-h-[80vh] justify-start items-center space-y-[2vh] pb-[2vh] pt-[2vh]">
        <section className="text-center">
          <h1 className="font-permanent-marker text-primary-color font-bold text-2xl">
            Your Favourites
          </h1>
        </section>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="10px">
          {mealArray.map(function (meal) {
            return <RecipeCard key={meal.id} meal={meal} />;
          })}
        </SimpleGrid>
      </main>
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
