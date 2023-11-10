const ProductStatitics = () => {
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border border-gray">
      <h2>Product Statistics</h2>
      <div className="flex justify-between items-center">
        <p className="text-[.8rem]">Products on sale</p>
        <p className="text-[1.5rem] font-bold ">3000</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[.8rem]">Sale this week</p>
        <p className="text-[1.5rem] font-bold ">500</p>
      </div>
    </div>
  );
};

export default ProductStatitics;
