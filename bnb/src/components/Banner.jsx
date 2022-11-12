import "./styled/home.css";

import image1 from "../images/houseGrp.svg";
import image2 from "../images/MBToken.svg";
import image3 from "../images/meta.png";
import image4 from "../images/metatext.png";
import image5 from "../images/OpenSea.png";
import image6 from "../images/sail.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
      <div>
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div>
        <img src={image6} alt="" />
        <img src={image5} alt="" />
      </div>
    </div>
  );
};

export default Banner;
