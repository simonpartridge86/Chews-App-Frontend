// Profile page - displays profile details when logged in

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MainButton from "../components/MainButton";
import { useUser } from "@auth0/nextjs-auth0";
import { Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import LoadingScreen from "../components/LoadingScreen";

export default function Profile() {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <LoadingScreen />;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
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
            Hey, {user.name}
          </h2>
        </section>
        <section className="flex flex-col items-center space-y-4 w-screen">
          <h2 className="font-nunito font-bold text-2xl w-[80vw] text-center">
            Your Favourites
          </h2>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <img
              className="w-[10vh] h-[10vh]"
              src={"/dish1.jpg"}
              alt="placeholder profile pic"
            />
            <img
              className="w-[10vh] h-[10vh]"
              src={"/dish1.jpg"}
              alt="placeholder profile pic"
            />
            <img
              className="w-[10vh] h-[10vh]"
              src={"/dish1.jpg"}
              alt="dish1 pic"
            />
          </Grid>
        </section>

        <section className="w-[75vw] max-w-sm">
          <MainButton
            buttonText="View Favourites"
            buttonSize="lg"
            colorMode="dark"
            buttonWidth="100%"
            onClick={() => {
              router.push({
                pathname: "/favourites",
              });
            }}
          />
        </section>
      </main>
    )
  );
}
