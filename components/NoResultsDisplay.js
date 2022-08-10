import React from "react";
import MainButton from "./MainButton";
import { useRouter } from "next/router";

export default function NoResultsDisplay({ hasHistory, setCount }) {
  const router = useRouter();
  if (hasHistory) {
    return (
      <main className="flex flex-col h-[80vh] w-screen items-center justify-center space-y-2">
        <h2 className="font-nunito">Sorry, no more results for this search</h2>
        <MainButton
          buttonSize={"lg"}
          buttonText="View Previous Results"
          colorMode="dark"
          onClick={() => {
            setCount(0);
          }}
        />
        <MainButton
          buttonSize={"lg"}
          buttonText="Try another search"
          colorMode="dark"
          onClick={() => {
            const meal = router.query.meal;
            router.push({
              pathname: "/search-select",
              query: { meal: meal },
            });
          }}
        />
      </main>
    );
  } else {
    return (
      <main className="flex flex-col h-[80vh] w-screen items-center justify-center space-y-2">
        <h2 className="font-nunito">Sorry, no more results for this search</h2>
        <MainButton
          buttonSize={"lg"}
          buttonText="Try another search"
          colorMode="dark"
          onClick={() => {
            const meal = router.query.meal;
            router.push({
              pathname: "/search-select",
              query: { meal: meal },
            });
          }}
        />
      </main>
    );
  }
}
