import React from "react";
import cardImage from "@/public/cardImage.jpeg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const WorkCard = () => {
  return (
    <div className="h-[271px] w-[387px] rounded-[20px] overflow-hidden relative hover:w-[397px] hover:h-[278px] transition-all ease-out duration-300">
      <Image
        className="w-full h-full object-cover "
        src={cardImage}
        height={400}
        width={400}
        alt="anIm"
      />
      <div className="h-full w-full translate-center bg-gradient-to-b from-transparent from-85% to-black"></div>
      <div className="absolute z-10 bottom-[18px] left-[17px] h-6 flex items-center">
        <p className="uppercase text-2xl font-outfit font-normal text-white">hello</p>
        <MdArrowOutward className="text-white text-2xl"/>
      </div>
    </div>
  );
};

export default WorkCard;
