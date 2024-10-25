import "primereact/resources/themes/lara-light-blue/theme.css";

import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
