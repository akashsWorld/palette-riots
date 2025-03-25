import React from "react";

const Input = ({
  className,
  placeholder,
  type,
  labelName,
}: {
  className?: string;
  placeholder?: string;
  type: InputType;
  labelName?: string;
}) => {
  return (
    <div className={`min-w-[150px] min-h-[20px] p-[11px] bg-white rounded-[10px] drop-shadow-lg ${className}`}>
      {labelName && <label className="text-[#C5C5C5]">{labelName}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none h-full w-full placeholder:font-outfit relative placeholder:absolute placeholder:top-0 placeholder:text-[#C5C5C5]"
      />
    </div>
  );
};
type InputType = "text" | "email" | "password" | "textarea";
export default Input;
