import BrandName from "./BrandName";
import Buttton from "./Buttton";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-[120px] min-h-[100px] overflow-clip">
      <BrandName/>
      <div className="w-fit flex gap-9 navitems">
        <a href="">Portfolio</a>
        <a href="">Services</a>
        <a href="">About us</a>
      </div>
      <Buttton className="w-[183px]" buttonName="Contact" />
    </nav>
  );
};

export default Navbar;
