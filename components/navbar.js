//import { Heading } from '@chakra-ui/react'
import ChewsLogo from './chews-logo';
import Hamburger from './Hamburger/HamburgerButton';
import "./pic.jpg";

export default function Navbar() {
  return (
    <div className='flex flex-row'>
    <ChewsLogo theme={"brand.primary"} size={"4xl"}/>
    <picture><img src= "./pic.jpg" alt="girl with sweets"></img></picture> 
    <Hamburger/>
    </div>
  );
}