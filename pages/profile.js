// Profile page - displays profile details when logged in

import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MainButton from "../components/MainButton";
import { useUser } from "@auth0/nextjs-auth0";
import { Divider, Image } from "@chakra-ui/react";
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
    )
  );
}
