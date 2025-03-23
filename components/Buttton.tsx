import React from "react";

const Buttton = ({
  buttonName,
  className,
  targetUrl
}: {
  buttonName: string;
  targetUrl?: string;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-[20px] p-[1px] min-h-fit min-w-auto gradient-bg transition-all duration-300 ease-in-out ${className}`}
    >
      <a href={targetUrl} className="flex items-center justify-center h-full rounded-[20px] bg-white bg-clip-content hover:bg-clip-text hover:text-white transition-all duration-300 ease-in-out"><p className="w-fit text-inherit p-[10px]">{buttonName}</p></a>
    </div>
  );
};

export default Buttton;
