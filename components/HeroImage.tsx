import Image from "next/image";
import React from "react";

function HeroImage({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="relative lg:h-[600px]">
      <div className="hidden 2xl:grid grid-cols-2 h-full">
        <div></div>
        <div className="bg-[#DCCA87] -rotate-180"></div>
        <div className="bg-[#DCCA87] -rotate-180"></div>
        <div></div>
      </div>
      <Image
        src={imgSrc}
        alt="1"
        className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:w-[620px] 2xl:w-[90%] lg:h-[550px] w-full"
      />
    </div>
  );
}

export default HeroImage;
