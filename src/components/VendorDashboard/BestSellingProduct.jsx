import { AiOutlineLineChart } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import bestSelling from '../../assets/vendorDashboard/bestSeller.png';

const BestSellingProduct = () => {
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border border-gray ">
      <div className="cardHeader flex justify-between">
        <h2>Best Selling Product</h2>
        <a href="#" className="btn">
          <BsThreeDots color="#000" size={22} />
        </a>
      </div>

      <div className="flex justify-between items-center py-5">
        <div className="text-[#606060] text-[1rem]">
          <h3>Solar Power Bank</h3>
          <p className="flex items-center gap-2">
            <AiOutlineLineChart size={22} />
            <span className="text-green">5.5%</span>
          </p>
        </div>
        <div className="w-1/2 h-20">
          <img
            src={bestSelling}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
