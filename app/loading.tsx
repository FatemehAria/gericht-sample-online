import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

function Loading() {
  return (
    <div className="loader-container">
      <Image src={logo} alt="loading" width={100} />
    </div>
  );
}

export default Loading;
