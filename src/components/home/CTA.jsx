import hero2 from '../../assets/images/hero2.png';
import Container from '../../components/common/Container';

const CTA = () => {
  return (
    <section
      className="overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${hero2})` }}>
      <Container>
        <div className="p-6 md:p-8 lg:px-10 lg:py-18 flex justify-center md:justify-end">
          <div className="max-w-sm bg-white shadow-sm rounded-xl text-start p-7">
            <h2 className="text-lg text-[#000] sm:text-xl md:text-5xl pb-4">
              Growth <br /> begins here
            </h2>

            <p className="my-2 text-[.9rem] max-w-[250px]">
              Break Free from Financial Limitations, Unleash Business and
              Personal Potential
            </p>

            <input
              type="text"
              placeholder="you@email.com"
              className="w-full rounded-lg p-2 border border-green placeholder:text-green placeholder:text-[.7rem] focus:outline-green"
            />

            <div className="mt-2">
              <a
                href="#"
                className="inline-block border border-green bg-green text-white rounded-3xl px-8 py-2 text-sm font-medium transition hover:bg-white hover:text-green">
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
