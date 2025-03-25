const BrandName = ({ className }: { className?: string }) => {
  return (
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
  );
};

export default BrandName;
