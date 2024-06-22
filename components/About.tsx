import Image from "next/image";
import React from "react";
import G from "@/assets/G.png";
import Knife from "@/assets/knife.png";
import AboutSection from "./AboutSection";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:h-[700px] tracking-wide my-5 py-3 w-[80%] mx-auto 2xl:w-[90%]">
      <AboutSection
        flexDirection="flex-end"
        rotateValue="0"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et."
        title="About Us"
        textAlignment="right"
        spoonAlignment="flex-end"
      />
      <div className="relative my-[320px] lg:my-0">
        <Image
          src={G}
          alt="gericht"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          width={300}
        />
        <Image
          src={Knife}
          alt="knife"
          height={600}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        />
      </div>
      <AboutSection
        flexDirection="flex-start"
        rotateValue="180"
        text="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet."
        title="Our History"
        textAlignment="left"
        spoonAlignment="flex-start"
      /> 
    </div>
  );
}

export default About;
