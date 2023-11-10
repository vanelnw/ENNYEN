import { BsThreeDots } from 'react-icons/bs';

const MostProfitableProduct = () => {
  const ProfitableProduct = [
    {
      id: 1,
      name: 'Solar Panel',
      price: 250,
    },
    {
      id: 3,
      name: 'Solar Batteries',
      price: 250,
    },
    {
      id: 3,
      name: 'Solar Lamp',
      price: 250,
    },
    {
      id: 4,
      name: 'Solar Fan',
      price: 250,
    },
    {
      id: 5,
      name: 'Solar Watch',
      price: 250,
    },
  ];
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border  border-gray">
      <div className="cardHeader flex justify-between items-center">
        <h2>Top 5 most profitable products</h2>
        <a href="#" className="btn">
          <BsThreeDots size={22} color="#000" />
        </a>
      </div>

      <table className="w-full mt-2">
        <tbody>
          {ProfitableProduct.map((product, index) => (
            <tr
              key={index}
              className={`hover:bg-blue hover:text-white text-[#606060] text-[1rem]`}>
              <td className="p-1 py-3">{product.id}</td>
              <td className="p-1">{product.name}</td>
              <td className="p-1 text-[#000]">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostProfitableProduct;
