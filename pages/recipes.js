import MainButton from "../components/MainButton";
import { useState } from "react";
import { recipeData } from "../libs/recipes/recipes";
import { Link } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import React from "react";

export default function Recipes() {
  return (
    <div className="flex flex-col">
      <Link>Back to results<ArrowBackIcon></ArrowBackIcon></Link>
    </div>
  );
}


/* PLAN:
- Find dummy data ✅
  - Toolbar (from yesterday) - burger, chews logo, profile pic
  - 'Back to results' link with <-- arrow
  - 'You are making' header, perm-marker, primary
  - 'Creamy steak alfredo' nunito, dark
  - Picture of meal, 80% screen-width
  - Add to favourites button
  - 'Things you need' primary, perm-marker, header
  - List of ingredients with measurements, bullet points, nunito, dark
  - 'How to make it' primary, perm-marker, header
  - Recipe instructions, paragraph, nunito, dark
  - 'Return to top' link, nunito, small, dark
*/

