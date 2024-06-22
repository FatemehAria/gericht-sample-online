import React from "react";
import Spoon from "@/public/spoon.svg";
import Image from "next/image";
import { Cormorant_Upright } from "next/font/google";

const Cormorant = Cormorant_Upright({
  weight: "400",
  subsets: ["latin"],
});
function TitlesAndSubs({
  title,
  sub,
  direction,
}: {
  title: string;
  sub: string;
  direction?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center items-${direction ? direction : "center"} font-bold text-[20px] lg:text-[23px] gap-2 ${Cormorant.className}`}
    >
      <p className="text-white">{title}</p>
      <Image src={Spoon} alt="spoon" />
      <p className="text-[#DCCA87] text-[40px] lg:text-[64px]">{sub}</p>
    </div>
  );
}

export default TitlesAndSubs;
