import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Place from "./components/Place";

function App() {
  return (
    <div>
      <nav className="home">
        <Navbar />
      </nav>
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
