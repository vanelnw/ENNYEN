import Container from './common/Container';
import SectionTitle from './common/SectionTitle';

const TradingSection = () => {
  return (
    <section className="bg-yellow-500 py-14">
      <div className="max-w-screen-lg mx-auto">
        <SectionTitle
          title1="Discover the Trading Revolution"
          title2="How to Leverage Its Features for Successful Trading"
        />
      </div>

      <div className="border-t border-b border-[#000] mt-10">
        <div className="max-w-screen-lg mx-auto">
          <Container>
            {' '}
            <div className="  grid grid-cols-3">
              <div className="p-5 h-60 relative overflow-hidden border-r border-l border-[#000]">
                <h2 className="text-black ">
                  Explore our Matchmaking Offerings
                </h2>

                <p className="text-[.7rem] text-black">
                  Search and Filter Millions of Product and Supplier Options on
                </p>

                <p className="absolute bottom-0 h-56 right-0 text-[250px] font-bold text-gray-800 -mb-[2rem] text-[#000] opacity-[.2]">
                  1
                </p>
              </div>
              <div className="p-5 h-60 relative overflow-hidden border-r border-l border-[#000]">
                <h2 className="text-black">
                  Explore our Matchmaking Offerings
                </h2>

                <p className="text-[.7rem] my-2 text-black">
                  Search and Filter Millions of Product and Supplier Options on
                </p>

                <p className="absolute bottom-0 h-56 right-0 text-[250px] font-bold text-gray-800 -mb-[2rem] text-[#000] opacity-[.2]">
                  2
                </p>
              </div>
              <div className="p-5 h-60 relative overflow-hidden border-r border-l border-[#000]">
                <h2 className="text-black">
                  Explore our Matchmaking Offerings
                </h2>

                <p className="text-[.7rem] text-black">
                  Search and Filter Millions of Product and Supplier Options on
                </p>

                <p className="absolute bottom-0 h-56 right-0 text-[250px] font-bold text-gray-800 -mb-[2rem] text-[#000] opacity-[.2]">
                  3
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
