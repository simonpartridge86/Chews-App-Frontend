// NAVBAR COMPONENT - for use on all pages through Layout Component - set to take up top 10vh of screen
// includes HamburgerMenu, logo text, profile pic and horizontal closing line underneath

import { Flex } from "@chakra-ui/react";
import HamburgerMenu from "./HamburgerMenu";
import { Divider } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

export default function NavBar() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  return (
    <nav className="fixed w-screen bg-light-color z-10">
      <Flex display={["flex", "flex", "none", "none"]}>
        <section className="flex flex-row justify-between items-center h-[10vh] w-screen">
          <section className="flex w-[10vh] h-[7vh] justify-center items-center">
            {user && (
              <a href="/profile">
                <img
                  className="rounded-full w-[7vh] h-[7vh]"
                  src={user.picture}
                  alt={user.name}
                />
              </a>
            )}
          </section>
          <section className="flex w-[30vh] justify-center items-center">
            <h1
              className="text-center font-permanent-marker text-center
          text-primary-color font-normal text-primary-color text-5xl"
              onClick={() => {
                router.push("/home");
              }}
            >
              Chews
            </h1>
          </section>
          <section className="flex w-[10vh] justify-center items-center">
            <HamburgerMenu />
          </section>
        </section>
      </Flex>
      <Flex display={["none", "none", "flex", "flex"]}>
        <section className="flex flex-row justify-between items-center h-[10vh] w-screen">
          <section className="flex w-[10vh] h-[7vh] justify-center items-center">
            {user && (
              <a href="/profile">
                <img
                  className="rounded-[50%] w-[7vh] h-[7vh]"
                  src={user.picture}
                  alt={user.name}
                />
              </a>
            )}
          </section>
          <section className="flex w-[30vh] justify-center items-center">
            <h1
              className="text-center font-permanent-marker text-center
          text-primary-color font-normal text-primary-color text-5xl"
              onClick={() => {
                router.push("/home");
              }}
            >
              Chews
            </h1>
          </section>
          <section className="flex w-[10vh] justify-center items-center">
            <HamburgerMenu />
          </section>
        </section>
      </Flex>
      <Divider />
    </nav>
  );
}
