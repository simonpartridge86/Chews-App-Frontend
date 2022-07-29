
import Head from 'next/head'
import Image from 'next/image'
import Hamburger from '../components/Hamburger/HamburgerButton'
import styles from '../styles/Home.module.css'
import ChewsLogo from "../components/chews-logo";
import MainButton from "../components/MainButton";


export default function Home() {
  return (
    <>
    <h1 className="text-5xl text-primary-color font-permanent-marker font-bold underline">
      Hello world!
    </h1>
    <Hamburger />
      <ChewsLogo theme={'brand.primary'} size={'4xl'}/>
      <div className="flex flex-col items-center space-y-4">
        <MainButton
          buttonWidth="100%"
          buttonSize="lg"
          buttonText="Hello"
          colorMode="light"
        />
        <MainButton
          buttonWidth="50%"
          buttonSize="md"
          buttonText="Hello"
          colorMode="dark"
        />
        <MainButton
          buttonWidth="25%"
          buttonSize="sm"
          buttonText="Hello"
          colorMode="light"
        />
        <MainButton buttonSize="xs" buttonText="Hello" colorMode="dark" />
      </div>
    </>
  );
}
