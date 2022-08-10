// HAMBURGERMENU COMPONENT - used to add menu items to NavBar component - contains both burger menu for small screens and expanded menu for large screens

import { useState } from "react";
import NextLink from "next/link";
import { IconButton, Button, Flex } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function HamburgerMenu() {
  const [display, setDisplay] = useState("none");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <Flex>
      <Flex>
        {/* Expanded view on larger screens */}
        <Flex
          display={["none", "none", "flex", "flex"]}
          position="fixed"
          top="0"
          right="0"
          flex="row"
          justifyContent={"flex-end"}
          alignItems="center"
          width={"40vw"}
          height="10vh"
          gap={"2vh"}
          mr={"5vh"}
        >
          <NextLink href="/home" passHref className="h-[10vh] align-middle">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              size="lg"
              fontFamily={"brand.main"}
              fontSize="xl"
              _hover={{
                boxShadow: "md",
                textColor: "brand.light",
                bgColor: "brand.primary",
              }}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/meal-select" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Chews a Meal"
              size="lg"
              fontFamily={"brand.main"}
              fontSize="xl"
              _hover={{
                boxShadow: "md",
                textColor: "brand.light",
                bgColor: "brand.primary",
              }}
              leftIcon={
                <span className="font-permanent-marker text-center text-2xl font-normal">
                  Chews
                </span>
              }
            >
              a Meal
            </Button>
          </NextLink>
        </Flex>

        {/* Hamburger menu view on small screens */}
        <IconButton
          aria-label="Open Menu"
          color={"brand.primary"}
          bgColor={"brand.light"}
          size="lg"
          mr={2}
          _hover={{
            bgColor: "brand.primary",
            color: "brand.light",
          }}
          icon={<HamburgerIcon w={8} h={8} />}
          onClick={() => {
            if (!isBurgerOpen) {
              setDisplay("flex");
              setIsBurgerOpen(true);
            } else {
              setDisplay("none");
              setIsBurgerOpen(false);
            }
          }}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Dropdown menu content on small screens */}
      <Flex
        bgColor={"brand.primary"}
        color={"brand.light"}
        w="100vw"
        display={display}
        flex={"column"}
        justifyContent={"center"}
        zIndex={20}
        h="75vh"
        pos="fixed"
        top="0"
        left="0"
        pt="10vh"
        overflowY="auto"
        flexDir="column"
      >
        <Flex flexDir="column" align="center" paddingTop={"5vh"}>
          <NextLink href="/home" passHref>
            <Button
              onClick={() => {
                setDisplay("none");
                setIsBurgerOpen(false);
              }}
              as="a"
              variant="ghost"
              aria-label="Home"
              w="100%"
              h="10vh"
              fontFamily={"brand.main"}
              fontSize="xl"
              _hover={{
                fontSize: "3xl",
                boxShadow: "md",
              }}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/meal-select" passHref>
            <Button
              onClick={() => {
                setDisplay("none");
                setIsBurgerOpen(false);
              }}
              as="a"
              variant="ghost"
              aria-label="Chews a Meal"
              w="100%"
              h="10vh"
              fontFamily={"brand.main"}
              fontSize="xl"
              leftIcon={
                <span className="font-permanent-marker text-center text-2xl text-light-color font-normal">
                  Chews
                </span>
              }
              _hover={{
                fontSize: "3xl",
                boxShadow: "md",
              }}
            >
              a Meal
            </Button>
          </NextLink>
          <section className="flex h-[20vh] items-center">
            <IconButton
              bgColor="brand.primary"
              color={"white"}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              _hover={{
                fontSize: "2xl",
                boxShadow: "md",
              }}
              onClick={() => {
                setDisplay("none");
                setIsBurgerOpen(false);
              }}
            />
          </section>
        </Flex>
      </Flex>
    </Flex>
  );
}
