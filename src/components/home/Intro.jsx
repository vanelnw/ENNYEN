import { BsChevronRight } from 'react-icons/bs';

const Intro = () => {
  return (
    <section className="bg-[#FEFDEF]">
      <div className="mx-auto max-w-screen-xl px-4 py-14 lg:flex lg:items-center">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-3xl font-extrabold text-blue sm:text-4xl">
            ENNYENN
          </h1>

          <p className="mt-4 text-4xl font-thin opacity-[.8] leading-8">
            A trade center where businesses meet for a better and greener
            future.
          </p>

          <div className="mt-5 flex justify-center gap-4">
            <a
              className="flex items-center gap-2 rounded px-4 py-2 text-sm font-medium text-blue hover:text-red-700 focus:outline-none focus:ring active:text-red-500"
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
