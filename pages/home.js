// HOME page - displays intro text and "Get Started" button

import React from "react";
import { useRouter } from "next/router";
import ChewsLogo from "../components/ChewsLogo";
import MainButton from "../components/MainButton";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <main
      aria-label="Home page"
      className="flex flex-col h-[80vh] justify-center items-center space-y-14"
    >
      <Head>
        <title>Home</title>
      </Head>
      <section className="flex flex-col items-center space-y-4 w-screen">
        <h1 className="font-nunito font-bold text-2xl">Welcome to</h1>
        <ChewsLogo theme={"brand.primary"} size={"4xl"} />
      </section>
      <h2
        ariaLabel="Let us choose your next meal for you."
        className="font-nunito font-bold text-2xl w-[80vw] text-center"
      >
        Let us "
        <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
          Chews
        </span>
        " your next meal for you!
      </h2>
      <section className="w-[75vw] max-w-md">
        <MainButton
          ariaLabel="Get started"
          buttonText="Get Started"
          buttonSize="lg"
          colorMode="dark"
          buttonWidth="100%"
          onClick={() => {
            router.push({
              pathname: "/meal-select",
            });
          }}
        />
      </section>
    </main>
  );
}
