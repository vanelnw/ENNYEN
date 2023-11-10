const RecentOrders = () => {
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border ">
      <div className="cardHeader flex justify-between">
        <h2>Recent Orders</h2>
        <a href="#" className="btn">
          <BsThreeDots />
        </a>
      </div>

      <table className="w-full mt-2">
        <thead>
          <tr className="bg-gray font-semibold">
            <td className="p-1">Name</td>
            <td className="p-1">Price</td>
            <td className="p-1">Payment</td>
            <td className="p-1">Status</td>
          </tr>
        </thead>

        <tbody>
          {productData.map((product, index) => (
            <tr key={index} className={`hover:bg-blue hover:text-white`}>
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

export default RecentOrders;
