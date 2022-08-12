// RECIPECARD COMPONENT - used to display recipes in a list format

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import MainButton from "./MainButton";
import { useRouter } from "next/router";

export default function RecipeCard({ meal }) {
  const router = useRouter();
  // const mealName = meals[index].name;
  // const mealThumb = meals[index].image;
  // const ingredient1 = meals[index].ingredients[0];
  // const ingredient2 = meals[index].ingredients[1];
  // const descriptionArray = [
  //   `Whet your appetite with our tasty ${mealName} meal. Made with ${ingredient1.toLowerCase()} and ${ingredient2.toLowerCase()}.`,
  //   `Feast your eyes on our our tasty ${
  //     meals[index].name
  //   } dish. We've chosen special ingredients, like: ${ingredient1.toLowerCase()} and ${ingredient2.toLowerCase()}, to make this a truly special meal.`,
  //   `Bored? Lonely? Neither? Try this ${mealName} dish. Made with special care and love by carefully sellecting the freshest ${ingredient1.toLowerCase()} and ${ingredient2.toLowerCase()}.`,
  // ];
  // const description = descriptionArray[randomDescription];

  return (
    <section className="flex flex-row">
      <img></img>
      <section className="flex flex-col">
        <h2>Test Recipe Name Goes Here</h2>
        <section>
          <MainButton
            borderWidthRecipe={"0px"}
            buttonWidth="75%"
            buttonSize="md"
            buttonText="View Recipe"
            colorMode="dark"
            onClick={() => {
              router.push({
                pathname: "/recipes",
                query: { mealId: meal.id },
              });
            }}
          />
          <MainButton
            borderWidthRecipe={"0px"}
            buttonWidth="25%"
            buttonSize="md"
            buttonText={<StarIcon />}
            colorMode="dark"
          />
        </section>
      </section>
    </section>

    // <Center py={6} padding={4}>
    //   <Stack
    //     borderColor={"brand.primary"}
    //     borderWidth="2px"
    //     w={{ sm: "100%", md: "540px" }}
    //     // height={{ sm: "476px", md: "11rem" }}
    //     // h="10vh"
    //     direction={{ base: "row" }}
    //     bg={useColorModeValue("white", "gray.900")}
    //     boxShadow={"lg"}
    //     padding={0}
    //   >
    //     <Flex
    //       flex={0.4}
    //       flexDirection="column"
    //       alignItems="center"
    //       justifyContent="center"
    //       pl={1}
    //       pt={0}
    //       maxWidth="200px"

    //       // h="80px"
    //       // w="80px"
    //     >
    //       <Image objectFit="cover" src={meal.image} />
    //     </Flex>
    //     <Stack
    //       flex={1}
    //       flexDirection="column"
    //       justifyContent="space-evenly"
    //       alignItems="left"
    //       p={1}
    //       pt={1}
    //       fontSize={"10px"}
    //     >
    //       <Heading fontSize={"xl"} fontFamily={"brand.main"}>
    //         {meal.name}
    //       </Heading>

    //       <Stack
    //         mt={"2rem"}
    //         direction={"row"}
    //         padding={0}
    //         justifyContent={"space-between"}
    //         alignItems={"center"}
    //       >
    //         <MainButton
    //           borderWidthRecipe={"0px"}
    //           buttonWidth="75%"
    //           buttonSize="md"
    //           buttonText="View Recipe"
    //           colorMode="dark"
    //           onClick={() => {
    //             router.push({
    //               pathname: "/recipes",
    //               query: { mealId: meal.id },
    //             });
    //           }}
    //         />
    //         <MainButton
    //           borderWidthRecipe={"0px"}
    //           buttonWidth="25%"
    //           buttonSize="md"
    //           buttonText={<StarIcon />}
    //           colorMode="dark"
    //         />
    //       </Stack>
    //     </Stack>
    //   </Stack>
    // </Center>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://api.edamam.com/api/recipes/v2/fd2956d1b07db78913c4bf38d23decea?app_id=d6752ced&app_key=dd313e1761bc6ba97b9c65b475de7937&type=public`)
//   const data = await res.json()
//   // Pass data to the page via props
//   return { props: { data } }
// }
