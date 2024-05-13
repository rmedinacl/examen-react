import NavbarHero from "./components/NavbarHero";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";

import MiApiFinal from "./components/MiApiFinal";

import "./App.css";
import { fotos } from "./data/images";

function App() {
  return (
    <>
      <NavbarHero />
      <Hero />
      <MiApiFinal />
      <Galeria fotos={fotos} />
      <Footer />
    </>
  );
}

export default App;
