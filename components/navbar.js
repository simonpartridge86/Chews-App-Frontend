//import { Heading } from '@chakra-ui/react'
import ChewsLogo from './chews-logo';
import Hamburger from './Hamburger/HamburgerButton';
import Testpic from '../public/pic.jpg';

export default function Navbar() {
  return (
    <div className='flex flex-row justify-around'>
    <Hamburger/>
    <ChewsLogo theme={"brand.primary"} size={"3xl"}/>
    <img src={Testpic} alt="girl with sweets" className='w-6'></img>
    </div>
  );
}