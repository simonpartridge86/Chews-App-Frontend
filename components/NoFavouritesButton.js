/*
PLAN:
- Create a favourites button component
- functionality: should be able to save meals to local storage, or delete meals from local storage depending on context
- reuse main button code for button styling
- reuse local storage code from filter modal
*/

// FAVOURITESBUTTON COMPONENT - used for adding recipe to favourites on various pages

import { Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import AlertModal from "./AlertModal";
import { useDisclosure } from "@chakra-ui/react";

/*
Prop Notes:
 - buttonWidth = to adjust width of button to your needs (not required)
 - buttonSize = options are lg, md, sm, xs (will also adjust text size)
 - buttonText = the text you want to appear on the button
 - onClick = onClick callback function you want to pass to the button
 - isDisabled = takes boolean to determine whether button is enabled or disabled (true = disabled), defaults to false
 - goldStar = boolean, determines whether star is gold or white
*/

export default function NoFavouritesButton({
  buttonWidth,
  buttonSize,
  ariaLabel,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Button
      opacity={"50%"}
      aria-label={ariaLabel}
      onClick={onOpen}
      size={buttonSize}
      width={buttonWidth}
      fontSize={buttonSize}
      fontWeight={"600"}
      fontFamily={"brand.main"}
      rounded={"md"}
      bg={"brand.light"}
      color={"brand.primary"}
      borderColor={"brand.primary"}
      borderWidth={"2px"}
    >
      <StarIcon />
      <AlertModal
        isOpen={isOpen}
        onClose={onClose}
        headerText="Access Denied"
        bodyText="Please login to save favourites"
      />
    </Button>
  );
}
