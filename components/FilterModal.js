// FILTERMODAL COMPONENT - used to display filters on search page

/*
Usage Notes:
- In page file where FilterModal is used:
  - import useDisclosure from chakra: "import { useDisclosure } from "@chakra-ui/react";"
  - add following inside page function: "const { isOpen, onOpen, onClose } = useDisclosure();"
  - add following props: <FilterModal isOpen={isOpen} onClose={onClose} />;
  - include "onOpen" in the onClick function of a relevant button on the page;
*/

/* Prop notes:
isOpen/onClose = "isOpen" and "onClose" are functions that need to be passed from the Chakra UI hook "useDisclosure";
*/

import React, { useState, useEffect } from "react";
import MainButton from "./MainButton";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Switch,
  Divider,
} from "@chakra-ui/react";
import { categoryArray, cuisineArray } from "../libs/filters.js";

export default function FilterModal({ isOpen, onClose }) {
  const [categoryFilters, setcategoryFilters] = useState([]); // used to store selected category filters
  const [cuisineFilters, setCuisineFilters] = useState([]); // used to store selected cuisine filters

  // useEffect sets the category and cuisine filters, either as the default "all false" settings from libs, or from localstorage if they exist
  useEffect(() => {
    if (localStorage.getItem("category") === null) {
      setcategoryFilters([...categoryArray]);
    } else {
      const storedcategoryFilters = JSON.parse(
        localStorage.getItem("category")
      );
      setcategoryFilters([...storedcategoryFilters]);
    }

    if (localStorage.getItem("cuisine") === null) {
      setCuisineFilters([...cuisineArray]);
    } else {
      const storedCuisineFilters = JSON.parse(localStorage.getItem("cuisine"));
      setCuisineFilters([...storedCuisineFilters]);
    }
  }, []);

  // onChangecategory and onChangeCuisine functions update the respective filter array states based on changes to switches in the filter modal
  function onChangecategory(e, arr, item) {
    const index = arr.findIndex((object) => {
      return object.filter === item;
    });
    const newArray = [...arr];
    newArray[index].isChecked = e.target.checked;
    setcategoryFilters(newArray);
    console.log(categoryFilters);
  }

  function onChangeCuisine(e, arr, item) {
    const index = arr.findIndex((object) => {
      return object.filter === item;
    });
    const newArray = [...arr];
    newArray[index].isChecked = e.target.checked;
    setCuisineFilters(newArray);
    console.log(cuisineFilters);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInRight"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent
          width="90vw"
          flex="flex"
          flexDir="column"
          alignItems="center"
          maxWidth={"lg"}
          maxHeight={"70vh"}
        >
          <ModalHeader fontFamily={"brand.main"} fontSize={"2xl"}>
            <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
              Chews{" "}
            </span>{" "}
            Filters
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="w-[80%] max-h-[50%]">
            <Text
              fontFamily={"brand.main"}
              fontWeight={600}
              fontSize={"lg"}
              textColor={"brand.primary"}
              textAlign={"left"}
            >
              Dietary Preferences:
            </Text>
            <Divider />
            <section className="w-[100%] flex flex-col mt-[1vh]">
              {categoryFilters.map((object) => {
                return (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={object.filter}
                  >
                    <label fontFamily={"brand.main"} htmlFor={object.filter}>
                      {object.filter}
                    </label>

                    <Switch
                      colorScheme="red"
                      id={object.filter}
                      onChange={(e) => {
                        onChangecategory(e, categoryFilters, object.filter);
                        localStorage.setItem(
                          "category",
                          JSON.stringify(categoryFilters)
                        );
                      }}
                      defaultChecked={object.isChecked}
                    />
                  </div>
                );
              })}
            </section>
            <Text
              fontFamily={"brand.main"}
              fontWeight={600}
              fontSize={"lg"}
              textColor={"brand.primary"}
              textAlign={"left"}
              marginTop={"2vh"}
            >
              Cuisine Preferences:
            </Text>
            <Divider />
            <section className="w-[100%] flex flex-col mt-[1vh]">
              {cuisineFilters.map((object) => {
                return (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={object.filter}
                  >
                    <label fontFamily={"brand.main"} htmlFor={object.filter}>
                      {object.filter}
                    </label>

                    <Switch
                      colorScheme="red"
                      id={object.filter}
                      onChange={(e) => {
                        onChangeCuisine(e, cuisineFilters, object.filter);
                        localStorage.setItem(
                          "cuisine",
                          JSON.stringify(cuisineFilters)
                        );
                      }}
                      defaultChecked={object.isChecked}
                    />
                  </div>
                );
              })}
            </section>
          </ModalBody>

          <ModalFooter gap={"10px"}>
            <MainButton
              colorMode={"dark"}
              buttonText="Save"
              onClick={onClose}
              buttonSize="md"
              buttonWidth={"100px"}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
