import meals from "../libs/recipes.js";
import { Icon, UnorderedList, ListItem } from "@chakra-ui/react";
import { StarIcon, ArrowUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";

console.log(meals);
function Recipes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * 10));
  }, []);

  const mealName = meals[index].strMeal;
  const mealThumb = meals[index].strMealThumb;
  const ingredient1 = meals[index].strIngredient1;
  const ingredient2 = meals[index].strIngredient2;
  const ingredient3 = meals[index].strIngredient3;
  const instructions = meals[index].strInstructions;

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="brand.dark"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  return (
    <main className="flex flex-col justify-around items-center w-screen">
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton extraText={"to Results"} buttonSize="sm" />
      </section>
      <section className="flex flex-col w-[80vw] items-center space-y-2 mt-[8vh] max-w-lg">
        <h1 className="font-nunito font-bold text-2xl text-dark-color text-center">
          You are making:
        </h1>
        <h1 className="font-permanent-marker text-center text-2xl text-primary-color">
          {mealName}
        </h1>
        <img src={mealThumb} alt={mealName} className="w-[100%]"></img>
        <MainButton
          buttonWidth="100%"
          buttonSize="lg"
          rightIcon={<StarIcon />}
          buttonText={"Save to Favourites"}
          colorMode="dark"
        />
      </section>
      <section className="flex flex-col w-[80vw] items-center space-y-2 my-[2vh] max-w-lg">
        <h2 className="text-primary-color font-permanent-marker text-2xl text-center">
          Things you need:
        </h2>
        <UnorderedList className="w-[90%] font-bold text-dark-color font-nunito">
          <ListItem>{ingredient1}</ListItem>
          <ListItem>{ingredient2}</ListItem>
          <ListItem>{ingredient3}</ListItem>
        </UnorderedList>
        <h2 className="text-primary-color font-permanent-marker text-2xl">
          How to make it:
        </h2>
        <p className="text-dark-color font-nunito">{instructions}</p>{" "}
        <MainButton
          className="max-w-sm"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          buttonSize="sm"
          leftIcon={<ArrowUpIcon />}
          rightIcon={<ArrowUpIcon />}
          buttonText={"Return to Top"}
          colorMode="light"
        />
      </section>
    </main>
  );
}

export default Recipes;

/* PLAN:
- Find dummy data ✅
- Initialise elements of the page (one tick) and make fully functional (two ticks)
  - Toolbar (from yesterday) - burger, chews logo, profile pic ✅
  - 'Back to results' link with <-- arrow ✅
  - 'You are making' header, perm-marker, primary ✅ALMOST
  - 'Creamy steak alfredo' nunito, dark ✅
  - Picture of meal, 80% screen-width ✅
  - Add to favourites button ✅
  - 'Things you need' primary, perm-marker, header✅
  - List of ingredients with measurements, bullet points, nunito, dark✅
  - 'How to make it' primary, perm-marker, header✅
  - Recipe instructions, paragraph, nunito, dark
  - 'Return to top' link, nunito, small, dark✅
*/
