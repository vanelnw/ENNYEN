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
    <div className="relative grid p-[20px] rounded-md shadow-md border ">
      <div className="cardHeader flex justify-between">
        <h2>Top 5 most profitable products</h2>
        <a href="#" className="btn">
          <BsThreeDots />
        </a>
      </div>

      <table className="w-full mt-2">
        <tbody>
          {ProfitableProduct.map((product, index) => (
            <tr key={index} className={`hover:bg-blue hover:text-white`}>
              <td className="p-1">{product.id}</td>
              <td className="p-1">{product.name}</td>
              <td className="p-1">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostProfitableProduct;
