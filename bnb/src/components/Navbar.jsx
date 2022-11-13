import "./styled/home.css";

import { Link } from "react-router-dom";
import logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <header className="contain">
      <nav className="navbar">
        <div className="logo" title="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <Link to={"/"} title="Home page">
            Home
          </Link>
          <Link to={"/placetostay"} title=" Place to stay">
            Place to stay
          </Link>
          <a href="">NFTs</a>
          <a href="">Community</a>
        </div>

        <button className="connect">Connect wallet</button>
      </nav>
    </header>
  );
};

export default Navbar;
