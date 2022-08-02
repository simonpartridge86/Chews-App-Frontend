import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainButton from "../components/MainButton";
import { VStack } from "@chakra-ui/react";
import React from "react";

export default function SearchSelect() {
  const router = useRouter();

  //const [meal, setMeal] = useState("");
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   setMeal(router.query.meal);
  // }, [router.isReady]);

  const meal = router.query.meal;

  return (
    <main className="flex flex-col h-screen justify-center">
      <VStack spacing={4} align="center">
        <h1 className="font-permanent-marker text-center text-2xl">
          Chews{" "}
          <span className="font-nunito font-bold">
            a {meal.charAt(0).toUpperCase() + meal.slice(1)} option:
          </span>
        </h1>
        <MainButton
          buttonText="Just Chews for Me"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="80%"
          onClick={() => {
            router.push({
              pathname: "/results",
              query: { meal: meal },
            });
          }}
        />
        <MainButton
          buttonText="Search by Ingredients"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="80%"
          onClick={() => {
            router.push({
              pathname: "/search-ingredients",
              query: { meal: meal },
            });
          }}
        />
      </VStack>
    </main>
  );
}
