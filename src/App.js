import React, { useState } from "react";

// Components
import Header from "./components/Header";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
