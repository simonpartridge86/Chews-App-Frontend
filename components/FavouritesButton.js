/*
PLAN:
- Create a favourites button component
- functionality: should be able to save meals to local storage, or delete meals from local storage depending on context
- reuse main button code for button styling
- reuse local storage code from filter modal
*/

// FAVOURITESBUTTON COMPONENT - used for adding recipe to favourites on various pages

import { Button } from "@chakra-ui/react";

/*
Prop Notes:
 - buttonWidth = to adjust width of button to your needs (not required)
 - buttonSize = options are lg, md, sm, xs (will also adjust text size)
 - buttonText = the text you want to appear on the button
 - onClick = onClick callback function you want to pass to the button
 - isDisabled = takes boolean to determine whether button is enabled or disabled (true = disabled), defaults to false
 - goldStar = boolean, determines whether star is gold or white
*/

export default function FavouritesButton({
  buttonWidth,
  buttonSize,
  buttonText,
  isDisabled,
  leftIcon,
  rightIcon,
  currentMeal,
  goldStar,
  setIsButtonGold,
  isButtonGold,
}) {
  function handleClick(mealObj) {
    if (!isButtonGold) {
      if (localStorage.getItem("favourites") === null) {
        localStorage.setItem("favourites", JSON.stringify([mealObj]));
      } else {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
        if (storedFavourites.filter((e) => e.id === mealObj.id).length === 0) {
          const newStoredFavourites = [...storedFavourites, mealObj];
          localStorage.setItem(
            "favourites",
            JSON.stringify(newStoredFavourites)
          );
        }
      }
    }
    if (isButtonGold) {
      const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
      const index = storedFavourites
        .map((object) => object.id)
        .indexOf(currentMeal.id);
      const newStoredFavourites = [
        ...storedFavourites.slice(0, index),
        ...storedFavourites.slice(index + 1),
      ];
      localStorage.setItem("favourites", JSON.stringify(newStoredFavourites));
    }
    setIsButtonGold(!isButtonGold);
  }

  let buttonTextColor = "brand.light";
  if (goldStar) {
    buttonTextColor = "yellow.300";
  }

  return (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      disabled={isDisabled}
      onClick={() => handleClick(currentMeal)}
      size={buttonSize}
      fontWeight={"600"}
      fontSize={buttonSize}
      fontFamily={"brand.main"}
      rounded={"md"}
      width={buttonWidth}
      _hover={{
        transform: "translateY(-1px)",
        boxShadow: "md",
      }}
      bg={"brand.primary"}
      color={buttonTextColor}
      _active={{
        bg: "brand.light",
        color: "brand.primary",
        borderColor: "brand.primary",
      }}
    >
      {buttonText}
    </Button>
  );
}
