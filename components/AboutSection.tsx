"use client";
import React from "react";
import HeroButton from "./HeroButton";
import { Cormorant_Upright } from "next/font/google";
import Spoon from "@/public/spoon.svg";
import Image from "next/image";
import "./about-section.css";
import { useDynamicCss } from "@/hooks/useDynamicCss";

const Cormorant = Cormorant_Upright({
  weight: "600",
  subsets: ["latin"],
});

function AboutSection({
  flexDirection,
  rotateValue,
  text,
  title,
  textAlignment,
  spoonAlignment,
  showButton,
}: {
  flexDirection: string;
  rotateValue: string;
  text: string;
  title: string;
  textAlignment: "left" | "right" | "center" | "justify";
  spoonAlignment: string;
  showButton?: boolean;
}) {
  const windowWidth = useDynamicCss();
  return (
    <div
      className={`flex flex-col justify-center gap-8 z-50`}
      style={{
        alignItems: `${
          windowWidth !== null && windowWidth < 1024 ? "center" : flexDirection
        }`,
      }}
    >
      <div
        className={`flex flex-col gap-1 w-full`}
        style={{
          alignItems: `${
            windowWidth !== null && windowWidth < 1024
              ? "center"
              : spoonAlignment
          }`,
        }}
      >
        <h3
          className={`${Cormorant.className} lg:text-[64px] !leading-none text-[#DCCA87] py-3 whitespace-nowrap`}
        >
          {title}
        </h3>
        <Image
          src={Spoon}
          alt="spoon"
          style={{ rotate: `${rotateValue}deg` }}
        />
      </div>
      <p
        className={`text-[#AAAAAA] !leading-7 lg:text-[16px]  max-w-md px-3 lg:px-0`}
        style={{
          textAlign: `${
            windowWidth !== null && windowWidth < 1024
              ? "center"
              : textAlignment
          }`,
        }}
      >
        {text}
      </p>
      <div className={`${showButton ? "hidden" : "block"}`}>
        <HeroButton ButtonText="Know More" />
      </div>
    </div>
  );
}

export default AboutSection;
