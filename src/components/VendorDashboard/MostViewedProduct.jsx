import { BsThreeDots } from 'react-icons/bs';

const MostViewedProduct = () => {
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border ">
      <div className="cardHeader flex justify-between">
        <h2>Most Viewed Product</h2>
        <a href="#" className="btn">
          <BsThreeDots />
        </a>
      </div>

      <div className="flex justify-between">
        <div className="">
          <h3>Solar Panel</h3>
          <p>500</p>
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MostViewedProduct;
