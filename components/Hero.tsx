import React from "react";
import Buttton from "./Buttton";
import WorkStrip from "./WorkStrip";

const Hero = () => {
  return (
    <div className="relative h-[700px] lg:h-screen flex flex-col items-center justify-end">
      <div className="relative flex flex-col items-center justify-center gap-3">
        <h1 className="font-dmserif text-[40px] lg:text-[80px] text-center leading-tight max-w-[60%]">
          Design that <span className="gradient-bg text-bg">Speaks</span> Brands
          that <span className="gradient-bg text-bg">Shine</span>
        </h1>
        <Buttton
          buttonName="Let your brand shine..."
          className="w-[235px] h-[71px]"
          targetUrl="#contacts"
        />
      </div>
      <WorkStrip />
    </div>
  );
};

export default Hero;
