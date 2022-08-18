import React from "react";
import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import AboutCard from "../components/AboutCard";

export default function About() {
  return (
    <main
      ariaLabel="about us page"
      className="flex flex-col min-h-[80vh] justify-start items-center space-y-[2vh] pb-[2vh] pt-[2vh]"
    >
      <Head>
        <title>About Us</title>
      </Head>
      <section className="text-center">
        <h1 className="font-permanent-marker text-primary-color font-bold text-2xl">
          Who Are We?
        </h1>
      </section>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing="10px">
        <AboutCard
          name="Simon Partridge"
          image={"./simon.png"}
          link="https://github.com/simonpartridge86"
        />
        <AboutCard
          name="Adam Phasey"
          image={"./adam.png"}
          link="https://github.com/AdamPhasey"
        />
        <AboutCard
          name="Sam Wylie"
          image={"./sam.png"}
          link="https://github.com/samsonhumber"
        />
        <AboutCard
          name="Maurizio Monti"
          image={"./maurizio.png"}
          link="https://github.com/mauriziomonti"
        />
        <AboutCard
          name="Kunal Shukla"
          image={"./kunal.png"}
          link="https://github.com/kun-shukla"
        />
        <AboutCard
          name="Mino Devito"
          image={"./mino.png"}
          link="https://github.com/MagicMino"
        />
      </SimpleGrid>
    </main>
  );
}
