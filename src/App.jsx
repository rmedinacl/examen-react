import NavbarHero from "./components/NavbarHero";
import Hero from "./components/Hero";

import "./App.css";
import MiApiCards from "./components/MiApiCards";

function App() {
  return (
    <>
      <NavbarHero />
      <div>
        <Hero />

        <MiApiCards />
      </div>
    </>
  );
}

export default App;
