import "./App.css";
import "./slider.css";
import "./sliderTheme.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./Pages/About/About";
import ContactUs from "./components/ContactUs";
import OurProjects from "./Pages/ourProjects/OurProjects";
export const AppContext = createContext();

export default function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    // Aos.init();
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
      setLang("en");
    }
    if (localStorage.getItem("lang") === "en") {
      setLang("en");
      document.body.style.direction = "ltr";
    } else if (localStorage.getItem("lang") === "ar") {
      setLang("ar");
      document.body.style.direction = "rtl";
    }
  }, [localStorage.getItem("lang")]);
  return (
    <>
      <AppContext.Provider value={{ setLang, lang }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/projects" element={<OurProjects />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
}
