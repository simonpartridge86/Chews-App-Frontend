// NOFAVOURITESBUTTON COMPONENT - appears in place of FavouritesButton when user is not logged in
// Includes alert modal telling user to login to save favourites

/*
Prop Notes:
 - buttonWidth = to adjust width of button to your needs (not required)
 - buttonSize = options are lg, md, sm, xs (will also adjust text size)
 - ariaLabel = aria label for button
*/

import { Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import AlertModal from "./AlertModal";
import { useDisclosure } from "@chakra-ui/react";

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
