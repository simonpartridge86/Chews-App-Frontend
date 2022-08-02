import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

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
    <main>
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
      {/* <input
        type="text"
        placeholder="Type ingredients here"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          fetchIngredients(inputText);
        }}
      ></input> */}
      <label htmlFor="ingredients">Select from list:</label>
      <select
        name="ingredients"
        id="ingredients"
        onChange={(e) => {
          setCurrentIngredient(e.target.value);
        }}
      >
        {ingredientOptions.map((ingredient) => {
          return <option value={ingredient}>{ingredient}</option>;
        })}
      </select>
      <button
        onClick={() => {
          setTagsArray([...tagsArray, currentIngredient]);
        }}
      >
        Add Ingredient
      </button>
      <ul>
        {tagsArray.map((tag) => {
          return <li>{tag}</li>;
        })}
      </ul>
    </main>
  );
}
