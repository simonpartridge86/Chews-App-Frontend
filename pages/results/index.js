// Results page - displays random recipe from local data

import React, { useState } from "react";
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

//fetchRandomMeal fetches random meal from our backend server
// If we want to fetch by CATEGORY and AREA, fetch request includes category and area
// If we want to fetch by category only, fetch request should only include category
// If we want to fetch by area only, fetch request should only include area
//Else, fetch by meal only

async function fetchRandomMeal(mealType, category, area) {
  // console.log(category)
  if (category == 'Pescatarian')
  {category = 'Seafood'}
  console.log(category)

  if (category && area) {
    const response = await fetch(`http://localhost:3000/area-category?category=${category}&area=${area}`);
    const data = await response.json();
    console.log("Meal:", data.payload[0]);
    return data.payload[0];
  }

  if (category) {
    const response = await fetch(`http://localhost:3000/area-category?category=${category}`);
    const data = await response.json();
    console.log("Meal:", data.payload[0]);
    return data.payload[0];
  }

  if (area) {
    const response = await fetch(`http://localhost:3000/area-category?area=${area}`);
    const data = await response.json();
    console.log("Meal:", data.payload[0]);
    return data.payload[0];
  } else {
    if (mealType === "main dish") {
    const response = await fetch(`http://localhost:3000/random-meal?meal=main`);

    // FUTURE URL `https://chews-database.herokuapp.com/

    const data = await response.json();
    console.log("Meal:", data.payload[0]);
    return data.payload[0];
  }
  const response = await fetch(
    `http://localhost:3000/random-meal?meal=${mealType}`
  );

  // FUTURE URL `https://chews-database.herokuapp.com/

  const data = await response.json();
  console.log("Meal", data.payload[0]);
  return data.payload[0];
  }
}

export default function Results({ initialMeal }) {
  // Various hooks to manage changes on page
  const [meal, setMeal] = useState(initialMeal);
  const [buttonText, setButtonText] = useState("View Recipe");
  const { isOpen: isFilterOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();
  const router = useRouter();

  //changeButtonText changes the text on the "View Recipe" button based on whether full recipe is open or closed
  function changeButtonText() {
    isCollapseOpen
      ? setButtonText("View Recipe")
      : setButtonText("Hide Recipe");
  }

  async function getMeal() {
    const fetchedMeal = await fetchRandomMeal(router.query.meal, router.query.category, router.query.area);
    setMeal({
      id: fetchedMeal.id,
      name: fetchedMeal.name,
      thumb: fetchedMeal.image,
      ingredients: fetchedMeal.ingredients,
      measures: fetchedMeal.measures,
      instructions: fetchedMeal.instructions,
    });
  }

  if (!meal) return <NoResultsDisplay />; //returns error page if no more results found
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
              if (isCollapseOpen) {
                onToggle();
                changeButtonText();
                getMeal();
              } else {
                getMeal();
              }
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
  );
}

//getServerSideProps fetches initial recipe before load, avoiding the flicker update caused by useEffect as the alternative
export async function getServerSideProps(context) {
  const meal = await fetchRandomMeal(context.query.meal, context.query.category, context.query.area);
  const mealObject = {
    id: meal.id,
    name: meal.name,
    thumb: meal.image,
    ingredients: meal.ingredients,
    measures: meal.measures,
    instructions: meal.instructions,
  };
  return { props: { initialMeal: mealObject } };
}
