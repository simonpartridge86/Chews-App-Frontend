import ChewsLogo from "../components/ChewsLogo";
import MainButton from "../components/MainButton";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-evenly h-[80vh] w-screen items-center">
      <section className="flex flex-col items-center space-y-4 w-screen">
        <ChewsLogo theme={"brand.primary"} size={"4xl"} />
        <h2 className="text-primary-color text-xl font-bold italic font-nunito">
          We Choose... You Chew!
        </h2>
      </section>
      <section className="flex flex-col items-center space-y-4 w-screen max-w-lg">
        <MainButton
          isDisabled={true}
          buttonWidth="75%"
          buttonSize="lg"
          buttonText="Log In / Sign Up"
          colorMode="dark"
        />
        <MainButton
          buttonWidth="75%"
          buttonSize="lg"
          buttonText="Continue As Guest"
          colorMode="light"
          onClick={() => {
            router.push({
              pathname: "/meal-select",
            });
          }}
        />
      </section>
    </main>
  );
}
