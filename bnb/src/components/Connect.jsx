import React from "react";

function Connect({ setOpen }) {
  return (
    <button
      onClick={() => {
        setOpen(true);
      }}
      className="connect">
      Connect wallet
    </button>
  );
}

export default Connect;
