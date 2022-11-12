import icon from "../images/facebook-263-721950.svg";
import icon1 from "../images/instagram-216-721958.svg";
import icon2 from "../images/twitter-241-721979.svg";
import logo from "../images/footLogo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo-icon">
          <img src={logo} alt="" />
          <div className="icons">
            <img src={icon} alt="" />
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
          </div>
        </div>
        <div className="community">
          <a href="">Community</a>
          <a href="">NFT</a>
          <a href="">Tokens</a>
          <a href="">Landlords</a>
          <a href="">Discord</a>
        </div>
        <div className="places">
          <a href="">Places</a>
          <a href="">Castle</a>
          <a href="">Farms</a>
          <a href="">Beach</a>
          <a href="">Learn more</a>
        </div>
        <div className="about">
          <a href="">About us</a>
          <a href="">Road map</a>
          <a href="">Creators</a>
          <a href="">Career</a>
          <a href="">Contact us</a>
        </div>

        <p className="last"> &copy; 2022 Metabnb</p>
      </footer>
    </>
  );
};

export default Footer;
