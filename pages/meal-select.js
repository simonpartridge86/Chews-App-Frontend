import MainButton from "../components/MainButton";
import { VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

export default function MealSelect() {
  const router = useRouter();

  return (
    <main className="flex flex-col h-screen justify-center">
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
            const meal = "breakfast";
            router.push({
              pathname: "/search-select",
              query: { meal: meal },
            });
          }}
        />
        <MainButton
          buttonText="Main"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="80%"
          onClick={() => {
            const meal = "main";
            router.push({
              pathname: "/search-select",
              query: { meal: meal },
            });
          }}
        />
        <MainButton
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
      </VStack>
    </main>
  );
}
