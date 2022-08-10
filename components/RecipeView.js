import { ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function RecipeView({ ingredients, measures, instructions }) {
  return (
    <main className="flex flex-col w-[80vw] items-center space-y-2 my-[2vh] max-w-lg">
      <h2 className="text-primary-color font-permanent-marker text-2xl text-center">
        Things you need:
      </h2>
      <UnorderedList className="w-[90%] font-bold text-dark-color font-nunito">
        {ingredients.map((e, i) => {
          return <ListItem key={i}>{`${e}, ${measures[i]}`}</ListItem>;
        })}
      </UnorderedList>
      <h2 className="text-primary-color font-permanent-marker text-2xl">
        How to make it:
      </h2>
      {instructions.map((e, i) => {
        return <p key={i}>{e}</p>;
      })}
    </main>
  );
}
