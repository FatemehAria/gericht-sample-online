import { Cormorant_Upright } from "next/font/google";
import React from "react";

const Cormorant = Cormorant_Upright({
  weight: "700",
  subsets: ["latin"],
});
function HeroButton({ ButtonText }: { ButtonText: string }) {
  return (
    <button
      className={`text-black bg-[#DCCA87] ${Cormorant.className} rounded-sm p-2`}
    >
      {ButtonText}
    </button>
  );
}

export default HeroButton;
