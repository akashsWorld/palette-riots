import React from "react";
import Image from "next/image";
import cardImage from "@/public/cardImage.jpeg";
import Buttton from "./Buttton";
import { MdArrowOutward } from "react-icons/md";

const PortFolioCard = () => {
  return (
    <div className="h-[614px] w-[590px] p-[30px] border-2 border-[#e4e4e4] rounded-[20px] flex flex-col items-center">
      <div className="w-[531px]">
        <div className="w-full h-[397px] overflow-hidden rounded-[20px]">
          <Image
            src={cardImage}
            height={400}
            width={400}
            alt="anIm"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-outfit text-2xl font-medium">
          Crafting a Bold & Timeless Design Identity
        </p>
      </div>
      <div className="flex justify-between h-auto w-full ">
        <h4 className="text-[40px] font-semibold font-outfit ">
          Palette Riots
        </h4>
        <span className="rounded-full w-[64px] h-[64px] bg-black flex items-center justify-center">
          <MdArrowOutward className="text-2xl text-white" />
        </span>
      </div>
      <div className="w-full flex flex-wrap flex-row gap-2 mt-[4px]">
        <Buttton buttonName="View Project" />
        <Buttton buttonName="View Project" />
        <Buttton buttonName="View Project" />
      </div>
    </div>
  );
};

export default PortFolioCard;
