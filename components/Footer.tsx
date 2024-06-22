import { Cormorant_Upright, Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import Spoon from "@/public/spoon.svg";
import Facebook from "@/public/facebook.svg";
import Twitter from "@/public/twitter.svg";
import Instagram from "@/public/instagram.svg";

const Cormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});
function Footer() {
  return (
    <div className="bg-black mt-[3%] py-[3%] grid grid-cols-1 gap-5">
      <div className="grid grid-cols-1 gap-5 lg:gap-0 md:grid-cols-3 justify-stretch text-center !leading-none">
        <div className="flex flex-col gap-8 md:order-1">
          <p className={`${Cormorant.className} text-[32px]`}>Contact Us</p>
          <p className={`${OpenSans.className}`}>
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <div className={`${OpenSans.className} flex flex-col gap-3 `}>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:order-2 order-3">
          <p
            className={`${Cormorant.className} text-[64px] text-[#DCCA87] font-bold uppercase`}
          >
            Gerícht
          </p>
          <p className="max-w-[15rem] lg:max-w-md leading-8">{`"The best way to find yourself is to lose yourself in the service of others.”`}</p>
          <Image src={Spoon} alt="spoon" />
          <div className="flex flex-row justify-between items-center gap-3">
            <Image src={Facebook} alt="facebook" />
            <Image src={Twitter} alt="Twitter" />
            <Image src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className="flex flex-col gap-8 md:order-3 order-2">
          <p className={`text-[#F5EFDB] ${Cormorant.className} text-[32px]`}>
            Working Hours
          </p>
          <div className="text-[#AAAAAA] flex flex-col gap-3">
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
          </div>
          <div className="text-[#AAAAAA] flex flex-col gap-3">
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
          </div>
        </div>
      </div>
      <p className="flex justify-center">2021 Gerícht. All Rights reserved.</p>
    </div>
  );
}

export default Footer;
