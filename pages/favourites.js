// FAVOURITES page - displays list of favourites from local storage

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";
import MainButton from "../components/MainButton";
import LoadingScreen from "../components/LoadingScreen";

export default function Favourites() {
  // various hooks to handle changes and functionality on page
  const [favouritesExist, setFavouritesExist] = useState(false);
  const [mealArray, setMealArray] = useState([]);
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  //getFavourites retrieves fabvourites from local storage (if exists)
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

  //useEffect runs getFavourites to update page on each load
  useEffect(() => {
    const storedFavourites = getFavourites();
    setMealArray(storedFavourites);
  }, []);

  if (isLoading) return <LoadingScreen />;

  // conditional returns give different returns based on whether user is logged in and/or some favourites exist
  if (user && favouritesExist === false) {
    return (
      <main
        ariaLabel="No favourites in your list"
        className="flex flex-col h-[80vh] w-screen justify-center items-center"
      >
        <section className="text-center w-[80vw] space-y-4">
          <h1 className="font-permanent-marker text-primary-color text-2xl w-[80vw]">
            No Favourites Added
          </h1>
          <MainButton
            ariaLabel="Return to Home"
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
  if (user && favouritesExist === true) {
    return (
      <main
        ariaLabel="Your favourites list"
        className="flex flex-col min-h-[80vh] justify-start items-center space-y-[2vh] pb-[2vh] pt-[2vh]"
      >
        <Head>
          <title>Favourite page</title>
        </Head>
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
  if (!user) {
    return (
      <main
        aria-label="Your favourite dishes"
        className="flex flex-col h-[80vh] w-screen justify-center items-center"
      >
        <Head>
          <title>Favorites page</title>
        </Head>
        <section className="text-center w-[80vw] space-y-4">
          <h1
            ariaLabel="Login to View Favourites "
            className="font-permanent-marker text-primary-color text-2xl w-[80vw]"
          >
            Login to View Favourites
          </h1>
          <MainButton
            ariaLabel="Login"
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
}
