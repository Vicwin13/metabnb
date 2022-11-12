import setting from "../images/setting-5.svg";

const Options = () => {
  return (
    <section>
      <div className="options">
        <a href="">Restaurant</a>
        <a href="">Cottage</a>
        <a href="">Castle</a>
        <a href="">fantasy city</a>
        <a href="">beach</a>
        <a href="">Cabins</a>
        <a href="">Off-grid</a>
        <a href="">Farm</a>
        <div className="setting">
          <p>Location</p>
          <img src={setting} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Options;
