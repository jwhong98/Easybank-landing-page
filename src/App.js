import "./App.css";
import React, { useState } from "react";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar/Navbar";
import MenuModal from "./components/MenuModal/MenuModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <MenuModal onToggle={onToggle} />}
      <Navbar isOpen={isOpen} onToggle={onToggle} />
      <Hero />
      <InfoSection />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
