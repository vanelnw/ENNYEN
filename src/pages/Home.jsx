import Header from '../components/home/hero/Header';
import Navbar from '../components/home/hero/Navbar';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import ContentSectionWrapper from '../components/home/ContentSetion';
import Categories from '../components/home/Categories';
import FactoriesSection from '../components/home/FactoriesSection';
import AdvertSection from '../components/home/AdvertSection';
import TradingSection from '../components/home/TradingSection';
import Testimonials from '../components/home/Testimonials';
import RegionsSection from '../components/home/RegionsSection';
import Footer from '../components/home/Footer';
import Advert from '../components/home/Advert';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen pb-7">
        <Advert />
        <Header />
        <Navbar />
        <div className="flex-1">
          <Hero />
        </div>
      </div>
      <Intro />
      <ContentSectionWrapper />
      <Categories />
      <FactoriesSection />
      <AdvertSection />
      <TradingSection />
      <Testimonials />
      <Newsletter />
      <RegionsSection />
      <Footer />
    </>
  );
};

export default Home;
