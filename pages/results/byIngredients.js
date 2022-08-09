// Results page - displays random recipe from local data

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDisclosure, Divider, Collapse } from "@chakra-ui/react";
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
import RecipeView from "../../components/RecipeView";

export default function Results() {
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState();
  const [buttonText, setButtonText] = useState("View Recipe");
  const { isOpen: isFilterOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();
  const [count, setCount] = useState(0);

  function changeButtonText() {
    isCollapseOpen
      ? setButtonText("View Recipe")
      : setButtonText("Hide Recipe");
  }

  const router = useRouter();

  async function fetchMealByIngredients() {
    const mealType = await router.query.meal;
    console.log("meal:", mealType);
    const searchIngredients = await router.query.ingredients.toLowerCase();
    console.log("ingredients:", searchIngredients);
    if (mealType === "main dish") {
      const response = await fetch(
        `http://localhost:3000/ingredients-category?category=main&ingredients=${searchIngredients}`
      );

      // FUTURE URL `https://chews-database.herokuapp.com/

      const data = await response.json();
      console.log("Main data:", data);
      console.log(data.payload[count]);
      return data.payload[count];
    }
    const response = await fetch(
      `http://localhost:3000/ingredients-category?category=${mealType}&ingredients=${searchIngredients}`
    );

    // FUTURE URL `https://chews-database.herokuapp.com/

    const data = await response.json();
    console.log("B/D data:", data);
    console.log(data.payload[0][count]);
    return data.payload[0][count];
  }

  useEffect(() => {
    if (router.query.meal) {
      const getMeal = async () => {
        const fetchedMeal = await fetchMealByIngredients();
        setMeal({
          id: fetchedMeal.id,
          name: fetchedMeal.name,
          thumb: fetchedMeal.image,
          ingredients: fetchedMeal.ingredients,
          measures: fetchedMeal.measures,
          instructions: fetchedMeal.instructions,
        });
      };
      getMeal();
      console.log("Full meal:", meal);
    }
  }, [router.query.meal, count]);

  if (!meal) return <LoadingScreen />;
  return (
    <>
      <main className="flex flex-col min-h-[80vh] w-screen items-center justify-center space-y-2">
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
            buttonText={buttonText}
            leftIcon={<ViewIcon />}
            buttonSize="md"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              onToggle();
              changeButtonText();
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
          <Collapse in={isCollapseOpen} animateOpacity>
            <RecipeView
              ingredients={meal.ingredients}
              measures={meal.measures}
              instructions={meal.instructions}
            />
          </Collapse>

          <Divider />
          <h1 className="font-nunito font-bold text-center text-2xl text-dark-color">
            Prefer something else?
          </h1>
          <section className="flex flex-row justify-between w-[100%] space-x-2">
            <MainButton
              onClick={() => {
                setCount(count + 1);
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
            onClick={onOpen}
          />
        </section>
        <FilterModal isOpen={isFilterOpen} onClose={onClose} />
      </main>
    </>
  );
}
