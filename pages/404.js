// pages/404.js
import Link from "next/link";
import ChewsLogo from "../components/chews-logo";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <h2>Uh-Oh.. looks like your Chews-ing ain't correct.</h2>
      <ChewsLogo theme={"brand.primary"} size={"3xl"} />
      <p>
        Home{" "}
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
      </p>
    </>
  );
}
