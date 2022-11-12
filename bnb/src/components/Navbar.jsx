import "./styled/home.css";

import logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <header className="contain">
      <nav className="navbar">
        <div className="logo" title="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <a href="">Home</a>
          <a href="">Place to stay</a>
          <a href="">NFTs</a>
          <a href="">Community</a>
        </div>

        <button className="connect">Connect wallet</button>
      </nav>
    </header>
  );
};

export default Navbar;
