export default function ChewsLogo({ theme, fontSize }) {

let value2 = ["font-permanent-marker " + "text-" + theme + "-color " + "text-" + fontSize].toString()


  return (
    <h1
    className={value2}
      >
      Chews
    </h1>
  );
}
