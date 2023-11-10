import { useState } from 'react';
import Sidebar from '../components/VendorDashboard/Sidebar';
import Content from '../components/VendorDashboard/Content';

const VendorDashboard = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(!showSidebar);
        }}
        showSidebar={showSidebar}
      />
    </div>
  );
};

export default VendorDashboard;
