import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  MenuGroup,
  AbsoluteCenter,
  Button,
  Flex,
  Avatar,
  Switch,
} from "@chakra-ui/react";
{
  /* <Menu pos={'fixed'} top="1rem" autoSelect={false}>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList bgColor={'#FD2B46'} color={"#fff"} w="100vw" h='100vh'>
    <MenuItem minH='25vh' icon={<AddIcon />} command='⌘T'>
      Home
    </MenuItem>
    <MenuItem minH='25vh' icon={<ExternalLinkIcon />} command='⌘N'>
      Find Chews
    </MenuItem>
    <MenuItem minH='25vh' icon={<RepeatIcon />} command='⌘⇧N'>
      My Favourites
    </MenuItem>
    <MenuItem minH='25vh' icon={<EditIcon />} command='⌘O'>
      My Profile
    </MenuItem>
  </MenuList>
</Menu> */
}

import { useState } from "react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  CloseIcon,
  EditIcon,
} from "@chakra-ui/icons";

import NextLink from "next/link";
export default function Hamburger() {
  const [display, changeDisplay] = useState("none");

  return (
    <Flex >
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/meal-options" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Find Chews
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              My Favourites
            </Button>
          </NextLink>
        
        <NextLink href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            My Profile
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          color={'brand.primary'}
          bgColor={'#fff'}
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        bgColor={"#FD2B46"}
        color={"#fff"}
        w="100vw"
        display={display}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        z-Index={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-start">
          <IconButton
          bgColor='none'
            color={'#000'}
            mt={4}
            ml={2}
            aria-label="Open Menu"
            size="lg"
            icon={<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>
        <Flex justify="flex-end">
          <IconButton
          bgColor='none'
            color={'#000'}
            mt={-12}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button  onClick={() => changeDisplay("none")}
 as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button onClick={() => changeDisplay("none")} as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Find Chews
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button onClick={() => changeDisplay("none")} as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              My Favourites
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button onClick={() => changeDisplay("none")} as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            My Profile
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
