import MainButton from "../components/MainButton";
import { VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

export default function MealSelect() {
  const router = useRouter();
  // const [mealChoice, setMealChoice] = useState("");
  // function handleClick(meal) {
  //   setMealChoice(meal);
  //   console.log(mealChoice);
  // }

  return (
    <div className="h-screen">
      <nav className="h-1/6 text-center font-permanent-marker text-3xl">
        Nav Bar Placeholder
      </nav>
      <main className="flex flex-col h-5/6 justify-around">
        <VStack spacing={4} align="center">
          <h1 className="font-permanent-marker text-center text-2xl">
            Chews <span className="font-nunito font-bold">an option:</span>
          </h1>
          <MainButton
            buttonText="Breakfast"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              // const meal = "breakfast";
              router.push({
                pathname: "/search-select/{meal}",
                query: { meal: "breakfast" },
              });
            }}
          />
          <MainButton
            buttonText="Main"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              router.push({
                pathname: "/search-select/{meal}",
                query: { meal: "main" },
              });
            }}
          />
          <MainButton
            buttonText="Dessert"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              router.push({
                pathname: "/search-select/{meal}",
                query: { meal: "dessert" },
              });
            }}
          />
        </VStack>
      </main>
    </div>
  );
}

// import { useRouter } from 'next/router'

// export default function ReadMore({ post }) {
//   const router = useRouter()

//   return (
//     <button
//       type="button"
//       onClick={() => {
//         router.push({
//           pathname: '/search-select/{meal}',
//           query: { meal: mealChoice },
//         })
//       }}
//     >
//       Click here to read more
//     </button>
//   )
// }
