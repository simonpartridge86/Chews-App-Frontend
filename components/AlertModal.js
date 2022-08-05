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
