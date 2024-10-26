import { Outlet } from "react-router-dom";

import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
