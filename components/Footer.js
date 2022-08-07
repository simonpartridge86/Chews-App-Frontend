// FOOTER COMPONENT - for use on all pages through Layout component - set to take up bottom 10vh of screen

export default function Footer() {
  return (
    <footer className="flex flex-col justify-evenly items-center bg-dark-color text-light-color h-[10vh] font-nunito">
      <p className="text-light-color text-md font-nunito">
        Served up by The Baristacrats
      </p>
      <p className="text-light-color text-md font-nunito">
        Powered by{" "}
        <a href="https://www.themealdb.com/api.php" target="_blank">
          TheMealDB API
        </a>
      </p>
    </footer>
  );
}
