import { useRouter } from "next/router";
import MainButton from "../components/MainButton";
import { Divider, VStack } from "@chakra-ui/react";
import React from "react";
import BackButton from "../components/BackButton";

export default function SearchSelect() {
  const router = useRouter();
  let selectedMeal;
  if (router.query.meal) {
    selectedMeal = router.query.meal;
  } else {
    selectedMeal = "main dish";
  }
  const meal = router.query.meal;

  return (
    <main className="flex flex-col h-[80vh] justify-center items-center">
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton extraText={"to Meal Options"} buttonSize="sm" />
      </section>
      <VStack spacing={4} align="center" className="max-w-lg">
        <h1 className="font-nunito font-bold text-2xl text-center">
          Ok, you want{" "}
          {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)} ideas!
        </h1>
        <Divider width={"80vw"} className="max-w-md" />
        <h1 className="font-nunito font-bold text-2xl text-center">
          Now,{" "}
          <span className="font-permanent-marker text-center text-2xl">
            Chews{" "}
          </span>
          a search option:
        </h1>
        <MainButton
          buttonText={
            <span className="font-permanent-marker text-center text-xl text-light-color font-bold">
              Chews
            </span>
          }
          leftIcon="Just"
          rightIcon="for Me"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="80%"
          onClick={() => {
            router.push({
              pathname: "/results",
              query: { meal: selectedMeal },
            });
          }}
        >
          Hello {<span>World</span>}
        </MainButton>
        <MainButton
          leftIcon={
            <span className="font-permanent-marker text-center text-xl text-light-color font-bold">
              Chews
            </span>
          }
          buttonText="by Ingredient"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="80%"
          onClick={() => {
            router.push({
              pathname: "/search-ingredients",
              query: { meal: selectedMeal },
            });
          }}
        />
      </VStack>
    </main>
  );
}
