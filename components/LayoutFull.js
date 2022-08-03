import NavBar from "./NavigationBar";
import Footer from "./LayoutFooter";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <>{children}</>
      <Footer />
    </>
  );
}
