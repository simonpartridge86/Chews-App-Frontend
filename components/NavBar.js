// NAVBAR COMPONENT
/*
Component contains the navigation bar, with a burger menu, logo, and profile pic, as well as a horizontal line underneath
The height is set to 10% of the user's screen. Revise this if unsuitable design.

Things to do:
- Get link for the Logo and working links for hamburger and profile pic
- Change profile pic for profile pic component
- Adapt design to suit desktops
- Allow dark mode
*/

import { IconButton, Avatar } from "@chakra-ui/react";
import ChewsLogo from "./ChewsLogo";
import HamburgerMenu from "./HamburgerMenu";
import { Divider } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <div className="fixed w-screen bg-light-color z-10">
      <div className="flex flex-row justify-between items-center h-[10vh] mx-[2vh]">
        <HamburgerMenu />
        <ChewsLogo theme={"brand.primary"} size={"2xl"} />
        <IconButton
          bgColor="brand.light"
          color={"none"}
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="md"
          icon={<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />}
          onClick={() => changeDisplay("none")}
        />
      </div>
      <Divider />
    </div>
  );
}
//<picture><img src= "./pic.jpg" alt="girl with sweets"></img></picture>
