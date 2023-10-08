import "./App.css";
import "./slider.css";
import "./sliderTheme.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";

import Footer from "./components/Footer";
import About from "./Pages/About/About";
import ContactUs from "./components/ContactUs";
import OurProjects from "./Pages/ourProjects/OurProjects";
import ServiecPage from "./Pages/ServiecPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<OurProjects />} />
        <Route path="/services/:id" element={<ServiecPage />} />
      </Routes>
      <Footer />
    </>
  );
}
