import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "primereact/resources/themes/lara-light-blue/theme.css";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Layout from "./components/templates/Layout";
import About from "./components/pages/About";

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
