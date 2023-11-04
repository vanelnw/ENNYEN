import AdvertSection from '../components/AdvertSection';
import CTA from '../components/CTA';
import Categories from '../components/Categories';
import CategoriesSetion from '../components/CategoriesSetion';
import ContentSetion from '../components/ContentSetion';
import FactoriesSection from '../components/FactoriesSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';
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
        <NavBar />
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
