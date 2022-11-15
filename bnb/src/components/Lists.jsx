import React from "react";
import menu from "../images/icons8-menu-squared-50.png";

function Lists() {
  return (
    <>
      <div className="drop">
        <img src={menu} alt="" />
      </div>
      <div className="option">
        <a href="">Restaurant</a>
        <a href="">Cottage</a>
        <a href="">Castle</a>
        <a href="">fantasy city</a>
        <a href="">beach</a>
        <a href="">Cabins</a>
        <a href="">Off-grid</a>
        <a href="">Farm</a>
      </div>
    </>
  );
}

export default Lists;
