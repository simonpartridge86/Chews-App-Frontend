import { Button } from "@chakra-ui/react";
import ClickMe from "../components/button";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl text-primary-color font-permanent-marker font-bold underline">
        Hello world!
      </h1>
      <ClickMe />
    </>
  );
}
