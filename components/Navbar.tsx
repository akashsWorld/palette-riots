import BrandName from "./BrandName";
import Buttton from "./Buttton";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-auto min-h-[100px] mx-[10px] md:mx-[30px] xl:mx-[120px]">
      <BrandName/>
      <div className="w-fit flex gap-1 md:gap-2 lg:gap-9 navitems">
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#aboutus">About us</a>
      </div>
      <Buttton targetUrl="#contacts" className="w-[90px] xl:w-[183px]" buttonName="Contact" />
    </nav>
  );
};

export default Navbar;
