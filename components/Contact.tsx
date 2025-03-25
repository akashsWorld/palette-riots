import React from "react";
import Input from "./Input";
import Buttton from "./Buttton";
import ContactInfo from "./ContactInfo";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div id="contacts" className="h-[759px] rounded-[30px] gradient-bg mx-[120px] text-white flex flex-col items-center mt-[157px]">
      <div className="my-[70px] flex items-center flex-col w-[685px] mx-auto gap-[79px]">
        <div className="flex flex-col items-center w-fit mx-auto">
          <h2 className="font-outfit text-[50px] font-medium text-center">
            Its your time to take off!
          </h2>
          <h3 className="font-outfit text-[24px] font-medium text-center">
            Bring your ideas to life, Let's collaborate today!
          </h3>
        </div>
        <div className="flex flex-col w-[590px] mx-auto">
          <div className="flex items-center gap-6 w-full">
            <Input
              type="text"
              placeholder="Enter your name"
              className="w-1/2"
            />
            <Input
              type="text"
              placeholder="Enter your email"
              className="w-1/2"
            />
          </div>
          <Input
            type="textarea"
            placeholder="Give us a quick brief of your requirement"
            className="mt-[24px] w-full h-[210px]"
          />
          <div className="flex items-center justify-end mt-[19px] w-full">
            <Buttton
              className="w-[183px] -end-0"
              buttonName="Contact"
              type="secondary"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
            <ContactInfo icon={<MdPhone/>} details={'+91 8240768751'}/>
            <ContactInfo icon={<FaWhatsapp/>} details={'+91 7679567359'}/>
            <ContactInfo icon={<MdOutlineEmail/>} details={'business@paletteriots.com'}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
