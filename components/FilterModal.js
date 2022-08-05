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
  Divider,
} from "@chakra-ui/react";

export default function FilterModal() {
  const dietArray = ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          width="80vw"
          flex="flex"
          flexDir="column"
          alignItems="center"
        >
          <ModalHeader fontFamily={"brand.main"} fontSize={"2xl"}>
            <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
              Chews{" "}
            </span>{" "}
            Filters
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            <FormControl as={SimpleGrid} columns={2}>
              {dietArray.map((item) => {
                return (
                  <>
                    <FormLabel
                      fontFamily={"brand.main"}
                      my={"1vh"}
                      htmlFor={item}
                    >
                      {item}
                    </FormLabel>
                    <Switch colorScheme="teal" my={"1.5vh"} id={item} />
                  </>
                );
              })}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <MainButton
              colorMode={"dark"}
              buttonText="Save"
              onClick={onClose}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
