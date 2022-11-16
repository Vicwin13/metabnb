import { SideNav } from "./SideNav";
import image1 from "../images/image 3.png";
import image2 from "../images/image 4.png";
import image3 from "../images/image 5.png";
import image4 from "../images/image 6.png";

const Main = () => {
  return (
    <>
      <main className="main">
        <div className="text">
          <h1>
            Rent a <span>Place</span> away from
          </h1>
          <h1>
            <span>Home</span> in the <span>Metaverse</span>
          </h1>

          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality to your
            comfort zone
          </p>

          <div className="input">
            <input
              type="text"
              placeholder="Search for location"
              name="Search bar"
              id=""
            />
            <button>Search</button>
          </div>
        </div>
        <div className="pic-container">
          <div>
            <div className="pics">
              <img src={image2} alt="" />
            </div>
            <div className="pics">
              <img src={image4} alt="" />
            </div>
          </div>
          <div>
            <div className="pics">
              <img src={image1} alt="" />
            </div>
            <div className="pics">
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
