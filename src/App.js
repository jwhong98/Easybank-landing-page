import "./App.css";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
