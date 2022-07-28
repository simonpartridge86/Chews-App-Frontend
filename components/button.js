import { Button } from "@chakra-ui/react";


export default function ClickMe({buttonWidth}) {
  return (
    <Button
    lineHeight='10'
    fontSize='30'
    fontWeight='600'
    fontFamily='nunito, sans-serif'
      justifyContent='center' //for the writing inside the btn
      width={buttonWidth} //overall width of the btn in relation to page
      paddingX={5} //
      paddingY={1} //
      bg="brand.primary"
      color={"brand.light"}
      rounded={"md"}
      _active={{
        bg: "brand.light",
        color: "brand.primary",
      }}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "md",
      }}
    >
      Click me again
    </Button>
  );
}
