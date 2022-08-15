import { ListItem, UnorderedList, Divider } from "@chakra-ui/react";
import React from "react";

export default function RecipeView({ ingredients, measures, instructions }) {
  return (
    <main className="flex flex-col w-[80vw] items-center space-y-2 my-[2vh] max-w-lg">
      <Divider />
      <h2 className="text-primary-color font-permanent-marker text-2xl">
        Ingredients you need:
      </h2>
      <Divider />
      <UnorderedList className="w-[90%] font-bold text-dark-color font-nunito text-md pl-[2vh]">
        {ingredients.map((e, i) => {
          return <ListItem key={i}>{`${e}, ${measures[i]}`}</ListItem>;
        })}
      </UnorderedList>
      <Divider />
      <h2 className="text-primary-color font-permanent-marker text-2xl">
        How to make it:
      </h2>
      <Divider />
      <section className="text-left font-nunito text-md space-y-[2vh]">
        {instructions.map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
      </section>
    </main>
  );
}
