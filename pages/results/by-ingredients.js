// Results page - displays random recipe from local data

import React, { useEffect, useState } from "react";
import { useDisclosure, Divider, Collapse } from "@chakra-ui/react";
import { StarIcon, ViewIcon, RepeatIcon, ViewOffIcon } from "@chakra-ui/icons";
import BackButton from "../../components/BackButton";
import FilterModal from "../../components/FilterModal";
import MainButton from "../../components/MainButton";
import RecipeView from "../../components/RecipeView";
import NoResultsDisplay from "../../components/NoResultsDisplay";
import FavouritesButton from "../../components/FavouritesButton";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Results({ meals, noMeal }) {
  // various hooks to handle changes on page
  const [count, setCount] = useState(0);
  const [meal, setMeal] = useState(meals[0]);
  const [buttonText, setButtonText] = useState("View Recipe");
  const [buttonIcon, setButtonIcon] = useState(<ViewIcon />);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isNoMeal, setIsNoMeal] = useState(noMeal);
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();

  //changeButtonText changes the text on the "View Recipe" button based on whether full recipe is open or closed
  function changeButtonText() {
    if (isCollapseOpen) {
      setButtonText("View Recipe");
      setButtonIcon(<ViewIcon />);
    } else {
      setButtonText("Hide Recipe");
      setButtonIcon(<ViewOffIcon />);
    }
  }

  //handleClick function is handed to "Chews Again" button
  function handleClick() {
    setCount(count + 1);
  }

  function handleFavouritesClick() {
    if (isFavourite === false) {
      if (!localStorage.getItem("favourites")) {
        localStorage.setItem("favourites", JSON.stringify([meal]));
        setIsFavourite(true);
        return;
      } else {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
        const newFavourites = [...storedFavourites, meal];
        localStorage.setItem("favourites", JSON.stringify(newFavourites));
        setIsFavourite(true);
        return;
      }
    }
    if (isFavourite === true) {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      const index = storedFavourites
        .map((object) => object.id)
        .indexOf(meal.id);
      console.log(index);
      const newFavourites = [
        ...storedFavourites.slice(0, index),
        ...storedFavourites.slice(index + 1),
      ];
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setIsFavourite(false);
      return;
    }
  }

  useEffect(() => {
    console.log(meals[count]);
    if (Object.keys(meals[count]).length === 0) {
      setIsNoMeal(true);
      setMeal({});
    } else {
      setMeal(meals[count]);
      setIsNoMeal(false);
    }
  }, [count]);

  useEffect(() => {
    console.log("useEffect runs", isFavourite);
    checkFavourites();
  }, [meal]);

  function checkFavourites() {
    if (!localStorage.getItem("favourites")) {
      setIsFavourite(false);
    } else {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      if (storedFavourites.filter((e) => e.id === meal.id).length > 0) {
        console.log("found item:");
        setIsFavourite(true);
      } else {
        setIsFavourite(false);
      }
    }
  }

  if (isNoMeal === true) {
    return <NoResultsDisplay hasHistory={true} setCount={setCount} />;
  } //returns error page if no more results found
  return (
    <main className="flex flex-col min-h-[80vh] w-screen items-center justify-center space-y-5 pb-[2vh] pt-[5vh]">
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton extraText={"to Search"} buttonSize="sm" />
      </section>
      <section className="flex flex-col w-[80vw] h-[50vh] items-center justify-end space-y-2 max-w-lg">
        <h2 className="font-nunito font-bold text-xl text-dark-color text-center">
          You should{" "}
          <span className="font-permanent-marker text-center text-xl text-primary-color font-normal">
            Chews{" "}
          </span>
          this:
        </h2>
        <h1 className="font-permanent-marker text-center text-2xl text-primary-color">
          {meal.name}
        </h1>
        <img
          className="w-[100%] max-h-[25vh] object-cover rounded"
          src={meal.image}
          alt="recipe image"
        />
        <section className="flex flex-row justify-between w-[80vw] space-x-2 max-w-lg">
          <MainButton
            buttonText={buttonText}
            leftIcon={buttonIcon}
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              onToggle();
              changeButtonText();
            }}
          />
          <FavouritesButton
            buttonText={<StarIcon />}
            buttonSize="lg"
            buttonWidth="20%"
            isDisabled={false}
            isFavourite={isFavourite}
            onClick={() => {
              handleFavouritesClick();
            }}
          />
        </section>
      </section>

      <section className="flex flex-col w-[80vw] items-center justify-end space-y-2 max-w-lg">
        <Collapse in={isCollapseOpen} animateOpacity>
          <RecipeView
            ingredients={meal.ingredients}
            measures={meal.measures}
            instructions={meal.instructions}
          />
          <section className="flex flex-col w-[80vw] items-center space-y-2 max-w-lg">
            <MainButton
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              buttonSize="sm"
              buttonText={"Return to Top"}
              colorMode="light"
            />
          </section>
        </Collapse>
      </section>
      <section className="flex flex-col w-[80vw] items-center justify-end space-y-2 max-w-lg">
        <Divider />
        <h2 className="font-nunito font-bold text-center text-lg text-dark-color">
          Prefer something else?
        </h2>
        <MainButton
          onClick={() => {
            if (isCollapseOpen) {
              onToggle();
              changeButtonText();
              handleClick();
            } else {
              handleClick();
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
          buttonWidth="80%"
        />
      </section>
    </main>
  );
}

//getServerSideProps runs initial fetch request for recipe before page load, this avoids the flicker update caused by useEffect as the alternative
export async function getServerSideProps(context) {
  const mealType = context.query.meal;
  const searchIngredients = context.query.ingredients.toLowerCase();
  let mealsArray;
  if (mealType === "main dish") {
    const response = await fetch(
      `${API_URL}ingredients-category?category=main&ingredients=${searchIngredients}`
    );
    const data = await response.json();
    mealsArray = data.payload;
  } else {
    const response = await fetch(
      `${API_URL}ingredients-category?category=${mealType}&ingredients=${searchIngredients}`
    );
    const data = await response.json();
    mealsArray = data.payload;
  }
  if (mealsArray.length === 0) {
    return { props: { meals: [{}], noMeal: true } };
  } else {
    return { props: { meals: mealsArray, noMeal: false } };
  }
}
