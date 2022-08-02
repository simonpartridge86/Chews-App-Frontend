import { useState } from "react";
import { recipeData } from "../libs/recipes/recipes";
import { Link } from '@chakra-ui/react'
import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";

import React from "react";
import MainButton from "../components/MainButton";

function Recipes() {
  return(<div className="flex flex-col items-center">
  <Link>Back to results <ArrowBackIcon/></Link>
  <h2 className="color-primary font-permanent-marker text-2xl">You are making:</h2>
  <h3 className="color-dark font-nunito text-lg">{recipeData[0].recipe.label}</h3>
  <img
   src='https://www.alrightnow.com/wp-content/uploads/2018/03/Hearty-Chickpea-Salad-Pic-scaled.jpeg'
   alt={recipeData[0].recipe.label}
   className="w-4/5">
   </img>
   <MainButton buttonWidth='12' buttonSize='40' buttonText={<StarIcon w={8} h={8}/>} colorMode="dark" borderWidthRecipe="5px" isDisabled={false}/>
   <h2 className="color-primary font-permanent-marker text-2xl">Things you need:</h2>
   <ul>
   <li>{recipeData[0].recipe.ingredientLines[0]}</li>
  <li>{recipeData[0].recipe.ingredientLines[1]}</li>
  <li>{recipeData[0].recipe.ingredientLines[2]}</li>
  </ul>
  <h2 className="color-primary font-permanent-marker text-2xl">How to make it:</h2>
  <Link>Return to Top</Link>
</div>)
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
  - Add to favourites button ✅ALMOST
  - 'Things you need' primary, perm-marker, header✅
  - List of ingredients with measurements, bullet points, nunito, dark✅ALMOST
  - 'How to make it' primary, perm-marker, header✅
  - Recipe instructions, paragraph, nunito, dark
  - 'Return to top' link, nunito, small, dark✅
*/

