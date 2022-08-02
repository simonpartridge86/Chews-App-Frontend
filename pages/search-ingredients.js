import { Search2Icon } from "@chakra-ui/icons";
import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import MainButton from "../components/MainButton";

export default function SearchIngredients() {
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [tagsArray, setTagsArray] = useState([]);

  async function fetchIngredients(inputText) {
    const response = await fetch(
      `https://api.edamam.com/auto-complete?app_id=5cca2bea&app_key=%2061c41e444a3a1fa44fc42fcbe169faad&q=${inputText}`
    );
    const data = await response.json();
    console.log(data);
    setIngredientOptions(data);
  }

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center space-y-6">
      <VStack width="80%">
        <h1 className="font-permanent-marker text-center text-3xl text-primary-color font-bold">
          Add Ingredients:
        </h1>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Type ingredients here"
            onChange={(e) => {
              setInputText(e.target.value);
              fetchIngredients(inputText);
            }}
            value={inputText}
          />
        </InputGroup>

        <label htmlFor="ingredients" hidden>
          Select from list:
        </label>
        <Select
          placeholder="Chews from list"
          name="ingredients"
          id="ingredients"
          onChange={(e) => {
            setCurrentIngredient(e.target.value);
          }}
        >
          {ingredientOptions.map((ingredient) => {
            return <option value={ingredient}>{ingredient}</option>;
          })}
        </Select>

        <HStack wrap={"wrap"} spacing={2} align={"space-between"}>
          {tagsArray.map((tag) => (
            <Tag
              size="md"
              key={tag}
              borderRadius="full"
              variant="solid"
              colorScheme="red"
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
        </HStack>

        <MainButton
          onClick={() => {
            setTagsArray([...tagsArray, currentIngredient]);
          }}
          buttonText="Add Ingredient"
          colorMode={"light"}
          buttonWidth="100%"
          buttonSize="lg"
        />
      </VStack>
      <VStack width="80%">
        <MainButton
          buttonText="Chews for Me"
          colorMode={"dark"}
          buttonWidth="100%"
          buttonSize="lg"
        />
        <MainButton
          buttonText="Add Search Filters"
          colorMode={"light"}
          buttonWidth="100%"
          buttonSize="lg"
        />
      </VStack>
    </main>
  );
}
