import Image from "next/image";
import React from "react";
import description from '@/public/description.svg'

const Description = () => {
  return (
    <div className="mt-[157px] mx-[120px]">
      <div className="flex items-center flex-col">
        <h3 className="gradient-bg text-bg font-medium text-[40px] w-fit">
          The Palette Riots Story
        </h3>
        <h2 className="text-center font-outfit font-medium text-[64px] w-[608px]">
          Designing the Future, One Pixel at a Time
        </h2>
      </div>
      <div className="w-full flex gap-[23px] overflow-hidden mt-[50px] h-[403px]">
        <div className="w-1/2 h-full">
          <Image
            src={description}
            height={400}
            width={400}
            alt="anIm"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-1/2 relative px-2 h-full">
          <p className="translate-center text-center font-outfit font-light text-2xl w-full">
            We are a vibrant team that deals with a riot of colors and
            intellectualism from anywhere in the world. Together we will create
            footprints of quality embeded in artistic creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
