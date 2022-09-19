// BACKBUTTON COMPONENT - used to create back buttons at top of each page

/*
To use, copy this code into the top of the relevant page function return:
<section className="absolute top-[12vh] left-[2vh]">
  <BackButton />
</section>;
*/

import { Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button
      aria-label="back"
      onClick={() => {
        router.back();
      }}
      size="sm"
      leftIcon={<ArrowBackIcon />}
      fontWeight={"600"}
      fontFamily={"brand.main"}
      fontSize="sm"
      rounded={"lg"}
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
      Back
    </Button>
  );
}
