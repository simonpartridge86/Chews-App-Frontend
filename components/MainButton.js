// MAINBUTTON COMPONENT - used for stylized buttons throughout the app

import { Button } from "@chakra-ui/react";

/*
Prop Notes:
 - buttonWidth = to adjust width of button to your needs (not required)
 - buttonSize = options are lg, md, sm, xs (will also adjust text size)
 - buttonText = the text you want to appear on the button
 - onClick = the onClick callback function you want to pass to the button
 - colorMode = add "light" for white button with red details, otherwise add "dark" for a standard red button with white details
 - isDisabled = takes boolean to determine whether button is enabled or disabled (true = disabled), defaults to false
*/

export default function MainButton({
  buttonWidth,
  buttonSize,
  buttonText,
  onClick,
  colorMode,
  borderWidthRecipe,
  isDisabled,
  leftIcon,
  rightIcon,
}) {
  if (!borderWidthRecipe) {
    borderWidthRecipe = "2px";
  }
  if (colorMode === "light") {
    return (
      <Button
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={isDisabled}
        onClick={onClick}
        size={buttonSize}
        fontWeight={"600"}
        fontFamily={"brand.main"}
        fontSize={buttonSize}
        rounded={"lg"}
        width={buttonWidth}
        _hover={{
          transform: "translateY(-1px)",
          boxShadow: "md",
        }}
        bg={"brand.light"}
        color={"brand.primary"}
        borderWidth={borderWidthRecipe}
        borderColor={"brand.primary"}
        _active={{
          bg: "brand.primary",
          color: "brand.light",
        }}
      >
        {buttonText}
      </Button>
    );
  } else if (colorMode === "dark") {
    return (
      <Button
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        disabled={isDisabled}
        onClick={onClick}
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
        color={"brand.light"}
        _active={{
          bg: "brand.light",
          color: "brand.primary",
          borderWidth: borderWidthRecipe,
          borderColor: "brand.primary",
        }}
      >
        {buttonText}
      </Button>
    );
  }
}
