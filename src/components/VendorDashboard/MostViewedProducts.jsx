import { BsThreeDots } from 'react-icons/bs';
import imageProduct from '../../assets/vendorDashboard/mostProduct.png';

const MostViewedProducts = () => {
  const mostViewedProducts = [
    {
      id: 1,
      name: 'Solar Lamp',
      price: 250,
      image: imageProduct,
    },
    {
      id: 3,
      name: 'Solar Lamp',
      price: 250,
      image: imageProduct,
    },
    {
      id: 3,
      name: 'Solar Lamp',
      price: 250,
      image: imageProduct,
    },
    {
      id: 4,
      name: 'Solar Lamp',
      price: 250,
      image: imageProduct,
    },
    {
      id: 5,
      name: 'Solar Lamp',
      price: 250,
      image: imageProduct,
    },
  ];
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border border-gray">
      <div className="cardHeader flex justify-between">
        <h2>Top 5 Most Viewed Products</h2>
        <a href="#" className="btn">
          <BsThreeDots size={22} color="#000" />
        </a>
      </div>

      <table className="w-full mt-2">
        <tbody>
          {mostViewedProducts.map((product, index) => (
            <tr key={index} className={`group hover:bg-blue hover:text-white`}>
              <td className="p-1">
                <img src={product.image} alt="" className="w-16 h-16" />
              </td>
              <td className="p-1 text-[#606060] group-hover:text-white text-[1rem]">
                {product.name}
              </td>
              <td className="p-1">{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostViewedProducts;
