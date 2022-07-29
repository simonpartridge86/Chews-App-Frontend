import MainButton from "../components/MainButton";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import React from "react";

export default function MealOptions() {
  return (
    <div className="h-screen">
      <nav className="h-1/6 text-center align-center font-permanent-marker">
        Nav Bar Placeholder
      </nav>
      <main className="flex flex-col h-5/6 justify-around">
        <VStack spacing={4} align="center">
          <h1 className="font-permanent-marker text-center ">
            Chews <span className="font-nunito font-bold">an option:</span>
          </h1>
          <MainButton
            buttonText="Breakfast"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
          />
          <MainButton
            buttonText="Main"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
          />
          <MainButton
            buttonText="Dessert"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
          />
        </VStack>
        <VStack spacing={4} align="center">
          <MainButton
            buttonText="Just Chews"
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
        </VStack>
      </main>
    </div>
  );
}
