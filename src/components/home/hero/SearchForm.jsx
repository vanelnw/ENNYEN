import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchForm = () => {
  const [formData, setFormData] = useState({
    solarCategory: '',
    solutionType: '',
    location: '',
    searchTerm: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="mt-7 w-full justify-start px-2">
      <form onSubmit={handleSubmit}>
        <div className="max-w-2xl flex flex-col sm:flex-row items-center justify-between flex-grow-0 flex-shrink pl-2 relative rounded-lg px-1 py-1 bg-white">
          <select
            name="solarCategory"
            value={formData.solarCategory}
            onChange={handleInputChange}
            className="w-full sm:w-fit rounded-lg border-gray-300 text-gray-700 text-[.6rem] py-2 focus:outline-none">
            <option value="">Solar categories</option>
          </select>
          <select
            name="solutionType"
            value={formData.solutionType}
            onChange={handleInputChange}
            className="w-full sm:w-fit rounded-lg border-gray-300 text-gray-700 text-[.6rem] py-2 focus:outline-none">
            <option value="">Solution Types</option>
          </select>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full sm:w-fit rounded-lg border-gray-300 text-gray-700 text-[.6rem] py-2 focus:outline-none">
            <option value="">Location</option>
          </select>
          <input
            type="text"
            name="searchTerm"
            value={formData.searchTerm}
            onChange={handleInputChange}
            placeholder="What are you looking for..."
            className="w-full sm:w-fit h-18 p-1 text-[.6rem] py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 sm:p-3 bg-green flex items-center justify-center rounded-full">
            <BsSearch className="text-white h-3 w-3 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
