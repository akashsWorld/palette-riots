import React from "react";

const Buttton = ({
  buttonName,
  className,
  targetUrl,
  type,
}: {
  buttonName: string;
  targetUrl?: string;
  className?: string;
  type?: ButtonType;
}) => {
  const userButton =
    type === "secondary" ? (
      <a
        href={targetUrl}
        className={`text-white border-2 border-white min-w-fit hover:text-black hover:bg-white ${className}`}
      >
        {buttonName}
      </a>
    ) : (
      <div className="gradient-bg p-[1px] rounded-[20px]">
        <a href={targetUrl} className={`btn ${className}`}>
          {buttonName}
        </a>
      </div>
    );

  return userButton;
};

type ButtonType = "primary" | "secondary";
export default Buttton;
