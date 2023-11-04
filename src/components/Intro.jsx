import { BsChevronRight } from 'react-icons/bs';

const Intro = () => {
  return (
    <section className="bg-[#FEFDEF]">
      <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:items-center">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-extrabold text-blue sm:text-3xl">
            ENNYENN
          </h1>

          <p className="mt-4 sm:text-[2rem] leading-21.7">
            A trade center where businesses meet businesses for a better and
            greener future.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              className="flex items-center justify-center gap-2 w-full rounded px-12 py-3 text-sm font-medium text-blue  hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about">
              Read More About Our Mission <BsChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
