import React, { useState } from "react";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobilingSocial from "./components/MobilingSocial";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`w-full ${menuOpen ? "overflow-y-hidden" : "overflow-y-auto"}`}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <MobilingSocial />
    </div>
  );
}

export default App;
