import { BiMenuAltLeft } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';

/* eslint-disable react/prop-types */
const Content = ({ onSidebarHide }) => {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <BiMenuAltLeft
              className=" text-dark w-10 h-10 "
              onClick={onSidebarHide}
            />

            <div className=" flex-shrink flex-grow-0 justify-start px-2">
              <div className="flex items-center justify-between flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1">
                <input
                  type="text"
                  placeholder="Search Anything..."
                  className="h-18"
                />
                <button
                  type="button"
                  className="h-6 w-6 bg-[#000] flex items-center justify-center rounded-full">
                  <BsSearch className="text-white h-3 w-3 cursor-pointer" />
                </button>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
