/* eslint-disable react/prop-types */
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsGraphUpArrow } from 'react-icons/bs';
import { GiFamilyHouse } from 'react-icons/gi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoPeopleOutline } from 'react-icons/io5';

const TotalSection = () => {
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
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 ">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </section>
  );
};

export default TotalSection;

const Card = ({ cardName, icon, numbers, arrowColor }) => (
  <div className="group card rounded-md border border-gray shadow-light-gray shadow-md p-3 hover:bg-blue hover:text-white">
    <div className="flex justify-between mb-3">
      <div className="cardName text-[.9rem]">{cardName}</div>
      <BsGraphUpArrow className={`text-${arrowColor}`} />
    </div>

    <div className="flex justify-between">
      <div className="numbers font-bold text-[1.3rem]">{numbers}</div>
      <div className="icon h-7 w-7 rounded-full bg-[#E9EFF6] group-hover:text-[#000] flex items-center justify-center">
        {icon}
      </div>
    </div>
  </div>
);
