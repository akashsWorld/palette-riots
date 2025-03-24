import React from "react";

const Buttton = ({
  buttonName,
  className,
  targetUrl,
}: {
  buttonName: string;
  targetUrl?: string;
  className?: string;
}) => {
  return (
    <div className="gradient-bg p-[1px] rounded-[20px]">
    <a
      href={targetUrl}
      className={`btn ${className}`}
    >
      {buttonName}
    </a>
    </div>
  );
};

export default Buttton;
