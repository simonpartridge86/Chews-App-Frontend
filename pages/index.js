import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ChewsLogo from "../components/chews-logo";
import MainButton from "../components/MainButton";

export default function Home() {
  return (
    <>
      <ChewsLogo theme={"brand.primary"} size={"4xl"} />
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-primary-color font-bold">We Choose...You Chews!</h2>
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
        />
      </div>
    </>
  );
}
