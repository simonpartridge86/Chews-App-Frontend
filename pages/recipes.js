import meals from "../libs/recipes.js";
import { Link, Icon } from "@chakra-ui/react";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";
import MainButton from "../components/MainButton";

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
    <div className="flex flex-col justify-around items-center">
      <br></br>
      <Link>
        Back to results <ArrowBackIcon />
      </Link>
      <br></br>
      <h2 className="text-primary-color font-permanent-marker text-2xl">
        You are making:
      </h2>
      <br></br>
      <h3 className="text-dark-color font-nunito text-lg">{mealName}</h3>
      <br></br>
      <img src={mealThumb} alt={mealName} className="w-4/5"></img>
      <br></br>
      <MainButton
        buttonWidth="25%"
        buttonSize="xs"
        buttonText={<StarIcon />}
        colorMode="dark"
      />
      <br></br>
      <h2 className="text-primary-color font-permanent-marker text-2xl">
        Things you need:
      </h2>
      <br></br>
      <ul className="w-4/5">
        <li className="text-dark-color font-nunito">
          <CircleIcon boxSize={3} />
          {ingredient1}
        </li>
        <li className="text-dark-color font-nunito">
          <CircleIcon boxSize={3} />
          {ingredient2}
        </li>
        <li className="text-dark-color font-nunito">
          <CircleIcon boxSize={3} />
          {ingredient3}
        </li>
      </ul>
      <br></br>
      <h2 className="text-primary-color font-permanent-marker text-2xl">
        How to make it:
      </h2>
      <br></br>
      <p className="w-4/5 text-dark-color font-nunito">{instructions}</p>{" "}
      <Link>Return to Top</Link>
      <br></br>
    </div>
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
