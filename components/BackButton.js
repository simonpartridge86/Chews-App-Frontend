import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

/*
Prop Notes:
 - buttonWidth = to adjust width of button to your needs
 - buttonSize = options are lg, md, sm, xs (will also adjust text size)
 - extraText = whatever text you want to appear on the button after "Back"
*/

export default function BackButton({ buttonWidth, buttonSize, extraText }) {
  let buttonText = "Back";
  if (extraText) {
    buttonText = `Back ${extraText}`;
  }
  return (
    <Button
      onClick={() => {
        router.back();
      }}
      size={buttonSize}
      leftIcon={<ArrowBackIcon />}
      fontWeight={"600"}
      fontFamily={"brand.main"}
      fontSize={buttonSize}
      rounded={"lg"}
      width={buttonWidth}
      _hover={{
        bg: "brand.primary",
        color: "brand.light",
      }}
      bg={"brand.light"}
      color={"brand.primary"}
      borderColor={"brand.primary"}
      borderWidth={"0px"}
      _active={{
        bg: "brand.light",
        color: "brand.dark",
      }}
    >
      {buttonText}
    </Button>
  );
}
