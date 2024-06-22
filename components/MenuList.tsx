import React from "react";
import TitlesAndSubs from "./TitlesAndSubs";
import Image from "next/image";
import MenuImage from "@/assets/menu.png";
import MenuListItems from "./MenuListItems";
import { cocktails, wines } from "@/app/data";
import HeroButton from "./HeroButton";
import { Cormorant_Upright } from "next/font/google";

const Cormorant = Cormorant_Upright({
  weight: "600",
  subsets: ["latin-ext"],
});

function MenuList() {
  return (
    <div className="bg-[#0e0e0e] px-3 py-[5%] lg:py-12 lg:px-[5%]">
      <TitlesAndSubs sub="Today's Special" title="Menu That Fits You Palatte" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="overflow-hidden flex flex-col justify-evenly">
          <p className={`flex justify-center text-5xl lg:text-6xl !leading-none ${Cormorant.className}`}>
            Wine & Beer
          </p>
          <div className="flex flex-col justify-around h-[70%]">
            {wines.map((item) => (
              <MenuListItems
                price={item.price}
                tags={item.tags}
                title={item.title}
                key={item.title}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <Image src={MenuImage} alt="menu-image" />
          <div className="flex justify-center">
            <HeroButton ButtonText="View More" />
          </div>
        </div>
        <div className="overflow-hidden flex flex-col justify-evenly">
          <p className={`flex justify-center text-5xl lg:text-6xl !leading-none ${Cormorant.className}`}>Cocktails</p>
          <div className="flex flex-col justify-around lg:h-[70%]">
            {cocktails.map((item) => (
              <MenuListItems
                price={item.price}
                tags={item.tags}
                title={item.title}
                key={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
