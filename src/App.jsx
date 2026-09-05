import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;