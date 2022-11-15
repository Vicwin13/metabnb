import Lists from "./Lists";
import setting from "../images/setting-5.svg";

const Options = () => {
  return (
    <section>
      <div className="options">
        <Lists />
        <div className="setting">
          <p>Location</p>
          <img src={setting} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Options;
