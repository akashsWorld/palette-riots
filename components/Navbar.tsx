import Buttton from "./Buttton";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mx-[120px] min-h-[100px] overflow-clip">
      <div>
        <div className="flex gap-2 w-[177px]">
          <h2 className="text-2xl font-bold uppercase font-inter inline-block gradient-bg text-bg">
            pale
            <span className="tracking-tighter">tt</span>e
          </h2>
          <h2 className="text-2xl font-regular uppercase font-inter inline-block">
            riots
          </h2>
        </div>
        <div className="w-full tracking-[0.17em]">
          <h3 className="text-xs font-regular">concevoir | ‘excellence</h3>
        </div>
      </div>
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
