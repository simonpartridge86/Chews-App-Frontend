// pages/404.js
import { VStack, Link } from "@chakra-ui/react";
import ChewsLogo from "../components/ChewsLogo";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center">
      <VStack spacing={5} align="center" className="max-w-lg">
        <h1>404 - Page Not Found</h1>
        <h2>Uh-Oh.. looks you need to Chews something else.</h2>
        <ChewsLogo theme={"brand.primary"} size={"3xl"} />
      </VStack>
    </main>
  );
}
