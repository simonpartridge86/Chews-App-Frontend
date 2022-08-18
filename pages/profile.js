// PROFILE page - displays profile details, and links to favourites and logout

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { Divider, Image } from "@chakra-ui/react";
import MainButton from "../components/MainButton";
import LoadingScreen from "../components/LoadingScreen";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  //conditional returns based on login status, etc
  if (isLoading) return <LoadingScreen />;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    return (
      <main
        aria-label="Your profile"
        className="flex flex-col h-[80vh] w-screen justify-center items-center"
      >
        <Head>
          <title>Profile page</title>
        </Head>
        <section className="text-center w-[80vw] space-y-4">
          <h1
            ariaLabel="Login to View Profile"
            className="font-permanent-marker text-primary-color text-2xl w-[80vw]"
          >
            Please Login to View Profile
          </h1>
          <MainButton
            ariaLabel="Login"
            borderWidthRecipe={"0px"}
            buttonWidth="75%"
            buttonSize="md"
            buttonText="Login / Signup"
            colorMode="dark"
            onClick={() => {
              router.push({
                pathname: "/api/auth/login",
              });
            }}
          />
        </section>
      </main>
    );
  }

  if (user) {
    return (
      <main
        className="flex flex-col h-[80vh] justify-center items-center space-y-14"
        aria-label="Your profile page"
      >
        <Head>
          <title>Profile page</title>
        </Head>
        <section className="flex flex-col items-center space-y-4 w-screen">
          <Image borderRadius="full" src={user.picture} alt={user.name} />
          <h2 className=" font-nunito font-bold text-2xl w-[80vw] text-center">
            Hey, {user.name}!
          </h2>
        </section>
        <section className="flex flex-col items-center space-y-4 w-[80vw] max-w-sm">
          <h2 className="font-nunito font-bold text-2xl w-[80vw] text-center">
            My Favourites:
          </h2>
          <MainButton
            ariaLabel={"view all favourites"}
            buttonText="View All Favourites"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              router.push({
                pathname: "/favourites",
              });
            }}
          />
          <Divider />
          <MainButton
            ariaLabel={"log out"}
            buttonText="Log Out"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="80%"
            onClick={() => {
              router.push({
                pathname: "/api/auth/logout",
              });
            }}
          />
        </section>
      </main>
    );
  }
}
