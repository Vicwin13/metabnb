import { Link } from "react-router-dom";
import React from "react";
import x from "../images/x.png";

export const SideNav = ({ setOpen, closeDrop }) => {
  return (
    <aside>
      <div className="aside">
        <div className="side-cancel" onClick={() => closeDrop(false)}>
          <img src={x} alt="" />
        </div>
        <div className="side-links">
          <Link to={"/"} title="Home page">
            Home
          </Link>
          <Link to={"/placetostay"} title="Place to stay">
            Place to stay
          </Link>
          <a href="">NFTs</a>
          <a href="">Community</a>
        </div>
        <div>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="side-connect">
            Connect wallet
          </button>
        </div>
      </div>
    </aside>
  );
};
