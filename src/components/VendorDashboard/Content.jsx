/* eslint-disable react/prop-types */
import clsx from 'https://cdn.skypack.dev/clsx@1.1.1';
import { BiChevronDown } from 'react-icons/bi';
import OrdersChart from './OrdersChart';
import SalesChart from './SalesChart';
import TopSellingProdut from './TopSellingProdut';
import MostViewedProduct from './MostViewedProduct';
import BestSellingProduct from './BestSellingProduct';
import ProductStatitics from './ProductStatitics';
import MostProfitableProduct from './MostProfitableProduct';
import MostProfitableCategories from './MostProfitableCategories';
import CustomerRantings from './CustomerRantings';
import MostViewedProducts from './MostViewedProducts';
import RecentOrders from './RecentOrders';
import { PiDownloadSimpleLight } from 'react-icons/pi';
import { CiFilter } from 'react-icons/ci';
import VendorHeader from './VendorHeader';
import TotalSection from './TotalSection';

const Content = ({ showSidebar, onSidebarHide }) => {
  return (
    <div className="flex w-full">
      <div
        className={clsx(
          'w-full h-screen hidden sm:block sm:w-20 xl:w-60  flex-shrink-0',
          showSidebar ? 'flex w-full sm:block sm:w-20 xl:w-60' : 'hidden'
        )}>
        .
      </div>

      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start">
        <VendorHeader onSidebarHide={onSidebarHide} />
        <div className="w-full px-5">
          <section className="w-full mt-10">
            <div className="flex justify-between">
              <div className="w-fit">
                <p className="font-bold text-[1.2rem]">
                  Hi{' '}
                  <span className="text-[#3F6632]">
                    Faith, Solar Lamp Shop.
                  </span>
                </p>
                <p className="text-[.7rem]">
                  Here is what’s going on in your business.
                </p>
              </div>
              <button className="rounded-md text-[.9rem] h-fit p-1 text-white bg-blue-900 flex gap-1 items-center">
                <span>Create a new</span> <BiChevronDown />
              </button>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button className="rounded-md text-[.9rem] h-fit p-1 border flex gap-1 items-center cursor-pointer">
                <CiFilter />
                <span>Filter</span>
              </button>
              <button className="rounded-md text-[.9rem] h-fit p-1 text-white bg-blue-900 flex gap-1 items-center cursor-pointer">
                <PiDownloadSimpleLight />
                <span>Download report</span>
              </button>
            </div>
          </section>
          <TotalSection />
          <section className="w-full grid grid-cols-1 md:grid-cols-5 gap-7 mt-10">
            <div className="col-span-1 md:col-span-3 rounded-xl border border-gray shadow-md flex items-center">
              <SalesChart />
            </div>
            <div className="col-span-1 md:col-span-2 rounded-xl border border-gray shadow-md ">
              <OrdersChart />
            </div>
          </section>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 mt-10">
            <TopSellingProdut />
            <RecentOrders />
          </section>
          <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            <MostViewedProduct />
            <BestSellingProduct />
            <ProductStatitics />
          </section>
          <section className="w-full flex flex-col md:flex-row gap-7 mt-7">
            <div className="w-full md:w-[45%] flex flex-col gap-7">
              <MostProfitableProduct />
              <MostProfitableCategories />
            </div>
            <div className="w-full md:w-[54%] flex flex-col gap-7">
              <CustomerRantings />
              <MostViewedProducts />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Content;
