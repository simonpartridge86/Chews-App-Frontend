// 404 page - displays custom 404 page on any non-existent paths

import { useRouter } from "next/router";
import { VStack } from "@chakra-ui/react";
import MainButton from "../components/MainButton";

export default function Custom404() {
  const router = useRouter();

  return (
    <main
      aria-label="Page not found"
      className="flex flex-col justify-center items-center w-screen h-[80vh]"
    >
      <VStack spacing={5} align="center" className="max-w-lg">
        <h1 className="font-nunito font-bold text-2xl text-dark-color text-center">
          404 - Page Not Found
        </h1>
        <h2 className="font-nunito font-bold text-2xl text-dark-color text-center">
          Whoops... looks you need to{" "}
          <span className="font-permanent-marker text-center text-2xl text-primary-color">
            Chews
          </span>{" "}
          something else
        </h2>
        <MainButton
          buttonText="Return Home"
          buttonSize="md"
          colorMode="dark"
          onClick={() => {
            router.push({
              pathname: "/home",
            });
          }}
        />
      </VStack>
    </main>
  );
}
