import { Search2Icon, AddIcon, EditIcon } from "@chakra-ui/icons";
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
import React from "react";
import { useState } from "react";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";
import BackButton from "../components/BackButton";
import AlertModal from "../components/AlertModal";
import FilterModal from "../components/FilterModal";

export default function SearchIngredients() {
  const router = useRouter();
  const mealType = router.query.meal;

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
  const {
    isOpen: isOpenFilter,
    onOpen: onOpenFilter,
    onClose: onCloseFilter,
  } = useDisclosure();
  const [ingredientOptions, setIngredientOptions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [tagsArray, setTagsArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  async function fetchIngredients(inputText) {
    const response = await fetch(
      `https://api.edamam.com/auto-complete?app_id=5cca2bea&app_key=%2061c41e444a3a1fa44fc42fcbe169faad&q=${inputText}`
    );
    const data = await response.json();
    const newData = [...data.slice(0, 5)];
    setIngredientOptions(newData);
  }

  function addTag(str) {
    if (tagsArray.length > 4) {
      onOpenAlert1();
      setInputText("");
      setIngredientOptions([]);
      setIsDisabled(true);
      return;
    }
    if (str === "") {
      onOpenAlert2();
      setInputText("");
      setIngredientOptions([]);
      setIsDisabled(true);
      return;
    }
    if (tagsArray.includes(str)) {
      onOpenAlert3();
      setInputText("");
      setIngredientOptions([]);
      setIsDisabled(true);
      return;
    }
    setTagsArray([...tagsArray, currentIngredient]);
    setInputText("");
    setIngredientOptions([]);
    setIsDisabled(true);
  }

  function deleteTag(index) {
    setTagsArray([...tagsArray.slice(0, index), ...tagsArray.slice(index + 1)]);
  }

  return (
    <main className="h-[80vh] w-screen flex flex-col items-center justify-center space-y-6">
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton extraText={"to Search Options"} buttonSize="sm" />
      </section>
      <VStack width="80%" className="max-w-lg">
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
          fontFamily={"brand.main"}
          onChange={(e) => {
            setCurrentIngredient(e.target.value);
            console.log(currentIngredient);
            console.log(currentIngredient);
            if (currentIngredient != "") {
              setIsDisabled(false);
            }
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
          onClick={() => {
            addTag(currentIngredient);
          }}
          isDisabled={isDisabled}
          leftIcon={<AddIcon />}
          buttonText="Add Ingredient"
          colorMode={"light"}
          buttonWidth="100%"
          buttonSize="lg"
        />
      </VStack>
      <Divider width="80%" className="max-w-lg" />
      <VStack width="80%" className="max-w-lg">
        <h2 className="font-nunito font-bold text-2xl text-center">
          Added your ingredients?
        </h2>
        <MainButton
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
            tagsArray.length > 0
              ? router.push({
                  pathname: "/results",
                  query: { meal: mealType, ingredients: { ...tagsArray } },
                })
              : onOpenAlert3();
          }}
        />
        <MainButton
          leftIcon={<EditIcon />}
          buttonText="Edit Search Filters"
          buttonSize="sm"
          colorMode="light"
          buttonWidth="100%"
          onClick={() => {
            onOpenFilter();
          }}
        />
      </VStack>
      <AlertModal
        isOpen={isOpenAlert1}
        onClose={onCloseAlert1}
        headerText="Wait!"
        bodyText="You can only add a maximum of 5 ingredients!"
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
      <FilterModal isOpen={isOpenFilter} onClose={onCloseFilter} />
    </main>
  );
}

/*
Bug fixing:
- Stop blank tags getting added ✅
- Stop repeat tags getting added (maybe add alert) ✅
- limit number of tags to 5ish ✅
- When clicking Add Ingredient - clear text input and return select input to "Chews from list" ✅
- make tags deletable by clicking cross ✅

- Limit number of suggestions to 5? ✅
- Connect "Chews for Me" button to results page 
- Tags are indented on second+ line

*/
