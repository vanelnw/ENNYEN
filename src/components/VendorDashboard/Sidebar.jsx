/* eslint-disable react/prop-types */
import clsx from 'https://cdn.skypack.dev/clsx@1.1.1';
import logo from '../../assets/vendorDashboard/dashboard-logo.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsEnvelope, BsHandbag } from 'react-icons/bs';
import { useState } from 'react';

const sidebarItems = [
  { id: '0', title: 'Dashboard', icon: <MdOutlineDashboard /> },
  { id: '1', title: 'Orders', icon: <BsHandbag /> },
  { id: '2', title: 'Produts', icon: <MdOutlineDashboard /> },
  { id: '3', title: 'Message', icon: <BsEnvelope /> },
  { id: '4', title: 'Customers', icon: <MdOutlineDashboard /> },
  { id: '5', title: 'Account', icon: <MdOutlineDashboard /> },
  { id: '6', title: 'Settings', icon: <MdOutlineDashboard /> },
  { id: '7', title: 'Helps', icon: <MdOutlineDashboard /> },
  { id: '8', title: 'Support', icon: <MdOutlineDashboard /> },
];

const Sidebar = ({ showSidebar, onSidebarHide }) => {
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <div
      className={clsx(
        'fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 bg-blue-800',
        showSidebar ? 'flex' : 'hidden'
      )}>
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <img src={logo} className="w-36 h-12" />
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
              'w-full text-white mt-6 flex items-center px-3 sm:px-0 xl:px-10 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer gap-3',
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
