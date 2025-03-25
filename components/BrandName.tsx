const BrandName = ({ className }: { className?: string }) => {
  return (
    <div className="inline-block">
      <div className="flex gap-2 min-w-fit">
        <h2 className="md:text-[2xl] font-bold uppercase font-inter inline-block gradient-bg text-bg">
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
