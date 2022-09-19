// RESULTS BY INGREDIENT - displays random recipe based on meal type and ingredients selected

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { useDisclosure, Divider, Collapse } from "@chakra-ui/react";
import { StarIcon, ViewIcon, RepeatIcon, ViewOffIcon } from "@chakra-ui/icons";
import BackButton from "../../components/BackButton";
import MainButton from "../../components/MainButton";
import RecipeView from "../../components/RecipeView";
import NoResultsDisplay from "../../components/NoResultsDisplay";
import FavouritesButton from "../../components/FavouritesButton";
import NoFavouritesButton from "../../components/NoFavouritesButton";

// fetchMealByIngredients is declared outside of the page component because it is also used by getServerSideProps
async function fetchMealByIngredients(meal, ingredients) {
  if (meal === "main dish") {
    const response = await fetch(
      `https://chews-backend.herokuapp.com/ingredients-category?category=main&ingredients=${ingredients}`
    );
    const data = await response.json();
    return data.payload[0];
  } else {
    const response = await fetch(
      `https://chews-backend.herokuapp.com/ingredients-category?category=${meal}&ingredients=${ingredients}`
    );
    const data = await response.json();
    return data.payload[0];
  }
}

export default function Results({ initialMeal, noMeal, docTitle }) {
  // various hooks to handle changes and functionality on page
  const [meal, setMeal] = useState(initialMeal);
  const [buttonText, setButtonText] = useState("View Recipe");
  const [buttonIcon, setButtonIcon] = useState(<ViewIcon />);
  const [isFavourite, setIsFavourite] = useState(false);
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  //getMeal runs all meal fetches initiated by "Chews Again" button
  async function getMeal() {
    const fetchedMeal = await fetchMealByIngredients(
      router.query.meal,
      router.query.ingredients.toLowerCase()
    );
    setMeal({
      id: fetchedMeal.id,
      name: fetchedMeal.name,
      image: fetchedMeal.image,
      ingredients: fetchedMeal.ingredients,
      measures: fetchedMeal.measures,
      instructions: fetchedMeal.instructions,
    });
  }

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

  // handleFavouritesClick updates the favourites array in local storage and changes button appearance when favourites button clicked
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

  //checkFavourites checks whether current meal is saved in fabvourites - used to update favourites button appearance & functionality
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

  //useEffect runs checkFavourites on initial load and every time the meal changes
  useEffect(() => {
    checkFavourites();
  }, [meal]);

  //below code ensures that an error page is displayed if no results found
  if (noMeal === true) {
    return <NoResultsDisplay />;
  }

  return (
    <main
      aria-label={docTitle}
      className="flex flex-col min-h-[80vh] w-screen items-center justify-center space-y-5 pb-[2vh] pt-[5vh]"
    >
      <Head>
        <title>{docTitle}</title>
      </Head>
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton />
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
          alt={meal.name}
        />
        <section className="flex flex-row justify-between w-[80vw] space-x-2 max-w-lg">
          <MainButton
            buttonText={buttonText}
            leftIcon={buttonIcon}
            ariaLabel="view or hide recipe"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              onToggle();
              changeButtonText();
            }}
          />
          {user && (
            <FavouritesButton
              buttonText={<StarIcon />}
              ariaLabel="add or remove from favourites"
              buttonSize="lg"
              buttonWidth="20%"
              isDisabled={false}
              isFavourite={isFavourite}
              onClick={() => {
                handleFavouritesClick();
              }}
            />
          )}
          {!user && (
            <NoFavouritesButton
              ariaLabel="disabled favourites button"
              buttonSize="lg"
              buttonWidth="20%"
            />
          )}
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
              ariaLabel="return to top"
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
          ariaLabel="choose again"
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
          buttonWidth="80%"
        />
      </section>
    </main>
  );
}

//getServerSideProps runs initial fetch request for recipe before page load
export async function getServerSideProps(context) {
  const mealType = context.query.meal;
  const searchIngredients = context.query.ingredients.toLowerCase();
  const meal = await fetchMealByIngredients(mealType, searchIngredients);
  if (!meal) {
    return { props: { initialMeal: {}, noMeal: true, docTitle: "No Results" } };
  } else {
    return {
      props: {
        initialMeal: meal,
        noMeal: false,
        docTitle: `Results for ${context.query.meal} (Ingredients: ${context.query.ingredients})`,
      },
    };
  }
}
