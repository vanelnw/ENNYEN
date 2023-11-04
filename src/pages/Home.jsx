import AdvertSection from '../components/home/AdvertSection';
import CTA from '../components/CTA';
import Categories from '../components/Categories';
import ContentSetion from '../components/ContentSetion';
import FactoriesSection from '../components/FactoriesSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import RegionsSection from '../components/RegionsSection';
import Testimonials from '../components/Testimonials';
import TradingSection from '../components/TradingSection';
import Advert from '../components/home/Advert';

const Home = () => {
  return (
    <div className="">
      <div className="h-screen flex flex-col">
        <Advert />
        <Header />
        <Navbar />
        <div className="flex-1">
          <Hero />
        </div>
      </div>

      <Intro />
      <ContentSetion />
      <Categories />
      <FactoriesSection />
      <AdvertSection />
      <TradingSection />
      <Testimonials />
      <CTA />
      <RegionsSection />
      <Footer />
    </div>
  );
};

export default Home;
