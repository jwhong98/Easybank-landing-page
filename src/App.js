import "./App.css";
import Articles from "./components/Articles/Articles";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection />
      <Articles />
    </>
  );
}

export default App;
