import MainButton from "../components/MainButton";
import { Stack, HStack, VStack } from "@chakra-ui/react";

import React from "react";

export default function MealOptions() {
  return (
    <div>
      <h1 className="font-permanent-marker">Chews an option:</h1>
      <VStack
        spacing={4}
        align="center"
      >
        <MainButton buttonText="Breakfast" buttonSize="md" colorMode="dark" buttonWidth="80%"/>
        <MainButton buttonText="Main" buttonSize="md" colorMode="dark" buttonWidth="80%"/>
        <MainButton buttonText="Dessert" buttonSize="md" colorMode="dark" buttonWidth="80%"/>
        <MainButton buttonText="Just Chews" buttonSize="md" colorMode="dark" buttonWidth="80%"/>
        <MainButton
          buttonText="Search by Ingredients"
          buttonSize="md"
          colorMode="dark"
          buttonWidth="80%"
        />
      </VStack>
    </div>
  );
}
