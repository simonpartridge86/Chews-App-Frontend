export default function Footer() {
  return (
    <div className="flex flex-col justify-evenly items-center bg-dark-color text-light-color h-20 max-h-[10vh] font-nunito">
      <p className="text-light-color text-lg font-nunito">
        Served up by The Baristacrats
      </p>
      <p className="text-light-color text-lg font-nunito">
        Powered by{" "}
        <a href="https://www.themealdb.com/api.php" target="_blank">
          TheMealDB API
        </a>
      </p>
    </div>
  );
}
