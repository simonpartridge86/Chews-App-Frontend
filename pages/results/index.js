// RESULTS - displays random recipe based on meal type (also with diet and cuisine filters if selected)

import React, { useState, useEffect } from "react";
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

// fetchRandomMeal is declared outside of the page component because it is also used by getServerSideProps
async function fetchRandomMeal(mealType, category, area) {
  if (category && area) {
    const response = await fetch(
      `https://chews-backend.herokuapp.com/area-category?category=${category}&area=${area}`
    );
    const data = await response.json();
    if (data.payload.length === 0) {
      return null;
    } else {
      return data.payload[0];
    }
  }

  if (category) {
    const response = await fetch(
      `https://chews-backend.herokuapp.com/area-category?category=${category}`
    );
    const data = await response.json();
    if (data.payload.length === 0) {
      return null;
    } else {
      return data.payload[0];
    }
  }

  if (area) {
    const response = await fetch(
      `https://chews-backend.herokuapp.com/area-category?area=${area}`
    );
    const data = await response.json();
    if (data.payload.length === 0) {
      return null;
    } else {
      return data.payload[0];
    }
  } else {
    if (mealType === "main dish") {
      const response = await fetch(
        `https://chews-backend.herokuapp.com/random-meal?meal=main`
      );

      const data = await response.json();
      if (data.payload.length === 0) {
        return null;
      } else {
        return data.payload[0];
      }
    }
    const response = await fetch(
      `https://chews-backend.herokuapp.com/random-meal?meal=${mealType}`
    );

    const data = await response.json();
    if (data.payload.length === 0) {
      return null;
    } else {
      return data.payload[0];
    }
  }
}

export default function Results({ initialMeal, noMeal, docTitle }) {
  // various hooks to handle changes and functionality on page
  const { user, error, isLoading } = useUser();
  const [meal, setMeal] = useState(initialMeal);
  const [buttonText, setButtonText] = useState("View Recipe");
  const [buttonIcon, setButtonIcon] = useState(<ViewIcon />);
  const [isFavourite, setIsFavourite] = useState(false);
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();

  const router = useRouter();

  //getMeal runs all meal fetches initiated by "Chews Again" button
  async function getMeal() {
    const fetchedMeal = await fetchRandomMeal(
      router.query.meal,
      router.query.category,
      router.query.area
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

  //checkFavourites checks whether current meal is saved in fabvourites - used to update favourites button appearance & functionality
  function checkFavourites() {
    if (!localStorage.getItem("favourites")) {
      setIsFavourite(false);
    } else {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      if (storedFavourites.filter((e) => e.id === meal.id).length > 0) {
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
      const newFavourites = [
        ...storedFavourites.slice(0, index),
        ...storedFavourites.slice(index + 1),
      ];
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setIsFavourite(false);
      return;
    }
  }

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
            ariaLabel="view or hide recipe"
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
          {user && (
            <FavouritesButton
              ariaLabel="add or remove from favourites"
              buttonText={<StarIcon />}
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
              ariaLabel="return to top"
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

//getServerSideProps fetches initial recipe before load, and sets the document title based on search type
export async function getServerSideProps(context) {
  const meal = await fetchRandomMeal(
    context.query.meal,
    context.query.category,
    context.query.area
  );
  let docTitle;
  if (context.query.category && context.query.area) {
    `Results for ${context.query.meal} (${context.query.category}, ${context.query.area})`;
  } else if (context.query.category) {
    docTitle = `Results for ${context.query.meal} (${context.query.category})`;
  } else if (context.query.area) {
    docTitle = `Results for ${context.query.meal} (${context.query.area})`;
  } else {
    docTitle = `Results for ${context.query.meal}`;
  }
  if (meal) {
    const mealObject = {
      id: meal.id,
      name: meal.name,
      image: meal.image,
      ingredients: meal.ingredients,
      measures: meal.measures,
      instructions: meal.instructions,
    };
    return {
      props: {
        initialMeal: mealObject,
        noMeal: false,
        docTitle: docTitle,
      },
    };
  } else {
    return { props: { initialMeal: {}, noMeal: true, docTitle: "No Results" } };
  }
}
