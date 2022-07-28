import MainButton from "../components/MainButton";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl text-primary-color font-permanent-marker font-bold underline">
        Hello world!
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <MainButton
          buttonWidth="100%"
          buttonSize="lg"
          buttonText="Hello"
          colorMode="light"
        />
        <MainButton
          buttonWidth="50%"
          buttonSize="md"
          buttonText="Hello"
          colorMode="dark"
        />
        <MainButton
          buttonWidth="25%"
          buttonSize="sm"
          buttonText="Hello"
          colorMode="light"
        />
        <MainButton buttonSize="xs" buttonText="Hello" colorMode="dark" />
      </div>
    </>
  );
}
