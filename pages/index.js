import { Button } from "@chakra-ui/react";
import ClickMe from "../components/button";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl text-primary-color font-permanent-marker font-bold underline">
        Hello world!
      </h1>
      <div class='flex flex-col items-center space-y-4'>
        
      <ClickMe buttonWidth='100%' />
      <ClickMe buttonWidth='50%' />
      <ClickMe buttonWidth='25%' />
      <ClickMe />
      </div>
    </>
  );
}
