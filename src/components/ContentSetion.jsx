import Container from './common/Container';
import content1 from '../assets/images/content1.png';
import content2 from '../assets/images/content2.png';

const ContentSetion = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="pb-10 grid grid-cols-1  lg:grid-cols-2">
          <div className="relative flex items-center bg-gray-100">
            <div className="p-8 sm:p-16 lg:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Reduce electricity bills with genuine solar solutions
              </h2>

              <p className="mt-4 text-gray-600">
                Get all in one place for your solar/green energy
                installation,products, and services by connecting with the
                rightproviders locally and internationally from onedashboard of
                proposals to make a choice from
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-blue bg-blue px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue focus:outline-none focus:ring active:text-indigo-500">
                Try Now
              </a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="House"
              src={content1}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-5 grid grid-cols-1  lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt="House"
              src={content2}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative flex items-center bg-gray-100">
            <div className="p-8 sm:p-16 lg:p-12">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Meet you customers and patners right here.
              </h2>

              <p className="mt-4 text-gray-600">
                Marketplace where you can meet the buyers/clients of your solar
                energyproducts and services. Advertise factories & manufacturing
                companies and close deals Now.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-blue bg-blue px-12 py-3 text-sm font-medium text-white hover:bg-white hover:text-blue focus:outline-none focus:ring active:text-indigo-500">
                Try Now
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContentSetion;
