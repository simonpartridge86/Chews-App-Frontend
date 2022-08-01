import React from "react";
import { useRouter } from "next/router";
import MainButton from "../../components/MainButton";

export default function Results() {
  const router = useRouter();
  const meal = router.query.meal;
  return (
    <main className="flex flex-col h-screen w-screen items-center justify-center space-y-2">
      <div className="flex flex-col w-4/5 items-center justify-end space-y-1">
        <h1 className="font-permanent-marker text-center text-xl text-primary-color font-bold">
          You Should Make:
        </h1>
        <h1 className="font-nunito text-center text-lg text-dark-color font-bold">
          Creamy Steak Alfredo
        </h1>
        <img
          className="w-full object-cover rounded"
          src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
        />
      </div>
      <div className="flex flex-row justify-between w-4/5 space-x-2">
        <MainButton
          buttonText="Open Recipe"
          buttonSize="sm"
          colorMode="dark"
          buttonWidth="70%"
        />
        <MainButton
          buttonText="⭐️"
          buttonSize="sm"
          colorMode="dark"
          buttonWidth="30%"
        />
      </div>
      <h1 className="font-permanent-marker text-center text-xl text-dark-color">
        Prefer Another?
      </h1>
      <div className="flex flex-row justify-between w-4/5 space-x-2">
        <MainButton
          buttonText="Re-Roll"
          buttonSize="sm"
          colorMode="dark"
          buttonWidth="50%"
        />
        <MainButton
          buttonText="See All"
          buttonSize="sm"
          colorMode="dark"
          buttonWidth="50%"
        />
      </div>
      <MainButton
        buttonText="Add Search Filters"
        buttonSize="xs"
        colorMode="light"
        buttonWidth="80%"
      />
    </main>
  );
}
