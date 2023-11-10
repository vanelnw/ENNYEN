import { BsThreeDots } from 'react-icons/bs';

const MostProfitableCategories = () => {
  const ProfitableCat = [
    {
      id: 1,
      name: 'Solar Iverters',
      price: 250,
    },
    {
      id: 3,
      name: 'Solar Batteries',
      price: 250,
    },
    {
      id: 3,
      name: 'Solar Generators',
      price: 250,
    },
    {
      id: 4,
      name: 'Solar Accessories',
      price: 250,
    },
    {
      id: 5,
      name: 'Solar Controllers',
      price: 250,
    },
  ];
  return (
    <div className="relative grid p-[20px] rounded-md shadow-md border ">
      <div className="cardHeader flex justify-between">
        <h2>Top 5 most profitable categories</h2>
        <a href="#" className="btn">
          <BsThreeDots />
        </a>
      </div>

      <table className="w-full mt-2">
        <tbody>
          {ProfitableCat.map((cat, index) => (
            <tr key={index} className={`hover:bg-blue hover:text-white`}>
              <td className="p-1">{cat.id}</td>
              <td className="p-1">{cat.name}</td>
              <td className="p-1">{cat.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostProfitableCategories;
