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
      New Tab
    </MenuItem>
    <MenuItem minH='25vh' icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem minH='25vh' icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem minH='25vh' icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
  );
}
