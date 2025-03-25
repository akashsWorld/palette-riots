import React from "react";
import WorkCard from "./WorkCard";
import constants from "@/utility/constants";
const WorkFields = () => {
    const {workCards} = constants;
  return (
    <div className="mt-[157px] w-[1209px] h-[818px] mx-auto">
      <div className="w-full text-center">
        <h2 className="font-outfit text-[64px] font-medium">
          Designing experiences that{" "}
          <span className="gradient-bg text-bg">Captivate</span>,{" "}
          <span className="gradient-bg text-bg">Innovate</span>, and{" "}
          <span className="gradient-bg text-bg">Elevate</span> brands worldwide.
        </h2>
        
        <div className="mt-[70px] grid grid-cols-3 gap-x-6 gap-y-[44px]">
          {workCards.map(eachWork=>(
            <WorkCard image={eachWork.image} title={eachWork.title} key={eachWork.title}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFields;
