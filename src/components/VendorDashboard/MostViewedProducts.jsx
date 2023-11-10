import { BsThreeDots } from 'react-icons/bs';

const MostViewedProducts = () => {
  const mostViewedProducts = [
    {
      id: 1,
      name: 'Solar Lamp',
      price: 250,
      image: '',
    },
    {
      id: 3,
      name: 'Solar Lamp',
      price: 250,
      image: '',
    },
    {
      id: 3,
      name: 'Solar Lamp',
      price: 250,
      image: '',
    },
    {
      id: 4,
      name: 'Solar Lamp',
      price: 250,
      image: '',
    },
    {
      id: 5,
      name: 'Solar Lamp',
      price: 250,
      image: '',
    },
  ];
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border ">
      <div className="cardHeader flex justify-between">
        <h2>Top 5 Most Viewed Products</h2>
        <a href="#" className="btn">
          <BsThreeDots />
        </a>
      </div>

      <table className="w-full mt-2">
        <tbody>
          {mostViewedProducts.map((product, index) => (
            <tr key={index} className={`hover:bg-blue hover:text-white`}>
              <td className="p-1">
                <img src={product.image} alt="" />
              </td>
              <td className="p-1">{product.name}</td>
              <td className="p-1">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostViewedProducts;
