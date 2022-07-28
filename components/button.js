import { Button } from "@chakra-ui/react";

export default function ClickMe() {
  return (
    <Button
      px={8}
      bg="brand.primary"
      color={"white"}
      rounded={"md"}
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
      }}
    >
      Click Me
    </Button>
  );
}
