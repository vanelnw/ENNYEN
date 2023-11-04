import { BsSearch } from 'react-icons/bs';
import Container from './common/Container';
import HeroCarroussel from './home/HeroCarroussel';

const Hero = () => {
  return (
    <section className="relative  h-full w-full flex flex-col">
      <HeroCarroussel />
      <div className="absolute top-0 left-0 h-full w-full flex items-center">
        <div className="w-full">
          <Container className="max-w-3xl text-center ltr:sm:text-left rtl:sm:text-right py-20">
            <h1 className="text-3xl font-extrabold sm:text-6xl text-left text-white">
              ENNYEN® MarketPlace.
            </h1>

            <p className="mt-10 max-w-xl text-3xl text-left sm:text-3xl text-white">
              Market and sell solar products and services to the world for a
              greener earth!
            </p>

            <div className="mt-7 w-full justify-start px-2">
              <div className="max-w-2xl flex flex-col sm:flex-row items-center justify-between flex-grow-0 flex-shrink pl-2 relative rounded-lg px-1  py-1 bg-white">
                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="w-full sm:w-fit rounded-lg border-gray-300 text-gray-700 text-[.6rem] py-2 focus:outline-none">
                  <option value="">Solar categories</option>
                </select>
                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="w-full sm:w-fit rounded-lg border-gray-300 text-gray-700 text-[.6rem] py-2 focus:outline-none">
                  <option value="">Solution Types</option>
                </select>
                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="w-full sm:w-fit rounded-lg border-gray-300 text-gray-700 text-[.6rem] py-2 focus:outline-none">
                  <option value="">Location</option>
                </select>
                <input
                  type="text"
                  placeholder="what are you looking for..."
                  className="w-full sm:w-fit h-18 p-1 text-[.6rem] py-2 focus:outline-none"
                />
                <button
                  type="button"
                  className="px-5 py-2 sm:p-3 bg-green flex items-center justify-center rounded-full">
                  <BsSearch className="text-white h-3 w-3 cursor-pointer" />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Hero;
