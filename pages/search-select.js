// SEARCH-SELECT page - allows user to choose between viewing random recipe or searching by ingredients

import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Divider, VStack, useDisclosure } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import FilterModal from "../components/FilterModal";
import LoadingScreen from "../components/LoadingScreen";

export default function SearchSelect() {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  // Below adds fallback to "Main dish" in case user navigates to this page directly, rather than from meal-select page
  let selectedMeal, categories, cuisines;

  if (router.query.meal) {
    selectedMeal = router.query.meal;
  } else {
    selectedMeal = "main dish";
  }

  //getFilters retrieves filters from local storage (if exists) for filter modal render
  function getFilters() {
    if (localStorage.getItem("category")) {
      const storedcategoryFilters = JSON.parse(
        localStorage.getItem("category")
      );
      let isCategoryArray = [];
      for (const element of storedcategoryFilters) {
        if (element.isChecked === true) {
          isCategoryArray.push(Object.values(element)[0]);
        }
      }
      categories = isCategoryArray.join();
      const storedcuisineFilters = JSON.parse(localStorage.getItem("cuisine"));
      let isCuisineArray = [];
      for (const element of storedcuisineFilters) {
        if (element.isChecked === true) {
          isCuisineArray.push(Object.values(element)[0]);
        }
      }
      cuisines = isCuisineArray.join();

      return createQueryObject(categories, cuisines);
    }
    return createQueryObject();
  }

  // createQueryObject creates the info object to be passed to the results page using router.push
  function createQueryObject(categories, cuisines) {
    if (categories && cuisines) {
      return {
        meal: selectedMeal,
        category: categories,
        area: cuisines,
      };
    }
    if (categories) {
      return {
        meal: selectedMeal,
        category: categories,
      };
    }
    if (cuisines) {
      return {
        meal: selectedMeal,
        area: cuisines,
      };
    }
    return {
      meal: selectedMeal,
    };
  }

  if (isLoading) return <LoadingScreen />; // makes LoadingScreen component show while the next Results page is loading

  return (
    <main
      className="flex flex-col h-[80vh] w-screen justify-center items-center"
      aria-label="Choose your search"
    >
      <Head>
        <title>Choose search option</title>
      </Head>
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton />
      </section>
      <VStack spacing={4} align="center" className="max-w-lg">
        <h2 className="font-nunito font-bold text-xl text-center">
          Ok, you want{" "}
          {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)} ideas!
        </h2>
        <Divider width={"80vw"} className="max-w-md" />
        <h2 className="font-nunito font-bold text-xl text-center">
          Now,{" "}
          <span className="font-permanent-marker text-center text-xl text-primary-color font-normal">
            Chews{" "}
          </span>
          a search option:
        </h2>
        <MainButton
          ariaLabel="choose a random meal for me"
          buttonText={
            <span className="font-permanent-marker text-center text-xl text-light-color font-normal">
              Chews
            </span>
          }
          leftIcon="Just"
          rightIcon="for Me"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="100%"
          onClick={() => {
            const mealObject = getFilters();
            {
              router.push({
                pathname: "/results",
                query: mealObject,
              });
            }
            setIsLoading(true);
          }}
        >
          Hello {<span>World</span>}
        </MainButton>
        <MainButton
          ariaLabel="choose a meal by ingredient"
          leftIcon={
            <span className="font-permanent-marker text-center text-xl text-light-color font-normal">
              Chews
            </span>
          }
          buttonText="by Ingredient"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="100%"
          onClick={() => {
            router.push({
              pathname: "/search-ingredients",
              query: { meal: selectedMeal },
            });
          }}
        />
        <MainButton
          ariaLabel="add search filters"
          leftIcon={<EditIcon />}
          buttonText="Add Search Filters"
          buttonSize="sm"
          colorMode="light"
          buttonWidth="100%"
          onClick={onOpen}
        />
      </VStack>
      <FilterModal isOpen={isOpen} onClose={onClose} />
    </main>
  );
}
