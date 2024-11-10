import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "primereact/resources/themes/lara-light-blue/theme.css";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Layout from "./components/templates/Layout";
import About from "./components/pages/About";
import WhyChoose from "./components/pages/WhyChoose";
import ErrorPage from "./components/pages/ErrorPage";
import OurTeam from "./components/pages/OurTeam";
import Career from "./components/pages/Career";

function App() {
  useEffect(() => {
    document.title = "Mobiz Technologies Official";
  }, []);
  return (
    <div className="font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-choose" element={<WhyChoose />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
