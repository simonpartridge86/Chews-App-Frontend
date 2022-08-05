import React from "react";
import ChewsLogo from "../components/ChewsLogo";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";
import BackButton from "../components/BackButton";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col h-[80vh] justify-center items-center space-y-14">
      <section className="absolute top-[12vh] left-[2vh]">
        <BackButton extraText={"to Login"} buttonSize="sm" />
      </section>
      <section className="flex flex-col items-center space-y-4 w-screen">
        <h1 className="font-nunito font-bold text-2xl">Welcome to</h1>
        <ChewsLogo theme={"brand.primary"} size={"4xl"} />
      </section>
      <h2 className="font-nunito font-bold text-2xl w-[80vw] text-center">
        Let us "
        <span className="font-permanent-marker text-center text-2xl text-primary-color font-normal">
          Chews
        </span>
        " your next meal for you!
      </h2>
      <MainButton
        buttonText="Get Started"
        buttonSize="lg"
        colorMode="dark"
        buttonWidth="80%"
        onClick={() => {
          router.push({
            pathname: "/meal-select",
          });
        }}
      />
    </main>
  );
}
