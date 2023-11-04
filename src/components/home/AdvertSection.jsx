import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import arrival1 from '../../assets/images/arrival1.png';
import arrival2 from '../../assets/images/arrival2.png';
import arrival3 from '../../assets/images/arrival3.png';
import deal1 from '../../assets/images/deal1.png';
import deal2 from '../../assets/images/deal2.png';
import deal3 from '../../assets/images/deal3.png';
import BestDeals from '../../components/BestDeals';
import NewArrivals from '../../components/NewArrivals';

const AdvertSection = () => {
  return (
    <section>
      <SectionTitle
        title1="One-stop-shop for energy solutions"
        title2="All your solar needs in one place."
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-20 border-t border-green-900">
          <NewArrivals img1={arrival1} img2={arrival2} />
          <BestDeals img1={deal1} img2={deal2} />
          <BestDeals img1={deal3} />
          <NewArrivals img1={arrival3} />
          <NewArrivals img1={arrival1} img2={arrival2} />
          <NewArrivals img1={arrival1} img2={arrival2} />
          <NewArrivals img1={arrival1} img2={arrival2} />
        </div>
      </Container>
    </section>
  );
};

export default AdvertSection;
