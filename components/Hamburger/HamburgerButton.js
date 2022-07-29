import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  
} from "@chakra-ui/react";

import {HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon} from "@chakra-ui/icons";

export default function Hamburger() {
  return (
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList w="100vw" h='100vh'>
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
</Menu>
  );
}
