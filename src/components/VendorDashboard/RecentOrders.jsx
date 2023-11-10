import { BsThreeDots } from 'react-icons/bs';

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      quantity: 5,
      amount: 100.0,
      status: 'Paid',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      quantity: 3,
      amount: 75.5,
      status: 'Pending',
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      quantity: 2,
      amount: 50.25,
      status: 'Shipped',
    },
    {
      id: 4,
      customerName: 'yaba moyo',
      quantity: 3,
      amount: 50.25,
      status: 'Shipped',
    },
    // Add more rows as needed
  ];
  return (
    <div className="relative p-[20px] rounded-md shadow-md border border-gray ">
      <div className="cardHeader flex justify-between">
        <h2>Recent Orders</h2>
        <a href="#" className="btn">
          <BsThreeDots color="#000" size={22} />
        </a>
      </div>

      <table className="w-full mt-2">
        <thead>
          <tr className="bg-[#E5E5E5] font-semibold text-[.9rem]">
            <td className="p-1">ID</td>
            <td className="p-1">Customer Name</td>
            <td className="p-1">Quantity</td>
            <td className="p-1">Amount</td>
            <td className="p-1">Status</td>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className={`hover:bg-blue hover:text-white text-[.8rem]`}>
              <td className="p-1 py-2">{order.id}</td>
              <td className="p-1">{order.customerName}</td>
              <td className="p-1">{order.quantity}</td>
              <td className="p-1">{order.amount}</td>
              <td className="p-1">
                <span className={`status ${order.status}`}>{order.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
