// MEAL-SELECT page - allows user to select meal option (Breakfast, Main Dish, or Dessert)

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { VStack } from "@chakra-ui/react";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";

export default function MealSelect() {
  const router = useRouter();

  return (
    <main
      className="flex flex-col h-[80vh] justify-center items-center"
      aria-label="Select your meals"
    >
      <Head>
        <title>Choose meal type</title>
      </Head>
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton />
      </section>
      <VStack spacing={4} align="center">
        <h1 className="font-nunito font-bold text-2xl">
          First,{" "}
          <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
            Chews{" "}
          </span>
          a meal type:
        </h1>
        <section className="w-screen max-w-lg space-y-4 text-center">
          <MainButton
            ariaLabel="breakfast"
            buttonText="Breakfast"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              const meal = "breakfast";
              router.push({
                pathname: "/search-select",
                query: { meal: meal },
              });
            }}
          />
          <MainButton
            ariaLabel="main dish"
            buttonText="Main Dish"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              const meal = "main dish";
              router.push({
                pathname: "/search-select",
                query: { meal: meal },
              });
            }}
          />
          <MainButton
            ariaLabel="dessert"
            buttonText="Dessert"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              const meal = "dessert";
              router.push({
                pathname: "/search-select",
                query: { meal: meal },
              });
            }}
          />
        </section>
      </VStack>
    </main>
  );
}
