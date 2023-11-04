import Container from '../common/Container';
import HeroCarroussel from './HeroCarroussel';
import SearchForm from './hero/SearchForm';

const Hero = () => {
  return (
    <section className="relative h-full w-full flex flex-col">
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

            <SearchForm />
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Hero;
