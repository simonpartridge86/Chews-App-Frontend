// Root directory - displays Login options to user

import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import ChewsLogo from "../components/ChewsLogo";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function LogIn() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  return (
    <main
      aria-label="Login page"
      className="flex flex-col justify-evenly h-screen w-screen items-center bg-primary-color"
    >
      <Head>
        <title>Chews your meal</title>
      </Head>
      <section className="flex flex-col items-center space-y-4 w-screen">
        <ChewsLogo theme={"brand.light"} size={"4xl"} />
        <h2 className="text-light-color text-xl font-bold italic font-nunito">
          We Choose... You Chew!
        </h2>
      </section>
      <section className="flex flex-col items-center space-y-4 w-screen max-w-lg">
        <Button
          bg="brand.light"
          size="lg"
          rounded="md"
          width="75%"
          fontFamily="brand.main"
          fontWeight="600"
          fontSize="lg"
          color="brand.primary"
          _active={{
            bg: "brand.primary",
            color: "brand.light",
          }}
          _hover={{ transform: "translateY(-1px)" }}
          onClick={() => {
            router.push({
              pathname: "/api/auth/login",
            });
          }}
        >
          Log In / Sign Up
        </Button>
        <Button
          bg="brand.primary"
          borderWidth={"2px"}
          borderColor={"brand.light"}
          size="lg"
          rounded="md"
          width="75%"
          fontFamily="brand.main"
          fontWeight="600"
          fontSize="lg"
          color="brand.light"
          _hover={{ transform: "translateY(-1px)", boxShadow: "lg" }}
          _active={{
            bg: "brand.light",
            color: "brand.primary",
          }}
          onClick={() => {
            router.push({
              pathname: "/home",
            });
          }}
        >
          Continue as Guest
        </Button>
      </section>
    </main>
  );
}
