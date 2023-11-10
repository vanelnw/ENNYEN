/* eslint-disable react/prop-types */
import { BiMenuAltLeft } from 'react-icons/bi';
import { BsGraphUpArrow, BsSearch } from 'react-icons/bs';
import customer from '../../assets/vendorDashboard/customer01.jpg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import { GiFamilyHouse } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
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

const Card = ({ cardName, icon, numbers, arrowColor }) => (
  <div className="card rounded-md border border-gray shadow-light-gray shadow-md p-3 hover:bg-blue hover:text-white">
    <div className="flex justify-between mb-3">
      <div className="cardName">{cardName}</div>
      <BsGraphUpArrow className={`text-${arrowColor}`} />
    </div>

    <div className="flex justify-between">
      <div className="numbers">{numbers}</div>
      <div className="icon h-7 w-7 rounded-full bg-[#E9EFF6] flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);

/* eslint-disable react/prop-types */
const Content = ({ onSidebarHide }) => {
  const data = [
    {
      cardName: 'Total Sales',
      icon: <AiOutlineShoppingCart />,
      numbers: '$500,000',
      arrowColor: 'green',
    },
    {
      cardName: 'Total Orders',
      icon: <HiOutlineShoppingBag />,
      numbers: '500',
      arrowColor: 'green',
    },
    {
      cardName: 'Total Products',
      icon: <GiFamilyHouse />,
      numbers: '5,000',
      arrowColor: 'red',
    },
    {
      cardName: 'Total Customers',
      icon: <IoPeopleOutline />,
      numbers: '1,000',
      arrowColor: 'green',
    },
  ];

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <BiMenuAltLeft
              className=" text-dark w-10 h-10 cursor-pointer "
              onClick={onSidebarHide}
            />

            <div className=" flex-shrink flex-grow-0 justify-start px-2">
              <div className="flex items-center justify-between flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1">
                <input
                  type="text"
                  placeholder="Search Anything..."
                  className="h-18 p-1 focus:outline-none"
                />
                <button
                  type="button"
                  className="h-6 w-6 bg-[#000] flex items-center justify-center rounded-full">
                  <BsSearch className="text-white h-3 w-3 cursor-pointer" />
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="relative h-[40px] w-[40px] rounded-full overflow-hidden cursor-pointer">
                <img
                  src={customer}
                  alt=""
                  className="absolute left-0 top-0 w-full h-full object-cover"
                />
              </div>
              <div className="">
                <p className="font-medium mb-1">John Doe</p>
                <span className="text-xs font-thin">Vendor</span>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full grid grid-cols-4 gap-10 ">
          {data.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </section>
        <section className="w-full grid grid-cols-5 gap-10 mt-14">
          <div className="col-span-3 rounded-xl border border-gray shadow-md flex items-center">
            <SalesChart />
          </div>
          <div className="col-span-2 rounded-xl border border-gray shadow-md ">
            <OrdersChart />
          </div>
        </section>
        <section className="w-full grid grid-cols-2 gap-10 mt-14">
          <TopSellingProdut />
          <TopSellingProdut />
        </section>
        <section className="w-full grid grid-cols-3 gap-10 mt-14">
          <MostViewedProduct />
          <BestSellingProduct />
          <ProductStatitics />
        </section>
        <section className="flex">
          <div className="">
            <MostProfitableProduct />
            <MostProfitableCategories />
          </div>
          <div className="">
            <CustomerRantings />
            <MostViewedProducts />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
