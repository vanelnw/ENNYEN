import { useState } from 'react';
import add1 from '../../assets/images/add1.png';
import add2 from '../../assets/images/add2.png';
import cross from '../../assets/images/x-octagon.png';

const Advert = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="hidden md:block p-1">
          <div className="relative border-2 border-yellow rounded-xl flex justify-center">
            <div className="flex gap-5 items-center">
              <img src={add1} alt="" className="w-10 h-6" />
              <h2 className="text-green-800 text-[.5rem] md:text-[.9rem] font-bold uppercase">
                Unbeatable prices at Solar Shop!
              </h2>
              <img src={add2} alt="" className="w-10 h-6" />
            </div>
            <a onClick={() => setShow(false)}>
              <img
                src={cross}
                alt=""
                className="w-4 h-4 absolute top-[18%] right-4 cursor-pointer"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Advert;
