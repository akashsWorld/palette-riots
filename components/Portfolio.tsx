import React  from "react";
import PortFolioCard from "./PortFolioCard";
import constants, { PortFolio } from "@/utility/constants";
const Portfolio = () => {
  const { portfolio } = constants;

  const cards = [
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
    ...portfolio,
  ];

  return (
    <div className="w-full h-fit relative mt-[174px] overflow-hidden">
      <div className="mx-auto text-center">
        <h2 className="text-6xl font-outfit font-medium text-nowrap">
          Designs That Speak for Themselves
        </h2>
        <h2 className="text-6xl font-outfit font-medium ">
          <span className="gradient-bg text-bg">Our works</span>
        </h2>
      </div>
      <div className="w-fit h-auto mt-[100px] flex items-center gap-5 card-animation">
        {cards.map((eachPortFolio, index) => (
          <PortFolioCard
            key={index}
            image={eachPortFolio.image}
            title={eachPortFolio.title}
            subTitle={eachPortFolio.subTitle}
            tags={eachPortFolio.tags}
            className="slide-animation"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
