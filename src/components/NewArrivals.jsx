import { NavLink } from 'react-router-dom';

/* eslint-disable react/prop-types */
const NewArrivals = ({ img1, img2 }) => {
  return (
    <NavLink to="/" className={img2 ? 'col-span-1' : 'sm:col-span-2'}>
      <h3 className="mb-5 text-[.9rem] text-[#000]">NewArrivals</h3>
      <div className="flex gap-3">
        <img
          src={img1}
          alt=""
          className={
            img2
              ? 'rounded-lg w-1/2 h-40 lg:h-50 lg:w-40 object-cover '
              : 'rounded-lg w-full h-40 object-cover'
          }
        />
        {img2 && (
          <img
            src={img2}
            alt=""
            className="rounded-lg w-1/2 h-40 lg:h-50 lg:w-40 object-cover"
          />
        )}
      </div>
    </NavLink>
  );
};

export default NewArrivals;
