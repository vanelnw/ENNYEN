const CustomerRantings = () => {
  return (
    <div className="relative grid rounded-md shadow-md border border-gray">
      <div className="flex">
        {' '}
        <div className="border-r border-gray w-1/2 p-2">
          <h2>Customer’s Rating</h2>
          <p className="font-bold text-[4rem] p-5">80%</p>
        </div>
        <div className="w-1/2 p-2">
          <div className="">
            <h3 className="text-[1rem]">Number of visitors</h3>
            <p className="font-bold text-[3rem] text-center">100</p>
          </div>
          <div className="">
            <h3 className="text-[1rem]">Number of customers returning</h3>
            <p className="font-semibold text-[3rem] text-center">35</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRantings;
