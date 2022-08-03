import Head from "next/head";
import Image from "next/image";
import Hamburger from "../components/Hamburger/HamburgerButton";
import styles from "../styles/Home.module.css";
import ChewsLogo from "../components/chews-logo";
import MainButton from "../components/MainButton";

import Navbar from "../components/navbar"
import Footer from '../components/footer';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();



  return (
    <div className="flex flex-col justify-evenly h-[80vh]">
      <div className="flex flex-col items-center space-y-4">
        <ChewsLogo theme={"brand.primary"} size={"4xl"} />
        <h2 className="text-primary-color font-bold font-nunito">We Choose...You Chew!</h2>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <MainButton
          buttonWidth="75%"
          buttonSize="lg"
          buttonText="Log In / Sign Up"
          colorMode="dark"
        />
        <MainButton
          buttonWidth="75%"
          buttonSize="lg"
          buttonText="Continue As Guest"
          colorMode="light"
          onClick={() => {
            router.push({
              pathname: "/meal-select",
            });
          }}
        />
      </div>
    </div>
  );
}
