// RECIPECARD COMPONENT - used to display recipes in a list format

import { StarIcon } from "@chakra-ui/icons";
import MainButton from "./MainButton";
import FavouritesButton from "./FavouritesButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function RecipeCard({ meal }) {
  const router = useRouter();
  const [isFavourite, setIsFavourite] = useState(true);

  function handleFavouritesClick() {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
    const index = storedFavourites.map((object) => object.id).indexOf(meal.id);
    const newFavourites = [
      ...storedFavourites.slice(0, index),
      ...storedFavourites.slice(index + 1),
    ];
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    setIsFavourite(false);
    return;
  }

  return (
    <section className="flex flex-row justify-between items-center p-[1vh] border-2 border-primary-color rounded-md gap-[1vh] w-[80vw] max-w-md">
      <img
        src={meal.image}
        className="w-100% h-[13vh] object-cover rounded"
      ></img>
      <section className="flex flex-col justify-between h-[13vh] w-[80vw] text-left">
        <h2 className="font-nunito text-md font-bold text-middle truncate max-w-[180px]">
          {meal.name}
        </h2>
        <p className="font-nunito text-xs font-semibold text-middle truncate max-w-[180px]">
          {meal.ingredients.join(", ")}
        </p>
        <section className="flex flex-row items-center gap-[1vw]">
          <MainButton
            borderWidthRecipe={"0px"}
            buttonWidth="75%"
            buttonSize="sm"
            buttonText="View Recipe"
            colorMode="dark"
            onClick={() => {
              router.push({
                pathname: "/recipes",
                query: { mealId: meal.id },
              });
            }}
          />
          <FavouritesButton
            buttonWidth="25%"
            buttonSize="sm"
            buttonText={<StarIcon />}
            isDisabled={false}
            isFavourite={isFavourite}
            onClick={() => {
              handleFavouritesClick();
              window.location.reload(false);
            }}
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
