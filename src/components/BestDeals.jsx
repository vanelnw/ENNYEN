/* eslint-disable react/prop-types */
const BestDeals = ({ img1, img2 }) => {
  return (
    <div className={img2 ? 'col-span-1 row-span-1 ' : 'col-span-1 row-span-2'}>
      <h3 className="mb-5 text-[.9rem] text-[#000]">BestDeals</h3>
      <div className="flex gap-3">
        <img
          src={img1}
          alt=""
          className={
            img2
              ? 'rounded-lg w-1/2 h-40 lg:h-56 lg:w-40 object-cover '
              : 'rounded-lg h-full w-full object-cover '
          }
        />
        {img2 && (
          <img
            src={img2}
            alt=""
            className="rounded-lg w-1/2 h-40  lg:h-56 lg:w-40 object-cover "
          />
        )}
      </div>
    </div>
  );
};

export default BestDeals;
