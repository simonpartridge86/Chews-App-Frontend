import React, { useState } from "react";
import MainButton from "./MainButton";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Switch,
  Divider,
} from "@chakra-ui/react";

const dietArray = [
  {
    filter: "Vegan",
    isChecked: false,
  },
  {
    filter: "Gluten-free",
    isChecked: false,
  },
  {
    filter: "Vegetarian",
    isChecked: false,
  },
  {
    filter: "Dairy-free",
    isChecked: false,
  },
];
const cuisineArray = [
  {
    filter: "Italian",
    isChecked: false,
  },
  {
    filter: "Chinese",
    isChecked: false,
  },
  {
    filter: "Indian",
    isChecked: false,
  },
  {
    filter: "British",
    isChecked: false,
  },
  {
    filter: "American",
    isChecked: false,
  },
  {
    filter: "Moroccan",
    isChecked: false,
  },
  {
    filter: "Spanish",
    isChecked: false,
  },
  {
    filter: "Mexican",
    isChecked: false,
  },
  {
    filter: "Thai",
    isChecked: false,
  },
];

const filterArray = () => {
  console.log(
    cuisineArray.map((item) => {
      return { filter: item, isChecked: false };
    })
  );
};

export default function FilterModal() {
  const [dietFilters, setDietFilters] = useState(filterArray());
  const { isOpen, onOpen, onClose } = useDisclosure();
  function onChange(e, item) {
    const index = filters.findIndex((object) => {
      return object.filter === item;
    });
    const newArray = [...filters];
    newArray[index].isChecked = e.target.checked;
    setFilters(newArray);
    console.log(filters);
  }
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
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
              {dietArray.map((item) => {
                return (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={item}
                  >
                    <label fontFamily={"brand.main"} htmlFor={item}>
                      {item}
                    </label>

                    <Switch
                      colorScheme="red"
                      id={item}
                      onChange={(e) => {
                        onChange(e, item);
                      }}
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
              Dietary Preferences:
            </Text>
            <Divider />
            <section className="w-[100%] flex flex-col mt-[1vh]">
              {cuisineArray.map((item) => {
                return (
                  <div
                    className="flex flex-row items-center justify-between"
                    key={item}
                  >
                    <label fontFamily={"brand.main"} htmlFor={item}>
                      {item}
                    </label>

                    <Switch
                      colorScheme="red"
                      id={item}
                      onChange={(e) => {
                        onChange(e, item);
                      }}
                      isChecked={true}
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
            <MainButton
              colorMode={"light"}
              buttonText="Cancel"
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
