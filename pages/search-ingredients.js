// Search-Ingredients page - allows user to add ingredients to their search

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Search2Icon, AddIcon, EditIcon } from "@chakra-ui/icons";
import MainButton from "../components/MainButton";
import BackButton from "../components/BackButton";
import AlertModal from "../components/AlertModal";
import LoadingScreen from "../components/LoadingScreen";

export default function SearchIngredients() {
  const router = useRouter();
  const mealType = router.query.meal;

  // Chakra useDisclosure hooks for alert modals
  const {
    isOpen: isOpenAlert1,
    onOpen: onOpenAlert1,
    onClose: onCloseAlert1,
  } = useDisclosure();
  const {
    isOpen: isOpenAlert2,
    onOpen: onOpenAlert2,
    onClose: onCloseAlert2,
  } = useDisclosure();
  const {
    isOpen: isOpenAlert3,
    onOpen: onOpenAlert3,
    onClose: onCloseAlert3,
  } = useDisclosure();
  const {
    isOpen: isOpenAlert4,
    onOpen: onOpenAlert4,
    onClose: onCloseAlert4,
  } = useDisclosure();

  // Various useState hooks to store user inputs and selected ingredients, among others
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [tagsArray, setTagsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetchIngredients function fetches ingredients list from our database (originally from TheMealDB API) based on user input
  async function fetchIngredients(inputText) {
    console.log(inputText);
    const response = await fetch(
      `https://chews-backend.herokuapp.com/ingredients-list/${inputText}`
    );

    const data = await response.json();
    return data.payload;
  }

  // addTag function validates user input before adding new tag to ingredients list, and resets input on text input and dropdown menu
  function addTag(str) {
    if (tagsArray.length > 2) {
      onOpenAlert1();
      setInputText("");
      setIngredientOptions([]);
      return;
    }
    if (str === "") {
      onOpenAlert2();
      setInputText("");
      setIngredientOptions([]);
      return;
    }
    if (tagsArray.includes(str)) {
      onOpenAlert3();
      setInputText("");
      setIngredientOptions([]);
      return;
    }
    setTagsArray([...tagsArray, currentIngredient]);
    setInputText("");
    setIngredientOptions([]);
  }

  // deleteTag function is added to ingredient tag close button to allow ingredients to be deleted from the list
  function deleteTag(index) {
    setTagsArray([...tagsArray.slice(0, index), ...tagsArray.slice(index + 1)]);
  }

  // useEffect function runs the ingredients fetch to ensure up-to-date rendering
  useEffect(() => {
    if (inputText && /^[a-zA-Z]/.test(inputText)) {
      const getIngredients = async () => {
        const searchIngredient = await fetchIngredients(inputText);
        setIngredientOptions(searchIngredient);
      };
      getIngredients();
    }
  }, [inputText]);

  if (isLoading) return <LoadingScreen />; // makes LoadingScreen component show while the next Results page is loading
  return (
    <main className="h-[80vh] w-screen flex flex-col items-center justify-center space-y-6">
      <Head>
        <title>Choose ingredients</title>
      </Head>
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton
          extraText={"to Search Options"}
          buttonSize="sm"
          ariaLabel="back button"
        />
      </section>
      <VStack width="80vw" className="max-w-md">
        <h1 className="font-nunito font-bold text-2xl text-center">
          Time to{" "}
          <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
            Chews{" "}
          </span>
          your ingredients:
        </h1>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Type ingredients here"
            fontFamily={"brand.main"}
            onChange={async (e) => {
              setInputText(e.target.value);
            }}
            value={inputText}
          />
        </InputGroup>

        <label htmlFor="ingredients" hidden>
          Select from list:
        </label>
        <Select
          ariaLabel="choose from list"
          placeholder="Chews from list"
          name="ingredients"
          id="ingredients"
          fontFamily={"brand.main"}
          onChange={(e) => {
            const newIngredient = e.target.value;
            setCurrentIngredient(newIngredient);
          }}
        >
          {ingredientOptions.map((ingredient) => {
            return (
              <option
                key={ingredient}
                value={ingredient}
                fontFamily={"brand.main"}
              >
                {ingredient}
              </option>
            );
          })}
        </Select>

        <HStack wrap={"wrap"} spacing={2} align={"space-between"}>
          {tagsArray.map((tag, index) => (
            <Tag
              size="md"
              key={tag}
              borderRadius="full"
              variant="solid"
              bg={"brand.primary"}
              fontFamily={"brand.main"}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton
                onClick={() => {
                  deleteTag(index);
                }}
              />
            </Tag>
          ))}
        </HStack>

        <MainButton
          ariaLabel="add ingredient to search"
          onClick={() => {
            addTag(currentIngredient);
          }}
          leftIcon={<AddIcon />}
          buttonText="Add Ingredient"
          colorMode={"light"}
          buttonWidth="100%"
          buttonSize="lg"
        />
      </VStack>
      <Divider width="80%" className="max-w-lg" />
      <VStack width="80%" className="max-w-md">
        <h2 className="font-nunito font-bold text-2xl text-center">
          Added your ingredients?
        </h2>
        <MainButton
          ariaLabel="search for a meal"
          leftIcon={"Yes, now"}
          buttonText={
            <span className="font-permanent-marker text-center text-xl text-light-color font-normal">
              Chews
            </span>
          }
          rightIcon="for Me"
          colorMode={"dark"}
          buttonWidth="100%"
          buttonSize="lg"
          onClick={() => {
            if (tagsArray.length > 0) {
              router.push({
                pathname: "/results/by-ingredients",
                query: { meal: mealType, ingredients: tagsArray.join() },
              });
              setIsLoading(true);
            } else {
              onOpenAlert4();
            }
          }}
        />
      </VStack>
      <AlertModal
        isOpen={isOpenAlert1}
        onClose={onCloseAlert1}
        headerText="Wait!"
        bodyText="You can only add a maximum of 3 ingredients!"
      />
      <AlertModal
        isOpen={isOpenAlert2}
        onClose={onCloseAlert2}
        headerText="Wait!"
        bodyText="No ingredient entered. Please search for an ingredient and select from the dropdown menu."
      />
      <AlertModal
        isOpen={isOpenAlert3}
        onClose={onCloseAlert3}
        headerText="Wait!"
        bodyText="This ingredient has already been added."
      />
      <AlertModal
        isOpen={isOpenAlert4}
        onClose={onCloseAlert4}
        headerText="Wait!"
        bodyText="Please add some ingredients first!"
      />
    </main>
  );
}
