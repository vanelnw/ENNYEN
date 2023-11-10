import { BsThreeDots } from 'react-icons/bs';

const TopSellingProdut = () => {
  const productData = [
    {
      id: 1,
      name: 'Star Refrigerator',
      price: '$1200',
      payment: 'Paid',
      status: 'delivered',
    },
    {
      id: 2,
      name: 'Dell Laptop',
      price: '$110',
      payment: 'Due',
      status: 'pending',
    },
    {
      id: 3,
      name: 'Apple Watch',
      price: '$1200',
      payment: 'Paid',
      status: 'return',
    },
    {
      id: 4,
      name: 'Addidas Shoes',
      price: '$620',
      payment: 'Due',
      status: 'inProgress',
    },
    // Add more data as needed
  ];

  return (
    <div className="relative p-[20px] rounded-md shadow-md border border-gray ">
      <div className="cardHeader flex justify-between">
        <h2>Top Selling Products</h2>
        <a href="#" className="btn">
          <BsThreeDots color="#000" size={22} />
        </a>
      </div>

      <table className="w-full mt-2">
        <thead>
          <tr className="bg-[#E5E5E5] font-semibold text-[.9rem]">
            <td className="p-1">ID</td>
            <td className="p-1">Name</td>
            <td className="p-1">Price</td>
            <td className="p-1">Payment</td>
            <td className="p-1">Status</td>
          </tr>
        </thead>

        <tbody>
          {productData.map((product, index) => (
            <tr
              key={index}
              className={`hover:bg-blue hover:text-white text-[.8rem]`}>
              <td className="p-1 py-2">{product.id}</td>
              <td className="p-1">{product.name}</td>
              <td className="p-1">{product.price}</td>
              <td className="p-1">{product.payment}</td>
              <td className="p-1">
                <span className={`status ${product.status}`}>
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingProdut;
