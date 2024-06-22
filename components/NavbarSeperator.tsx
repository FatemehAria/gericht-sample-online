import React from "react";

function NavbarSeperator() {
  return (
    <div className="rotate-[270deg] relative">
      <div
        style={{
          width: "50px",
          height: "100%",
          borderBottom: "0.25px solid",
          borderImage:
            "linear-gradient(to right, #FFFFFF 58.85%, rgba(255, 255, 255, 0) 100%) 1",
          opacity: "0.5",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "-9px",
          width: "50px",
          height: "100%",
          borderBottom: "0.25px solid",
          borderImage:
            "linear-gradient(to left, #FFFFFF 58.85%, rgba(255, 255, 255, 0) 100%) 1",
          opacity: "0.5",
        }}
      ></div>
    </div>
  );
}

export default NavbarSeperator;
