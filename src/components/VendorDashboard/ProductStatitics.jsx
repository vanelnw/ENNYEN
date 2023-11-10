const ProductStatitics = () => {
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border ">
      <h2>Product Statistics</h2>
      <div className="flex justify-between">
        <p className="text-[.6rem]">Products on sale</p>
        <p className="text-[1.5rem] font-bold ">3000</p>
      </div>
      <div className="flex justify-between">
        <p className="text-[.6rem]">Sale this week</p>
        <p className="text-[1.5rem] font-bold ">500</p>
      </div>
    </div>
  );
};

export default ProductStatitics;
