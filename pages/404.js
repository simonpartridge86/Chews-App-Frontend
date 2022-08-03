// pages/404.js
import { VStack } from "@chakra-ui/react";
import Link from "next/link";
import ChewsLogo from "../components/chews-logo";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center">
      <VStack spacing={5} align="center" className="max-w-lg">
        <h1>404 - Page Not Found</h1>
        <h2>Uh-Oh.. looks you need to Chews something else.</h2>
        {/* <ChewsLogo theme={"brand.primary"} size={"3xl"} />
      <p>
        Home{" "}
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
      </p> */}
      </VStack>
    </main>
  );
}
