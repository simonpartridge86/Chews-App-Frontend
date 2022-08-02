import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { recipeData } from "../../libs/recipes/recipes";
import MainButton from "../MainButton";
import { StarIcon } from "@chakra-ui/icons";

export default function SocialProfileWithImageHorizontal() {
  return (
    <Center py={6} padding={2}>
      <Stack
        borderColor={"brand.primary"}
        borderWidth="2px"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "11rem" }}
        direction={{ base: "row"}}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={0}
      >
        <Flex flex={0.4} flexDirection="column" alignItems="center" justifyContent='center' pl={1} pt={0}>
          <Image
            objectFit="cover"
            src={recipeData[0].recipe.images.THUMBNAIL.url}
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="left"
          p={1}
          pt={1}
          fontSize={"10px"}
        >
          <Heading fontSize={"12px"} fontFamily={"body"}>
            {recipeData[0].recipe.label}
          </Heading>
          <p id="chakra-text" color={useColorModeValue("gray.700", "gray.400")}>
            {recipeData[0].recipe.description.length > 100
              ? `${recipeData[0].recipe.description.substring(0, 100)}...`
              : recipeData[0].recipe.description}
          </p>
          <Stack
            mt={"2rem"}
            direction={"row"}
            padding={0}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <MainButton
              borderWidthRecipe={"0px"}
              buttonWidth="25%"
              buttonSize="xs"
              buttonText={<StarIcon />}
              colorMode="dark"
            />
            <MainButton
              borderWidthRecipe={"0px"}
              buttonWidth="75%"
              buttonSize="xs"
              buttonText="View Recipe"
              colorMode="dark"
            />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
