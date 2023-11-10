/* eslint-disable react/prop-types */

import { BiMenuAltLeft } from 'react-icons/bi';
import { BsEnvelope, BsGlobe, BsSearch } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { TbBellRinging } from 'react-icons/tb';
import usaFlag from '../../assets/vendorDashboard/usaFlag.png';
import customer from '../../assets/vendorDashboard/customer01.jpg';

const VendorHeader = ({ onSidebarHide }) => {
  return (
    <div className="w-full sm:flex  p-2 py-4 items-center shadow-sm border-b border-gray">
      <div className="sm:flex-grow flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-full md:w-fit flex justify-between md:gap-10">
          <BiMenuAltLeft
            className=" text-dark w-8 h-8 cursor-pointer "
            onClick={onSidebarHide}
          />
          <div className=" flex-shrink flex-grow-0 justify-start px-2">
            <div className="flex items-center justify-between flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1">
              <input
                type="text"
                placeholder="Search Anything..."
                className="h-18  focus:outline-none"
              />
              <button
                type="button"
                className="h-6 w-6 bg-[#000] flex items-center justify-center rounded-full">
                <BsSearch className="text-white h-3 w-3 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit flex gap-4 justify-between items-center">
          <div className="w-7 h-7 cursor-pointer">
            <img src={usaFlag} alt="" />
          </div>
          <div className="cursor-pointer">
            <BsGlobe size={22} />
          </div>
          <div className="relative cursor-pointer">
            <TbBellRinging size={22} />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green text-white text-[.6rem] flex items-center justify-center">
              5
            </div>
          </div>
          <div className="relative cursor-pointer">
            <BsEnvelope size={22} />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green text-white text-[.6rem] flex items-center justify-center">
              5
            </div>
          </div>
          <div className="cursor-pointer">
            <FiSettings size={22} />
          </div>

          <div className="flex gap-2 items-center">
            <div className="relative h-8 w-8 rounded-full overflow-hidden cursor-pointer">
              <img
                src={customer}
                alt=""
                className="absolute left-0 top-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[.8rem]">John Doe</span>
              <span className="text-xs font-thin">Vendor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorHeader;
