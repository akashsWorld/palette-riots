const BrandName = ({ className }: { className?: string }) => {
  return (
    <div className="leading-0.5">
      <div className="flex gap-2 min-w-fit md:text-2xl">
        <h2 className=" font-bold uppercase font-inter inline-block gradient-bg text-bg">
          pale
          <span className="tracking-tighter">tt</span>e
        </h2>
        <h2 className="font-regular uppercase font-inter inline-block">
          riots
        </h2>
      </div>
      <div className="w-fit tracking-[0.17em]">
        <h3 className="text-xs font-regular inline-block">concevoir | ‘excellence</h3>
      </div>
    </div>
  );
};

export default BrandName;
