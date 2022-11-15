import "./styled/home.css";

import Connect from "./Connect";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import menu from "../images/icons8-menu-rounded-50.png";

const Navbar = ({ setOpen }) => {
  return (
    <>
      <header className="contain">
        <nav className="navbar">
          <div className="logo" title="logo">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <Link to={"/"} title="Home page">
              Home
            </Link>
            <Link to={"/placetostay"} title="Place to stay">
              Place to stay
            </Link>
            <a href="">NFTs</a>
            <a href="">Community</a>
          </div>

          <div className="end-side">
            <Connect setOpen={setOpen} />
            <div className="menu">
              <img src={menu} alt="" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
