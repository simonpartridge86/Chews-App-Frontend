export default function ChewsLogo({ fontSize, theme }) {
  return (
    <h1
      className={
        "font-permanent-marker " + "text-" + fontSize + " text-" + theme + "-color"
      }
    >
      Chews
    </h1>
  );
}
