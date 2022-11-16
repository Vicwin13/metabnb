import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Place from "./components/Place";
import ShowPopup from "./components/Showpopup";
import { SideNav } from "./components/SideNav";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <div>
      <nav className="home">
        <Navbar setOpen={setOpen} setDrop={setDrop} />
      </nav>

      {drop && <SideNav closeDrop={setDrop} setOpen={setOpen} />}
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
