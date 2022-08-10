// ALERTMODAL COMPONENT - used to display alerts for invalid inputs - uses customized Chakra UI modal component

/*
Usage Notes:
- In page file where FilterModal is used:
  - import useDisclosure from chakra: "import { useDisclosure } from "@chakra-ui/react";"
  - add following inside page function: "const { isOpen, onOpen, onClose } = useDisclosure();"
  - include "onOpen" in the onClick function of a relevant button on the page;
*/

/* Prop notes: 
isOpen/onClose = "isOpen" and "onClose" are functions that need to be passed from the Chakra UI hook "useDisclosure";
headerText = text that appears in the modal title;
bodyText = text that appears in the modal body;
*/

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import MainButton from "./MainButton";

export default function AlertModal({ isOpen, onClose, headerText, bodyText }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
        <ModalOverlay />
        <ModalContent width="80vw" mt="30vh">
          <ModalHeader
            color="brand.primary"
            fontFamily={"brand.logo"}
            fontWeight="normal"
            fontSize={"2xl"}
          >
            {headerText}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontFamily={"brand.main"} fontWeight="semibold">
              {bodyText}
            </Text>
          </ModalBody>

          <ModalFooter>
            <MainButton
              buttonText="OK"
              colorMode="dark"
              mr={3}
              onClick={onClose}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
