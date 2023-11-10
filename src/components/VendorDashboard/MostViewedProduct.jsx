import { AiOutlineEye } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import mostViewed from '../../assets/vendorDashboard/solarPanel.png';

const MostViewedProduct = () => {
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border border-gray ">
      <div className="cardHeader flex justify-between">
        <h2>Most Viewed Product</h2>
        <a href="#" className="btn">
          <BsThreeDots color="#000" size={22} />
        </a>
      </div>

      <div className="flex justify-between items-center py-5">
        <div className="text-[#606060] text-[1rem]">
          <h3>Solar Panel</h3>
          <p className="flex items-center gap-2">
            <AiOutlineEye size={22} /> 500
          </p>
        </div>
        <div className="w-1/2 h-20">
          <img
            src={mostViewed}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MostViewedProduct;
