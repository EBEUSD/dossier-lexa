import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  const location = useLocation();

  const hideChromeRoutes = ["/te-amo"];
  const shouldHideChrome = hideChromeRoutes.includes(location.pathname);

  if (shouldHideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;