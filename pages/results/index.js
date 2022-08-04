import meals from "../../libs/recipes.js";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainButton from "../../components/MainButton";
import {
  StarIcon,
  ViewIcon,
  RepeatIcon,
  UpDownIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import BackButton from "../../components/BackButton";

export default function Results() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * 10));
  }, []);

  const mealName = meals[index].strMeal;
  const mealThumb = meals[index].strMealThumb;

  const router = useRouter();
  const meal = router.query.meal;
  const ingredients = router.query.ingredients;
  console.log(ingredients);
  return (
    <main className="flex flex-col h-[80vh] w-screen items-center justify-center space-y-2">
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton extraText={"to Search"} buttonSize="sm" />
      </section>
      <section className="flex flex-col w-[80vw] items-center justify-end space-y-2 max-w-lg">
        <h1 className="font-nunito font-bold text-2xl text-dark-color text-center">
          You should{" "}
          <span className="font-permanent-marker text-center text-2xl text-dark-color font-bold">
            Chews{" "}
          </span>
          this:
        </h1>
        <h1 className="font-permanent-marker text-center text-2xl text-primary-color">
          {mealName}
        </h1>
        <img
          className="w-[100%] max-h-[30vh] object-cover rounded"
          src={mealThumb}
          alt="recipe image"
        />
      </section>
      <section className="flex flex-row justify-between w-[80vw] space-x-2 max-w-lg">
        <MainButton
          buttonText="View Recipe"
          leftIcon={<ViewIcon />}
          buttonSize="md"
          colorMode="dark"
          buttonWidth="80%"
          onClick={() => {
            router.push({
              pathname: "/recipes",
              query: { meal: meal, mealIndex: index },
            });
          }}
        />
        <MainButton
          buttonText={<StarIcon />}
          buttonSize="md"
          colorMode="dark"
          buttonWidth="20%"
        />
      </section>
      <section className="flex flex-col w-[80vw] items-center justify-end space-y-2 max-w-lg">
        <Divider />
        <h1 className="font-nunito font-bold text-center text-2xl text-dark-color">
          Prefer something else?
        </h1>
        <section className="flex flex-row justify-between w-[100%] space-x-2">
          <MainButton
            onClick={() => {
              window.location.reload(false);
            }}
            leftIcon={<RepeatIcon />}
            buttonText={
              <span className="font-permanent-marker text-center text-lg text-light-color font-bold">
                Chews
              </span>
            }
            rightIcon="again"
            buttonSize="md"
            colorMode="dark"
            buttonWidth="50%"
          />
          <MainButton
            leftIcon={<UpDownIcon />}
            buttonText="See All"
            buttonSize="md"
            colorMode="dark"
            buttonWidth="50%"
          />
        </section>
        <MainButton
          leftIcon={<EditIcon />}
          buttonText="Edit Search Filters"
          buttonSize="sm"
          colorMode="light"
          buttonWidth="100%"
        />
      </section>
    </main>
  );
}
