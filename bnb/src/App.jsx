import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Place from "./components/Place";
import ShowPopup from "./components/Showpopup";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="home">
        <Navbar setOpen={setOpen} />
      </nav>

      {open && <ShowPopup closePopup={setOpen} />}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/placetostay" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
