import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainButton from "../../components/MainButton";
import { VStack } from "@chakra-ui/react";

import React from "react";

export default function SearchSelect() {
  const [meal, setMeal] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setMeal(router.query.meal);
  }, [router.isReady]);
  return (
    <main>
      <VStack spacing={4} align="center">
        <h2>searching for {meal}</h2>
        {/* <h2>Searching for {meal.charAt(0).toUpperCase() + meal.slice(1)}</h2> */}
        <h2>blah</h2>
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
