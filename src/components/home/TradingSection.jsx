import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const TradingSection = () => {
  const tradingOptions = [
    {
      title: 'Explore our Matchmaking Offerings',
      description: 'Search and Filter Millions of Product and Supplier Options',
      number: 1,
    },
    {
      title: 'Explore our Matchmaking Offerings',
      description: 'Search and Filter Millions of Product and Supplier Options',
      number: 2,
    },
    {
      title: 'Explore our Matchmaking Offerings',
      description: 'Search and Filter Millions of Product and Supplier Options',
      number: 3,
    },
  ];

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
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {tradingOptions.map((option, index) => (
                <div
                  key={index}
                  className={`w-2/3 sm:w-fit mx-auto p-5 h-60 relative overflow-hidden border-r border-l border-[#000]`}>
                  <h2 className="text-black">{option.title}</h2>
                  <p className="text-[.7rem] my-2 text-black">
                    {option.description}
                  </p>
                  <p className="absolute bottom-0 h-56 right-0 text-[250px] font-bold text-gray-800 -mb-[2rem] text-[#000] opacity-[.2]">
                    {option.number}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
