const CustomerRantings = () => {
  return (
    <div className="relative grid rounded-md shadow-md border ">
      <div className="flex">
        {' '}
        <div className="border-r w-1/2 p-2">
          <h2>Customer’s Rating</h2>
          <p className="font-bold text-[1.3rem]">80%</p>
        </div>
        <div className="w-1/2 p-2">
          <div className="">
            <h3 className="text-[.7rem]">Number of visitors</h3>
            <p className="font-semibold text-[1rem] text-center">100</p>
          </div>
          <div className="">
            <h3 className="text-[.7rem]">Number of customers returning</h3>
            <p className="font-semibold text-[1rem] text-center">35</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRantings;
