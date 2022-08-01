import { Heading } from '@chakra-ui/react'
import ChewsLogo from './chews-logo';
import Hamburger from './Hamburger/HamburgerButton';

export default function Navbar() {
  return (
    <div>
    <Hamburger/>
    <ChewsLogo/>
    <picture/>
    </div>
  );
}