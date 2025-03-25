import React from "react";
import constants from "@/utility/constants";
import Image from "next/image";
import star from "@/public/star.svg";
const WorkStrip = () => {
  const { workCards } = constants;
  const items = [
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
    ...workCards,
  ];

  return (
    <div className="w-full h-[300px] flex flex-col justify-center overflow-hidden">
      <div className="w-full h-[100px] gradient-bg skew-[-6deg] mt-[28px] relative ">
        <div className="h-full w-fit strip-animation flex items-center gap-3 translate-center">
          {items.map((eachCard, index) => {
            return (
              <div
                className="w-fit flex items-center mx-[8px] gap-[8px] "
                key={index}
              >
                <h5 className="font-outfit font-semibold text-4xl text-white inline-block text-center text-nowrap">
                  {eachCard.title}
                </h5>
                <Image
                  className="h-[20px] w-[20px] object-cover"
                  src={star}
                  width={100}
                  height={100}
                  alt="star"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkStrip;
