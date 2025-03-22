import React from "react";

const Buttton = ({
  buttonName,
  className,
}: {
  buttonName: string;
  className?: string;
}) => {
  return (
    <a
      href="/"
      className={`gradient-bg rounded-[20px] p-[1px] min-h-fit ${className}`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-[10px] bg-white rounded-[20px]">
        <p className="w-fit h-fit text-nowrap gradient-bg text-bg">{buttonName}</p>
      </div>
    </a>
  );
};

export default Buttton;
