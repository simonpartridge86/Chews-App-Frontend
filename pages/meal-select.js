import MainButton from "../components/MainButton";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

import React from "react";

export default function MealSelect() {
  const [mealChoice, setMealChoice] = useState("");
  function handleClick(meal) {
    setMealChoice(meal);
    console.log(mealChoice);
  }

  return (
    <div className="h-screen">
      <nav className="h-1/6 text-center font-permanent-marker text-3xl">
        Nav Bar Placeholder
      </nav>
      <main className="flex flex-col h-5/6 justify-around">
        <VStack spacing={4} align="center">
          <h1 className="font-permanent-marker text-center text-2xl">
            Chews <span className="font-nunito font-bold">an option:</span>
          </h1>
          <MainButton
            buttonText="Breakfast"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              handleClick("breakfast");
            }}
          />
          <MainButton
            buttonText="Main"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              handleClick("main");
            }}
          />
          <MainButton
            buttonText="Dessert"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              handleClick("dessert");
            }}
          />
        </VStack>
        <VStack spacing={4} align="center">
          {mealChoice === "" ? (
            <>
              <MainButton
                isDisabled={true}
                buttonText="Just Chews for Me"
                buttonSize="lg"
                colorMode="dark"
                buttonWidth="80%"
              />
              <MainButton
                isDisabled={true}
                buttonText="Search by Ingredients"
                buttonSize="lg"
                colorMode="dark"
                buttonWidth="80%"
              />
            </>
          ) : (
            <>
              <h2>
                Searching for{" "}
                {mealChoice.charAt(0).toUpperCase() + mealChoice.slice(1)}
              </h2>
              <MainButton
                buttonText="Just Chews for Me"
                buttonSize="lg"
                colorMode="dark"
                buttonWidth="80%"
              />
              <MainButton
                buttonText="Search by Ingredients"
                buttonSize="lg"
                colorMode="dark"
                buttonWidth="80%"
              />
            </>
          )}
        </VStack>
      </main>
    </div>
  );
}

/* PLAN:
- Make buttons ✅
- use state to store the breakfast/main/dessert choice
- disable bottom two buttons if not meal choice has been made
*/
