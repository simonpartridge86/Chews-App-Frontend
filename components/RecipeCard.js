// RECIPECARD COMPONENT - used to display recipes in a list format on favourites page

import { StarIcon } from "@chakra-ui/icons";
import MainButton from "./MainButton";
import FavouritesButton from "./FavouritesButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RecipeCard({ meal }) {
  const [isFavourite, setIsFavourite] = useState(true);

  const router = useRouter();

  // handleFavouritesClick changes favourites array in local storage based on clicking favourites buttons on page
  function handleFavouritesClick() {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    const index = storedFavourites.map((object) => object.id).indexOf(meal.id);
    const newFavourites = [
      ...storedFavourites.slice(0, index),
      ...storedFavourites.slice(index + 1),
    ];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    setIsFavourite(false);
    return;
  }

  return (
    <section className="flex flex-row justify-between items-center p-[1vh] border-2 border-primary-color rounded-md gap-[1vh] w-[80vw] max-w-md">
      <img
        src={meal.image}
        className="w-100% h-[13vh] object-cover rounded"
      ></img>
      <section className="flex flex-col justify-between h-[13vh] w-[80vw] text-left">
        <h2 className="font-nunito text-md font-bold text-middle truncate max-w-[180px]">
          {meal.name}
        </h2>
        <p className="font-nunito text-xs font-semibold text-middle truncate max-w-[180px]">
          {meal.ingredients.join(", ")}
        </p>
        <section className="flex flex-row items-center gap-[1vw]">
          <MainButton
            borderWidthRecipe={"0px"}
            buttonWidth="75%"
            buttonSize="sm"
            buttonText="View Recipe"
            colorMode="dark"
            onClick={() => {
              router.push({
                pathname: "/recipes",
                query: { mealId: meal.id },
              });
            }}
          />
          <FavouritesButton
            buttonWidth="25%"
            buttonSize="sm"
            buttonText={<StarIcon />}
            isDisabled={false}
            isFavourite={isFavourite}
            onClick={() => {
              handleFavouritesClick();
              window.location.reload(false);
            }}
          />
        </section>
      </section>
    </section>
  );
}
