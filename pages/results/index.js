import React from "react";
import { useRouter } from "next/router";
import MainButton from "../../components/MainButton";
import { VStack, HStack } from "@chakra-ui/react";

export default function Results() {
  const router = useRouter();
  const meal = router.query.meal;
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="flex flex-col w-4/5 items-center justify-end">
        <h1>You Should Make:</h1>
        <h1>Creamy Steak Alfredo</h1>
        <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" />
      </div>
      <div className="flex flex-row justify-between w-4/5">
        <MainButton
          buttonText="Open Recipe"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="70%"
        />
        <MainButton
          buttonText="Fave"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="30%"
        />
      </div>
      <h1>Prefer Another?</h1>
      <div className="flex flex-row justify-between w-4/5">
        <MainButton
          buttonText="Re-Roll"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="70%"
        />
        <MainButton
          buttonText="See All"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="30%"
        />
      </div>
      <MainButton
        buttonText="Add Search Filters"
        buttonSize="lg"
        colorMode="dark"
        buttonWidth="80%"
      />
    </main>
  );
}
