import React from "react";
import Input from "./Input";
import Buttton from "./Buttton";

const Contact = () => {
  return (
    <div className="h-[759px] rounded-[30px] gradient-bg mx-[120px] text-white flex flex-col items-center mt-[157px] gap-[79px]">
      <div className="my-[70px] flex items-center flex-col mx-[257px]">
        <div className="flex flex-col items-center">
          <h2 className="font-outfit text-[50px] font-medium text-center">
            Its your time to take off!
          </h2>
          <h3 className="font-outfit text-[24px] font-medium text-center">
            Bring your ideas to life, Let's collaborate today!#C5C5C5
          </h3>
        </div>
      </div>
      <div className="flex flex-col bg-amber-200">
            <div className="flex items-center gap-6 w-full">
                <Input type="text" placeholder="Enter your name" className="w-1/2"/>
                <Input type="text" placeholder="Enter your email" className="w-1/2"/>
            </div>
            <Input type="textarea" placeholder="Give us a quick brief of your requirement"/>
            <Buttton className="w-[183px] -end-0" buttonName="Contact"  />
        </div>
      <div></div>
    </div>
  );
};

export default Contact;
