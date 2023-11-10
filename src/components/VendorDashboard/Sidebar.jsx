/* eslint-disable react/prop-types */
import clsx from 'https://cdn.skypack.dev/clsx@1.1.1';
import logo from '../../assets/vendorDashboard/dashboard-logo.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import {
  BsEnvelope,
  BsHandbag,
  BsPerson,
  BsQuestionCircle,
} from 'react-icons/bs';
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { IoPeopleOutline } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { GiFamilyHouse } from 'react-icons/gi';

const sidebarItems = [
  { id: '0', title: 'Dashboard', icon: <MdOutlineDashboard size={22} /> },
  { id: '1', title: 'Orders', icon: <BsHandbag size={22} /> },
  { id: '2', title: 'Produts', icon: <GiFamilyHouse size={22} /> },
  { id: '3', title: 'Message', icon: <BsEnvelope size={22} /> },
  { id: '4', title: 'Customers', icon: <IoPeopleOutline size={22} /> },
  { id: '5', title: 'Account', icon: <BsPerson size={22} /> },
  { id: '6', title: 'Settings', icon: <FiSettings size={22} /> },
  { id: '7', title: 'Helps', icon: <BsQuestionCircle size={22} /> },
  { id: '8', title: 'Support', icon: <BiSupport size={22} /> },
];

const Sidebar = ({ showSidebar, onSidebarHide }) => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div
      className={clsx(
        'fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex  flex-col z-10 bg-blue-800',
        showSidebar ? 'flex ' : 'hidden'
      )}>
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <img src={logo} className="w-36  h-12 object-contain" />
          <div className="flex-grow sm:hidden xl:block" />
          <AiFillCloseCircle
            className="block sm:hidden cursor-pointer"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col items-center gap-3">
        {sidebarItems.map(i => (
          <div
            key={i.id}
            className={clsx(
              'w-full text-white hover:bg-white hover:text-blue mt-6 flex items-center px-3 py-2 sm:px-0 xl:px-10 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer gap-3',
              selectedItem === i.id ? 'sidebar-item-selected' : 'sidebar-item'
            )}
            onClick={() => setSelectedItem(i.id)}>
            {i.icon}
            <div className="block sm:hidden xl:block ml-2">{i.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
