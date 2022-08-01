import React from "react";

export default function SearchSelect({ mealChoice }) {
  return (
    <main>
      <VStack spacing={4} align="center">
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
      </VStack>
    </main>
  );
}
