import React from "react";
import PortFolioCard from "./PortFolioCard";

const Portfolio = () => {
  return (
    <div className="w-full h-screen relative mt-[174px]">
      <div className="mx-auto text-center">
        <h2 className="text-6xl font-outfit font-medium text-nowrap">Designs That Speak for Themselves</h2>
        <h2 className="text-6xl font-outfit font-medium "><span className="gradient-bg text-bg">Our works</span></h2>
      </div>
      <div className="w-full h-fit mt-[100px]">
        <PortFolioCard />
      </div>
    </div>
  );
};

export default Portfolio;
