import React from "react";
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
  FormControl,
  FormLabel,
  Switch,
  SimpleGrid,
} from "@chakra-ui/react";

export default function FilterModal() {
  const dietArray = ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="80vw">
          <ModalHeader className="font-nunito">Chews Filters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text className="font-nunito">Dietary Preferences:</Text>
            <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
              {dietArray.map((item) => {
                return (
                  <>
                    <FormLabel className="font-nunito" htmlFor={item}>
                      {item}
                    </FormLabel>
                    <Switch id={item} />
                  </>
                );
              })}
            </FormControl>
          </ModalBody>

          <ModalFooter className="flex flex-row justify-center w-[100vw] ">
            <MainButton
              colorMode={"dark"}
              buttonText="Save"
              onClick={onClose}
            />
            <MainButton
              colorMode={"dark"}
              buttonText="Cancel"
              onClick={onClose}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
