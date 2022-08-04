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

export default function AlertModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="80vw" mt="30vh">
          <ModalHeader>WAIT!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Please add some ingredients first!</Text>
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
