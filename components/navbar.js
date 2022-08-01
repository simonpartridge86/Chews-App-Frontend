//import { Heading } from '@chakra-ui/react'
import ChewsLogo from './chews-logo';
import Hamburger from './Hamburger/HamburgerButton';

export default function Navbar() {
  return (
    <div>
    <ChewsLogo theme={"brand.primary"} size={"4xl"}/>
    <picture><img src= "pic.jpg" alt="girl with sweets"></img></picture> 
    <Hamburger/>
    </div>
  );
}