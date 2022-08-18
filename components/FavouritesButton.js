// FAVOURITESBUTTON COMPONENT - used for adding recipe to favourites on various pages

/*
Prop Notes:
 - buttonWidth = to adjust width of button to your needs (not required)
 - buttonSize = options are lg, md, sm, xs (will also adjust text size)
 - buttonText = the text you want to appear on the button
 - onClick = onClick callback function you want to pass to the button
 - isDisabled = takes boolean to determine whether button is enabled or disabled (true = disabled), defaults to false
 - ariaLabel = aria label for button
*/

import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function FavouritesButton({
  buttonWidth,
  buttonSize,
  buttonText,
  isDisabled,
  isFavourite,
  onClick,
  ariaLabel,
}) {
  const toast = useToast();
  let buttonTextColor;
  let toastObject;
  if (isFavourite === true) {
    buttonTextColor = "brand.light";
    toastObject = {
      position: "top",
      fontFamily: "brand.main",
      title: "Removed from Favourites",
      status: "error",
      duration: 2000,
      isClosable: true,
    };
  }
  if (isFavourite === false) {
    buttonTextColor = "brand.primary";
    toastObject = {
      fontFamily: "brand.main",
      position: "top",
      title: "Added to Favourites",
      status: "success",
      duration: 2000,
      isClosable: true,
    };
  }

  if (isFavourite === false) {
    return (
      <Button
        aria-label={ariaLabel}
        disabled={isDisabled}
        onClick={() => {
          onClick();
          toast(toastObject);
        }}
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
        bg={"brand.light"}
        color={"brand.primary"}
        borderColor={"brand.primary"}
        borderWidth={"2px"}
        _active={{
          bg: "brand.primary",
          color: "brand.light",
        }}
      >
        {buttonText}
      </Button>
    );
  }

  if (isFavourite === true) {
    return (
      <Button
        aria-label={ariaLabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={isDisabled}
        onClick={() => {
          onClick();
          toast(toastObject);
        }}
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
}
