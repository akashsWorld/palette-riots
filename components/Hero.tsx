import React from "react";
import Buttton from "./Buttton";
import WorkStrip from "./WorkStrip";

const Hero = () => {
  return (
    <div className="relative w-full h-full">
      <div className="translate-center flex flex-col items-center justify-center gap-3">
        <h1 className="font-dmserif text-[80px] text-center">
          Design that <span className="gradient-bg text-bg">Speaks</span> Brands
          that <span className="gradient-bg text-bg">Shine</span>
        </h1>
        <Buttton
          buttonName="Let your brand shine..."
          className="w-[235px] h-[71px]"
        />
      </div>
      <WorkStrip />
    </div>
  );
};

export default Hero;
