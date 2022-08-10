// Results page - displays random recipe from local data

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDisclosure, Divider } from "@chakra-ui/react";
import {
  StarIcon,
  ViewIcon,
  RepeatIcon,
  UpDownIcon,
  EditIcon,
} from "@chakra-ui/icons";
import BackButton from "../../components/BackButton";
import FilterModal from "../../components/FilterModal";
import LoadingScreen from "../../components/LoadingScreen";
import MainButton from "../../components/MainButton";
import meals from "../../libs/recipeData.js";

export default function Results() {
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(Math.floor(Math.random() * 10));

  const router = useRouter();
  const mealType = router.query.meal;
  // add the following to get ingredients from router object: "const ingredients = router.query.ingredients;"

  //useEffect removes loading screen after set time (remove setTimeout if actual loading times are long) and sets meal to random meal from libs
  useEffect(() => {
    setTimeout(() => setIsLoading(true), 500);
    setMeal({
      name: meals[index].strMeal,
      thumb: meals[index].strMealThumb,
      ingredient1: meals[index].strIngredient1,
      ingredient2: meals[index].strIngredient2,
      ingredient3: meals[index].strIngredient3,
      instructions: meals[index].strInstructions,
    });
  }, []);

  return (
    <>
      {!isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="flex flex-col h-[80vh] w-screen items-center justify-center space-y-2">
          <section className="absolute top-[12vh] left-[2vh]">
            <BackButton extraText={"to Search"} buttonSize="sm" />
          </section>
          <section className="flex flex-col w-[80vw] items-center justify-end space-y-2 max-w-lg">
            <h1 className="font-nunito font-bold text-2xl text-dark-color text-center">
              You should{" "}
              <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
                Chews{" "}
              </span>
              this:
            </h1>
            <h1 className="font-permanent-marker text-center text-2xl text-primary-color">
              {meal.name}
            </h1>
            <img
              className="w-[100%] max-h-[25vh] object-cover rounded"
              src={meal.thumb}
              alt="recipe image"
            />
          </section>
          <section className="flex flex-row justify-between w-[80vw] space-x-2 max-w-lg">
            <MainButton
              buttonText="View Recipe"
              leftIcon={<ViewIcon />}
              buttonSize="md"
              colorMode="dark"
              buttonWidth="80%"
              onClick={() => {
                router.push({
                  pathname: "/recipes",
                  query: { meal: mealType, mealIndex: index },
                });
              }}
            />
            <MainButton
              buttonText={<StarIcon />}
              buttonSize="md"
              colorMode="dark"
              buttonWidth="20%"
              isDisabled={true}
            />
          </section>
          <section className="flex flex-col w-[80vw] items-center justify-end space-y-2 max-w-lg">
            <Divider />
            <h1 className="font-nunito font-bold text-center text-2xl text-dark-color">
              Prefer something else?
            </h1>
            <section className="flex flex-row justify-between w-[100%] space-x-2">
              <MainButton
                onClick={() => {
                  window.location.reload(false);
                }}
                leftIcon={<RepeatIcon />}
                buttonText={
                  <span className="font-permanent-marker text-center text-lg text-light-color font-normal">
                    Chews
                  </span>
                }
                rightIcon="again"
                buttonSize="md"
                colorMode="dark"
                buttonWidth="50%"
              />
              <MainButton
                leftIcon={<UpDownIcon />}
                buttonText="See All"
                buttonSize="md"
                colorMode="dark"
                buttonWidth="50%"
                isDisabled={true}
              />
            </section>
            <MainButton
              leftIcon={<EditIcon />}
              buttonText="Edit Search Filters"
              buttonSize="sm"
              colorMode="light"
              buttonWidth="100%"
              onClick={() => {
                onOpen();
              }}
            />
          </section>
          <FilterModal isOpen={isOpen} onClose={onClose} />
        </main>
      )}{" "}
    </>
  );
}
