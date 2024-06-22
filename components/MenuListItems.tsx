import { Cormorant_Upright, Open_Sans } from "next/font/google";
import React from "react";

const Cormorant = Cormorant_Upright({
  weight: "700",
  subsets: ["latin"],
});

const OpenSans = Open_Sans({
    weight:"400",
    subsets:["math"]
})
type MenuListItemsProps = {
  title: string;
  price: string;
  tags: string;
};

function MenuListItems({ title, price, tags }: MenuListItemsProps) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center whitespace-nowrap gap-5">
        <div className={`text-[#a6a56a] text-2xl !leading-none ${Cormorant.className}`}>
          {title}
        </div>
        <div className="bg-white w-full h-[0.05rem]"></div>
        <div className="text-base">{price}</div>
      </div>
      <span className="text-slate-400">{tags}</span>
    </div>
  );
}

export default MenuListItems;
