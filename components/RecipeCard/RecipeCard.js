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
import { useEffect, useState } from "react";



function SocialProfileWithImageHorizontal({data}) {



    const descriptionArray = [
      `Whet your appetite with our tasty ${data.meals[0].strArea} meal. Made with ${data.meals[0].strIngredient1.toLowerCase()} and ${data.meals[0].strIngredient2.toLowerCase()}.`,
      `Feast your eyes on our our tasty ${data.meals[0].strArea} dish. We've chosen special ingredients, like: ${data.meals[0].strIngredient1.toLowerCase()} and ${data.meals[0].strIngredient2.toLowerCase()}, to make this a truly special meal.`,
      `Bored? Lonely? Neither? Try this ${data.meals[0].strArea} dish. Made with special care and love by carefully sellecting the freshest ${data.meals[0].strIngredient1.toLowerCase()} and ${data.meals[0].strIngredient2.toLowerCase()}.`
    ];
      const randomDescription = Math.floor(Math.random() * 3);
  

  return (
    <Center py={6} padding={2}>
      <Stack
        borderColor={"brand.primary"}
        borderWidth="2px"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "11rem" }}
        direction={{ base: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={0}
      >
        <Flex
          flex={0.4}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pl={1}
          pt={0}
        >
          <Image
            objectFit="cover"
            src={data.meals[0].strMealThumb}
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
            {data.meals[0].strMeal}
          </Heading>
          <p id="chakra-text" color={useColorModeValue("gray.700", "gray.400")}>
            {descriptionArray[randomDescription].length > 125
              ? `${descriptionArray[randomDescription].substring(0, 125)}...`
              : descriptionArray[randomDescription]}
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


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://api.edamam.com/api/recipes/v2/fd2956d1b07db78913c4bf38d23decea?app_id=d6752ced&app_key=dd313e1761bc6ba97b9c65b475de7937&type=public`)
//   const data = await res.json()
//   // Pass data to the page via props
//   return { props: { data } }
// }



export default SocialProfileWithImageHorizontal