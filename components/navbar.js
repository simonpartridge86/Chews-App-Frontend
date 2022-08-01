import { IconButton, Avatar } from '@chakra-ui/react'
import ChewsLogo from './chews-logo';
import Hamburger from './Hamburger/HamburgerButton';
import Testpic from '../public/pic.jpg';

export default function Navbar() {
  return (
    <div className='flex flex-row justify-around items-center'>
    <Hamburger/>
    <ChewsLogo theme={"brand.primary"} size={"2xl"}/>
    <IconButton
          bgColor='brand.light'
            color={'none'}
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />}
            onClick={() => changeDisplay("none")}
    />
    </div>
  );
}
//<picture><img src= "./pic.jpg" alt="girl with sweets"></img></picture> 