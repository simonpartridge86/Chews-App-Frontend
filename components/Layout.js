// LAYOUT COMPONENT - used to add NavBar and Footer components to all pages

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {/* empty section with padding added to create whitespace and move content down underneath navbar */}
      <section className="pt-[10vh]"></section>
      <>{children}</>
      <Footer />
    </>
  );
}
