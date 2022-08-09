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
import MainButton from "../../components/MainButton";
import RecipeView from "../../components/RecipeView";
import NoResultsDisplay from "../../components/NoResultsDisplay";

export default function Results({ meals }) {
  const [count, setCount] = useState(0);
  const [meal, setMeal] = useState(meals[0]);
  const [buttonText, setButtonText] = useState("View Recipe");
  const { isOpen: isFilterOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();

  function changeButtonText() {
    isCollapseOpen
      ? setButtonText("View Recipe")
      : setButtonText("Hide Recipe");
  }

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    setMeal(meals[count]);
  }, [count]);

  // const router = useRouter();

  // async function fetchMealByIngredients() {
  //   const mealType = await router.query.meal;
  //   const searchIngredients = await router.query.ingredients.toLowerCase();
  //   if (mealType === "main dish") {
  //     const response = await fetch(
  //       `http://localhost:3000/ingredients-category?category=main&ingredients=${searchIngredients}`
  //     );

  //     // FUTURE URL `https://chews-database.herokuapp.com/

  //     const data = await response.json();
  //     console.log("Main data:", data);
  //     console.log(data.payload[count]);
  //     return data.payload[count];
  //   }
  //   const response = await fetch(
  //     `http://localhost:3000/ingredients-category?category=${mealType}&ingredients=${searchIngredients}`
  //   );

  //   // FUTURE URL `https://chews-database.herokuapp.com/

  //   const data = await response.json();
  //   return data.payload[0][count];
  // }
  // useEffect(() => {
  //   if (router.query.meal) {
  //     const getMeal = async () => {
  //       const fetchedMeal = await fetchMealByIngredients();
  //       setMeal({
  //         id: fetchedMeal.id,
  //         name: fetchedMeal.name,
  //         thumb: fetchedMeal.image,
  //         ingredients: fetchedMeal.ingredients,
  //         measures: fetchedMeal.measures,
  //         instructions: fetchedMeal.instructions,
  //       });
  //     };
  //     getMeal();
  //   }
  // }, [router.query.meal, count]);

  // if (!meal) return <LoadingScreen />;
  if (!meal) return <NoResultsDisplay />;
  return (
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
          src={meal.image}
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
            onClick={handleClick}
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
  );
}

//fetches initial recipe on load, to avoid the flicker caused by using useEffect as the alternative
export async function getServerSideProps(context) {
  const mealType = context.query.meal;
  const searchIngredients = context.query.ingredients.toLowerCase();
  let mealsArray;
  if (mealType === "main dish") {
    const response = await fetch(
      `http://localhost:3000/ingredients-category?category=main&ingredients=${searchIngredients}`
    );
    const data = await response.json();
    mealsArray = data.payload;
  } else {
    const response = await fetch(
      `http://localhost:3000/ingredients-category?category=${mealType}&ingredients=${searchIngredients}`
    );
    const data = await response.json();
    mealsArray = data.payload;
  }
  console.log(mealsArray);
  return { props: { meals: mealsArray } };
}
