import React from "react";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const meal = router.query.meal;
  return <h1>Hello {meal} </h1>;
}
