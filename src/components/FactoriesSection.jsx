import Container from './common/Container';
import SectionTitle from './common/SectionTitle';
import img1 from '../assets/images/hero1.png';
import img2 from '../assets/images/hero2.png';
import img3 from '../assets/images/hero3.png';
import { CiLocationOn } from 'react-icons/ci';
import { BsChevronRight } from 'react-icons/bs';

const data = [
  {
    src: img1,
    title: 'Qqan Solar Manufacturers Co. LTD',
    location: 'Guangzhou, China',
  },
  {
    src: img2,
    title: 'Shushan & Co. LTD',
    location: 'Frankfurt, Germany',
  },
  {
    src: img3,
    title: 'QBWW SolarSuppliers GmBH',
    location: 'Frankfurt, Germany',
  },
];

const FactoriesSection = () => {
  return (
    <section className="py-20">
      <SectionTitle
        title1="Cut Out the Middleman!"
        title2="Source Solar Directly from Factories"
      />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
          {data.map((img, index) => (
            <div
              key={index}
              className={index === 0 ? 'row-span-2 relative' : 'relative'}>
              <img src={img.src} />

              <div className="absolute bottom-0 left-0 w-full p-5 bg-[#000] opacity-[.5]">
                <h2 className="text-white font-bold text-[1.5rem] max-w-xs">
                  {img.title}
                </h2>
                <p className="text-[.7rem] text-white  flex gap-1 items-center">
                  <CiLocationOn />
                  {img.location}
                </p>
                <a
                  className="flex items-center text-white gap-2 w-full  py-3 text-sm font-medium hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="/about">
                  Take a tour <BsChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FactoriesSection;
