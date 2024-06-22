"use client";
import { Cormorant_Upright } from "next/font/google";
import React, { useState } from "react";
import "./menu.css";

const Cormorant = Cormorant_Upright({
  weight: "700",
  subsets: ["latin"],
});

function Menu() {
  const [backgroundImage, setBackgroundImage] = useState("bar.jpg");
  const [activeItem, setActiveItem] = useState("");

  const handleUnderline = (imageName: string) => {
    setBackgroundImage(imageName);
    setActiveItem(imageName);
  };
  return (
    <div className={`bg-black ${Cormorant.className}`}>
      <div
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          width: "100%",
          height: "700px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 0.5s ease",
          position: "relative",
          padding:"0 5%"
        }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 text-[35px] tracking-wide">
          <p
            onMouseEnter={() => handleUnderline("bar.jpg")}
            className={`hover-underline w-[70%] ${
              activeItem === "bar.jpg" ? "active" : ""
            }`}
          >
            Bar Menu
          </p>
          <p
            onMouseEnter={() => handleUnderline("Dessert.png")}
            className={`hover-underline ${
              activeItem === "Dessert.png" ? "active" : ""
            }`}
          >
            Desserts Menu
          </p>
          <p
            onMouseEnter={() => handleUnderline("food.png")}
            className={`hover-underline w-[70%] ${
              activeItem === "food.png" ? "active" : ""
            }`}
          >
            Food One
          </p>
          <p onMouseEnter={() => handleUnderline("bar.jpg")}></p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
