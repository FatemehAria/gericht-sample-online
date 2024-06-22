import Image from "next/image";
import React from "react";
import Chef from "@/public/chef.png";
import TitlesAndSubs from "./TitlesAndSubs";
import Quote from "@/public/quote.png";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import Sign from "@/public/sign.png";

const Cormorant = Cormorant_Upright({
  weight: "400",
  subsets: ["latin"],
});

const OpenSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

function ChefsWord() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 items-center w-[90%] mx-auto">
      <Image src={Chef} alt="chef" width={589} />

      <div className="flex flex-col gap-8">
        <TitlesAndSubs
          sub="What We Believe In"
          title="Chef’s Word"
          direction="start"
        />

        <div className="text-[#AAAAAA] text-justify">
          <span className="flex flex-row gap-5">
            <Image src={Quote} alt="quote" width={40} height={35} />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
              eget sit. Lorem ipsum dolor sit amet. Lorem.
            </span>
          </span>
          <p>
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
            lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className={`text-[#DCCA87] text-[32px] ${Cormorant.className}`}>
            Kevin Luo
          </span>
          <span
            className={`text-[#AAAAAA] text-[16px] font-normal ${OpenSans.className}`}
          >
            Chef & Founder
          </span>
        </div>

        <Image src={Sign} alt="sign" width={235} height={83} />
      </div>
    </div>
  );
}

export default ChefsWord;
